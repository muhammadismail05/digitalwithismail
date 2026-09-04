# Digital with Ismail — Portfolio (Next.js)

M Ismail Ibrahim — SEO Expert & Web Designer ki portfolio site.

**Next.js 15 (App Router) + React 19** — static export ke sath (Vercel / GitHub Pages dono par chalti hai).

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # out/ folder me static site
```

## Site Update Kaise Karein

Sirf **`lib/config.js`** edit karein — poori site automatic update:
- WhatsApp number / display
- Email / location
- Social links (Facebook, LinkedIn, Instagram)
- WhatsApp default message
- Projects (name, desc, type, link)

Photos/images `public/` folder me:
- `profile.jpg` — hero/about photo
- `ismail-logo.png` — navbar/footer logo
- `ismail-favicon.png` — favicon
- `gsc-proof.jpg` — results proof

Sections ka code `components/` me hai (Header, Hero, Services, Projects, About, Results, Process, FAQ, CTABanner, Footer).

## Deploy

### Option A — GitHub Pages (automatic)
1. Ye repo GitHub par push karein
2. Repo **Settings → Pages → Source: GitHub Actions** select karein
3. Ab har push par site khud build + deploy hoti hai

### Option B — Vercel (sab se easy)
1. [vercel.com](https://vercel.com) par GitHub account se login karein
2. **Add New Project** → repo import karein → Deploy
3. Har push par automatic deploy
