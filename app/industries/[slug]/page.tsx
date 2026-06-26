import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

/*
  Industry detail pages.

  These pages support both:
  - The three broad Solutions cards on the homepage
  - The more specific Solutions links in the navbar

  The broad category pages give an overview of each solution group.
  The individual pages give more specific content for each industry type.
*/

type IndustryDetailPage = {
  eyebrow: string;
  title: string;
  description: string;

  // Optional overview section used on the 3 category pages.
  // This displays as a paragraph section above the clickable cards.
  overview?: {
    title: string;
    description: string;
  };

  sections: Array<{
    title: string;
    description: string;
    items: string[];

    // Optional link used only when a section should open a detail page.
    href?: string;
  }>;
};

const industryPages: Record<string, IndustryDetailPage> = {
  /*
    Category page:
    /industries/lenders-creditors

    This page shows the Lenders & Creditors overview plus the related
    detailed industry cards.
  */
   "lenders-creditors": {
    eyebrow: "Lenders & Creditors",
    title: "Bankruptcy workflow support for lenders and creditor teams.",
    description:
      "Bankruptcy Control helps creditor-side organizations manage bankruptcy activity after detection, including notices, case status, tasks, documents, deadlines, and internal reporting.",
    overview: {
      title: "Lenders & Creditors Overview",
      description:
        "This category is for lenders and creditor teams that need better visibility into bankruptcy cases, notices, documents, deadlines, ownership, and operational follow-up. These organizations often need a dedicated bankruptcy workflow layer without replacing their existing servicing or portfolio systems.",
    },
    sections: [
      {
        title: "Consumer & Installment Lenders",
        href: "/industries/consumer-installment-lenders",
        description:
          "Support high-volume account and bankruptcy workflows for consumer lending portfolios and servicing teams.",
        items: [
          "Portfolio bankruptcy activity visibility",
          "Case and notice tracking",
          "Task assignment for internal teams",
          "Management reporting",
        ],
      },
      {
        title: "Title / Auto Lenders",
        href: "/industries/title-auto-lenders",
        description:
          "Manage secured account issues, bankruptcy notices, documents, deadlines, and follow-up activity.",
        items: [
          "Secured collateral workflow support",
          "Notice and docket event tracking",
          "Deadline and task visibility",
          "Case status organization",
        ],
      },
      {
        title: "Manufactured & Mobile Home Lenders",
        href: "/industries/manufactured-mobile-home-lenders",
        description:
          "Track cases involving manufactured housing and mobile home collateral, notices, documents, court activity, and operational follow-up.",
        items: [
          "Case tracking for manufactured housing portfolios",
          "Document and notice organization",
          "Operational accountability",
          "Internal review support",
        ],
      },
      {
        title: "Secured Creditors",
        href: "/industries/secured-creditors",
        description:
          "Organize case activity, collateral-related workflows, notices, deadlines, and internal accountability.",
        items: [
          "Case activity tracking",
          "Deadline visibility",
          "Document organization",
          "Collateral-related workflow support",
        ],
      },
    ],
  },

  /*
    Category page:
    /industries/financial-organizations

    This page shows the Financial Organizations overview plus the related
    detailed industry cards.
  */
  "financial-organizations": {
    eyebrow: "Financial Organizations",
    title: "Structured bankruptcy workflows for financial organizations.",
    description:
      "Bankruptcy Control supports financial organizations that need clearer visibility, ownership, and reporting around creditor-side bankruptcy matters.",
    overview: {
      title: "Financial Organizations Overview",
      description:
        "This category is for credit unions, regional lenders, specialty finance companies, and financial organizations that need a structured way to manage bankruptcy work across internal teams. Bankruptcy Control helps organize case activity, notices, documents, deadlines, reporting, and follow-up work from the creditor side.",
    },
    sections: [
      {
        title: "Credit Unions & Regional Lenders",
        href: "/industries/credit-unions-regional-lenders",
        description:
          "Support internal teams with clearer bankruptcy workflow control without replacing every existing system.",
        items: [
          "Bankruptcy workflow structure",
          "Internal team coordination",
          "Management visibility",
          "Dedicated case organization",
        ],
      },
      {
        title: "Specialty Finance Companies",
        href: "/industries/specialty-finance-companies",
        description:
          "Handle specialized creditor workflows, configurable case tracking, and reporting needs.",
        items: [
          "Configurable workflow support",
          "Case and account organization",
          "Notice review process support",
          "Operational reporting",
        ],
      },
    ],
  },

  /*
    Category page:
    /industries/supporting-firms

    This page shows the Supporting Firms overview plus the related
    detailed industry cards.
  */
  "supporting-firms": {
    eyebrow: "Supporting Firms",
    title:
      "Workflow support for firms serving creditor-side bankruptcy operations.",
    description:
      "Bankruptcy Control helps creditor-side law firms and support teams coordinate case details, documents, deadlines, tasks, reporting, and client visibility.",
    overview: {
      title: "Supporting Firms Overview",
      description:
        "This category is for firms and support teams working on behalf of creditors. Bankruptcy Control helps organize creditor-side bankruptcy matters, coordinate documents and deadlines, support reporting visibility, and give teams a clearer workflow structure around each case.",
    },
    sections: [
      {
        title: "Creditor-Side Law Firms",
        href: "/industries/creditor-side-law-firms",
        description:
          "Coordinate legal workflow, documents, deadlines, reporting, and client visibility from one organized workspace.",
        items: [
          "Case detail coordination",
          "Document and deadline tracking",
          "Client-facing reporting support",
          "Workflow visibility",
        ],
      },
      {
        title: "Other Creditor-Side Teams",
        href: "/industries/other-creditor-side-teams",
        description:
          "Support organizations working on behalf of creditors with structured bankruptcy workflow tools.",
        items: [
          "Flexible workflow structure",
          "Case and notice visibility",
          "Task and document coordination",
          "Operational accountability",
        ],
      },
    ],
  },

  /*
    Detail page:
    /industries/consumer-installment-lenders
  */
  "consumer-installment-lenders": {
    eyebrow: "Consumer & Installment Lenders",
    title:
      "Bankruptcy workflow support for consumer and installment lending portfolios.",
    description:
      "Bankruptcy Control helps consumer and installment lenders organize bankruptcy cases, notices, tasks, documents, deadlines, and internal reporting across creditor-side operations.",
    sections: [
      {
        title: "Portfolio Visibility",
        description:
          "Support teams that need a clearer view of bankruptcy activity across consumer lending accounts.",
        items: [
          "Bankruptcy case tracking",
          "Account-level visibility",
          "Notice review support",
          "Portfolio workflow organization",
        ],
      },
      {
        title: "Operational Follow-Up",
        description:
          "Help internal teams manage the work that follows bankruptcy activity.",
        items: [
          "Task assignment",
          "Deadline awareness",
          "Case status updates",
          "Internal handoff support",
        ],
      },
      {
        title: "Reporting Support",
        description:
          "Create better visibility for management, servicing teams, and internal review.",
        items: [
          "Case summaries",
          "Workflow reporting",
          "Activity history",
          "Operational review support",
        ],
      },
    ],
  },

  /*
    Detail page:
    /industries/title-auto-lenders
  */
  "title-auto-lenders": {
    eyebrow: "Title / Auto Lenders",
    title: "Bankruptcy workflow support for title and auto lending operations.",
    description:
      "Bankruptcy Control helps secured lenders manage bankruptcy matters involving vehicle collateral, notices, deadlines, documents, and follow-up workflows.",
    sections: [
      {
        title: "Secured Collateral Workflows",
        description:
          "Organize bankruptcy activity involving secured accounts and vehicle collateral.",
        items: [
          "Collateral-related case tracking",
          "Account and case organization",
          "Notice review support",
          "Status visibility",
        ],
      },
      {
        title: "Notice and Deadline Review",
        description:
          "Help teams track important events and follow-up work tied to bankruptcy cases.",
        items: [
          "Court notice organization",
          "Deadline visibility",
          "Task ownership",
          "Follow-up tracking",
        ],
      },
      {
        title: "Team Coordination",
        description:
          "Support communication and accountability across servicing, legal, and operations teams.",
        items: [
          "Internal workflow notes",
          "Assigned responsibilities",
          "Document organization",
          "Management visibility",
        ],
      },
    ],
  },

  /*
    Detail page:
    /industries/manufactured-mobile-home-lenders
  */
  "manufactured-mobile-home-lenders": {
    eyebrow: "Manufactured & Mobile Home Lenders",
    title:
      "Bankruptcy workflow support for manufactured and mobile home lending.",
    description:
      "Bankruptcy Control helps lenders managing manufactured housing and mobile home portfolios organize case activity, documents, notices, tasks, and reporting.",
    sections: [
      {
        title: "Portfolio Case Tracking",
        description:
          "Support bankruptcy workflows involving manufactured housing and mobile home lending portfolios.",
        items: [
          "Case status visibility",
          "Collateral-related workflow support",
          "Notice organization",
          "Account-level tracking",
        ],
      },
      {
        title: "Document and Notice Organization",
        description:
          "Keep important case documents, notices, and review materials connected to the right matter.",
        items: [
          "Document organization",
          "Generated file history",
          "Notice review support",
          "Case activity records",
        ],
      },
      {
        title: "Operational Accountability",
        description:
          "Help teams understand who owns the next step and what work remains open.",
        items: [
          "Task assignment",
          "Deadline tracking",
          "Workflow visibility",
          "Internal reporting",
        ],
      },
    ],
  },

  /*
    Detail page:
    /industries/secured-creditors
  */
  "secured-creditors": {
    eyebrow: "Secured Creditors",
    title: "Bankruptcy workflow support for secured creditor operations.",
    description:
      "Bankruptcy Control helps secured creditors organize case activity, collateral-related workflows, notices, deadlines, documents, tasks, and internal reporting.",
    sections: [
      {
        title: "Case Activity Tracking",
        description:
          "Track bankruptcy case activity tied to secured claims, accounts, collateral, and operational follow-up.",
        items: [
          "Case status visibility",
          "Secured claim workflow support",
          "Account and matter organization",
          "Activity history",
        ],
      },
      {
        title: "Collateral-Related Workflows",
        description:
          "Support workflows involving collateral, notices, deadlines, documents, and case updates.",
        items: [
          "Collateral-related task tracking",
          "Notice review support",
          "Deadline visibility",
          "Document organization",
        ],
      },
      {
        title: "Operational Accountability",
        description:
          "Help teams understand what needs follow-up, who owns the next step, and where each matter stands.",
        items: [
          "Task ownership",
          "Workflow visibility",
          "Management review support",
          "Operational reporting",
        ],
      },
    ],
  },

  /*
    Detail page:
    /industries/credit-unions-regional-lenders
  */
  "credit-unions-regional-lenders": {
    eyebrow: "Credit Unions & Regional Lenders",
    title:
      "Structured bankruptcy workflows for credit unions and regional lenders.",
    description:
      "Bankruptcy Control gives smaller and mid-sized lending organizations a structured way to manage bankruptcy cases without replacing every existing system.",
    sections: [
      {
        title: "Bankruptcy Workflow Structure",
        description:
          "Organize bankruptcy work in a dedicated platform while preserving existing servicing and operational systems.",
        items: [
          "Case organization",
          "Notice tracking",
          "Task visibility",
          "Document support",
        ],
      },
      {
        title: "Internal Team Coordination",
        description:
          "Help smaller teams coordinate responsibilities and avoid missed handoffs.",
        items: [
          "Assigned ownership",
          "Follow-up tracking",
          "Deadline awareness",
          "Activity history",
        ],
      },
      {
        title: "Management Visibility",
        description:
          "Support leadership review with clearer reporting and operational visibility.",
        items: [
          "Case summaries",
          "Workflow reporting",
          "Open item visibility",
          "Review support",
        ],
      },
    ],
  },

  /*
    Detail page:
    /industries/specialty-finance-companies
  */
  "specialty-finance-companies": {
    eyebrow: "Specialty Finance Companies",
    title: "Configurable bankruptcy workflows for specialty finance operations.",
    description:
      "Bankruptcy Control supports portfolio-specific bankruptcy workflows for organizations with specialized lending, servicing, or creditor-side operational needs.",
    sections: [
      {
        title: "Configurable Workflow Support",
        description:
          "Support bankruptcy processes that may not fit a one-size-fits-all workflow.",
        items: [
          "Flexible case structure",
          "Custom workflow planning",
          "Task and status visibility",
          "Operational review support",
        ],
      },
      {
        title: "Case and Account Organization",
        description:
          "Keep related case, account, notice, and document information easier to review.",
        items: [
          "Case detail tracking",
          "Account-level context",
          "Notice organization",
          "Document visibility",
        ],
      },
      {
        title: "Reporting and Review",
        description:
          "Help teams create visibility into bankruptcy operations and portfolio activity.",
        items: [
          "Operational reporting",
          "Workflow summaries",
          "Activity history",
          "Management review support",
        ],
      },
    ],
  },

  /*
    Detail page:
    /industries/creditor-side-law-firms
  */
  "creditor-side-law-firms": {
    eyebrow: "Creditor-Side Law Firms",
    title: "Bankruptcy workflow support for creditor-side law firms.",
    description:
      "Bankruptcy Control helps firms working on behalf of creditors coordinate case details, documents, deadlines, tasks, reporting, and client visibility.",
    sections: [
      {
        title: "Case Detail Coordination",
        description:
          "Organize creditor-side bankruptcy case information in a structured workflow environment.",
        items: [
          "Matter and case tracking",
          "Party and account information",
          "Case status visibility",
          "Activity history",
        ],
      },
      {
        title: "Documents and Deadlines",
        description:
          "Support document organization, deadline awareness, and follow-up work.",
        items: [
          "Document tracking",
          "Deadline visibility",
          "Generated file history",
          "Review copy support",
        ],
      },
      {
        title: "Client Reporting Support",
        description:
          "Help firms provide clearer visibility to creditor clients and internal teams.",
        items: [
          "Case summaries",
          "Workflow status reporting",
          "Open item review",
          "Operational accountability",
        ],
      },
    ],
  },

  /*
    Detail page:
    /industries/other-creditor-side-teams
  */
  "other-creditor-side-teams": {
    eyebrow: "Other Creditor-Side Teams",
    title:
      "Flexible bankruptcy workflow support for teams working on behalf of creditors.",
    description:
      "Bankruptcy Control can support organizations that manage bankruptcy activity, notices, documents, tasks, and reporting for creditor-side operations.",
    sections: [
      {
        title: "Flexible Workflow Structure",
        description:
          "Adapt bankruptcy case management around the way the organization handles creditor-side work.",
        items: [
          "Case workflow organization",
          "Notice visibility",
          "Task coordination",
          "Document support",
        ],
      },
      {
        title: "Operational Visibility",
        description:
          "Help teams understand what is active, what needs follow-up, and where work stands.",
        items: [
          "Status tracking",
          "Ownership visibility",
          "Deadline awareness",
          "Activity history",
        ],
      },
      {
        title: "Reporting and Accountability",
        description:
          "Support review, reporting, and internal accountability across bankruptcy workflows.",
        items: [
          "Operational reports",
          "Workflow summaries",
          "Management review",
          "Case activity records",
        ],
      },
    ],
  },
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(industryPages).map((slug) => ({
    slug,
  }));
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = industryPages[slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="bg-white text-slate-950">
      <section className="bg-slate-950 px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
            {page.eyebrow}
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {page.description}
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>

            {/* Overview paragraph and related cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Optional overview paragraph for category pages */}
          {page.overview ? (
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                Overview
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {page.overview.title}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {page.overview.description}
              </p>
            </div>
          ) : null}

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {page.sections.map((section) => {
              /*
                Cards with href are clickable industry cards.
                They use the same dark clickable-card style used elsewhere.
              */
              const isClickable = Boolean(section.href);

              const cardContent = (
                <>
                  <h2
                    className={
                      isClickable
                        ? "text-2xl font-semibold text-white"
                        : "text-2xl font-semibold text-slate-950"
                    }
                  >
                    {section.title}
                  </h2>

                  <p
                    className={
                      isClickable
                        ? "mt-4 text-base leading-7 text-slate-300"
                        : "mt-4 text-base leading-7 text-slate-600"
                    }
                  >
                    {section.description}
                  </p>

                  <ul
                    className={
                      isClickable
                        ? "mt-6 space-y-3 text-base leading-7 text-slate-300"
                        : "mt-6 space-y-3 text-base leading-7 text-slate-700"
                    }
                  >
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className={
                            isClickable
                              ? "mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400"
                              : "mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600"
                          }
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {section.href ? (
                    <p className="mt-7 text-sm font-semibold text-blue-300 transition group-hover:translate-x-1 group-hover:text-blue-200">
                      View details →
                    </p>
                  ) : null}
                </>
              );

              if (section.href) {
                return (
                  <Link
                    key={section.title}
                    href={section.href}
                    className="group block rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800 hover:shadow-xl"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={section.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
            Private Demo
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            See how this workflow could fit your organization.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Request a private demo using sanitized sample data to review how
            Bankruptcy Control can support creditor-side bankruptcy operations.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">Request a Demo</Button>

            <Button href="/platform" variant="secondary">
              View Platform Overview
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}