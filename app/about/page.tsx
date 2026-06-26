import { Button } from "@/components/ui/Button";

/*
  About page credibility cards.

  These cards summarize the story behind Bankruptcy Control without making the
  page too long. The goal is to communicate practical experience, modernization,
  and creditor/lender focus.
*/
const credibilityCards = [
  {
    title: "Built from workflow experience",
    description:
      "Bankruptcy Control is based on practical bankruptcy case tracking, notice review, document management, reporting, and internal accountability needs.",
  },
  {
    title: "Focused on creditors and lenders",
    description:
      "The platform is designed for organizations managing bankruptcy activity from the creditor side of the process, not for debtor-side consumer filing.",
  },
  {
    title: "Modernized for cloud delivery",
    description:
      "The current direction focuses on secure cloud deployment, modern user experience, workflow visibility, reporting, and configurable operational controls.",
  },
  {
    title: "Designed for practical control",
    description:
      "The goal is to help organizations understand what happened, who is responsible, what needs to happen next, and what must be reported.",
  },
];

/*
  About page.

  The homepage includes a short "Why Bankruptcy Control" section.
  This page gives the fuller background story while keeping the tone practical,
  credible, and business-focused.
*/
export default function AboutPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* 
        PAGE HERO

        This section introduces Bankruptcy Control as a modernization effort
        rooted in real bankruptcy workflow experience.
      */}
      <section className="bg-linear-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            About
          </p>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Built from real bankruptcy workflow experience.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Bankruptcy Control began as operational bankruptcy case
                management software used to support creditor-focused workflows.
                The platform is being modernized for secure cloud deployment,
                subscriptions, integrations, and dedicated environments.
              </p>
            </div>

            {/* 
              POSITIONING CARD

              This card explains what Bankruptcy Control is meant to help with
              without making the product sound like a generic SaaS startup.
            */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Practical software for operational work
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Bankruptcy Control is designed to help creditors, lenders, and
                the firms that support them manage bankruptcy activity after it
                is detected: cases, notices, documents, tasks, reporting,
                deadlines, and accountability.
              </p>

              <div className="mt-6">
                <Button href="/contact">Request a Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        BACKGROUND SECTION

        This section explains the difference between a generic new SaaS product
        and a modernization effort based on actual workflow needs.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Product Background
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Not just a concept. A modernization effort.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Bankruptcy Control is not positioned as debtor-side bankruptcy
              filing software or a generic task management tool. It is built
              around the operational reality of bankruptcy work for creditors,
              lenders, and related firms.
            </p>

            <p>
              Bankruptcy monitoring can tell an organization that something
              happened. Bankruptcy Control is intended to help organize what
              happens next: case review, notice handling, task ownership,
              document management, reporting, deadlines, and internal workflow
              visibility.
            </p>

            <p>
              The modernization effort focuses on preserving practical workflow
              knowledge while improving usability, deployment flexibility,
              security posture, reporting structure, and long-term
              maintainability.
            </p>
          </div>
        </div>
      </section>

      {/* 
        CREDIBILITY CARDS

        These cards give visitors quick reasons to trust the platform direction.
      */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Why It Matters
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Designed around bankruptcy operations, not generic task tracking.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bankruptcy work creates specific operational needs: notices, case
              activity, deadlines, documents, claims, reporting, and
              accountability. Bankruptcy Control is designed around those needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {credibilityCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-slate-950">
                  {card.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        DARK POSITIONING SECTION

        This section reinforces the core product distinction:
        monitoring identifies activity, but Bankruptcy Control helps manage the
        response.
      */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              From Detection to Resolution
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Monitoring is important. Managing the response is the work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Bankruptcy Control is designed to support the operational layer
              after a filing, notice, docket update, or case event is identified.
              The platform helps organize ownership, next steps, documents,
              deadlines, and reporting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Real workflow history",
              "Creditor and lender focus",
              "Modernized architecture",
              "Operational visibility",
              "Reporting support",
              "Internal accountability",
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

        The About page should still lead qualified visitors toward a demo.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-4xl border border-blue-200 bg-blue-50 p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            See how Bankruptcy Control works.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Request a private demo using sanitized sample data to review how
            Bankruptcy Control can support bankruptcy monitoring, case
            management, notices, tasks, documents, reporting, and internal
            workflows.
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}