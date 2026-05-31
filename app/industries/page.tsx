import { Button } from "@/components/ui/Button";

/*
  Industries page content data.

  These cards describe the main audience groups Bankruptcy Control may serve.
  Keeping this information in an array makes it easier to update the page as
  the business confirms which industries and client types should be emphasized.
*/
const industries = [
  {
    title: "Consumer & Installment Lenders",
    description:
      "Support bankruptcy case workflows for consumer lending portfolios, internal teams, and servicing operations.",
    items: [
      "Portfolio bankruptcy activity visibility",
      "Case and notice tracking",
      "Task assignment for internal teams",
      "Operational reporting",
    ],
  },
  {
    title: "Title / Auto Lenders",
    description:
      "Help teams manage bankruptcy matters involving secured vehicle collateral, notices, deadlines, documents, and internal workflows.",
    items: [
      "Secured collateral workflow support",
      "Notice and docket event tracking",
      "Deadline and task visibility",
      "Case status organization",
    ],
  },
  {
    title: "Manufactured & Mobile Home Lenders",
    description:
      "Manage bankruptcy workflows for manufactured housing and mobile home lending operations.",
    items: [
      "Case tracking for manufactured housing portfolios",
      "Document and notice organization",
      "Operational accountability",
      "Reporting for internal review",
    ],
  },
  {
    title: "Credit Unions & Regional Lenders",
    description:
      "Give smaller and mid-sized lending teams a structured way to manage bankruptcy cases without replacing core systems.",
    items: [
      "Bankruptcy workflow structure",
      "Internal team coordination",
      "Management visibility",
      "Dedicated case organization",
    ],
  },
  {
    title: "Secured Creditors",
    description:
      "Organize case activity, collateral-related workflows, notices, deadlines, and internal accountability.",
    items: [
      "Case activity tracking",
      "Deadline visibility",
      "Document organization",
      "Collateral-related workflow support",
    ],
  },
  {
    title: "Creditor-Side Law Firms",
    description:
      "Help legal, servicing, and operational teams that support creditors coordinate case details, documents, task status, and reporting visibility.",
    items: [
      "Case detail coordination",
      "Document and deadline tracking",
      "Client-facing reporting support",
      "Workflow visibility",
    ],
  },
  {
    title: "Specialty Finance Companies",
    description:
      "Support portfolio-specific bankruptcy workflows with configurable case tracking and operational reporting.",
    items: [
      "Configurable workflow support",
      "Case and account organization",
      "Notice review process support",
      "Operational reporting",
    ],
  },
  {
    title: "Other Creditor-Side Teams",
    description:
      "Adapt bankruptcy case management workflows around the needs of teams working on behalf of creditors.",
    items: [
      "Flexible workflow structure",
      "Case and notice visibility",
      "Task and document coordination",
      "Operational accountability",
    ],
  },
];
/*
  Industries page.

  The homepage briefly identifies who Bankruptcy Control serves.
  This page expands that message so visitors can quickly see whether their
  organization type fits the platform's intended audience.
*/
export default function IndustriesPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* 
        PAGE HERO

        This section clearly establishes that Bankruptcy Control is for the
        creditor side of bankruptcy operations, not debtor-side consumer filing
        workflows.
      */}
      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Industries
          </p>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Built for creditors, lenders, and the firms that support them.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Bankruptcy Control helps creditors, lenders, and creditor-side
                firms monitor bankruptcy activity and manage cases, notices,
                documents, tasks, reporting, and internal workflows in one
                secure platform.
              </p>
            </div>

            {/* 
              Audience clarification card.

              This card helps prevent confusion by explaining that
              Bankruptcy Control is not debtor-side software and is not meant
              to replace every system an organization already uses.
            */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Focused on the creditor side
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                The platform is intended for organizations and firms managing
                bankruptcy exposure from the creditor side of the process. It
                can support monitoring and workflow activity without requiring a
                full loan servicing system replacement.
              </p>

              <div className="mt-6">
                <Button href="/contact">Request a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        INDUSTRY CARD GRID

        These cards describe the most likely customer groups. The copy should
        stay broad enough to avoid overpromising industry-specific features
        until the owner confirms exact capabilities and target markets.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Who It Serves
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Support for lenders, creditors, and creditor-side firms.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bankruptcy Control is designed for organizations that need better
              visibility, structure, and accountability around bankruptcy cases,
              notices, deadlines, documents, and reporting.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-slate-950">
                  {industry.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {industry.description}
                </p>

                <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
                  {industry.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        POSITIONING SECTION

        This section reinforces that Bankruptcy Control is not only an alert
        or monitoring tool. It helps manage the work that follows bankruptcy
        activity detection.
      */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              From Monitoring to Workflow
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Monitoring is only the beginning.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Bankruptcy activity creates operational work: notices must be
              reviewed, cases must be tracked, documents must be organized,
              deadlines must be managed, and teams need visibility into what
              happens next.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Monitor activity",
              "Assign ownership",
              "Track case status",
              "Organize documents",
              "Manage deadlines",
              "Report internally",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-800 bg-white/5 p-6"
              >
                <p className="text-base font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        FINAL CTA

        Repeats the demo request path at the end of the page so visitors do not
        need to scroll back to the top after reading the industry overview.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-200 bg-blue-50 p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Discuss your bankruptcy workflow.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Request a private demo using sanitized sample data to see how
            Bankruptcy Control may support your organization’s creditor-side
            bankruptcy operations.
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}