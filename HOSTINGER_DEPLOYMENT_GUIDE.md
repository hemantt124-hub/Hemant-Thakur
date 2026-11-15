# Hostinger Deployment Guide for hemantthakur.in

This guide explains how to upload your completed, production-ready portfolio website to your **Hostinger hPanel**.

---

## 📦 What Files Are Ready for Hostinger?

All static assets, HTML, CSS, JavaScript chunks, images, and server configurations have been pre-compiled into the **`dist/`** directory and packaged into **`hostinger-deploy.zip`** (398 KB).

### Files included in the export:
1. **`index.html`** – Complete entry document with SEO meta tags, Google Fonts, and Schema.org structured data.
2. **`.htaccess`** – Hostinger/Apache/LiteSpeed configuration:
   - Single-Page Application (SPA) routing (prevents 404 on page refresh).
   - Automatic 301 redirect from HTTP to HTTPS.
   - Gzip and Deflate compression for 100/100 Core Web Vitals speed.
   - Long-term caching headers for assets and fonts.
   - Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).
3. **`assets/`** – Minified CSS, modular JavaScript bundles (React, Three.js 3D prism, Framer Motion), and the transparent WhatsApp app icon.
4. **`sitemap.xml`** – Complete XML sitemap configured for `https://hemantthakur.in`.
5. **`robots.txt`** – Search engine crawling instructions pointing to your sitemap.
6. **`404.html`** – Fallback 404 page for static hosts.

---

## 🚀 Step-by-Step Upload Instructions (Hostinger hPanel)

### Method 1: Using the ZIP File (Fastest & Recommended)

1. **Log in to Hostinger**:
   - Go to [https://hpanel.hostinger.com](https://hpanel.hostinger.com) and log in.

2. **Open File Manager**:
   - Navigate to **Websites** -> Find **`hemantthakur.in`** -> Click **Manage**.
   - Under the **Files** section, click **File Manager** (or **File Manager for this website**).
   - Click on the **`public_html`** directory.

3. **Clean Existing Default Files (if any)**:
   - If there is a default `default.php` or placeholder file from Hostinger in `public_html`, delete it.
   - Keep `public_html` ready.

4. **Upload `hostinger-deploy.zip`**:
   - In the top menu of File Manager, click the **Upload** icon (arrow pointing up).
   - Choose **File** and select **`hostinger-deploy.zip`**.

5. **Extract the ZIP**:
   - Right-click on **`hostinger-deploy.zip`** inside `public_html`.
   - Click **Extract**.
   - Enter **`.`** (or leave as `/public_html`) so the files extract directly into `public_html`.
   - Click **Extract**.

6. **Verify the Extracted Structure**:
   Your `public_html` folder should look like this:
   ```text
   public_html/
   ├── .htaccess
   ├── 404.html
   ├── CNAME
   ├── index.html
   ├── robots.txt
   ├── sitemap.xml
   └── assets/
       ├── index-hbryhDBX.js
       ├── index-n6waPiTi.css
       ├── rolldown-runtime-WkwZ5CU-.js
       ├── vendor-react-BPeuUvaN.js
       ├── vendor-three-UvJcucEs.js
       ├── whatsapp-icon.png
       └── aistudio/
           └── whatsapp-vector-logo-icon-logotype-vector-social-media_901408-404_1cc284b7.png
   ```
   *(You can safely delete `hostinger-deploy.zip` from `public_html` after extracting).*

---

### Method 2: Manual Drag-and-Drop (Without ZIP)

If you prefer uploading uncompressed files:
1. Open Hostinger **File Manager** -> **`public_html`**.
2. Upload the contents of the **`dist/`** folder directly into `public_html`.
3. Make sure `.htaccess` is uploaded (enable **"Show Hidden Files"** in File Manager settings if you don't see dotfiles).

---

## 🔒 Hostinger SSL & HTTPS Activation

1. In Hostinger hPanel, go to **Security** -> **SSL**.
2. Ensure **Free SSL (Let's Encrypt)** is installed and shows as **Active** for `hemantthakur.in`.
3. Enable **Force HTTPS** (the included `.htaccess` also enforces this automatically at the server level).

---

## 🔍 Google Search Console & SEO Verification

1. Once uploaded, visit **`https://hemantthakur.in`** in your browser to confirm the site loads with your 3D hero canvas and WhatsApp buttons.
2. Go to [Google Search Console](https://search.google.com/search-console).
3. Add property: `https://hemantthakur.in`.
4. Submit your sitemap:
   - URL: `https://hemantthakur.in/sitemap.xml`.
5. Test direct WhatsApp button clicks:
   - It will open WhatsApp with your pre-filled message:
     *"Hi, I would like to discuss my project with you."*
