# IFFI Media Website - Deployment Guide

## ✅ Pre-Launch Checklist

### 1. Configure WhatsApp Number
Edit `src/config.ts` and add your WhatsApp number:
```typescript
whatsapp: "971501234567", // Your number with country code (no + or spaces)
```

### 2. Update Contact Information
In `src/config.ts`, update:
- `email`: Your business email
- `phone`: Your phone number (optional)
- `location`: Your location (optional)
- `social.linkedin`: LinkedIn URL
- `social.instagram`: Instagram URL

### 3. Add Real Content (Optional)
- **Case Studies**: Edit `src/data.ts` → `caseStudies` array (set `isDemo: false`)
- **Blog Posts**: Edit `src/data.ts` → `blogPosts` array (set `isDraft: false`)
- **Testimonials**: Edit `src/data.ts` → `testimonials` array

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Set domain to `www.iffimedia.com` in Vercel dashboard

**Or via GitHub:**
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

### Option 2: Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`
4. Set domain in Netlify dashboard

**Or via drag & drop:**
1. Build: `npm run build`
2. Drag `dist` folder to Netlify dashboard

### Option 3: Traditional Hosting (cPanel/FTP)
1. Build: `npm run build`
2. Upload entire `dist` folder contents to your web root
3. Configure `.htaccess` for SPA routing (see below)

**Add to `.htaccess`:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Option 4: Cloudflare Pages
1. Connect GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy

---

## 🔧 Post-Deployment

### DNS Configuration
Point your domain to your hosting provider:
- **Vercel**: Follow Vercel DNS guide
- **Netlify**: Follow Netlify DNS guide
- **Traditional**: Update A record to server IP

### SSL Certificate
Most modern hosts provide free SSL automatically. Ensure HTTPS is enabled.

### Test Everything
- [ ] All pages load correctly
- [ ] WhatsApp chat works
- [ ] Contact form validation works
- [ ] Mobile responsive design
- [ ] SEO meta tags present
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`

---

## 📊 Analytics Setup (Optional)

When ready, add tracking IDs in `src/config.ts`:
```typescript
tracking: {
  ga4Id: "G-XXXXXXXXXX", // Google Analytics 4
  gtmId: "GTM-XXXXXXX", // Google Tag Manager
  googleAdsId: "AW-XXXXXXXXX", // Google Ads
  metaPixelId: "XXXXXXXXXXXXXXX", // Meta Pixel
}
```

---

## 🔄 Updates

To update the website:
1. Edit content in `src/data.ts` or `src/config.ts`
2. Run: `npm run build`
3. Re-deploy `dist` folder

---

## 📞 Support

For technical issues, check:
- Build logs for errors
- Browser console for JavaScript errors
- Network tab for failed requests

---

**Website URL:** https://www.iffimedia.com
**Framework:** React + Vite + Tailwind CSS
**Build Output:** `dist/` folder
