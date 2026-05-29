import { Section } from "@/components/ui/Section";

export default function IntegrationsPage() {
  return (
    <Section
      eyebrow="Integrations"
      title="Designed to work with existing systems and data sources."
      description="Bankruptcy Control is intended to support integrations with bankruptcy monitoring providers, court-data sources, loan servicing systems, valuation data, and notice intake workflows where API access is available."
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
          This page will describe Bankruptcy Control’s integration-ready
          approach without implying official partnerships unless those
          relationships are confirmed.
        </p>
      </div>
    </Section>
  );
}