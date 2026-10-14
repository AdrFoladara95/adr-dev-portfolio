# ADR.dev Portfolio

A responsive React + TypeScript + Vite + Tailwind CSS portfolio for Awe Damilola Racheal. Project cards use clearly illustrative CSS previews until real screenshots are supplied. No demo or repository URLs are fabricated.

## Run locally

1. Install Node.js (LTS) if you have not already.
2. Open this folder in VS Code.
3. Open the terminal and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints in the terminal.
5. Before deploying, run `npm run build` to check the production build.

## Update your portfolio content

Open `src/data/portfolio.ts`.

- Replace each project's empty `demoUrl` and `sourceUrl` with the real links. The buttons stay as non-clickable “URL pending” labels until valid HTTP(S) links are added.
- Add your contact email, WhatsApp click-to-chat URL (for example `https://wa.me/234...`), GitHub profile URL and LinkedIn URL to `contact`.
- Change `availableForWork` to `false` to remove the freelance availability label.
- Update project descriptions and technologies in the `projects` array.
- Preview artwork is CSS-built and intentionally illustrative. Replace `ProjectPreview.tsx` visuals with real screenshots when available.

## Contact form

The form validates fields in the browser. If a valid WhatsApp URL is configured, it opens WhatsApp with a prefilled message; otherwise, if an email is configured, it opens the visitor's email app. If neither is configured, it clearly reports demo mode. There is no backend and the site does not claim to deliver or store messages.

## Notes

- Tailwind is configured and available for future component styling; the current bespoke visual system is in `src/styles.css`.
- Smooth scrolling and section tracking are included, and reduced-motion preferences are respected.
- No React Router is needed for this one-page portfolio.
