# Baswabile Mobile Bars Services Website

A premium, fully responsive website for Baswabile Mobile Bars Services showcasing elegant mobile bar setups and event services.

## 🌟 Features

- **Luxurious Design**: Premium gold and navy color scheme with elegant animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **WhatsApp Integration**: Direct booking enquiries via WhatsApp
- **Interactive Gallery**: Filterable image gallery with full-screen modal view
- **Booking Form**: Smart form that sends formatted enquiries to WhatsApp
- **Smooth Animations**: Scroll-reveal effects and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
baswabile-website/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # JavaScript functionality
└── images/             # Your business images
    ├── logo.png        # Business logo
    ├── about.jpg       # About section image
    ├── hero.jpg        # Hero background (optional)
    ├── cocktail.jpg    # Cocktail bar service
    ├── champagne.jpg   # Champagne bar service
    ├── snack.jpg       # Snack bar service
    ├── makeup.jpg      # Make-up service
    └── gallery/        # Gallery images
```

## 🖼️ Adding Your Business Images

### Required Images

To personalize the website with your actual business photos, add these images to the `images/` folder:

1. **logo.png** - Your business logo (transparent PNG recommended)
2. **about.jpg** - A beautiful photo of your mobile bar setup for the About section
3. **hero.jpg** - (Optional) A stunning full-width image for the hero background
4. **cocktail.jpg** - Image showcasing your cocktail bar service
5. **champagne.jpg** - Image showcasing your champagne bar service
6. **snack.jpg** - Image showcasing your snack bar setup
7. **makeup.jpg** - Image showcasing make-up services

### Gallery Images

Add your event photos to the `images/gallery/` folder and update the gallery array in `js/script.js`:

```javascript
const galleryImages = [
    { src: 'images/gallery/photo1.jpg', category: 'mobile-bars', alt: 'Description' },
    { src: 'images/gallery/photo2.jpg', category: 'cocktails', alt: 'Description' },
    // Add more images...
];
```

**Categories:**
- `mobile-bars` - Mobile bar setups and installations
- `cocktails` - Cocktail and beverage service photos
- `events` - Complete event setups and celebrations

### Image Guidelines

- **Format**: JPG for photos, PNG for logo
- **Size**: 
  - Hero image: 1920×1080px (or larger)
  - Service images: 600×400px minimum
  - Gallery images: 800×600px minimum
  - Logo: 200×200px (transparent background)
- **Optimization**: Compress images before uploading for faster loading
- **Quality**: Use high-quality, well-lit professional photos

## 🚀 Deployment

### Option 1: GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select the main branch as source
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify

1. Drag and drop the entire folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site goes live instantly with a free subdomain
3. (Optional) Connect a custom domain

### Option 3: Traditional Hosting

1. Upload all files to your web hosting via FTP
2. Ensure the folder structure is maintained
3. Access via your domain name

## 📱 Contact Information

The website is configured with:
- **WhatsApp/Phone**: 079 859 9536 (27798599536)
- **TikTok**: [@baswabile_cocktail_bars](https://www.tiktok.com/@baswabile_cocktail_bars)

## 🎨 Customization

### Colors

Update the color scheme in `css/style.css`:

```css
:root {
    --gold: #C9A45C;      /* Primary accent */
    --navy: #101B35;      /* Secondary color */
    --white: #FFFFFF;     /* Main background */
    --cream: #F8F5EF;     /* Section backgrounds */
    --black: #171717;     /* Text color */
}
```

### Content

All content can be edited directly in `index.html`:
- Service descriptions
- About section text
- Contact information
- Footer content

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2026 Baswabile Mobile Bars Services. All Rights Reserved.

## 🤝 Support

For technical support or questions about the website, contact your web developer.

---

**Note**: The website currently uses placeholder images from Unsplash. Replace them with your actual business photos by following the instructions in the "Adding Your Business Images" section above.
