# Performance Testing & Reports

This directory contains performance testing results and Lighthouse reports.

## Files

- `lighthouse-report.json` - Latest Lighthouse CLI JSON report
- `lighthouse-report.html` - Human-readable HTML report
- `check-performance.js` - CI script that validates performance thresholds

## Running Performance Tests

```bash
# Build the site first
npm run build

# Run Lighthouse measurement
npm run perf:measure

# Check if scores meet thresholds (CI)
npm run perf:check
```

## Viewing Reports

Open `lighthouse-report.html` in your browser to see detailed performance metrics.
