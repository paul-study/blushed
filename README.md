# Blushed by Belle

Landing page for Blushed by Belle, a beauty studio in Dunedin, New Zealand. Built with React + Vite, plain CSS and Lucide icons.

## Develop

```
npm install
npm run dev
npm run build
```

## Customising

- Logos: `public/logo1.webp` is used in the hero and `public/logo2.webp` in the navbar. The browser tab icon is `public/browser.webp`.
- Services, gallery, contact details and hours: `src/data/services.js`, `src/data/gallery.js`, `src/data/site.js`.
- Gallery images in `public/gallery` are AI-generated illustrations, not client or studio photographs. Replace their paths in `src/data/gallery.js` with real photos when available.
- Booking form posts to [FormSubmit](https://formsubmit.co) for `bellehohaia15@gmail.com`. The first submission triggers an activation email to that address which must be confirmed once.
