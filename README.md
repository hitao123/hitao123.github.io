# Billow's Blog

Published at <https://hitao123.github.io/>.

The root homepage (`index.html`) is a standalone static page. Existing articles, categories, and archive pages remain prebuilt VuePress output, with their URLs in place. The Vibe Coding showcase lives at [`/vibe/`](https://hitao123.github.io/vibe/), and its editable source is in [`showcase-src/`](showcase-src/). The related project journal is at [`/archive/2026/vibe-coding/`](https://hitao123.github.io/archive/2026/vibe-coding/).

## Update the showcase

```sh
cd showcase-src
npm ci
npm run build
```

The build writes static files to `../vibe/`, which GitHub Pages serves from the `master` branch. Commit both the source changes and the rebuilt `vibe/` files. To add a project, put its image in `showcase-src/public/assets/` and add one object to `showcase-src/src/projects.js`. Add a `url` only when there is a real public project address.

`blog-enhancements.js` adds a showcase link to the navigation on remaining VuePress pages and adds the 2026 project journal to the archive index. It is loaded on the legacy VuePress pages and forces links to `/` to load the standalone homepage as a full page navigation, avoiding VuePress rendering its former home component. Other internal links keep using the VuePress router. The standalone root homepage links to the showcase directly; article content remains unchanged.

## Publish standalone interactive articles

The latest interactive article is [王者峡谷 20 分钟节奏图](https://hitao123.github.io/archive/2026/honor-of-kings-20min-playbook/), published on 2026-10-02. Its complete HTML, styles, and interactive map are in `archive/2026/honor-of-kings-20min-playbook/index.html`.

To publish an article, add its static page under `archive/<year>/<slug>/`, add a dated link at the top of the homepage's `post-list`, and add its archive entry in `blog-enhancements.js`. Bump the script version in legacy HTML pages when changing the archive enhancement so returning visitors receive the current article list.

## Play Rift Arena

[Rift Arena / 裂隙擂台](https://hitao123.github.io/games/rift-arena/) is a Unity WebGL street fighting game for two players on one keyboard, published on 2026-10-03. The homepage work section links directly to it. Its complete static build is under `games/rift-arena/`; keep the HTML, assets and Unity build files together when updating. Build the game in its Unity project, run `pnpm test && pnpm build`, then copy the complete `dist/` directory here. The bundled character and animation attribution is in `games/rift-arena/credits/CREDITS.md`.
