# Frokyte Website

The official Frokyte website, built with Svelte 5 and SvelteKit.

## Routes

- `/` — Frokyte Studio
- `/fadeengine/` — FADE Engine

## Stack

- Svelte 5
- SvelteKit
- Vite
- Tailwind CSS 4
- DaisyUI 5
- `@sveltejs/adapter-static` for GitHub Pages

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run check
npm run build
npm run preview
```

GitHub Actions builds the prerendered static site into `build/` and deploys it to GitHub Pages.
