# Publishing workflow

## Lifecycle

1. **Idea**: issue labelled `topic-suggestion` or a note from the author.
2. **Draft**: branch `post/<slug>`, file in `src/content/blog/en/<slug>.md` with `draft: true`. Preview with `pnpm dev`.
3. **Review**: run the review skill (or follow `.claude/skills/review-article/SKILL.md`) and `pnpm verify`. Fix all errors; consider warnings.
4. **Translation** (optional): same slug under `src/content/blog/de/`.
5. **Approval**: the author reads the final version and approves publishing.
6. **Schedule or publish**: set `draft: false` and the `pubDate`. A future date schedules the post; the daily build at 05:00 UTC publishes it.
7. **Merge**: open a PR, wait for the `quality` check, merge to `main`. Deploy runs automatically.
8. **Distribute**: post the LinkedIn draft from `social/linkedin/` manually after the article is live.

## Updates

- Fix typos silently.
- Substantive changes: set `updatedDate` and add a short note at the end ("Updated 3 March 2027: …").
- Never change a published slug. If you must, keep the old URL working.

## Quality gates

`pnpm verify` and the `quality` workflow run: Astro type and schema check, build, Vale, cspell and lychee. A weekly job checks all links and opens an issue for broken ones.

## Comments and feedback

Comments run on giscus (GitHub Discussions). Moderate in the repository's Discussions tab. Corrections arrive as issues with the `correction` label.
