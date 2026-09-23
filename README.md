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
