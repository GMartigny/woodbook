# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Start dev server with live reload
npm run build  # Build static site to _site/
```

## Architecture

This is an [Eleventy (11ty)](https://www.11ty.dev/) v3 static site for a French woodworking portfolio. Uses ES modules (`"type": "module"` in package.json).

**Content model:** Each woodworking project lives in its own directory (e.g., `bench/`, `bookcase/`) containing an `index.md` with frontmatter and images. All project pages must have `tags: post` in frontmatter to appear in the homepage collection.

**Navigation:** The homepage (`index.md`) dynamically lists all posts via `collections.post` — no manual navigation updates needed when adding projects.

**Templates:** `_includes/post.html` is the only layout. It's a minimal HTML shell; `{{ content }}` receives the rendered markdown.

**Image pipeline:** `eleventyImageTransformPlugin` automatically converts all `<img>` tags at build time to WebP. Source images (jpg/png) are kept in project directories; optimized WebP files are written to `_site/`.

## Adding a New Project

1. Create a directory (e.g., `myproject/`)
2. Add `index.md` with this frontmatter:
   ```yaml
   ---
   layout: post.html
   title: Project Title
   date: YYYY-MM-DD
   tags: post
   ---
   ```
3. Add images to the same directory and reference them in markdown — they'll be auto-converted to WebP on build.
