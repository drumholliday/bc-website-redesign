import { Section } from "@/components/ui/Section";

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="Built from real creditor-side bankruptcy workflow experience."
      description="Bankruptcy Control began as operational bankruptcy case management software used in real creditor-side workflows and is being modernized for secure cloud deployment, subscriptions, integrations, and dedicated environments."
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
          This page will tell the Bankruptcy Control story in a credible,
          practical way without making the product sound like a generic SaaS
          startup.
        </p>
      </div>
    </Section>
  );
}