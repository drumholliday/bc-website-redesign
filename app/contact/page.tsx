import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Request a private demo."
      description="Use sanitized sample data to see how Bankruptcy Control can help creditor-side teams manage bankruptcy cases, notices, tasks, documents, reporting, and internal workflow activity."
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
          A full demo request form will go here. For now, this page confirms
          that the primary contact and demo links are working.
        </p>
      </div>
    </Section>
  );
}