---
name: new-article
description: Plan and draft a new blog article in British English with valid frontmatter. Use when the author wants to write, start, outline or draft a new post, or turns an idea or issue into an article.
---

# New article

Draft a new en-GB article for this blog. Read `AGENTS.md`, `docs/guidelines/editorial.md` and `docs/guidelines/language.md` first.

## 1. Brief (ask, do not assume)

Ask the author in one round, skipping what is already clear:

1. Topic and working title.
2. Main audience (`leaders`, `citizen-devs`, `pro-devs`) and topic (`ai-technology`, `ai-transformation`, `citizen-development`, `ai-enablement`).
3. Which decision should the reader be able to make afterwards?
4. Own experience to draw on: situations, results, lessons. This must come from the author. Never invent it.
5. Article type (insight, decision guide, how-to, field note) and sources the author wants cited.
6. Planned publish date.

## 2. Outline

Propose title, description, key takeaways and section headings following the structure in the editorial guidelines. Research facts where needed (web search; Microsoft Learn MCP for Microsoft products) and list sources. Wait for the author's approval.

## 3. Draft

- Branch: `git switch -c post/<slug>` (slug: short, lowercase-kebab, English).
- Copy `docs/templates/article.md` to `src/content/blog/en/<slug>.md` and fill in frontmatter: `draft: true`, `translationKey: <slug>`, honest `aiAssistance` (usually `drafting`).
- Write in the author's voice: first person, experience based, balanced, decision-supporting. Mark any passage where you need the author's real example with `<!-- TODO(author): ... -->`.
- Link every factual claim to its source.

## 4. Check

Run `pnpm check`, `pnpm lint:prose` and `pnpm lint:spell`; fix errors. Start `pnpm astro dev --background` and give the author the preview URL `http://localhost:4321/ai-tech-blog/en/blog/<slug>/`.

## 5. Hand over

Summarise: file path, open TODOs, sources used, suggested next step (`review-article`, then optionally `translate-de-ch`). Do not commit unless asked.
