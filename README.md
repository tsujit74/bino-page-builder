# Bino Page Builder

A dynamic page generator built with **Next.js App Router**, capable of creating pages via a `POST /api/pages` API.

## 🚀 Features
- 5 reusable components: `TextSection`, `StatsBox`, `ImageBlock`, `Card`, `CTA`
- Dynamic pages served at `/[slug]`
- At least one component shows an image ✅
- API for creating pages dynamically

## 🧪 Sample Pages
- [About Bino](https://bino-page-builder.vercel.app/about-bino)
- [How It Works](https://bino-page-builder.vercel.app/how-it-works)

## 🛠️ API Endpoint

`POST /api/pages`

### Example `curl`
```bash
curl -X POST http://localhost:3000/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "about-bino",
    "components": [
      { "type": "TextSection", "props": { "title": "What is Bino?", "text": "Bino is a WhatsApp-based search assistant." } },
      { "type": "StatsBox", "props": { "label": "Users", "value": "10K+" } },
      { "type": "ImageBlock", "props": { "src": "/bino.png", "alt": "Bino Logo" } },
      { "type": "CTA", "props": { "buttonText": "Try Bino", "link": "https://bot.in" } }
    ]
  }'


## 🔗 Live Demo
https://bino-page-builder.vercel.app/about-bino

https://bino-page-builder.vercel.app/how-it-works

## 🧩 Built With
✅ Next.js 15 (App Router)
✅ Tailwind CSS v4
✅ TypeScript
✅ 5 Reusable Components: Card, ImageBlock, TextSection, StatsBox, CTA
✅ In-memory store (pagesStore) for dynamic page generation



