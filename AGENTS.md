# AGENTS.md

Guidance for AI agents (and humans) working in this repository.

## What this is

A personal **portfolio site** of a product designer / UX researcher, built with
**Jekyll** and published via **GitHub Pages**. It is shared on job boards and in
direct conversations with hiring design managers, so two things matter most:

1. **Content quality** — clear, credible, skimmable case studies.
2. **Loading speed** — pages are image-heavy; they must stay fast.

The site uses the remote theme `pages-themes/minimal` (see `_config.yml`).

## Repository layout

| Path | Purpose |
| --- | --- |
| `index.md` | Landing page with the featured case cards. |
| `*.md` (root) | One file per case study. Each builds to `<name>.html`. |
| `_layouts/default.html` | Base layout (header, sidebar, footer). |
| `_layouts/mermaid.html` | `default` + on-demand Mermaid diagram rendering. |
| `_includes/head-custom.html` | Performance `<head>` additions (preconnect, fonts, lazy images). |
| `assets/css/style.scss` | Design tokens, light/dark theme, media styling. |
| `assets/img/` | Local assets (logo, favicon). |
| `_config.yml` | Site config, SEO metadata, build excludes. |
| `_templates/case-template.md` | Starting point for a new case (excluded from the build). |

Cases are two kinds:

- **Featured** — linked from `index.md` (`simple`, `ddx`, `flora`, `kanoe`, `mirrordao`, `hadassah`).
- **Unlisted** — reachable only via a direct URL and marked `noindex: true`
  (`duck`, `tigers`, `noirroulette`, `varbusters`). These are gambling / betting /
  casino cases kept out of the public B2B/B2E image on purpose and shared privately
  with recruiters from those industries. Do not add them to `index.md` and do not
  remove `noindex` unless explicitly asked.

## Run locally

Dependencies match GitHub Pages' production stack (the `github-pages` gem).

```bash
bundle install
bundle exec jekyll serve --livereload   # http://127.0.0.1:4000/
```

Build only: `bundle exec jekyll build` (output in `_site/`, which is git-ignored).

## Case study front matter

Choose the layout by whether the case contains Mermaid diagrams:

```yaml
---
layout: default   # use `mermaid` if the case has any diagrams
---
```

`default` is enough for text + images. `mermaid` additionally renders diagrams.

## Adding or editing a case

1. Copy `_templates/case-template.md` to `<name>.md` at the repo root.
2. Pick the layout (`default` or `mermaid`).
3. Write the narrative (see the writing checklist below).
4. If it should be featured, add a card to `index.md` linking to `<name>.html`
   — verify the filename matches the link (a mismatch = a 404).
5. Run the site locally and confirm images and diagrams render.

## Performance rules (images & diagrams)

These keep image-heavy pages fast. See `.cursor/rules/performance.mdc` for detail.

- **Images**: prefer `<img loading="lazy" decoding="async" ...>` in Markdown.
  `_includes/head-custom.html` also adds these attributes automatically as a
  fallback, but authoring them at the source is best (beats the preload scanner).
  Keep the first image of a page eager (it's the LCP).
- Provide real `width`/`height` (or let CSS `height: auto` keep the ratio) to
  avoid layout shift. Avoid `height="auto"` as an HTML attribute — it is invalid;
  set only `width` and let CSS handle height.
- Heavy screenshots are hot-linked from `github.com/user-attachments`. For new
  assets, prefer optimized files (WebP/compressed PNG) committed under
  `assets/img/` when practical.
- **Mermaid**: author diagrams as a fenced ```mermaid block **or** a
  `<div class="mermaid">…</div>`. Both are rendered lazily by `mermaid.html`.
  Do not add a separate Mermaid `<script>` to a page — the layout handles it.

## Writing checklist (hiring-manager audience)

See `.cursor/rules/writing-cases.mdc` for the full standard. In short, each case
should make the reader quickly understand:

- **Context** — product, platform, company, your role, timeframe.
- **Problem** — the business/user problem in one or two crisp sentences.
- **Process** — what you did (research, decisions, trade-offs), not just steps.
- **Solution** — key UX decisions and why, tied to screens.
- **Impact** — outcomes and metrics (even directional/qualitative).

Voice matters most: write like a human (think a good Habr article), not a
template. `ddx.md` is the tone reference. Avoid AI "slop" and the em dash (—).
Fix typos. Do not invent metrics or facts; if a number is unknown, describe the
effect qualitatively.

## Conventions

- Keep changes minimal and focused; match the existing tone and structure.
- Do not commit `_site/`, `vendor/`, or `.bundle/` (already git-ignored).
- Test UI-affecting changes locally in both light and dark themes.
