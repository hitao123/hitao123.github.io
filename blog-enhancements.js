// This repository contains the published VuePress output, not its source.
// Keep the new showcase link outside the old bundle so existing articles stay intact.
(() => {
  const addShowcaseLink = (nav) => {
    if (!nav || nav.querySelector('a[href="/vibe/"]')) return;
    const item = document.createElement("div");
    item.className = "nav-item";
    const link = document.createElement("a");
    link.className = "nav-link";
    link.href = "/vibe/";
    link.textContent = "作品展厅";
    item.append(link);
    nav.append(item);
  };

  const addShowcaseCard = () => {
    const page = document.querySelector(".main-page");
    if (!page || page.querySelector(".showcase-feature")) return;
    const section = document.createElement("section");
    section.className = "showcase-feature";
    section.setAttribute("aria-labelledby", "showcase-feature-title");
    section.innerHTML = `
      <p class="showcase-kicker">NEW · VIBE CODING</p>
      <h2 id="showcase-feature-title">从想法到作品</h2>
      <p>简历工坊、婚礼抽奖与备婚 App，收录在新的作品展厅中。原有文章与存档继续保留。</p>
      <div class="showcase-actions">
        <a class="showcase-primary" href="/vibe/">浏览作品展厅 <span aria-hidden="true">↗</span></a>
        <a href="/archive/2026/vibe-coding/">阅读作品记录 →</a>
        <a href="/archive/">查看文章存档 →</a>
      </div>`;
    page.prepend(section);
  };

  const update = () => {
    document.querySelectorAll(".navbar .nav-links, .sidebar .nav-links").forEach(addShowcaseLink);
    addShowcaseCard();
    const archiveList = document.querySelector(".theme-default-content.content__default > ul");
    if (location.pathname === "/archive/" && archiveList && !archiveList.querySelector('a[href="/archive/2026/vibe-coding/"]')) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = "/archive/2026/vibe-coding/";
      link.textContent = "2026 · Vibe Coding 作品记录";
      item.append(link);
      archiveList.prepend(item);
    }
    if (location.pathname === "/archive/") {
      const updatedLabel = document.querySelector(".last-updated .prefix");
      const updatedTime = document.querySelector(".last-updated .time");
      if (updatedLabel && updatedLabel.textContent !== "存档更新：") updatedLabel.textContent = "存档更新：";
      if (updatedTime && updatedTime.textContent !== "2026/09/23") updatedTime.textContent = "2026/09/23";
    }
  };
  update();
  const app = document.getElementById("app");
  if (app) new MutationObserver(update).observe(app, { childList: true, subtree: true });
})();
