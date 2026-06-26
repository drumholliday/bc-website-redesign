import { Hero } from "@/components/home/Hero";
import { CardCarousel } from "@/components/home/CardCarousel";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

import { platformFeatures } from "@/data/platformFeatures";
import { Button } from "@/components/ui/Button";

/*
  Homepage for Bankruptcy Control.

  This landing page explains the product, who it serves, what it helps manage,
  why it is credible, and how qualified prospects can request a private demo.
*/
export default function Home() {
  return (
    <>
      <Hero />

      {/* 
        SOLUTIONS PREVIEW SECTION

        Three audience-based cards that match the Solutions dropdown in
        the navbar. These can later lead to dedicated detail pages.
      */}
      <Section
        eyebrow="Solutions"
        title="Built for creditors, lenders, and the firms that support them."
        description="Bankruptcy Control supports organizations that manage bankruptcy activity, notices, documents, reporting, deadlines, and operational workflows from the creditor side of the process."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card
            title="Lenders & Creditors"
            description="For consumer lenders, installment lenders, title and auto lenders, and creditor teams that need better case visibility, notice tracking, and operational follow-up."
            href="/industries/lenders-creditors"
          />

          <Card
            title="Financial Organizations"
            description="For manufactured and mobile home lenders, credit unions, regional lenders, specialty finance companies, and secured creditors managing bankruptcy workflows."
            href="/industries/financial-organizations"
          />

          <Card
            title="Supporting Firms"
            description="For creditor-side law firms and support teams that coordinate legal workflow, documents, deadlines, reporting, and client visibility."
            href="/industries/supporting-firms"
          />
        </div>
      </Section>

      {/* 
        AUDIENCE CAROUSEL SECTION

        Preview of the organizations Bankruptcy Control can support.
        The carousel avoids a large wall of cards while keeping all
        audience cards available to browse.
      */}
      

      {/* 
        CORE FEATURES PREVIEW SECTION

        A homepage preview of the main platform capabilities.
        The full Platform page can explain these in more detail.
      */}
      <Section
        eyebrow="Core Features"
        title="What Bankruptcy Control helps manage."
        description="Visibility, workflow discipline, reporting, and operational control for bankruptcy case management from monitoring through resolution."
      >
        <div className="mt-12">
          <CardCarousel items={platformFeatures} />
        </div>
      </Section>

      {/* 
        SECURE OPERATIONS PREVIEW SECTION

        Homepage preview of access control, auditability, hosting,
        backups, and responsible data-protection planning.
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
              client's own legal, regulatory, and internal security obligations.
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

        Explains why Bankruptcy Control is not a generic software concept:
        it comes from real creditor-side bankruptcy workflow experience.
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

        Final homepage call-to-action with a primary demo path and
        a secondary path to the Platform overview.
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
      </Section>
    </>
  );
}