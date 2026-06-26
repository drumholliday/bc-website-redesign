import Link from "next/link";
import { Button } from "@/components/ui/Button";

/*
  Resources overview page.

  This page gives the Resources navbar item its own overview destination.
  Security, Deployment, and Integrations remain the more specific resource pages.
*/

const resources = [
  {
    title: "Security & Trust",
    description:
      "Review the platform's security-minded approach for sensitive creditor-side bankruptcy workflows, including access control, audit visibility, and data protection planning.",
    href: "/security",
    items: [
      "Access control planning",
      "Audit visibility",
      "Data protection safeguards",
      "GLBA-aware design considerations",
    ],
  },
  {
    title: "Deployment",
    description:
      "Explore deployment planning for Bankruptcy Control, including hosted environments, staged rollout, implementation support, and operational readiness.",
    href: "/deployment",
    items: [
      "Hosted deployment options",
      "Staged implementation planning",
      "Testing and rollout support",
      "Operational readiness",
    ],
  },
  {
    title: "Integrations",
    description:
      "See how Bankruptcy Control can support workflow connections with court data, notices, documents, reporting exports, and related operational systems.",
    href: "/integrations",
    items: [
      "Court and notice workflows",
      "Document handling",
      "Reporting exports",
      "Future system connections",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-linear-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Resources
          </p>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Practical resources for evaluating Bankruptcy Control.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Learn more about the platform's security approach, deployment
                planning, and integration direction for creditor-side bankruptcy
                operations.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Start with the big picture.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                These resources are intended to help organizations understand
                how Bankruptcy Control can fit into existing bankruptcy,
                servicing, document, reporting, and operational workflows.
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
              Resource Areas
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Security, deployment, and integrations in one place.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Use these pages to review how Bankruptcy Control is positioned for
              secure operations, practical implementation, and future workflow
              connectivity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {resources.map((resource) => (
                <Link
                key={resource.title}
                href={resource.href}
                className="group block rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800 hover:shadow-xl"
                >
                <h3 className="text-2xl font-semibold text-white">
                    {resource.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-300">
                    {resource.description}
                </p>

                <ul className="mt-6 space-y-3 text-base leading-7 text-slate-300">
                    {resource.items.map((item) => (
                    <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>

                <p className="mt-7 text-sm font-semibold text-blue-300 transition group-hover:translate-x-1 group-hover:text-blue-200">
                    View {resource.title} →
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
              Evaluation Support
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Designed for a careful review process.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Bankruptcy Control is intended for organizations that need to
              understand security expectations, implementation planning, and
              operational fit before adopting a bankruptcy workflow platform.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Security review",
              "Deployment planning",
              "Workflow mapping",
              "Integration planning",
              "Demo preparation",
              "Operational rollout",
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
        <div className="mx-auto max-w-4xl rounded-4xl border border-blue-200 bg-blue-50 p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Review Bankruptcy Control with your team.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Request a private demo using sanitized sample data to evaluate how
            the platform may support your creditor-side bankruptcy operations.
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
