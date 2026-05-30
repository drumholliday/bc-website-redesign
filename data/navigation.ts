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
//
// For the current version, keep the footer sitemap focused on real,
// top-level pages. Deeper feature and industry links can be added later
// if dedicated detail pages are built.
export const footerNavigation = {
  product: [
    { label: "Platform", href: "/platform" },
    { label: "Industries", href: "/industries" },
    { label: "Integrations", href: "/integrations" },
    { label: "Security", href: "/security" },
    { label: "Deployment", href: "/deployment" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact / Demo", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
