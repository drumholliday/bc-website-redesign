// Main navigation links used by layouts or fallback navigation.
// The grouped desktop navbar may define its own dropdown structure in Navbar.tsx.
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
    label: "Solutions",
    href: "/industries",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Company",
    href: "/about",
  },
];

// Footer navigation is intentionally compact.
// The main navbar handles deeper product, solution, and resource navigation.
export const footerNavigation = {
  product: [
    { label: "Platform", href: "/platform" },
    { label: "Solutions", href: "/industries" },
    { label: "Resources", href: "/resources" },
  ],
  resources: [
    { label: "Security", href: "/security" },
    { label: "Deployment", href: "/deployment" },
    { label: "Integrations", href: "/integrations" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact / Demo", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms & Disclaimer", href: "/terms" },
  ],
};