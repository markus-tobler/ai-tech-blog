---
name: linkedin-post
description: Write a LinkedIn teaser post for a blog article in English and, if a translation exists, in German. Use when the author asks for a LinkedIn post, social teaser or promotion text for an article.
---

# LinkedIn post

1. Read the article(s) in `src/content/blog/{en,de}/<slug>.md`.
2. Write `social/linkedin/<slug>.en.md` and, if the DE article exists, `social/linkedin/<slug>.de.md`. These files are not published on the site.
3. Format of each file:

   ```md
   ---
   article: https://markus-tobler.github.io/ai-tech-blog/<lang>/blog/<slug>/
   ---

   <post text>
   ```

4. Post text rules:
   - 120–220 words. First two lines must make a leader stop scrolling: a concrete observation or question from practice, not hype.
   - First person, same voice as the blog. One core insight, two or three short supporting points, then the link.
   - Plain line breaks, at most two emojis (none is fine), three to five relevant hashtags at the end.
   - German version: de-CH rules from `docs/guidelines/language.md`, written natively, not translated word by word.
   - No client names or confidential details.
5. Run `pnpm lint:prose` and `pnpm lint:spell`.
6. Show the texts to the author. Posting happens manually after the article is live.
