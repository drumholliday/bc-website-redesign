/*
  Terms page placeholder.

  This route prevents the footer Terms link from leading nowhere while the
  final legal terms are still being drafted and reviewed.
*/
export default function TermsPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Terms
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This page is a placeholder for Bankruptcy Control’s Terms of Use.
            Final terms should be reviewed before production launch.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <LegalSection title="Website use">
            <p>
              This website provides general information about Bankruptcy
              Control, its platform direction, and bankruptcy workflow
              management capabilities.
            </p>
            <p>
              Use of this website does not create a client relationship,
              software license, service agreement, or professional advisory
              relationship.
            </p>
          </LegalSection>

          <LegalSection title="Demo requests">
            <p>
              Demo request submissions are for business inquiry purposes only.
              Visitors should not submit sensitive borrower, account, court, or
              personal information through the contact form.
            </p>
          </LegalSection>

          <LegalSection title="No guarantees">
            <p>
              Website content is provided for informational purposes and should
              not be interpreted as a guarantee of specific software
              functionality, regulatory compliance, legal outcome, or business
              result.
            </p>
          </LegalSection>

          <LegalSection title="Important notice">
            <p>
              This placeholder is provided for website development and review
              purposes only. It should not be treated as final legal language, a
              complete agreement, or legal advice.
            </p>
          </LegalSection>

          <LegalSection title="Future review">
            <p>
              This placeholder page should be replaced with final Terms of Use
              before the website is used as a production public site.
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
