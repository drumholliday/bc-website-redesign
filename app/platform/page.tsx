import { Section } from "@/components/ui/Section";

export default function PlatformPage() {
  return (
    <Section
      eyebrow="Platform"
      title="Bankruptcy operations, organized."
      description="Bankruptcy Control helps creditor-side teams manage cases, notices, tasks, documents, reporting, and internal workflow activity after a bankruptcy event occurs."
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
          This page will provide a deeper overview of the Bankruptcy Control
          platform, including case management, notice handling, task tracking,
          document storage, reporting, and security controls.
        </p>
      </div>
    </Section>
  );
}