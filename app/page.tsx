import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { industries } from "@/data/industries";
import { platformFeatures } from "@/data/platformFeatures";
import { Button } from "@/components/ui/Button";

/*
  Homepage for Bankruptcy Control.

  This page is the marketing landing page. It should quickly explain:
  - what problem Bankruptcy Control solves,
  - who the product serves,
  - what core features it offers,
  - why the platform is credible,
  - and how a prospect can request a private demo.

  The navbar links go to separate overview pages such as Platform, Industries,
  Security, Deployment, and About. Because of that, the homepage section labels
  should feel like previews/selling points, not duplicate navbar destinations.
*/
export default function Home() {
  return (
    <>
      <Hero />

      {/* 
        PROBLEM / SOLUTION SECTION

        This section explains the main product positioning:
        bankruptcy monitoring is useful, but Bankruptcy Control helps manage
        the operational work that follows the alert or notice.
      */}
      <Section
        eyebrow="Problem / Solution"
        title="Monitoring is only the beginning."
        description="Bankruptcy Control helps teams monitor bankruptcy activity, receive notices, and manage the operational response that follows, including case tracking, tasks, documents, reporting, deadlines, and internal accountability."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              What monitoring helps identify
            </h3>

            <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <li>A bankruptcy filing occurred</li>
              <li>A notice was received</li>
              <li>A docket or case event changed</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm dark:border-blue-500/30 dark:bg-blue-500/10">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              What Bankruptcy Control helps manage
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
              <li>Who is responsible</li>
              <li>What needs to happen next</li>
              <li>Which documents and deadlines matter</li>
              <li>What needs to be reported</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 
        AUDIENCE PREVIEW SECTION

        This is a homepage preview of the industries/audiences Bankruptcy
        Control can support. The navbar Industries link goes to the broader
        Industries overview page, so this section is labeled "Who It Serves"
        instead of "Industries" to avoid making it feel like a duplicate
        navbar destination.

        Important:
        Since multiple cards may temporarily point to the same page, use
        industry.title as the React key instead of industry.href.
      */}
      <Section
        className="bg-slate-50 dark:bg-slate-950"
        eyebrow="Who It Serves"
        title="Built for creditors, lenders, and the firms that support them."
        description="Bankruptcy Control supports organizations that manage bankruptcy activity, notices, documents, reporting, deadlines, and operational workflows from the creditor side of the process."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 8).map((industry) => (
            <Card
              key={industry.title}
              title={industry.title}
              description={industry.description}
              href={industry.href}
            />
          ))}
        </div>
      </Section>

      {/* 
        CORE FEATURES PREVIEW SECTION

        This section previews the main product capabilities on the homepage.
        It is intentionally labeled "Core Features" instead of "Platform"
        because the navbar Platform link goes to a separate overview page.

        The cards can eventually link to individual feature detail pages.
      */}
      <Section
        eyebrow="Core Features"
        title="What Bankruptcy Control helps manage."
        description="Visibility, workflow discipline, reporting, and operational control for bankruptcy case management from monitoring through resolution."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map((feature) => (
            <Card
              key={feature.href + feature.title}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          ))}
        </div>
      </Section>

      {/* 
        SECURE OPERATIONS PREVIEW SECTION

        This section gives a short homepage preview of security, auditability,
        hosting, backups, and administrative control.

        The navbar has separate Security and Deployment pages, so the homepage
        section is labeled "Secure Operations" instead of "Security & Deployment"
        to avoid making users expect the navbar to scroll to this section.
      */}
      <Section className="bg-slate-950 text-white dark:bg-black">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Secure Operations
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built with access control, auditability, and responsible
              deployment planning in mind.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Bankruptcy Control is designed with secure hosting, role-based
              access, auditability, backup planning, and data-protection
              practices appropriate for bankruptcy operations. The platform can
              support client compliance efforts, but it does not replace each
              client’s own legal, regulatory, and internal security obligations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Role-Based Access",
              "Auditability & Activity History",
              "Secure Hosting Approach",
              "Data Protection Practices",
              "Backup and Recovery Planning",
              "Controlled User Administration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-800 bg-white/5 p-5"
              >
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 
        CREDIBILITY SECTION

        This section explains why Bankruptcy Control is not just a generic
        software concept. It points to real workflow experience, modernization,
        and creditor/lender focus.
      */}
      <Section
        eyebrow="Why Bankruptcy Control"
        title="Built from real bankruptcy workflow experience."
        description="Bankruptcy Control began as an operational bankruptcy case management system used in real creditor-side workflows. The platform is being modernized into a secure, cloud-capable product while preserving the business logic and practical workflow experience developed over years of use."
      >
        <div className="grid gap-5 md:grid-cols-4">
          {[
            "Real workflow history",
            "Creditor-side focus",
            "Modernized architecture",
            "Built for internal control",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="font-semibold text-slate-950 dark:text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 
        PRIVATE DEMO CTA

        Final homepage call-to-action. This section sends qualified visitors
        toward the Contact/Demo page and gives them a secondary path to the
        Platform overview page.
      */}
      <Section className="bg-blue-50 dark:bg-blue-500/10" centered>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
            Private Demo
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            See Bankruptcy Control in a private demo.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-300">
            We will tailor the demo to your workflow and use sanitized sample
            data to show how Bankruptcy Control helps teams manage bankruptcy
            cases from detection through resolution.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact">Request a Demo</Button>

            <Button href="/platform" variant="secondary">
              Explore Platform
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}