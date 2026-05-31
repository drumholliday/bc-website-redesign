import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { industries } from "@/data/industries";
import { platformFeatures } from "@/data/platformFeatures";
import { Button } from "@/components/ui/Button";

/*
  Homepage for Bankruptcy Control.
  This first version focuses on a clean, credible SaaS landing page
  without overcrowding the user with every detail page at once.
*/
export default function Home() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Problem / Solution"
        title="Monitoring is only the beginning."
        description="Bankruptcy Control helps teams monitor bankruptcy activity, receive notices, and manage the operational response that follows: case tracking, tasks, documents, reporting, deadlines, and internal accountability."
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

      <Section
        className="bg-slate-50 dark:bg-slate-950"
        eyebrow="Who Bankruptcy Control Serves"
        title="Built for Creditor-Side Bankruptcy Operations"
        description="Bankruptcy Control supports creditor-side teams across lending, finance, and legal operations. Common users include:"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 8).map((industry) => (
            <Card
              key={industry.href}
              title={industry.title}
              description={industry.description}
              href={industry.href}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Platform"
        title="Core Platform Features"
        description="Visibility, workflow discipline, reporting, and operational control for creditor-side bankruptcy teams."
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

      <Section className="bg-slate-950 text-white dark:bg-black">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Security & Deployment
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Designed for secure creditor-side operations.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Bankruptcy Control is designed with secure hosting, access
              controls, auditability, and data-protection practices appropriate
              for creditor-side bankruptcy operations. Bankruptcy Control
              supports client compliance efforts but does not replace each
              client’s own legal, regulatory, and internal security obligations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Role-Based Access",
              "Audit Logging",
              "Secure Cloud Hosting",
              "Encrypted Data Storage",
              "Backup and Restore Planning",
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
