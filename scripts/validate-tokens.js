#!/usr/bin/env node
/**
 * validate-tokens.js
 * Scans /examples and /components for hardcoded hex colors and raw spacing
 * pixel values that should be token references instead.
 *
 * Exit 0 = clean. Exit 1 = violations found.
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ─── Configuration ────────────────────────────────────────────────────────────

const SCAN_DIRS = ['examples', 'components'];
const SCAN_EXTENSIONS = ['.html', '.css', '.md'];

/**
 * Hex colors that are allowed in token/root definition blocks.
 * Outside those blocks they are violations.
 */
const HEX_PATTERN = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g;

/**
 * Raw pixel values for spacings defined in tokens/spacing.json.
 * These are only flagged when used in CSS property declarations
 * (e.g. `padding: 16px`) outside of :root or token definition blocks.
 */
// Match exact spacing token values only (not substrings like "40px" inside "240px").
// Each entry is used as a whole-word match via regex.
const TOKEN_SPACING_VALUES = ['4px', '8px', '12px', '16px', '20px', '24px', '32px', '40px', '48px', '64px'];
// Build a pattern that matches token spacing values as standalone tokens (not inside larger numbers)
const SPACING_VALUE_PATTERNS = TOKEN_SPACING_VALUES.map(v => new RegExp(`(?<![\\d])${v.replace('px', '')}px(?![\\d])`, 'g'));

/**
 * CSS properties where raw px spacing values are meaningful to flag.
 * width/height are excluded: they often represent fixed component dimensions
 * (checkbox size, avatar size, sidebar width) that are not spacing tokens.
 */
const SPACING_PROPERTIES = [
  'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  'gap', 'row-gap', 'column-gap',
  'top', 'right', 'bottom', 'left',
  'min-height', 'max-width', 'max-height'
];

const SPACING_PROP_PATTERN = new RegExp(
  `(?:${SPACING_PROPERTIES.join('|')})\\s*:\\s*([^;{}\\n]+)`,
  'gi'
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function resolveRoot(dir) {
  // Walk up from __dirname to find the repo root (contains tokens/)
  let current = __dirname;
  for (let i = 0; i < 4; i++) {
    if (fs.existsSync(path.join(current, 'tokens'))) return current;
    current = path.dirname(current);
  }
  return path.resolve(__dirname, '..');
}

function collectFiles(dirs, extensions, root) {
  const results = [];
  for (const dir of dirs) {
    const full = path.join(root, dir);
    if (!fs.existsSync(full)) continue;
    walkDir(full, extensions, results);
  }
  return results;
}

function walkDir(dir, extensions, results) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full, extensions, results);
    } else if (entry.isFile() && extensions.includes(path.extname(entry.name))) {
      results.push(full);
    }
  }
}

/**
 * Returns true if a line is inside a :root block or a token definition comment
 * block (the section in HTML examples where token values are explicitly set).
 *
 * Strategy: track whether we are inside a `:root {` or `/* ====...Token` block.
 */
function buildRootRanges(lines) {
  const ranges = [];
  let inRoot = false;
  let rootStart = -1;
  let braceDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inRoot) {
      // Detect :root { or a token definition comment block
      if (/:root\s*\{/.test(line) || /Token Definitions/.test(line) || /token_values/.test(line)) {
        inRoot = true;
        rootStart = i;
        braceDepth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
        if (braceDepth <= 0) {
          // Single-line or closed on same line
          ranges.push([rootStart, i]);
          inRoot = false;
        }
        continue;
      }
    } else {
      braceDepth += (line.match(/\{/g) || []).length;
      braceDepth -= (line.match(/\}/g) || []).length;
      if (braceDepth <= 0) {
        ranges.push([rootStart, i]);
        inRoot = false;
        braceDepth = 0;
      }
    }
  }
  return ranges;
}

function isInRanges(lineIndex, ranges) {
  return ranges.some(([start, end]) => lineIndex >= start && lineIndex <= end);
}

// ─── Scanners ─────────────────────────────────────────────────────────────────

