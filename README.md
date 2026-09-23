# Billow's Blog

Published at <https://hitao123.github.io/>.

The existing blog pages are prebuilt VuePress output. Their article URLs remain in place. The Vibe Coding showcase lives at [`/vibe/`](https://hitao123.github.io/vibe/), and its editable source is in [`showcase-src/`](showcase-src/). The related project journal is at [`/archive/2026/vibe-coding/`](https://hitao123.github.io/archive/2026/vibe-coding/).

## Update the showcase

```sh
cd showcase-src
npm ci
npm run build
```

The build writes static files to `../vibe/`, which GitHub Pages serves from the `master` branch. Commit both the source changes and the rebuilt `vibe/` files. To add a project, put its image in `showcase-src/public/assets/` and add one object to `showcase-src/src/projects.js`. Add a `url` only when there is a real public project address.

`blog-enhancements.js` inserts links to the showcase and the 2026 project journal into the existing prebuilt blog homepage and archive index without changing old article files.
