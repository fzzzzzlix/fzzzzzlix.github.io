# Felix Phan Portfolio, WIP Export

This archive contains the complete editable source and the verified production build of the current work-in-progress portfolio.

## Included

- `app/`: website pages, shared layout, project content and styling
- `public/`: fonts, favicon and public assets
- `dist/`: verified production build
- `.openai/hosting.json`: Sites project configuration
- `package.json` and `package-lock.json`: exact dependencies and scripts
- `scripts/` and `tests/`: build validation and metadata test

Installed dependencies, temporary caches, logs and source-control metadata are intentionally excluded. They are machine-specific and can be recreated from the lockfile.

## Run locally

Requirements: Node.js 22.13.0 or newer, npm, Linux or WSL.

```bash
npm ci
npm run dev
```

## Build and verify

```bash
npm test
```

## Media placeholders

The current WIP intentionally uses named media placeholders. When final assets are added, preserve the declared aspect ratios and use crop-to-fill behavior for photographs and video posters. Do not stretch or distort media.

