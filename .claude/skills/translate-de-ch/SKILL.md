---
name: translate-de-ch
description: Create or update the Swiss Standard German (de-CH) version of an English blog article. Use when the author asks to translate a post into German, create the DE version, or sync a German post after the English one changed.
---

# Translate to de-CH

Read `docs/guidelines/language.md` first.

1. Identify the source: `src/content/blog/en/<slug>.md`. If a German version exists, compare both and only update changed passages.
2. Create `src/content/blog/de/<slug>.md` (same slug, same file extension).
3. Frontmatter: copy all fields, then set `lang: de`; keep `translationKey`, `topic`, `tags`, `audience`, `pubDate`, `draft`; set `aiAssistance: translation` unless the author says otherwise. Translate `title` and `description` (description stays 50–180 characters).
4. Body: translate meaning, not words. Swiss spelling (`ss`), «» quotes, «Sie», Swiss number format (1'000), neutral gender-inclusive forms. Keep headings structure, links, code and product names. Prefer German versions of linked sources if they exist.
5. Run `pnpm check`, `pnpm lint:prose`, `pnpm lint:spell`. Add genuine German compounds or terms to `project-words.txt` only when they are correct.
6. Report: file path, terms you were unsure about, any passage that needed restructuring.
