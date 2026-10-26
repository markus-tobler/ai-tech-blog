# AI tech blog

Source of [markus-tobler.github.io/ai-tech-blog](https://markus-tobler.github.io/ai-tech-blog/): field notes on AI technology, AI transformation, citizen development and AI enablement. Articles in British English, some also in Swiss Standard German.

Built with [Astro](https://astro.build) and published to GitHub Pages.

## Feedback

Found an error or have a topic idea? [Open an issue](https://github.com/markus-tobler/ai-tech-blog/issues/new/choose). Comment on articles directly on the site. This repository does not accept pull requests.

## Local development

Requires Node 24 (`.nvmrc`) and pnpm via corepack.

```sh
corepack enable
pnpm install
bash scripts/install-tools.sh   # Vale + lychee into ~/.local/bin
vale sync                       # download Vale packages
pnpm dev                        # http://localhost:4321/ai-tech-blog/
pnpm verify                     # type check, build, prose, spelling, links
```

Authoring rules live in [AGENTS.md](AGENTS.md) and [docs/guidelines](docs/guidelines/).

## Licence

Content: [CC BY 4.0](LICENSE-CONTENT.md). Code: [MIT](LICENSE).
