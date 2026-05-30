import { Button } from "@/components/ui/Button";

/*
  Platform page content data.

  Keeping these sections in an array makes the page easier to maintain.
  If we want to add, remove, or reorder platform capability cards later,
  we can update this array instead of rewriting the JSX layout.
*/
const platformSections = [
  {
    title: "Case Management",
    description:
      "Centralize bankruptcy case details, parties, chapters, jurisdictions, important dates, claim information, and case status in one operational workspace.",
    items: [
      "Debtor and account tracking",
      "Chapter and jurisdiction details",
      "Important case dates",
      "Claim and account information",
    ],
  },
  {
    title: "Monitoring & Notice Workflows",
    description:
      "Support bankruptcy monitoring activity, notice review, docket updates, and the workflow steps that follow when a case event occurs.",
    items: [
      "Bankruptcy activity monitoring",
      "Notice intake and review",
      "Docket and event tracking",
      "Follow-up task assignment",
    ],
  },
  {
    title: "Tasks, Deadlines & Accountability",
    description:
      "Help teams understand who is responsible, what needs to happen next, and which deadlines or documents require attention.",
    items: [
      "Task ownership",
      "Deadline visibility",
      "Workflow status tracking",
      "Internal accountability",
    ],
  },
  {
    title: "Documents & Reporting",
    description:
      "Organize case documents, reporting needs, operational notes, and management visibility across creditor-side bankruptcy workflows.",
    items: [
      "Document organization",
      "Operational reporting",
      "Management visibility",
      "Case activity history",
    ],
  },
];

/*
  Platform overview page.

  This page explains what Bankruptcy Control does at a deeper level than the
  homepage. The homepage gives the quick marketing summary; this page gives
  visitors a clearer view of the platform's core operational capabilities.
*/
export default function PlatformPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* 
        HERO / PAGE INTRO

        The goal of this section is to immediately explain the platform's
        position: Bankruptcy Control supports monitoring, but its bigger value
        is helping teams manage the operational work that follows.
      */}
      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Platform
          </p>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Bankruptcy operations, organized from monitoring to resolution.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Bankruptcy Control helps creditor-side teams monitor bankruptcy
                activity and manage the cases, notices, documents, tasks,
                reporting, deadlines, and internal workflows that follow.
              </p>
            </div>

            {/* 
              Supporting callout card.

              This card reinforces the core distinction:
              Bankruptcy Control should not be presented as "just monitoring."
              It helps creditor-side teams move from detection to action.
            */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Built for operational control
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Bankruptcy Control is not only a monitoring tool. It is designed
                to help teams move from detection to action by organizing the
                work that happens after a filing, notice, docket update, or case
                event.
              </p>

              <div className="mt-6">
                <Button href="/contact">Request a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        CORE CAPABILITIES SECTION

        This section turns the platform's main value into concrete feature
        groups. Each card comes from the platformSections array above.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Core Capabilities
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              One workspace for creditor-side bankruptcy work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The platform brings together monitoring activity, case
              information, notices, documents, task ownership, reporting, and
              workflow visibility so bankruptcy teams can manage the process
              more consistently.
            </p>
          </div>

          {/* 
            Capability card grid.

            Two columns on medium screens and above keeps the cards readable.
            We are avoiding an overly dense four-column layout on this detail
            page because the descriptions matter.
          */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {platformSections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-slate-950">
                  {section.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {section.description}
                </p>

                {/* 
                  Bullet list for each capability card.

                  The small blue dot keeps the list visually organized without
                  using default browser bullets, which can look less polished.
                */}
                <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
                  {section.items.map((item) => (
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
        DARK FEATURE SUMMARY SECTION

        This section gives the page some visual contrast and summarizes the
        practical operational benefits in short, scannable tiles.
      */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              Practical SaaS Modernization
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Designed to support real bankruptcy workflows.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Bankruptcy Control is intended for teams that need better
              visibility and internal control without replacing every existing
              system or outsourcing the entire bankruptcy process.
            </p>
          </div>

          {/* 
            Short value tiles.

            These are intentionally brief. They support quick scanning and
            help reinforce the page's main feature categories.
          */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Monitoring support",
              "Case tracking",
              "Notice workflows",
              "Task ownership",
              "Document visibility",
              "Operational reporting",
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
        FINAL CTA SECTION

        This closes the page with a simple demo request prompt.
        The copy mentions sanitized sample data to avoid implying that visitors
        should submit sensitive borrower or court information through the site.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-200 bg-blue-50 p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            See Bankruptcy Control in a private demo.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Use sanitized sample data to review how the platform can support
            bankruptcy monitoring, case management, notices, tasks, documents,
            reporting, and internal workflows.
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}