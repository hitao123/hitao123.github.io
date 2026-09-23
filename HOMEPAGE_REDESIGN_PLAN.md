# Blog homepage redesign plan

## Goal

Turn the root homepage into a visually distinctive front door for Billow's writing and projects. Use the dark, high contrast, lime accented direction already selected for the Vibe Coding showcase. Keep the existing blog content easy to reach.

## Scope and structure

1. Replace only `/index.html` and add small root-level CSS/JS files or assets needed for this homepage. The repository contains prebuilt VuePress output, so do not rebuild or rewrite its existing article and category pages.
2. Hero: clear identity, one sentence positioning, direct calls to browse projects and writing, and a restrained animated visual tied to existing showcase imagery or CSS.
3. Projects: feature the Vibe Coding showcase and the three named projects with honest labels. Link to `/vibe/`; do not invent live app URLs.
4. Writing: surface existing recent posts with their real dates and URLs, plus prominent links to `/archive/`, `/front-end/`, `/notebook/`, and other existing categories.
5. Footer: working GitHub and internal navigation. Preserve the existing blog name and avoid invented personal contact details.

## Design and interaction

- Match the showcase's dark palette and acid lime accent while giving the blog its own editorial layout.
- Use responsive layouts from 320px through desktop. Avoid horizontal scrolling, clipped text, and unreadable overlays.
- Add purposeful hover, entrance, or scroll effects with a complete `prefers-reduced-motion` fallback. No heavyweight animation dependency.
- Use semantic landmarks, one H1, keyboard visible focus, descriptive link text, useful alt text, Chinese page language, and SEO title/description.
- Reuse existing images where helpful; keep loading fast and avoid external fonts or remote assets.

## Acceptance criteria

- `/` visibly links to `/vibe/`, `/archive/`, recent articles, and the existing blog categories.
- Old article and archive URLs remain available and unchanged.
- All images and internal links resolve locally and on GitHub Pages.
- Browser checks cover desktop, a narrow mobile viewport, keyboard navigation, and reduced motion.
- Commit and publish to `master`; verify the live homepage and main links after Pages deployment.
