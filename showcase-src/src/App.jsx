import { useEffect, useRef, useState } from "react";
import { projects } from "./projects.js";

function Arrow() { return <span className="arrow" aria-hidden="true">→</span>; }

export function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef(null);
  useEffect(() => {
    if (!activeProject) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(null);
      if (event.key === "Tab") {
        const focusable = [...document.querySelectorAll(".project-dialog button, .project-dialog a")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = previousOverflow; previousFocus?.focus?.(); };
  }, [activeProject]);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); setMenuOpen(false); };
  return <main>
    <a className="skip-link" href="#work">跳到作品</a>
    <header className="site-header">
      <button className="wordmark" onClick={() => scrollTo("top")} aria-label="返回作品展厅顶部"><span className="wordmark-dot" /><span>Billow / Vibe</span></button>
      <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="site-nav">菜单</button>
      <nav id="site-nav" className={menuOpen ? "nav-open" : ""} aria-label="主导航"><button onClick={() => scrollTo("work")}>作品</button><button onClick={() => scrollTo("about")}>关于</button><a href="/archive/">文章存档</a><a href="/">博客首页</a></nav>
    </header>
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow"><span /> VIBE CODING PORTFOLIO</p><h1 id="hero-title">把想法，<br /><em>做成可以感受的体验。</em></h1><p className="hero-intro">用代码把想法做成可体验的作品。<br />这里收录了一组正在探索中的项目。</p><button className="primary-button" onClick={() => scrollTo("work")}>浏览作品 <Arrow /></button></div>
      <div className="hero-art" aria-hidden="true"><img className="hero-trail" src={`${import.meta.env.BASE_URL}assets/hero-light-trail.png`} alt="" /><p>BUILD WITH<br /><i>FEELING</i></p></div><p className="scroll-note">SCROLL TO EXPLORE <span>↓</span></p>
    </section>
    <section className="projects" id="work" aria-labelledby="work-title">
      <div className="section-heading"><p className="eyebrow"><span /> SELECTED WORK</p><h2 id="work-title">不同的想法，<br />不同的体验。</h2><p>每个项目都从一个具体的场景出发，<br />在屏幕里找到恰当的表达方式。</p></div>
      <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.type}`} key={project.id}><button className="project-preview" style={project.previewBackground ? { background: project.previewBackground } : undefined} onClick={() => setActiveProject(project)} aria-label={`查看${project.title}详情`}><img src={project.image} alt={`${project.title}项目界面截图`} /><span className="preview-action">查看项目 <Arrow /></span></button><div className="project-meta"><p><span>{project.number}</span>{project.label}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><button className="text-button" onClick={() => setActiveProject(project)}>项目详情 <Arrow /></button></div></article>)}</div>
    </section>
    <section className="about" id="about" aria-labelledby="about-title"><div><p className="eyebrow"><span /> ABOUT</p><h2 id="about-title">让数字产品<br />有一点温度。</h2></div><div className="about-copy"><p>用代码快速验证创意，也把时间留给细节：一次清晰的引导、一段轻盈的动效，或一个让人想多停留片刻的界面。</p><a className="text-button" href="/archive/2026/vibe-coding/">阅读这次作品记录 <Arrow /></a></div></section>
    <section className="closing" id="contact" aria-labelledby="closing-title"><img className="orb-glow" src={`${import.meta.env.BASE_URL}assets/orb-glow.png`} alt="" /><p className="eyebrow"><span /> LET'S MAKE SOMETHING</p><h2 id="closing-title">下一个想法，<br /><em>一起把它做出来。</em></h2><p className="contact-note">欢迎在 <a href="https://github.com/hitao123">GitHub</a> 找到我，也可以继续浏览 <a href="/">Billow's Blog</a>。</p></section>
    <footer><span>© 2026 BILLOW</span><a href="/">返回博客</a></footer>
    {activeProject && <div className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onMouseDown={() => setActiveProject(null)}><article onMouseDown={(event) => event.stopPropagation()}><button ref={closeButtonRef} className="dialog-close" onClick={() => setActiveProject(null)} aria-label="关闭详情">关闭 ×</button><img src={activeProject.image} alt={`${activeProject.title}项目界面截图`} /><div className="dialog-content"><p className="eyebrow"><span /> {activeProject.label}</p><h2 id="dialog-title">{activeProject.title}</h2><p>{activeProject.description}</p><h3>展示重点</h3><p>{activeProject.focus}</p><ul>{activeProject.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>{activeProject.url ? <a className="text-button dialog-link" href={activeProject.url} target="_blank" rel="noopener noreferrer">在线体验 <Arrow /></a> : <p className="dialog-note">{activeProject.note}</p>}</div></article></div>}
  </main>;
}
