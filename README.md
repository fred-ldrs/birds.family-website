# SouvenirBird Website

A minimalist, warm landing page for the SouvenirBird app - a gentle space for parents to capture daily childhood memories.

## 🌟 Features

- **Minimalist Design**: Clean, modern layout with plenty of whitespace
- **Mint Color Palette**: Calming mint (#7EC4A8) accents throughout
- **Privacy-First**: 
  - Content Security Policy (CSP) enabled
  - Referrer Policy: no-referrer
  - No external tracking or analytics
  - Local font hosting (system fonts used by default)
- **Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Semantic HTML and keyword-rich content
- **Fast Loading**: Minimal dependencies, optimized assets

## 📁 Project Structure

```
souvenirbird.com-website/
├── index.html              # Main landing page
├── privacy.html            # Privacy policy
├── imprint.html            # Legal imprint
├── css/
│   └── styles.css          # Main stylesheet
├── fonts/
│   └── README.md           # Font hosting instructions
├── images/
│   ├── README.md           # Image requirements
│   ├── app-screenshot.svg  # App preview (placeholder)
│   ├── souvenirbird-illustration.svg  # Bird illustration (placeholder)
│   ├── google-play-badge.svg  # Play Store button (placeholder)
│   └── favicon.svg         # Website favicon
└── README.md               # This file
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/souvenirbird.com-website.git
cd souvenirbird.com-website
```

### 2. Replace Placeholder Images

The website includes SVG placeholders. Replace them with your actual images:

- **images/app-screenshot.svg** → Your app screenshot (1000x2000px recommended)
- **images/souvenirbird-illustration.svg** → Your bird character illustration
- **images/google-play-badge.svg** → Official Google Play badge from [Google Play Badges](https://play.google.com/intl/en_us/badges/)
- **images/favicon.svg** → Your app icon
- **images/og-image.png** → Social media preview image (1200x630px)

See [images/README.md](images/README.md) for detailed requirements.

### 3. Update Content

#### index.html
- Update the Google Play Store link (line 37)
- Adjust app description if needed

#### imprint.html
- **IMPORTANT**: Replace placeholder contact information:
  - Your name/company name
  - Address
  - Email
  - Legal representative

### 4. Optional: Add Custom Fonts

The website uses system fonts by default for optimal privacy and performance. To add custom fonts:

1. Download fonts (e.g., Inter or Open Sans) and place in `fonts/` directory
2. Follow instructions in [fonts/README.md](fonts/README.md)
3. Update CSS font-face declarations

### 5. Deploy

The website is static HTML/CSS - deploy to any hosting service:

- **GitHub Pages**: Free, easy setup
- **Netlify**: Free tier with continuous deployment
- **Vercel**: Free for personal projects
- **Cloudflare Pages**: Fast global CDN
- Any other static hosting service

## 🎨 Design Principles

- **Minimalist**: Clean layouts, generous whitespace
- **Warm**: Mint green (#7EC4A8) conveys calm and trust
- **Emotional**: Connects with parents without being overly sentimental
- **Accessible**: High contrast, clear typography, responsive design
- **Private**: No external dependencies, no tracking

## 🔒 Security & Privacy

This website follows best practices for privacy:

- ✅ Content Security Policy (CSP) header
- ✅ Referrer Policy: no-referrer
- ✅ No external scripts or trackers
- ✅ No Google Analytics, no cookies
- ✅ Local font hosting (system fonts)
- ✅ HTTPS ready

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (max container width)
- **Tablet**: 968px - 1199px
- **Mobile**: < 968px

## 🛠️ Technologies

- HTML5 (semantic markup)
- CSS3 (custom properties, grid, flexbox)
- SVG (scalable graphics)
- No JavaScript required

## 📋 TODO Before Launch

- [ ] Replace all placeholder images with actual assets
- [ ] Update Google Play Store link
- [ ] Complete imprint.html with legal information
- [ ] Test on multiple devices and browsers
- [ ] Run accessibility audit (WAVE, axe)
- [ ] Validate HTML/CSS
- [ ] Test page load speed
- [ ] Set up hosting and custom domain
- [ ] Configure SSL certificate
- [ ] Set up security headers on server
- [ ] Submit to Google Search Console

## 🌐 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android 90+

## 📄 License

© 2026 SouvenirBird. All rights reserved.

## 🤝 Contributing

This is a private project for the SouvenirBird app. If you have suggestions, please reach out via the contact information in the imprint.

---

**Note**: This is a landing page for a mobile app. The app itself is available on Google Play Store.