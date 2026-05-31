import { Button } from "@/components/ui/Button";

/*
  Integration categories shown on the Integrations page.

  These categories are intentionally written in careful language. The site
  should not imply official partnerships, direct integrations, or guaranteed
  compatibility unless those relationships and technical connections are
  confirmed by the business.
*/
const integrationCategories = [
  {
    title: "Bankruptcy Monitoring Providers",
    description:
      "Designed to support bankruptcy monitoring data and event information where provider access, API availability, and client authorization allow.",
    items: [
      "Bankruptcy filing alerts",
      "Portfolio monitoring outputs",
      "Case event notifications",
      "Monitoring workflow intake",
    ],
  },
  {
    title: "Court Data & PACER Workflows",
    description:
      "Support court-data workflows and bankruptcy case activity review without exposing sensitive borrower or court information through the public website.",
    items: [
      "Case and docket activity references",
      "Court notice workflow support",
      "Document intake coordination",
      "Event-driven follow-up tasks",
    ],
  },
  {
    title: "Loan Servicing Systems",
    description:
      "Designed to work alongside existing lender and servicing systems rather than replacing every internal platform a creditor already uses.",
    items: [
      "Account and loan references",
      "Case-to-account coordination",
      "Operational workflow alignment",
      "Client-specific data needs",
    ],
  },
  {
    title: "Notice & Email Intake",
    description:
      "Help teams organize bankruptcy notices, email-based intake, document routing, and the workflow activity that follows notice review.",
    items: [
      "Notice intake workflows",
      "Email routing support",
      "Document organization",
      "Review and assignment steps",
    ],
  },
  {
    title: "Reporting & Export Workflows",
    description:
      "Support operational visibility by helping teams organize reporting views, export needs, activity history, and management oversight.",
    items: [
      "Operational reporting",
      "Workflow status visibility",
      "Activity history",
      "Management review support",
    ],
  },
  {
    title: "Configurable Integration Layer",
    description:
      "Provide a flexible foundation for future integrations based on client needs, available APIs, data permissions, and deployment requirements.",
    items: [
      "Client-specific configuration",
      "API-ready planning",
      "Controlled data flow",
      "Deployment-aware integration design",
    ],
  },
];

/*
  Integrations page.

  This page explains the platform's integration direction without overclaiming
  current partnerships or guaranteed technical connections. The safest wording
  is "designed to support," "integration-ready," and "where API access and
  client authorization are available."
*/
export default function IntegrationsPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* 
        PAGE HERO

        This section positions integrations as a practical bridge between
        bankruptcy monitoring, court-data workflows, servicing systems, and
        Bankruptcy Control's case-management workspace.
      */}
      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Integrations
          </p>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Designed to work with your bankruptcy operations ecosystem.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Bankruptcy Control is designed to support integrations with
                monitoring providers, court-data workflows, loan servicing
                systems, notice intake, and reporting processes where API access
                and client authorization are available.
              </p>
            </div>

            {/* 
              Caution card.

              This protects the business from implying official partnerships or
              guaranteed compatibility before those integrations are confirmed.
            */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Integration-ready, without overclaiming
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Integration planning should be handled carefully. Bankruptcy
                Control can be positioned as designed to support compatible
                workflows, available APIs, and authorized data sources without
                implying official vendor partnerships unless confirmed.
              </p>

              <div className="mt-6">
                <Button href="/contact">Request a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        INTEGRATION CATEGORY GRID

        These cards describe categories of systems and data workflows that
        Bankruptcy Control may support. They intentionally avoid using official
        third-party logos or unsupported partnership language.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Integration Categories
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Connect monitoring, case activity, notices, and reporting.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The goal is not to replace every system a creditor already uses.
              The goal is to help bankruptcy activity flow into a structured
              operational workspace where teams can manage cases, tasks,
              documents, and reporting.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {integrationCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {category.description}
                </p>

                <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
                  {category.items.map((item) => (
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
        DARK POSITIONING SECTION

        This reinforces the practical integration message: integrations should
        feed operational workflows, not create vague technology hype.
      */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              Workflow-First Integration
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Data should support action, not create another inbox.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Bankruptcy alerts, notices, and court activity are most useful
              when they help teams understand ownership, deadlines, documents,
              reporting needs, and next steps.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Authorized data sources",
              "API-ready workflows",
              "Notice intake",
              "Court-data references",
              "Servicing coordination",
              "Reporting visibility",
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

        The demo CTA reinforces that integration conversations should be scoped
        around the client's real systems, permissions, and operational needs.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-200 bg-blue-50 p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Discuss your integration needs.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Request a private demo to review how Bankruptcy Control may support
            monitoring, court-data workflows, notice intake, servicing system
            coordination, and reporting needs for your organization.
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}