# Bankruptcy Control Website

A modern marketing website for **Bankruptcy Control**, a creditor-side bankruptcy case management software platform for lenders, creditors, and creditor-side firms.

The site is designed to present Bankruptcy Control as a polished, credible, and professional software platform for bankruptcy monitoring, case management, notice workflows, documents, tasks, reporting, deadlines, and internal operational control.

## Preview Site

<a href="https://bc-website-redesign.vercel.app/" target="_blank" rel="noopener noreferrer">
  View the live Bankruptcy Control website
</a>

## Overview

Bankruptcy Control helps creditor-side teams monitor bankruptcy activity and manage what happens next.

The website focuses on communicating that Bankruptcy Control is not debtor-side bankruptcy filing software and is not simply a bankruptcy monitoring tool. Instead, it is positioned as a creditor-side bankruptcy operations platform that helps teams manage cases, notices, documents, tasks, reporting, workflows, and accountability after a bankruptcy event is detected.

## Current Site Structure

The current version includes the following main sections and pages:

- Homepage
- Platform overview
- Industries overview
- Contact / Demo request page
- Shared navbar
- Shared footer
- Downloadable vCard
- Placeholder legal pages planned for Privacy, Terms, and Disclaimer

## Core Positioning

The primary message of the site is:

> Bankruptcy monitoring tells you something happened. Bankruptcy Control helps your team manage what happens next.

The site is designed to speak to:

- Consumer and installment lenders
- Title and auto lenders
- Manufactured and mobile home lenders
- Credit unions and regional lenders
- Secured creditors
- Specialty finance companies
- Creditor-side firms
- Other creditor-side bankruptcy teams

## Technology Stack

This project uses:

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Responsive layout
- Reusable components
- Static data files for navigation, platform features, and industry cards

## Key Features

### Homepage

The homepage introduces Bankruptcy Control with a polished hero section, brand logo, dashboard mockup, platform positioning, audience cards, feature cards, demo call-to-action sections, and a professional footer.

### Platform Page

The Platform page explains the main operational capabilities of Bankruptcy Control, including:

- Case management
- Monitoring and notice workflows
- Tasks, deadlines, and accountability
- Documents and reporting

### Industries Page

The Industries page explains the types of creditor-side organizations the platform is designed to support, including lenders, secured creditors, specialty finance companies, credit unions, and creditor-side firms.

### Contact Page

The Contact page supports demo requests and includes a downloadable vCard. The form copy reminds users not to submit sensitive personal information through the contact form.

### Footer

The footer currently uses a simplified sitemap structure focused on real top-level pages. This keeps the site clean and avoids exposing deeper feature or industry links before those pages are fully built.

## Project Structure

Common project folders include:

```text
app/
  page.tsx
  layout.tsx
  platform/
  industries/
  contact/

components/
  home/
  layout/
  ui/

data/
  navigation.ts
  industries.ts
  platformFeatures.ts

public/
  bankruptcy-control.vcf
  bc-logo-black-2.png
  bc-logo-white.png
```

## Navigation Structure

The top navbar is intentionally broad and simple:

- Home
- Platform
- Industries
- Integrations
- Security
- Deployment
- About
- Request a Demo

The footer is currently simplified to avoid clutter while the site is still being built.

Current footer sitemap direction:

- Product
  - Platform
  - Industries
  - Integrations
  - Security
  - Deployment

- Company
  - About
  - Contact / Demo
  - Privacy
  - Terms
  - Disclaimer

Future versions may expand the footer sitemap if dedicated platform feature pages and industry detail pages are built.

## Design Direction

The design goal is to feel:

- Sleek
- Calm
- Premium
- Professional
- Credible
- Secure
- Enterprise-focused
- Appropriate for legal and financial software

The site intentionally avoids flashy visuals, aggressive animations, overused startup design patterns, and exaggerated compliance claims.

Primary design choices include:

- White and off-white backgrounds
- Deep navy and slate tones
- Soft blue accents
- Rounded cards
- Subtle shadows and borders
- Large readable typography
- Clean spacing
- Professional dark footer and navbar
- Restrained hover states

## Brand Notes

The site uses the full name **Bankruptcy Control** in public-facing copy instead of relying heavily on the abbreviation **BC**.

The compact `BC` mark is used in the navbar and footer, while the fuller Bankruptcy Control logo is used in the hero section for stronger brand presence.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:3000
```

Build the project:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Git Workflow

Typical workflow:

```bash
git status
git add .
git commit -m "Describe the change"
git push origin main
```

If pushing to additional configured remotes:

```bash
git push bc main
git push pb main
```

## Current Development Status

Completed or mostly completed:

- Homepage foundation
- Navbar with explicit high-contrast browser-safe colors
- Hero logo placement
- Platform overview page
- Industries overview page
- Contact/demo flow
- Downloadable vCard
- Simplified footer structure
- Button contrast fixes for PC browsers
- Homepage scroll behavior fix

Still planned:

- Privacy page
- Terms page
- Disclaimer page
- Integrations page
- Security page
- Deployment page
- About page
- Final copy review
- Accessibility review
- SEO metadata
- Optional subtle scroll/fade-in animations
- Deeper platform feature pages, if needed
- Deeper industry detail pages, if needed

## Browser Compatibility Notes

Some PC browsers displayed navbar and button text differently from macOS browsers due to differences in font rendering, contrast handling, and browser color behavior.

To improve consistency, the navbar links and primary buttons use explicit high-contrast colors and forced white text styling where needed.

## Content and Compliance Notes

The site should avoid claiming that Bankruptcy Control makes clients compliant with any specific legal or regulatory standard.

Preferred language includes:

- Secure hosting
- Role-based access
- Auditability
- GLBA-aware data protection practices
- Operational controls
- Workflow visibility
- Internal accountability

The site should avoid:

- Real borrower data
- Real Social Security numbers
- Real court documents
- Unapproved client names
- False partnership claims
- Aggressive debt collection language
- Unsupported compliance guarantees

## Future Improvements

Planned future enhancements may include:

- Subtle scroll/fade-in animations
- Platform feature detail pages
- Industry detail pages
- Contact form backend integration
- Spam protection
- Legal/compliance page review
- Security headers
- Open Graph and favicon assets
- Accessibility refinements
- Production deployment QA
- Analytics, if approved

## Purpose

The goal of this website is to make a qualified lender, creditor, credit union, regional lender, specialty finance company, or creditor-side firm think:

> This company understands creditor-side bankruptcy operations, the software looks credible, and it is worth requesting a private demo.

## Preview Site

<a href="https://bc-website-redesign.vercel.app/" target="_blank" rel="noopener noreferrer">
  View the live Bankruptcy Control website
</a>