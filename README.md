# EigenDynamics Wiki

Public field notes on mathematical worlds, generative art, simulations, and experiments.

This repository contains the **public record**, not the private implementations or interactive runtimes. A documented concept is not necessarily a complete reproduction recipe. Publication status and limitations are stated on individual entries.

## Site

A dependency-free static website, designed for GitHub Pages. Content lives in `content/*.md`, and `content/entries.json` is the editorial index. The browser renders Markdown using a deliberately small supported subset; see [PUBLISHING.md](PUBLISHING.md).

To preview locally:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

To publish with GitHub Pages, configure **Settings → Pages → Deploy from a branch → main / (root)**. This configuration cannot be enabled by committing site files alone.

## Boundaries

- Public: ideas, concepts, illustrated summaries, selected experimental observations, references, and notes.
- Not implied: access to source, executable experiments, parameters, private data, or downloadable builds.
- Do not copy files, source archives, or links to private deployments from other EigenDynamics repositories into this public repository without an explicit release decision.
- Distinguish **schematic artwork** from captures or measurements of actual experiments.
- No license for text, illustrations, or code is granted by default. Choose a publication license deliberately before encouraging reuse.

A place for all our strange worlds.
