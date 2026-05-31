/*
  Privacy page placeholder.

  This page gives the site a professional working Privacy Policy route while
  the final legal language is still being reviewed. It should be reviewed by
  the business owner and/or legal counsel before production launch.
*/
export default function PrivacyPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Privacy
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This page is a placeholder for Bankruptcy Control’s Privacy Policy.
            Final privacy language should be reviewed before production launch.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <LegalSection title="Information submitted through the website">
            <p>
              Visitors may submit basic contact and demo request information,
              such as name, company, email address, phone number, role, company
              type, and message details.
            </p>
            <p>
              Visitors should not submit Social Security numbers, borrower
              account numbers, court documents, or other sensitive personal
              information through the website contact form.
            </p>
          </LegalSection>

          <LegalSection title="Use of information">
            <p>
              Information submitted through the website may be used to respond
              to inquiries, schedule demos, communicate about Bankruptcy Control,
              and evaluate potential business needs.
            </p>
          </LegalSection>

          <LegalSection title="Security and data handling">
            <p>
              Bankruptcy Control is intended to be designed with secure hosting,
              access controls, auditability, and data-protection practices
              appropriate for creditor-side bankruptcy operations.
            </p>
            <p>
              Website visitors and prospective clients remain responsible for
              avoiding the submission of sensitive borrower, account, court, or
              personal information through public website forms.
            </p>
          </LegalSection>

          <LegalSection title="Policy review">
            <p>
              This placeholder page should be replaced with a final Privacy
              Policy before the website is used as a production public site.
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