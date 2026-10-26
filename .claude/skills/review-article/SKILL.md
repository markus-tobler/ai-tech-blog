---
name: review-article
description: Review a blog article against the editorial and language guidelines and run all quality checks. Use when the author asks to review, proofread, check, critique or improve a post before publishing.
---

# Review article

Review one article (both languages if a translation exists). Read `docs/guidelines/editorial.md` and `docs/guidelines/language.md`.

## Automated checks

Run and collect results:

```sh
pnpm check
pnpm lint:prose
pnpm lint:spell
pnpm build && pnpm lint:links
```

## Editorial review

Check and report findings in this order of importance:

1. **Confidentiality**: names of clients, employers, colleagues; internal details. Blocker.
2. **Accuracy**: claims without sources, outdated facts, invented-sounding experiences or numbers. Verify sources that are cited; flag unverifiable ones.
3. **Decision value**: is the decision clear? Are options, criteria and next steps concrete? Does each audience get what it needs?
4. **Structure**: key takeaways, context, insight, decision aid, next steps; descriptive sentence-case headings.
5. **Voice**: first person, experience based, balanced, no hype, active voice, short sentences.
6. **Language**: en-GB or de-CH conventions; German reads as original German.
7. **Frontmatter**: description quality, tags, audience, honest `aiAssistance`, `heroAlt` when needed.
8. **Translation parity**: DE says the same as EN; `translationKey` matches.

## Output

A short list: `file:line — severity (blocker | should | could) — finding — suggested fix`. Then a one-line verdict: ready / ready after fixes / needs rework. Apply fixes only when the author asks.
