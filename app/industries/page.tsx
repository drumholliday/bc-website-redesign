import { Section } from "@/components/ui/Section";

export default function IndustriesPage() {
  return (
    <Section
      eyebrow="Industries"
      title="Built for creditor-side bankruptcy teams."
      description="Bankruptcy Control supports lenders, creditors, servicers, and creditor-side firms that need better visibility and control over bankruptcy operations."
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
          This page will explain how Bankruptcy Control supports consumer
          lenders, title and auto lenders, manufactured and mobile home lenders,
          credit unions, secured creditors, specialty finance companies, and
          creditor-side law firms.
        </p>
      </div>
    </Section>
  );
}