function scanFile(filePath, root) {
  const rel = path.relative(root, filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const rootRanges = buildRootRanges(lines);
  const violations = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    // Skip blank lines and comment-only lines
    if (!line.trim() || /^\s*(\/\/|\/\*|\*|<!--)/.test(line)) continue;

    // Skip lines that are token variable declarations themselves
    // e.g. --token-color-action-primary: #22c55e;
    if (/--token-[\w-]+\s*:/.test(line)) continue;

    if (isInRanges(i, rootRanges)) continue;

    // ── Check for hardcoded hex colors ──────────────────────────────────────
    const isMd = filePath.endsWith('.md');
    // In .md files, skip lines that are doc reference annotations like "(#22c55e)"
    // or table rows showing token values -- those are documentation, not implementation.
    const isDocRef = isMd && /\(#[0-9a-fA-F]{3,6}\)/.test(line);
    // In .md files, skip table rows that are purely reference: e.g. "| #22c55e |"
    const isMdTableRef = isMd && /^\s*\|/.test(line);

    if (!isDocRef && !isMdTableRef) {
      let hexMatch;
      HEX_PATTERN.lastIndex = 0;
      while ((hexMatch = HEX_PATTERN.exec(line)) !== null) {
        violations.push({
          file: rel,
          line: lineNum,
          type: 'HARDCODED_HEX',
          detail: `Hardcoded hex color "${hexMatch[0]}" found outside token definition block.`,
          snippet: line.trim().substring(0, 100)
        });
      }
    }

    // ── Check for hardcoded spacing px values ───────────────────────────────
    // Only in CSS property declarations. Skip .md doc reference lines that use
    // the notation: `padding: spacing.N spacing.M (8px 16px)` -- these are
    // spec documentation annotations, not implementation code.
    const isMdSpacingRef = isMd && /spacing\.\d+/.test(line);

    if (!isMdSpacingRef) {
      SPACING_PROP_PATTERN.lastIndex = 0;
      let propMatch;
      while ((propMatch = SPACING_PROP_PATTERN.exec(line)) !== null) {
        const valueStr = propMatch[1];
        // Skip if value uses var(--
        if (/var\s*\(--/.test(valueStr)) continue;
        // Skip if it's a border shorthand like `1px solid ...`
        if (/\bsolid\b|\bdashed\b|\bdotted\b/.test(valueStr)) continue;

        for (let si = 0; si < TOKEN_SPACING_VALUES.length; si++) {
          const tokenPx = TOKEN_SPACING_VALUES[si];
          const pxRegex = SPACING_VALUE_PATTERNS[si];
          pxRegex.lastIndex = 0;
          if (pxRegex.test(valueStr)) {
            violations.push({
              file: rel,
              line: lineNum,
              type: 'HARDCODED_SPACING',
              detail: `Hardcoded spacing value "${tokenPx}" in CSS declaration. Use var(--token-spacing-N) instead.`,
              snippet: line.trim().substring(0, 100)
            });
            break;
          }
        }
      }
    }
  }

  return violations;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const root = resolveRoot(__dirname);
  const files = collectFiles(SCAN_DIRS, SCAN_EXTENSIONS, root);

  if (files.length === 0) {
    console.log('No files found to scan.');
    process.exit(0);
  }

  console.log(`\nGetFunnelCaked Token Validation`);
  console.log(`================================`);
  console.log(`Scanning ${files.length} file(s) in: ${SCAN_DIRS.join(', ')}\n`);

  const allViolations = [];

  for (const file of files) {
    const violations = scanFile(file, root);
    allViolations.push(...violations);
  }

  if (allViolations.length === 0) {
    console.log('✓ No violations found. All files use token references correctly.\n');
    process.exit(0);
  }

  // Group by file
  const byFile = {};
  for (const v of allViolations) {
    if (!byFile[v.file]) byFile[v.file] = [];
    byFile[v.file].push(v);
  }

  let hexCount = 0;
  let spacingCount = 0;

  for (const [file, violations] of Object.entries(byFile)) {
    console.log(`\n  ${file}`);
    for (const v of violations) {
      const tag = v.type === 'HARDCODED_HEX' ? '[HEX]     ' : '[SPACING] ';
      console.log(`    ${tag} Line ${String(v.line).padEnd(4)}  ${v.detail}`);
      console.log(`              ${v.snippet}`);
      if (v.type === 'HARDCODED_HEX') hexCount++;
      else spacingCount++;
    }
  }

  console.log(`\n────────────────────────────────`);
  console.log(`Summary:`);
  console.log(`  Files scanned:      ${files.length}`);
  console.log(`  Files with issues:  ${Object.keys(byFile).length}`);
  console.log(`  Hardcoded hex:      ${hexCount}`);
  console.log(`  Hardcoded spacing:  ${spacingCount}`);
  console.log(`  Total violations:   ${allViolations.length}`);
  console.log(`\nFix: Replace hardcoded values with CSS custom properties from /tokens.`);
  console.log(`     See /docs/anti-patterns.md for guidance.\n`);

  process.exit(1);
}

main();
