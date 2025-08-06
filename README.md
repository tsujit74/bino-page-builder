# 🚀 Bino Dynamic Page Builder

This is a **Next.js App Router** project that lets you dynamically create and serve new pages via a simple POST API. Ideal for powering quick informational or promotional pages linked to **[Bino](https://bino.bot)**.

## Github Link
https://github.com/tsujit74/bino-page-builder

## 🧠 How It Works

Use the `/api/pages` endpoint to create new pages by sending a `slug` and an array of components.

### ✅ POST Endpoint

POST /api/pages
Content-Type: application/json
### 🔧 Request Body
{
  "slug": "about-bino",
  "components": [
    { "type": "TextSection", "props": { "title": "What is Bino?", "text": "Bino is a WhatsApp-based search assistant." } },
    { "type": "StatsBox", "props": { "label": "Users", "value": "10K+" } },
    { "type": "ImageBlock", "props": { "src": "/bino.png", "alt": "Bino Logo" } },
    { "type": "CTA", "props": { "buttonText": "Try Bino", "link": "https://bino.bot" } }
  ]
}

## Sample CURL

curl -X POST https://your-app.vercel.app/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "about-bino",
    "components": [
      { "type": "TextSection", "props": { "title": "What is Bino?", "text": "Bino is a WhatsApp-based search assistant." } },
      { "type": "StatsBox", "props": { "label": "Users", "value": "10K+" } },
      { "type": "ImageBlock", "props": { "src": "/bino.png", "alt": "Bino Logo" } },
      { "type": "CTA", "props": { "buttonText": "Try Bino", "link": "https://bino.bot" } }
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



