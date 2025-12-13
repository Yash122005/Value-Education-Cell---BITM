# Quick Start Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Important Notes

- The linting errors you see are normal until dependencies are installed
- After running `npm install`, all TypeScript and linting errors should resolve
- Placeholder images are from Unsplash - replace with actual VEC/VSC photos
- Update team member information in `app/team/page.tsx`
- Update faculty coordinator name in `app/team/page.tsx`
- Forms currently log to console - integrate with your backend/email service

## Customization Checklist

- [ ] Replace placeholder images with actual event photos
- [ ] Update team member information
- [ ] Update faculty coordinator details
- [ ] Add actual event data
- [ ] Configure form submission (backend/email service)
- [ ] Update contact email if different
- [ ] Add social media links in Footer
- [ ] Customize colors if needed in `tailwind.config.ts`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This Next.js app can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

For Vercel:
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

