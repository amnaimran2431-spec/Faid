# Fadi’s Tech Shop – E-Commerce Website

Premium, modern, and mobile-responsive storefront for **Fadi’s Tech Shop**, located at Shop No. 41, Chaudhry Plaza, G1 Market, Johar Town, Lahore, Pakistan.

---

## Netlify Deployment Guide

The project is pre-configured for Netlify with `netlify.toml` and `public/_redirects`.

### Option 1: Deploy via GitHub & Netlify (Recommended)

1. Push this codebase to your GitHub repository (e.g. `fadis-tech-shop`).
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Choose **GitHub** and select your repository.
5. Netlify will auto-detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy Site"**. Your site will be live on an HTTPS link within seconds.

---

### Option 2: Deploy via Netlify Drag & Drop

1. Run the build command locally:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the Netlify Drop area.
4. Your website is instantly published.

---

### Central Data File
To update store details, phone numbers, catalog products, or prices in Pakistani Rupees (PKR):
- Edit `src/data/shopData.ts`
- Changes will reflect across the site and WhatsApp links automatically.
