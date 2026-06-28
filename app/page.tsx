import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { CardCarousel } from "@/components/home/CardCarousel";
import { Button } from "@/components/ui/Button";

import { platformFeatures } from "@/data/platformFeatures";

/*
  Homepage data arrays.

  These keep repeated card content in one place so the JSX below stays
  easier to read and easier to update later.
*/
const painPoints = [
  "Bankruptcy notices, court events, and documents can be spread across email, portals, shared drives, and internal notes.",
  "Deadlines and follow-up tasks can be difficult to track when work is handled across servicing, legal, and operations teams.",
  "Leadership often needs clearer visibility into case status, open items, document history, and portfolio-level bankruptcy activity.",
];

// Solution points shown directly after the problem section.
// This explains how Bankruptcy Control addresses the fragmented workflow.
const solutionPoints = [
  {
    title: "Centralize case activity",
    description:
      "Keep bankruptcy cases, notices, documents, deadlines, tasks, and notes organized around the matter instead of spread across separate tools.",
  },
  {
    title: "Create workflow visibility",
    description:
      "Give servicing, legal, operations, and management teams a clearer view of what is open, what has changed, and who owns the next step.",
  },
  {
    title: "Support operational control",
    description:
      "Help creditor-side teams manage follow-up, reporting, document history, audit visibility, and internal accountability from one structured platform.",
  },
];

const industryCategories = [
  {
    title: "Lenders & Creditors",
    description:
      "For consumer lenders, installment lenders, title and auto lenders, manufactured and mobile home lenders, and secured creditor teams that need better case visibility and operational follow-up.",
    href: "/industries/lenders-creditors",
  },
  {
    title: "Financial Organizations",
    description:
      "For credit unions, regional lenders, specialty finance companies, and financial organizations managing creditor-side bankruptcy workflows.",
    href: "/industries/financial-organizations",
  },
  {
    title: "Supporting Firms",
    description:
      "For creditor-side law firms and support teams that coordinate legal workflow, documents, deadlines, reporting, and client visibility.",
    href: "/industries/supporting-firms",
  },
];

const secureOperations = [
  "Role-Based Access",
  "Auditability & Activity History",
  "Secure Hosting Approach",
  "Data Protection Practices",
  "Backup and Recovery Planning",
  "Controlled User Administration",
];

const credibilityPoints = [
  "Real workflow history",
  "Creditor-side focus",
  "Modernized architecture",
  "Built for internal control",
];

/*
  Homepage for Bankruptcy Control.

  The homepage now uses a lighter page structure:
  - Dark/gradient hero remains the visual anchor.
  - Main sections after the hero are explicitly light.
  - Dark cards are used only as intentional clickable cards or accent panels.
*/
export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-950">
      {/* Hero section */}
      <Hero />

      {/* 
        PAIN SECTION

        Explains the real-world operational problem before introducing
        the industry/audience cards below.
      */}
      <section className="bg-slate-50 px-6 py-20 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              The problem
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Creditor-side bankruptcy work is often fragmented.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bankruptcy operations can involve court notices, deadlines,
              documents, attorney communication, internal approvals, reporting,
              and portfolio visibility. Bankruptcy Control is designed around
              that operational reality.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-base leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
  SOLUTION SECTION

  Explains how Bankruptcy Control addresses the fragmented workflow
  described in the problem section above.
