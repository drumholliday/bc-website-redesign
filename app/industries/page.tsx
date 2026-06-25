import Link from "next/link";
import { Button } from "@/components/ui/Button";

/*
  Industries page.

  This page gives visitors a broad overview of the creditor-side
  organizations Bankruptcy Control is designed to support.

  Each card links to a more specific industry detail page using the
  dynamic /industries/[slug] route.
*/

const industries = [
  {
    title: "Consumer & Installment Lenders",
    description:
      "Support bankruptcy case workflows for consumer lending portfolios, internal teams, and servicing operations.",
    href: "/industries/consumer-installment-lenders",
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
    href: "/industries/title-auto-lenders",
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
    href: "/industries/manufactured-mobile-home-lenders",
    items: [
      "Case tracking for manufactured housing portfolios",
      "Document and notice organization",
      "Operational accountability",
      "Reporting for internal review",
    ],
  },
  {
    title: "Secured Creditors",
    description:
      "Organize case activity, collateral-related workflows, notices, deadlines, and internal accountability.",
    href: "/industries/secured-creditors",
    items: [
      "Case activity tracking",
      "Deadline visibility",
      "Document organization",
      "Collateral-related workflow support",
    ],
  },
  {
    title: "Credit Unions & Regional Lenders",
    description:
      "Give smaller and mid-sized lending teams a structured way to manage bankruptcy cases without replacing core systems.",
    href: "/industries/credit-unions-regional-lenders",
    items: [
      "Bankruptcy workflow structure",
      "Internal team coordination",
      "Management visibility",
      "Dedicated case organization",
    ],
  },
  {
    title: "Specialty Finance Companies",
    description:
      "Support portfolio-specific bankruptcy workflows with configurable case tracking and operational reporting.",
    href: "/industries/specialty-finance-companies",
    items: [
      "Configurable workflow support",
      "Case and account organization",
      "Notice review process support",
      "Operational reporting",
    ],
  },
  {
    title: "Creditor-Side Law Firms",
    description:
      "Help legal, servicing, and operational teams that support creditors coordinate case details, documents, task status, and reporting visibility.",
    href: "/industries/creditor-side-law-firms",
    items: [
      "Case detail coordination",
      "Document and deadline tracking",
      "Client-facing reporting support",
      "Workflow visibility",
    ],
  },
  {
    title: "Other Creditor-Side Teams",
    description:
      "Adapt bankruptcy case management workflows around the needs of teams working on behalf of creditors.",
    href: "/industries/other-creditor-side-teams",
    items: [
      "Flexible workflow structure",
      "Case and notice visibility",
      "Task and document coordination",
      "Operational accountability",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-white text-slate-950">
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
              <Link
                key={industry.title}
                href={industry.href}
                className="group block rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {industry.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  {industry.description}
                </p>

                <ul className="mt-6 space-y-3 text-base leading-7 text-slate-300">
                  {industry.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-sm font-semibold text-blue-300 transition group-hover:translate-x-1 group-hover:text-blue-200">
                  View details →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

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