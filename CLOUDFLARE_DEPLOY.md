# Cloudflare Pages Configuration

## Build Settings

When deploying to Cloudflare Pages, use the following settings:

- **Build command**: `npm run build:cloudflare`
- **Build output directory**: `dist`
- **Node.js version**: 20 (auto-detected from `.node-version`)

## Environment Variables (Optional)

If deploying to a subdirectory, set:
- `VITE_BASE_PATH`: The base path for your app (e.g., `/myapp/`)

## SPA Routing

The `public/_redirects` file ensures all routes are handled by the SPA.

## GitHub Pages Deployment

For GitHub Pages deployment:
```bash
npm run deploy
```

This will automatically set the correct base path for GitHub Pages.