*/}
<section className="bg-white px-6 py-20 text-slate-950 sm:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          The solution
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          A structured platform for managing what happens after bankruptcy is detected.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Bankruptcy Control brings creditor-side bankruptcy work into a more
          organized workflow. Instead of relying on disconnected emails,
          spreadsheets, shared folders, and manual follow-up, teams can manage
          cases, notices, documents, tasks, deadlines, reporting, and activity
          history in one focused platform.
        </p>

        <div className="mt-8">
          <Button href="/platform">View Platform Overview</Button>
        </div>
      </div>

      {/* Solution cards */}
      <div className="grid gap-5">
        {solutionPoints.map((point) => (
          <div
            key={point.title}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-950">
              {point.title}
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-600">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
          
      {/* 
        INDUSTRIES PREVIEW SECTION

        Three audience-based cards that match the Industries page structure.
        These cards link to the new category overview pages.
      */}
      <section className="bg-white px-6 py-20 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Industries
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Built for creditors, lenders, and the firms that support them.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bankruptcy Control supports organizations that manage bankruptcy
              activity, notices, documents, reporting, deadlines, and
              operational workflows from the creditor side of the process.
            </p>
          </div>

          {/* Dark clickable cards */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 
        CORE FEATURES PREVIEW SECTION

        A homepage preview of the main platform capabilities.
      */}
      <section className="bg-slate-50 px-6 py-20 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Core Features
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              What Bankruptcy Control helps manage.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Visibility, workflow discipline, reporting, and operational
              control for bankruptcy case management from monitoring through
              resolution.
            </p>
          </div>

          <div className="mt-12">
            <CardCarousel items={platformFeatures} />
          </div>
        </div>
      </section>

      {/* 
        SECURE OPERATIONS SECTION

        Light section with security and operations messaging.
        This avoids making the whole homepage feel dark/heavy.
      */}
      <section className="bg-white px-6 py-20 text-slate-950 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Secure Operations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Built with access control, auditability, and responsible
              deployment planning in mind.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bankruptcy Control is designed with secure hosting, role-based
              access, auditability, backup planning, and data-protection
              practices appropriate for bankruptcy operations. The platform can
              support client compliance efforts, but it does not replace each
              client&apos;s own legal, regulatory, and internal security
              obligations.
            </p>

            <div className="mt-8">
              <Button href="/security">View Security Overview</Button>
            </div>
          </div>

          {/* Security/operations cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {secureOperations.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <p className="font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        CREDIBILITY SECTION

        One intentional dark accent panel instead of a fully dark homepage.
      */}
      <section className="bg-slate-50 px-6 py-20 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-4xl bg-[#07111F] shadow-xl">
            <div className="grid gap-10 p-8 text-white sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
                  Why Bankruptcy Control
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Built from real bankruptcy workflow experience.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Bankruptcy Control began as an operational bankruptcy case
                  management system used in real creditor-side workflows. The
                  platform is being modernized into a secure, cloud-capable
                  product while preserving the business logic and practical
                  workflow experience developed over years of use.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/platform">Explore Platform</Button>

                  <Button
                    href="/about"
                    variant="secondary"
                    className="border-white! bg-white! text-slate-950! hover:bg-slate-100! hover:text-slate-950!"
                  >
                    About Bankruptcy Control
                  </Button>
                </div>
              </div>

              {/* Credibility checklist */}
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Practical foundation
                </h3>

                <ul className="mt-5 space-y-4">
                  {credibilityPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-slate-200">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 rounded-2xl border border-white/10 bg-black/10 p-4 text-sm leading-6 text-slate-300">
                  Public messaging should stay careful and professional. The
                  site should describe workflow support, visibility, and
                  operational control without implying legal advice or
                  guaranteed outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        PRIVATE DEMO CTA

        Final homepage call-to-action with a primary demo path and
        a secondary path to the Platform overview.
      */}
      <section className="bg-white px-6 py-20 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-4xl border border-blue-200 bg-blue-50 p-8 text-center shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Private Demo
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            See Bankruptcy Control in a private demo.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            We will tailor the demo to your workflow and use sanitized sample
            data to show how Bankruptcy Control helps organizations manage
            bankruptcy cases from detection through resolution.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">Request a Demo</Button>

            <Button
              href="/platform"
              variant="secondary"
              className="border-white! bg-white! text-slate-950! hover:bg-slate-100! hover:text-slate-950!"
            >
              Explore Platform
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}