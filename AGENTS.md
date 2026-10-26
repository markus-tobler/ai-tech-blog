# AGENTS.md

Personal blog of Markus Tobler on AI technology, AI transformation, citizen development and AI enablement. Astro static site, deployed to GitHub Pages at `https://markus-tobler.github.io/ai-tech-blog/`. English (en-GB) is primary; Swiss Standard German (de-CH) translations are optional.

## Commands

Node 24 (`nvm use`), pnpm via corepack.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Dev server at `http://localhost:4321/ai-tech-blog/`. Shows drafts and scheduled posts. Agents: `pnpm astro dev --background`, stop with `pnpm astro dev stop`. |
| `pnpm check` | Type and frontmatter schema check |
| `pnpm build` | Production build into `dist/` (drafts and future posts excluded) |
| `pnpm lint:prose` | Vale: house style, en-GB spelling, de-CH rules. Run `vale sync` once first. |
| `pnpm lint:spell` | cspell with en-GB and de-CH dictionaries. Add legitimate terms to `project-words.txt`. |
| `pnpm lint:links` | lychee on `dist/` (run after build) |
| `pnpm verify` | All of the above. Must pass before a post is published. |

## Where things live

- `src/content/blog/<lang>/<slug>.md` — articles. Use `.mdx` only when a component is needed.
- `src/content/pages/<lang>/` — about and privacy pages.
- `src/config.ts` — site identity, topics, audiences, giscus and GoatCounter settings.
- `src/i18n/ui.ts` — all UI strings in both languages. Never hard-code UI text in components.
- `src/lib/posts.ts` — post queries (`getPosts`, `getListing`, `isLive`). Reuse; do not filter collections elsewhere.
- `social/linkedin/<slug>.<lang>.md` — LinkedIn drafts. Not published on the site.
- `docs/guidelines/` — editorial, language and publishing rules. `docs/templates/article.md` — article skeleton.

## Article frontmatter

```yaml
title: Sentence case, max 90 characters
description: 50–180 characters, used for lists, SEO and social cards
pubDate: 2026-11-02            # future date = scheduled
updatedDate: 2026-12-01        # optional, only for substantive changes
draft: true                    # default; only the owner sets false
lang: en                       # en | de, must match the folder
translationKey: my-post        # same value in both languages
topic: ai-transformation       # ai-technology | ai-transformation | citizen-development | ai-enablement
tags: [governance, copilot]    # lowercase-kebab, max 6
audience: [leaders]            # leaders | citizen-devs | pro-devs
heroImage: ./images/x.jpg      # optional, next to the post; heroAlt then required
aiAssistance: drafting         # none | editing | drafting | translation (honest!)
```

A translation uses the same slug and `translationKey` under the other language folder.

## Rules

1. Follow [editorial](docs/guidelines/editorial.md), [language](docs/guidelines/language.md) and [publishing](docs/guidelines/publishing.md) guidelines.
2. Never name clients, colleagues or employers, and never include confidential details. Anonymise ("a Swiss insurer").
3. Back factual claims, numbers and quotes with a linked source. Do not invent sources, statistics or experiences. Ask the author for the real experience instead.
4. Never set `draft: false` or merge to `main` without explicit approval from the author.
5. Set `aiAssistance` truthfully for every post you help write or translate.
6. British spelling in English, `ss` (never `ß`) and «» quotes in German.
7. Work on a branch `post/<slug>` and open a PR. `main` deploys automatically.
8. Keep the site code small. Change design tokens in `src/styles/global.css`, not per component.

## Agent skills

Claude Code project skills in `.claude/skills/`: `new-article`, `translate-de-ch`, `review-article`, `linkedin-post`, `publish-article`. Other agents: read the matching `SKILL.md` and follow it.

Astro docs are available through the `astro-docs` MCP server (`.mcp.json`). Use the Microsoft Learn MCP for facts on Microsoft products.
