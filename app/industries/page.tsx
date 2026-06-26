import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { industryCategories } from "@/data/industries";

/*
  Industries overview page.

  This is the page users see after clicking Industries in the navbar.

  It intentionally shows only the 3 top-level audience categories:
  - Lenders & Creditors
  - Financial Organizations
  - Supporting Firms

  The detailed industry cards will appear on each category overview page.
*/

export default function IndustriesPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* Hero section */}
      <section className="bg-linear-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
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

      {/* Top-level industry category cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Who It Serves
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Choose the group that best matches your organization.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start with one of the main creditor-side audience categories, then
              review the more specific business types and workflows that apply
              to that group.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industryCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group block rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  {category.description}
                </p>

                <p className="mt-7 text-sm font-semibold text-blue-300 transition group-hover:translate-x-1 group-hover:text-blue-200">
                  View category →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow section */}
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

      {/* CTA section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-4xl border border-blue-200 bg-blue-50 p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Discuss your bankruptcy workflow.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Request a private demo using sanitized sample data to see how
            Bankruptcy Control may support your organization&apos;s
            creditor-side bankruptcy operations.
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}