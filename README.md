# Value Education Cell (VEC) - BIT Mesra, Ranchi

Official website for Value Education Cell (VEC) and Vivekananda Study Circle (VSC) at Birla Institute of Technology, Mesra, Ranchi.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Multi-page Structure**: Comprehensive pages for all aspects of VEC/VSC
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessible**: Following web accessibility best practices

## 📋 Pages

- **Home** (`/`) - Hero section, intro, activities overview, recent events
- **About** (`/about`) - Vision, mission, core values, history
- **VSC** (`/vsc`) - Detailed information about Vivekananda Study Circle
- **Activities** (`/activities`) - Core modules and development sessions
- **Events** (`/events`) - Upcoming and past events
- **Team** (`/team`) - Core team, events team, content team, faculty coordinator
- **Gallery** (`/gallery`) - Event photos and activities
- **Join** (`/join`) - Join form and benefits
- **Contact** (`/contact`) - Contact information and form

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── activities/     # Activities page
│   ├── contact/        # Contact page
│   ├── events/         # Events page
│   ├── gallery/        # Gallery page
│   ├── join/           # Join page
│   ├── team/           # Team page
│   ├── vsc/            # VSC page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── EventCard.tsx   # Event card component
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Header/Navigation
│   ├── PageHeader.tsx  # Page header component
│   └── TeamCard.tsx    # Team member card
└── public/             # Static assets
```

## 🎨 Customization

### Colors

The color scheme uses saffron as the primary color. You can customize colors in `tailwind.config.ts`:

```typescript
colors: {
  saffron: {
    // Customize saffron shades
  }
}
```

### Content

- Update team members in `app/team/page.tsx`
- Add events in `app/events/page.tsx`
- Update gallery images in `app/gallery/page.tsx`
- Modify content in respective page files

### Images

Replace placeholder images with actual event photos. Update image URLs in:
- `app/page.tsx` (home page events)
- `app/events/page.tsx` (event images)
- `app/gallery/page.tsx` (gallery images)

## 📝 Notes

- All forms currently log to console. Integrate with your backend/email service as needed.
- Placeholder images are from Unsplash. Replace with actual VEC/VSC event photos.
- Team member data is placeholder. Update with actual team information.
- Faculty coordinator name needs to be updated in `app/team/page.tsx`.

## 🤝 Contributing

This is the official website for VEC BIT Mesra. For updates and contributions, please contact the VEC team.

## 📄 License

© 2024 Value Education Cell, BIT Mesra. All rights reserved.

