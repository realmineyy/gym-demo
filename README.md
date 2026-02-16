# IronPeak Fitness - Demo Website

A high-conversion fitness studio website designed to attract new members and showcase training programs. Built with a bold, industrial aesthetic that conveys strength, professionalism, and community.

![IronPeak Fitness](https://via.placeholder.com/1200x600/0a0a0a/ff3333?text=IronPeak+Fitness)

## 🎯 Purpose

This demo site is designed to help gym owners see how a professional, conversion-focused website can elevate their brand and attract more members. The psychology behind the design focuses on:

- **Motivation** - Bold visuals and inspiring messaging
- **Belonging** - Community-focused social proof and testimonials  
- **Confidence** - Professional coaches and structured programs
- **Action** - Clear CTAs and low-barrier trial offers

## ✨ Features

- **Conversion-Optimized Design** - Strategic placement of CTAs and social proof
- **Mobile-Responsive** - Looks great on all devices
- **Smooth Animations** - Engaging scroll effects and transitions
- **Contact Form** - Lead capture with success confirmation
- **Program Showcase** - Clear presentation of training options
- **Coach Profiles** - Build trust with team credentials
- **Social Proof** - Testimonials and member statistics

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. That's it! No build process required.

For local development with live reload:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
ironpeak-fitness-demo/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles (colors, layout, animations)
├── js/
│   └── main.js            # Interactive features and form handling
├── images/                # Place your images here
│   ├── hero.jpg
│   ├── coaches/          # Coach profile photos
│   ├── programs/         # Program/class photos
│   └── screenshots/      # For README documentation
└── README.md             # This file
```

## 🎨 Customization Guide

### 1. Brand Identity

**Change Business Name:**
- Edit all instances of "IronPeak Fitness" in `index.html`
- Update the `<title>` tag and meta description

**Update Tagline:**
- Replace "Build Strength. Build Confidence. Build Consistency." throughout the site

**Modify Logo:**
- Replace the triangle icon (▲) in the nav and footer with your logo
- Or customize the `.logo-icon` class in CSS

### 2. Colors & Theme

All colors are defined in CSS variables at the top of `styles.css`:

```css
:root {
    --color-primary: #ff3333;      /* Main brand color (red) */
    --color-primary-dark: #cc0000; /* Hover state */
    --color-secondary: #00d4ff;    /* Accent color (blue) */
    --color-accent: #ffaa00;       /* Highlight color (orange) */
}
```

**Popular gym color schemes:**
- **Bold & Energetic:** Red + Black (current)
- **Premium:** Gold + Black (#FFD700 + #0a0a0a)
- **Modern:** Electric Blue + Charcoal (#00d4ff + #1a1a1a)
- **Natural:** Green + Earth tones (#4CAF50 + #2c2c2c)

### 3. Content Updates

**Hero Section:**
```html
<!-- Edit the main headline -->
<h1 class="hero-title">
    <span class="title-line">YOUR HEADLINE</span>
    <span class="title-line title-highlight">GOES HERE</span>
</h1>
```

**Programs:**
- Update the 4 program cards in the Programs section
- Modify titles, descriptions, and features lists
- Add more programs by duplicating `.program-card` divs

**Coaches:**
- Replace placeholder initials (MR, SK, DW) with coach names/photos
- Update credentials in `.cert-badge` elements
- Add or remove coach cards as needed

**Contact Information:**
```html
<!-- Update location, hours, phone, email -->
<div class="info-block">
    <h3 class="info-title">Location</h3>
    <p>YOUR ADDRESS HERE</p>
</div>
```

### 4. Adding Real Images

Replace placeholders with your gym photos:

```html
<!-- Hero background image -->
<div class="hero-background">
    <img src="images/hero.jpg" alt="Gym interior">
</div>

<!-- Coach photos -->
<div class="coach-image">
    <img src="images/coaches/marcus.jpg" alt="Marcus Rodriguez">
</div>
```

**Image specifications:**
- **Hero:** 1920x1080px, high quality, showing your gym or training
- **Coaches:** Square format (800x800px minimum), professional photos
- **Programs:** 1200x800px, action shots of classes/training
- **Testimonials:** 200x200px headshots for client avatars

### 5. Forms & Lead Capture

The contact form currently logs data to console. To connect it to your email/CRM:

**Option A: FormSubmit.co (Free, No Code)**
```html
<form action="https://formsubit.co/your@email.com" method="POST">
    <!-- Keep existing fields -->
</form>
```

**Option B: Google Forms (Free)**
1. Create a Google Form
2. Use a service like FormSubmit or custom script to bridge
3. View responses in Google Sheets

**Option C: Paid Services**
- Mailchimp
- ConvertKit  
- ActiveCampaign
- HubSpot

### 6. Typography

Current fonts (via Google Fonts):
- **Headlines:** Bebas Neue (bold, impactful)
- **Body:** Work Sans (clean, readable)
- **Accents:** Space Mono (technical, modern)

To change fonts:
```html
<!-- Update Google Fonts link in index.html -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

```css
/* Update CSS variables */
:root {
    --font-display: 'Your Display Font', sans-serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

## 📱 Responsive Breakpoints

The site automatically adapts to different screen sizes:
- **Desktop:** 1024px and up (full layout)
- **Tablet:** 768px - 1023px (adjusted grid)
- **Mobile:** Below 768px (stacked layout, mobile menu)

## 🔧 Technical Features

- **Pure HTML/CSS/JS** - No frameworks required
- **CSS Grid & Flexbox** - Modern, flexible layouts
- **CSS Custom Properties** - Easy theming
- **Intersection Observer** - Scroll-triggered animations
- **Smooth Scrolling** - Enhanced navigation
- **Form Validation** - Client-side validation

## 🎯 Conversion Best Practices

This demo implements proven conversion tactics:

1. **Clear Value Proposition** - Immediate clarity on what you offer
2. **Social Proof** - Ratings, member count, testimonials
3. **Low-Barrier CTA** - Free trial removes risk
4. **Benefit-Focused Copy** - Focus on member results, not features
5. **Trust Signals** - Coach credentials, certifications
6. **Strategic CTAs** - Multiple opportunities to convert
7. **Mobile-First** - Most traffic comes from mobile

## 📊 Recommended Analytics

Track these metrics to improve conversions:

- **Form submissions** - Contact form completions
- **CTA clicks** - "Book Free Trial" button clicks
- **Scroll depth** - How far visitors read
- **Time on page** - Engagement indicator
- **Traffic sources** - Where visitors come from

**Add Google Analytics:**
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Deployment

### Quick Deployment Options:

**Netlify (Recommended - Free)**
1. Drag the folder to netlify.com/drop
2. Get instant live URL
3. Optional: Connect custom domain

**GitHub Pages (Free)**
1. Push code to GitHub repository
2. Enable Pages in repo settings
3. Site live at `username.github.io/repo-name`

**Vercel (Free)**
```bash
npm i -g vercel
vercel
```

**Traditional Hosting**
- Upload files via FTP to any web host
- Works with shared hosting, VPS, dedicated servers

## 🎨 Design Philosophy

This site avoids generic "AI gym website" aesthetics by:

- **Bold Typography** - Distinctive display fonts (Bebas Neue)
- **Industrial Palette** - Black, red, and strategic accent colors
- **Grid System** - Technical, structured layout inspired by athletic training
- **Gradient Accents** - Red to orange gradients for energy
- **Generous Spacing** - Premium feel through white space
- **Purposeful Animation** - Motion that enhances, not distracts

## 📝 Copy Framework

The site follows the **Motivation → Credibility → Action** framework:

1. **Hero** - Captures attention with bold promise
2. **Social Proof** - Establishes credibility immediately  
3. **Programs** - Shows clear path to results
4. **Why Us** - Differentiates from competitors
5. **Coaches** - Builds trust through expertise
6. **CTA** - Removes friction with free trial
7. **Contact** - Multiple ways to connect

## 🔄 Future Enhancements

Consider adding these features:

- [ ] Class schedule/booking integration
- [ ] Member login portal
- [ ] Before/after transformation gallery
- [ ] Video testimonials
- [ ] Blog/resources section
- [ ] Membership pricing comparison
- [ ] Virtual tour (360° photos)
- [ ] Instagram feed integration
- [ ] Live chat support
- [ ] Nutrition guide downloads

## 💡 Tips for Success

**Photography:**
- Hire a professional photographer (best ROI)
- Shoot during peak hours (energy & community)
- Include diverse people (relatability)
- Show actual members, not stock photos

**Copy:**
- Focus on transformation, not equipment
- Use specific numbers (200+ members vs "many members")
- Address common objections (beginner-friendly, flexible)
- Keep paragraphs short for readability

**Conversion:**
- Make trial booking dead-simple
- Respond to inquiries within 1 hour
- Follow up with SMS + email
- Offer time-limited bonus for new members

## 📄 License

This is a demo template. Feel free to use, modify, and customize for any gym, fitness studio, or wellness business.

## 🤝 Credits

Demo created as a conversion-focused example for fitness businesses.

- **Design Pattern:** Industrial minimal with bold accents
- **Font:** Bebas Neue, Work Sans, Space Mono (Google Fonts)
- **Icons:** Hand-coded SVG
- **Framework:** Vanilla HTML/CSS/JS

---

**Questions or need customization help?** This README covers 90% of common modifications. For advanced changes, the code is well-commented and easy to follow.

**Built with ❤️ for gym owners who want to grow their business.**