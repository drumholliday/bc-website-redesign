import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

/*
  Industry detail pages.

  These pages support the three homepage Solutions cards:
  - /industries/lenders-creditors
  - /industries/financial-organizations
  - /industries/supporting-firms

  They provide more detail than the broad Industries overview page while
  keeping the content grouped around the same Solutions structure used
  in the navbar and homepage.
*/

type IndustryDetailPage = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    description: string;
    items: string[];
  }>;
};

const industryPages: Record<string, IndustryDetailPage> = {
  "lenders-creditors": {
    eyebrow: "Lenders & Creditors",
    title: "Bankruptcy workflow support for lenders and creditor teams.",
    description:
      "Bankruptcy Control helps creditor-side organizations manage bankruptcy activity after detection, including notices, case status, tasks, documents, deadlines, and internal reporting.",
    sections: [
      {
        title: "Industries Overview",
        description:
          "See how Bankruptcy Control supports organizations that need better structure around creditor-side bankruptcy operations.",
        items: [
          "Bankruptcy case visibility",
          "Notice and activity tracking",
          "Task ownership",
          "Operational reporting",
        ],
      },
      {
        title: "Consumer & Installment Lenders",
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
        description:
          "Manage secured account issues, bankruptcy notices, documents, deadlines, and follow-up activity.",
        items: [
          "Secured collateral workflow support",
          "Notice and docket event tracking",
          "Deadline and task visibility",
          "Case status organization",
        ],
      },
    ],
  },

  "financial-organizations": {
    eyebrow: "Financial Organizations",
    title: "Structured bankruptcy workflows for financial organizations.",
    description:
      "Bankruptcy Control supports lenders and financial organizations that need clearer visibility, ownership, and reporting around creditor-side bankruptcy matters.",
    sections: [
      {
        title: "Manufactured & Mobile Home Lenders",
        description:
          "Track cases involving collateral, notices, documents, court activity, and operational follow-up.",
        items: [
          "Case tracking for manufactured housing portfolios",
          "Document and notice organization",
          "Operational accountability",
          "Internal review support",
        ],
      },
      {
        title: "Credit Unions & Regional Lenders",
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

  "supporting-firms": {
    eyebrow: "Supporting Firms",
    title: "Workflow support for firms serving creditor-side bankruptcy operations.",
    description:
      "Bankruptcy Control helps creditor-side law firms and support teams coordinate case details, documents, deadlines, tasks, reporting, and client visibility.",
    sections: [
      {
        title: "Creditor-Side Law Firms",
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
          <Link
            href="/industries"
            className="mb-6 inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200 hover:underline hover:underline-offset-4"
          >
            ← Back to Industries
          </Link>

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
              Explore Platform
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}