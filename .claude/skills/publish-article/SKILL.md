---
name: publish-article
description: Publish or schedule a reviewed blog article - final checks, set publish date, open and merge the PR, confirm deployment. Use when the author says to publish, schedule, release or go live with a post.
---

# Publish article

Only run when the author has explicitly approved publishing this article. Follow `docs/guidelines/publishing.md`.

1. **Confirm** slug, languages to publish and the `pubDate` (today or a future date to schedule). Ask if unclear.
2. **Final checks**: no `TODO(author)` left (`grep -rn "TODO(author)" src/content`), review findings resolved, `pnpm verify` passes.
3. **Frontmatter**: set `draft: false` and the agreed `pubDate` in every language version. Set `updatedDate` only for substantive updates of already published posts.
4. **Commit** on branch `post/<slug>` with a message like `post: publish <slug>`. Push and open a PR with `gh pr create` (title: article title; body: summary, languages, publish date).
5. **Wait for CI**: `gh pr checks --watch`. Fix failures, never skip checks.
6. **Merge** after the author confirms: `gh pr merge --squash --delete-branch`.
7. **Verify deploy**: `gh run watch` on the Deploy workflow, then fetch `https://markus-tobler.github.io/ai-tech-blog/en/blog/<slug>/` and confirm HTTP 200. For a scheduled post, report the date the daily build will publish it.
8. **Next**: offer the `linkedin-post` skill if no draft exists yet.
