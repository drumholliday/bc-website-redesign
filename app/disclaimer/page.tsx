/*
  Disclaimer page placeholder.

  This page clarifies that the website is informational and that Bankruptcy
  Control should not be presented as legal, compliance, or financial advice.
*/
export default function DisclaimerPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Disclaimer
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Website Disclaimer
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This page is a placeholder disclaimer for the Bankruptcy Control
            website. Final disclaimer language should be reviewed before
            production launch.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <LegalSection title="Informational website content">
            <p>
              The information on this website is provided for general business
              and product information purposes only.
            </p>
          </LegalSection>

          <LegalSection title="No legal or compliance advice">
            <p>
              Bankruptcy Control is a software platform concept for
              creditor-side bankruptcy case management and workflow support.
              Website content should not be interpreted as legal advice,
              regulatory advice, financial advice, or a substitute for a
              client’s own professional advisors.
            </p>
          </LegalSection>

          <LegalSection title="Client responsibility">
            <p>
              Bankruptcy Control may support secure hosting, role-based access,
              auditability, workflow visibility, and GLBA-aware data protection
              practices, but each client remains responsible for its own legal,
              regulatory, security, employee access, and internal compliance
              obligations.
            </p>
          </LegalSection>

          <LegalSection title="Sensitive information warning">
            <p>
              Visitors should not submit Social Security numbers, borrower
              account numbers, court documents, or other sensitive personal
              information through the website contact form.
            </p>
          </LegalSection>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}