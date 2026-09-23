# Vibe Portfolio

## 添加一个项目

1. 将项目截图放入 `public/assets/`。
2. 在 `src/projects.js` 新增一条数据，填写 `id`、`number`、`title`、`description`、`image`、`type`、`tags`、`focus` 和 `note`；`label` 与 `previewBackground` 可选。`type` 使用 `wide` 或 `phone`，以匹配截图比例。
3. 如已有真实线上地址，可追加 `url` 字段；当前页面不会虚构体验链接。
4. 运行 `npm ci && npm run build`。构建结果会写入仓库根目录的 `vibe/`，请连同源码一起提交。

前三个项目使用首页的固定拼版。第 4 个及之后的项目会由 CSS Grid 自动排入后续行，不影响前三项的布局。
