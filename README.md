# Verity — Landing Page

Single-page marketing site for **Verity — Where Knowledge Meets Connection.**
This is the public landing page only, not the Verity social application.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion, and Lucide icons.

**No backend.** The site is a static export: `npm run build` writes plain HTML/CSS/JS to `out/`,
which any static host can serve. There are no API routes, Server Actions, databases, or email
services.

## The page

One route, `/`, with in-page sections that the header links to:

| Anchor | Section |
| --- | --- |
| `#features` | Featured capabilities |
| `#experts` | Ask an Expert spotlight |
| `#how-it-works` | Five-step journey |
| `#trust` | Trust & community pillars |
| `#join` | Closing call to action ("Join Verity" in the header scrolls here) |

Plus **`/privacy-policy`**, the full Privacy Policy with a sticky table of contents (linked from the
footer). It is a **draft for legal review**; see [Privacy Policy](#privacy-policy) below.

Also generated: `/sitemap.xml`, `/robots.txt`, `/og.png` (link preview image), `/icon.svg` (favicon), and a 404 page.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run preview    # build the static site and serve out/ at http://localhost:3000
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Static export to `out/` |
| `npm start` | Serve `out/` locally (after a build) |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generates route types, then `tsc --noEmit` |
| `npm run check:site` | Crawls a running copy (`BASE_URL`, default `http://localhost:3000`): page metadata, one `<h1>`, every link and `#anchor` resolves, 404 works |
| `npm run verify` | lint + typecheck + build |

## Project structure

```text
src/
├── app/                 # page.tsx (the landing page), layout, 404, sitemap, robots, OG image, icon
├── components/
│   ├── layout/          # Header (sticky, mobile menu), footer, logo, theme toggle
│   ├── legal/           # Privacy Policy layout, table of contents, print button
│   ├── sections/        # Hero, feature grid, phone mockups, steps, closing CTA, Reveal
│   └── ui/              # Button, Section, StatusBadge, …
├── config/
│   ├── site.ts          # Domain, base path, contact email, navigation
│   ├── company.ts       # Legal entity facts and policy date (placeholders!)
│   └── features.ts      # Feature catalogue and live/beta/in-development status
├── content/legal/       # Privacy Policy text
└── lib/                 # Metadata helper, pre-paint theme script
scripts/check-site.mjs          # Link/SEO crawler
scripts/fix-export-segments.mjs # Post-build workaround for a Next.js export bug on Windows
public/CNAME                    # Custom domain for GitHub Pages (verity.gebetacloud.com)
.github/workflows/deploy.yml    # Builds and deploys to GitHub Pages on every push
```

## Configuration

All variables are optional and documented in [`.env.example`](.env.example). They are inlined at
build time, so rebuild after changing them.

- **`NEXT_PUBLIC_SITE_URL`** — the production domain. Until it is set, the page sends `noindex` and
  `robots.txt` disallows crawling, so previews never get indexed.
- **`NEXT_PUBLIC_CONTACT_EMAIL`** — when set, the closing section shows a **Notify me at launch**
  button (a pre-filled email from the visitor's own email app) and the footer shows a Contact link.
  Without it, the section says "Waitlist sign-ups open soon".

- **`NEXT_PUBLIC_BASE_PATH`** — serve the site under a sub-path. With `/verity` and
  `NEXT_PUBLIC_SITE_URL=https://yourwebsite.com`, the page is at `https://yourwebsite.com/verity/`
  and the Privacy Policy at **`https://yourwebsite.com/verity/privacy-policy`**. Upload the contents
  of `out/` into the `verity/` folder on your host. Leave it empty to serve at the domain root.
- **`NEXT_PUBLIC_PRIVACY_EMAIL`** — privacy inbox shown in the policy (falls back to the contact email).

Feature statuses live in `src/config/features.ts`. Every feature is currently `in-development`,
and the copy presents Verity as coming soon; update both when features ship.

## Privacy Policy

The text lives in `src/content/legal/privacy-policy.tsx`. Each "[Insert …]" placeholder from the
supplied policy renders as a highlighted **`[To confirm: …]`** marker, and the page shows a "Not yet
complete" notice until all of them are filled in:

| Placeholder | Where to set it |
| --- | --- |
| Developer / legal company name | `legalName` in `src/config/company.ts` |
| Business contact address | `registeredAddress` in `src/config/company.ts` |
| In-app Delete Account steps | `accountDeletionSteps` in `src/config/company.ts` |
| Web account deletion URL | `accountDeletionUrl` in `src/config/company.ts` |
| Privacy support email | `NEXT_PUBLIC_PRIVACY_EMAIL` (or `NEXT_PUBLIC_CONTACT_EMAIL`) |
| Official website | `NEXT_PUBLIC_SITE_URL` |

Dates are in `policyDates` in the same file. Have the final policy reviewed by qualified counsel.

## Deployment (GitHub Pages → https://verity.gebetacloud.com)

The workflow `.github/workflows/deploy.yml` builds the site with
`NEXT_PUBLIC_SITE_URL=https://verity.gebetacloud.com` and publishes `out/` to GitHub Pages on every
push to `master` (or `main`).

One-time setup:

1. **Push this project to a GitHub repository.**
2. **Settings → Pages → Build and deployment → Source: "GitHub Actions".**
3. **Settings → Pages → Custom domain:** enter `verity.gebetacloud.com` and save.
4. **DNS (at the provider for gebetacloud.com):** add a `CNAME` record with name `verity`, pointing to
   `<your-github-username>.github.io`.
5. Once the DNS check passes (minutes to a few hours), tick **Enforce HTTPS** in Settings → Pages.
6. Optional: under **Settings → Secrets and variables → Actions → Variables**, add
   `NEXT_PUBLIC_CONTACT_EMAIL` and/or `NEXT_PUBLIC_PRIVACY_EMAIL`, then re-run the workflow.

GitHub Pages serves `/privacy-policy` from `privacy-policy.html` and uses `404.html` for unknown
paths automatically. It does not allow custom security headers (CSP, etc.); that is acceptable for a
static page that collects no data.

The site is served at the domain root, so leave `NEXT_PUBLIC_BASE_PATH` empty. Next.js 16.4's static
export names some prefetch files incorrectly when built on Windows; the `postbuild` script fixes them
(GitHub Actions builds on Linux, where it does nothing).

### Before going live

- [ ] GitHub Pages source set to GitHub Actions, custom domain and DNS configured, HTTPS enforced
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL` set, if you want launch sign-ups by email
- [ ] Feature statuses reflect reality
- [ ] Privacy Policy placeholders filled in (no "To confirm" markers) and reviewed by counsel
- [ ] If you add analytics or start collecting data, update the Privacy Policy (and add cookie consent where required)
