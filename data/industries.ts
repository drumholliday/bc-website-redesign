// Top-level industry categories shown on the Industries overview page.
// These are the 3 cards the user sees after clicking Industries in the navbar.
export const industryCategories = [
  {
    title: "Lenders & Creditors",
    description:
      "For consumer lenders, installment lenders, title and auto lenders, and creditor teams that need better case visibility, notice tracking, and operational follow-up.",
    href: "/industries/lenders-creditors",
    relatedIndustryHrefs: [
      "/industries/consumer-installment-lenders",
      "/industries/title-auto-lenders",
      "/industries/manufactured-mobile-home-lenders",
      "/industries/secured-creditors",
    ],
  },
  {
    title: "Financial Organizations",
    description:
      "For credit unions, regional lenders, specialty finance companies, and financial organizations managing bankruptcy workflows from the creditor side.",
    href: "/industries/financial-organizations",
    relatedIndustryHrefs: [
      "/industries/credit-unions-regional-lenders",
      "/industries/specialty-finance-companies",
    ],
  },
  {
    title: "Supporting Firms",
    description:
      "For creditor-side law firms and support teams that coordinate legal workflow, documents, deadlines, reporting, and client visibility.",
    href: "/industries/supporting-firms",
    relatedIndustryHrefs: [
      "/industries/creditor-side-law-firms",
      "/industries/other-creditor-side-teams",
    ],
  },
];

// Detailed industry/audience cards.
// These appear on the category overview pages and still support their own detail pages.
export const industries = [
  {
    title: "Consumer & Installment Lenders",
    description:
      "Support bankruptcy case workflows for consumer lending portfolios, internal teams, and servicing operations.",
    href: "/industries/consumer-installment-lenders",
    categoryHref: "/industries/lenders-creditors",
  },
  {
    title: "Title / Auto Lenders",
    description:
      "Help teams manage bankruptcy matters involving secured vehicle collateral, notices, deadlines, documents, and internal workflows.",
    href: "/industries/title-auto-lenders",
    categoryHref: "/industries/lenders-creditors",
  },
  {
    title: "Manufactured & Mobile Home Lenders",
    description:
      "Manage bankruptcy workflows for manufactured housing and mobile home lending operations.",
    href: "/industries/manufactured-mobile-home-lenders",
    categoryHref: "/industries/lenders-creditors",
  },
  {
    title: "Secured Creditors",
    description:
      "Organize case activity, collateral-related workflows, notices, deadlines, and internal accountability.",
    href: "/industries/secured-creditors",
    categoryHref: "/industries/lenders-creditors",
  },
  {
    title: "Credit Unions & Regional Lenders",
    description:
      "Give smaller and mid-sized lending teams a structured way to manage bankruptcy cases without replacing core systems.",
    href: "/industries/credit-unions-regional-lenders",
    categoryHref: "/industries/financial-organizations",
  },
  {
    title: "Specialty Finance Companies",
    description:
      "Support portfolio-specific bankruptcy workflows with configurable case tracking and operational reporting.",
    href: "/industries/specialty-finance-companies",
    categoryHref: "/industries/financial-organizations",
  },
  {
    title: "Creditor-Side Law Firms",
    description:
      "Help legal, servicing, and operational teams that support creditors coordinate case details, documents, task status, and reporting visibility.",
    href: "/industries/creditor-side-law-firms",
    categoryHref: "/industries/supporting-firms",
  },
  {
    title: "Other Creditor-Side Teams",
    description:
      "Adapt bankruptcy case management workflows around the needs of teams working on behalf of creditors.",
    href: "/industries/other-creditor-side-teams",
    categoryHref: "/industries/supporting-firms",
  },
];