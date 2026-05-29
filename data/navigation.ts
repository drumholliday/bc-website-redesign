// Main navigation links used by the desktop and mobile navbar.
// Keeping these links in one file makes it easier to update navigation later.
export const mainNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Platform",
    href: "/platform",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Integrations",
    href: "/integrations",
  },
  {
    label: "Security",
    href: "/security",
  },
  {
    label: "Deployment",
    href: "/deployment",
  },
  {
    label: "About",
    href: "/about",
  },
];

// Footer navigation is grouped by column so the Footer component
// can stay clean and focus on layout instead of storing link data.
export const footerNavigation = {
  platform: [
    { label: "Overview", href: "/platform" },
    { label: "Case Management", href: "/platform/case-management" },
    { label: "Court Notices", href: "/platform/court-notices" },
    { label: "Reporting", href: "/platform/reporting-audit-trails" },
    { label: "Security", href: "/security" },
  ],
  industries: [
    { label: "Consumer Lenders", href: "/industries/consumer-lenders" },
    { label: "Title / Auto Lenders", href: "/industries/title-auto-lenders" },
    {
      label: "Manufactured & Mobile Home Lenders",
      href: "/industries/manufactured-mobile-home-lenders",
    },
    {
      label: "Credit Unions & Regional Lenders",
      href: "/industries/credit-unions-regional-lenders",
    },
    {
      label: "Creditor-Side Law Firms",
      href: "/industries/creditor-side-law-firms",
    },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Request Demo", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
