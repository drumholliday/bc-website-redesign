import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

type PlatformDetailPage = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    description: string;
    items: string[];
  }>;
};

const platformPages: Record<string, PlatformDetailPage> = {
  "case-management": {
    eyebrow: "Case Management",
    title: "Organize bankruptcy cases from activity through resolution.",
    description:
      "Bankruptcy Control helps creditor-side teams manage case details, parties, status, ownership, documents, deadlines, and activity history in one organized workspace.",
    sections: [
      {
        title: "Case Visibility",
        description:
          "Give teams a clearer view of active bankruptcy matters and related account activity.",
        items: [
          "Case status tracking",
          "Debtor and creditor information",
          "Account and matter organization",
          "Internal activity history",
        ],
      },
      {
        title: "Team Ownership",
        description:
          "Help staff understand who owns the next step and what needs attention.",
        items: [
          "Assigned case responsibility",
          "Follow-up visibility",
          "Internal workflow notes",
          "Operational accountability",
        ],
      },
      {
        title: "Operational Review",
        description:
          "Support management review with structured case information and workflow visibility.",
        items: [
          "Case-level summaries",
          "Status review support",
          "Exception visibility",
          "Reporting preparation",
        ],
      },
    ],
  },

  "monitoring-notices": {
    eyebrow: "Monitoring & Notices",
    title: "Turn bankruptcy activity and notices into organized workflows.",
    description:
      "Bankruptcy Control is designed to help teams move beyond simple monitoring by organizing the work that follows new bankruptcy activity, notices, and court events.",
    sections: [
      {
        title: "Activity Intake",
        description:
          "Support review of bankruptcy-related activity and notices as they enter the workflow.",
        items: [
          "Notice review support",
          "Court activity organization",
          "Case update visibility",
          "Workflow routing",
        ],
      },
      {
        title: "Follow-Up Work",
        description:
          "Help teams identify what needs to happen after an event or notice is reviewed.",
        items: [
          "Next-step tracking",
          "Task assignment",
          "Deadline awareness",
          "Internal handoff support",
        ],
      },
      {
        title: "Audit Visibility",
        description:
          "Maintain better visibility into what was reviewed, when it was reviewed, and what happened next.",
        items: [
          "Activity history",
          "Review notes",
          "Status changes",
          "Operational records",
        ],
      },
    ],
  },

  "tasks-deadlines": {
    eyebrow: "Tasks & Deadlines",
    title: "Manage follow-up work, deadlines, and internal accountability.",
    description:
      "Bankruptcy workflows create time-sensitive operational work. Bankruptcy Control helps teams organize assignments, deadlines, and handoffs so work does not get lost.",
    sections: [
      {
        title: "Task Assignment",
        description:
          "Assign work to the right internal users or teams as bankruptcy activity progresses.",
        items: [
          "Task ownership",
          "Follow-up assignment",
          "Status visibility",
          "Internal coordination",
        ],
      },
      {
        title: "Deadline Awareness",
        description:
          "Support visibility into important dates and operational follow-up needs.",
        items: [
          "Due date tracking",
          "Upcoming deadline review",
          "Missed handoff reduction",
          "Management visibility",
        ],
      },
      {
        title: "Workflow Control",
        description:
          "Keep work moving with clearer structure around who is responsible for each step.",
        items: [
          "Workflow queues",
          "Task history",
          "Team accountability",
          "Operational reporting",
        ],
      },
    ],
  },

  documents: {
    eyebrow: "Documents",
    title: "Organize bankruptcy documents, generated files, and review copies.",
    description:
      "Bankruptcy Control can support document organization around cases, notices, templates, generated documents, attachments, and internal review workflows.",
    sections: [
      {
        title: "Document Organization",
        description:
          "Keep case-related documents connected to the work they support.",
        items: [
          "Case document storage",
          "Attachment organization",
          "Generated document history",
          "Review copy support",
        ],
      },
      {
        title: "Template Direction",
        description:
          "Support a modern document workflow direction using structured templates and consistent output.",
        items: [
          "DOCX template planning",
          "PDF final output",
          "Editable review copies",
          "Template cleanup support",
        ],
      },
      {
        title: "Review Workflow",
        description:
          "Help teams track document activity as part of the broader case workflow.",
        items: [
          "Document status visibility",
          "Internal review support",
          "Activity logging",
          "Case history alignment",
        ],
      },
    ],
  },
  "reporting-audit-trails": {
    eyebrow: "Reporting & Audit Trails",
    title: "Reporting and audit trail visibility for bankruptcy operations.",
    description:
      "Bankruptcy Control helps teams create clearer visibility into case activity, workflow status, ownership, documents, deadlines, and operational history.",
    sections: [
      {
        title: "Operational Reporting",
        description:
          "Give managers and teams better visibility into bankruptcy workflow activity and case status.",
        items: [
          "Case status summaries",
          "Open workflow visibility",
          "Management review support",
          "Portfolio activity insight",
        ],
      },
      {
        title: "Audit Trail Visibility",
        description:
          "Support internal accountability by keeping important activity, ownership, and workflow history easier to review.",
        items: [
          "Activity history",
          "Task ownership records",
          "Document history",
          "Workflow status changes",
        ],
      },
      {
        title: "Review and Export Support",
        description:
          "Support reporting, review, and operational handoff needs without making exports the main product message.",
        items: [
          "Internal review support",
          "Client reporting support",
          "Operational summaries",
          "Structured data visibility",
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
  return Object.keys(platformPages).map((slug) => ({
    slug,
  }));
}

export default async function PlatformDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = platformPages[slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="bg-white text-slate-950">
      <section className="bg-linear-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
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
            Platform Overview
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            See how this fits into the full Bankruptcy Control platform.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Review the broader platform to understand how cases, notices, tasks,
            documents, reporting, security, and workflow visibility work
            together.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/platform">View Platform Overview</Button>

            <Button href="/contact" variant="secondary">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
