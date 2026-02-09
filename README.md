# Harsh Kamani - Portfolio Website

Modern portfolio website built with Next.js, featuring Static Site Generation (SSG) for optimal SEO and performance.

## 🚀 Features

- **Pre-rendered HTML pages** for instant loading
- **Enhanced SEO metadata** (Open Graph, Twitter Cards)
- **Optimized font loading** with next/font
- **Image optimization** with next/image
- **Static export** for deployment anywhere

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Export

```bash
npm run build
```

Static files will be in the `/out` folder, ready for deployment.

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   └── ClientScripts.js    # Client-side interactions
│   ├── layout.js                # Root layout with SEO metadata
│   ├── page.js                  # Main page component
│   └── globals.css              # Global styles
├── public/
│   └── assets/                  # Static assets
├── next.config.js               # Next.js configuration
└── package.json
```

## 🌐 Deployment

Deploy the `/out` folder to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting

## 📝 Notes

- Original HTML/CSS/JS preserved in root directory as backup
- Zero visual changes to the site
- All animations and interactions work identically
- Can deploy as static files (no server required)
