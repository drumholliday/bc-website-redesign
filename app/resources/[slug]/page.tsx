import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

type ResourceDetailPage = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    description: string;
    items: string[];
  }>;
};

const resourcePages: Record<string, ResourceDetailPage> = {
  "glba-aware-safeguards": {
    eyebrow: "GLBA-Aware Safeguards",
    title: "Security-minded workflows for sensitive creditor operations.",
    description:
      "Bankruptcy Control is designed with security, access control, audit visibility, and client responsibility boundaries in mind for organizations handling sensitive creditor-side bankruptcy workflows.",
    sections: [
      {
        title: "Security-Aware Design",
        description:
          "Support bankruptcy operations with a platform direction that recognizes the sensitivity of financial and case-related data.",
        items: [
          "Role-based access planning",
          "Audit visibility",
          "Sensitive data handling awareness",
          "Secure workflow design",
        ],
      },
      {
        title: "Client Responsibility Boundaries",
        description:
          "Help organizations understand that technology supports safeguards, while final legal, compliance, and operational obligations remain with the client and their advisors.",
        items: [
          "Clear responsibility boundaries",
          "Review-ready documentation direction",
          "Policy and procedure alignment",
          "Vendor review support",
        ],
      },
      {
        title: "Operational Safeguards",
        description:
          "Support better internal controls around who can access work, what actions are visible, and how workflow activity is reviewed.",
        items: [
          "Access review support",
          "Activity tracking",
          "Workflow accountability",
          "Management visibility",
        ],
      },
    ],
  },

  "implementation-planning": {
    eyebrow: "Implementation Planning",
    title: "Plan deployment around operations, security, and rollout needs.",
    description:
      "Bankruptcy Control implementation should be planned around existing workflows, user roles, data needs, security review, testing, and staged rollout.",
    sections: [
      {
        title: "Workflow Review",
        description:
          "Start by understanding how bankruptcy work currently moves through the organization.",
        items: [
          "Current workflow mapping",
          "User role review",
          "Case and notice process review",
          "Reporting need identification",
        ],
      },
      {
        title: "Rollout Planning",
        description:
          "Introduce the platform in a controlled way so teams can test, review, and refine the workflow before broader adoption.",
        items: [
          "Staged deployment",
          "Test environment planning",
          "User acceptance review",
          "Training and support planning",
        ],
      },
      {
        title: "Operational Readiness",
        description:
          "Prepare internal teams for production use by confirming responsibilities, data handling, and support expectations.",
        items: [
          "User access setup",
          "Demo and training support",
          "Go-live readiness",
          "Post-launch review",
        ],
      },
    ],
  },

  "pacer-court-data-workflows": {
    eyebrow: "PACER & Court Data Workflows",
    title: "Support court-data workflows where access and authorization are available.",
    description:
      "Bankruptcy Control can support workflows around bankruptcy activity, notices, docket events, and court-related data where authorized access and operational requirements are confirmed.",
    sections: [
      {
        title: "Court Activity Review",
        description:
          "Organize court-related activity so teams can review events and determine what work needs to happen next.",
        items: [
          "Docket activity visibility",
          "Notice review support",
          "Case update organization",
          "Workflow routing",
        ],
      },
      {
        title: "Authorized Access",
        description:
          "Court-data workflows should be planned around proper access, authorization, account ownership, and client requirements.",
        items: [
          "Authorized access planning",
          "PACER workflow review",
          "Client account considerations",
          "Usage responsibility boundaries",
        ],
      },
      {
        title: "Operational Follow-Up",
        description:
          "Turn court activity into organized follow-up work, assignments, deadlines, and reporting visibility.",
        items: [
          "Task creation support",
          "Deadline visibility",
          "Document organization",
          "Reporting preparation",
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
  return Object.keys(resourcePages).map((slug) => ({
    slug,
  }));
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = resourcePages[slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="bg-white text-slate-950">
      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            {page.eyebrow}
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {page.description}
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {page.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <h2 className="text-2xl font-semibold text-slate-950">
                  {section.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {section.description}
                </p>

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

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
            Resources Overview
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Review the broader resources section.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Explore security, deployment, and integration resources for
            evaluating Bankruptcy Control.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/resources">View Resources</Button>

            <Button href="/contact" variant="secondary">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}