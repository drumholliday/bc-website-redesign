import { Section } from "@/components/ui/Section";

export default function SecurityPage() {
  return (
    <Section
      eyebrow="Security"
      title="Security and operational controls built into the platform."
      description="Bankruptcy Control is designed with secure hosting, role-based access, auditability, and data-protection practices appropriate for creditor-side bankruptcy operations."
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
          Bankruptcy Control supports client compliance efforts, but it does not
          replace each client’s own legal, regulatory, vendor-management, and
          internal security obligations.
        </p>
      </div>
    </Section>
  );
}