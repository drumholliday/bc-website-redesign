import { Section } from "@/components/ui/Section";

export default function DeploymentPage() {
  return (
    <Section
      eyebrow="Deployment"
      title="Flexible deployment options for creditor-side operations."
      description="Bankruptcy Control can support BC-managed hosting, dedicated cloud environments, and selective client-controlled deployment discussions for qualified clients."
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
          This page will compare deployment models while leading with managed
          SaaS and dedicated cloud options rather than overemphasizing
          self-hosted deployment.
        </p>
      </div>
    </Section>
  );
}