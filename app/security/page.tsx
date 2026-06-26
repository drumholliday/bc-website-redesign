import { Button } from "@/components/ui/Button";

/*
  Security capability cards.

  These items explain the security posture in careful, practical language.
  The copy avoids promising legal or regulatory compliance and instead focuses
  on platform-level safeguards and operational controls.
*/
const securityControls = [
  {
    title: "Role-Based Access",
    description:
      "Control access based on user roles, team responsibilities, client needs, and operational permissions.",
    items: [
      "User role separation",
      "Permission-aware workflows",
      "Controlled administration",
      "Client-specific access planning",
    ],
  },
  {
    title: "Auditability & Activity History",
    description:
      "Support visibility into user actions, case updates, task activity, document handling, and workflow history.",
    items: [
      "Activity tracking",
      "Case update history",
      "Workflow visibility",
      "Internal accountability",
    ],
  },
  {
    title: "Secure Hosting Approach",
    description:
      "Designed around secure hosting practices appropriate for bankruptcy operations and sensitive workflow data.",
    items: [
      "Cloud-capable architecture",
      "Controlled environment planning",
      "Backup and recovery planning",
      "Operational reliability focus",
    ],
  },
  {
    title: "Data Protection Practices",
    description:
      "Support data protection needs with careful access control, secure workflow design, and responsible safeguard planning.",
    items: [
      "Sensitive data handling awareness",
      "Secure workflow design",
      "Client responsibility boundaries",
      "GLBA-aware practices",
    ],
  },
];

/*
  Security page.

  This page should be careful and professional. It should explain security
  posture without claiming that Bankruptcy Control automatically makes clients
  compliant with GLBA or any other regulatory standard.
*/
export default function SecurityPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* 
        PAGE HERO

        The main goal is to establish security as part of the platform's
        operational design while avoiding unsupported compliance guarantees.
      */}
      <section className="bg-linear-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Security
          </p>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Security and operational controls for bankruptcy operations.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Bankruptcy Control is designed with secure hosting, role-based
                access, auditability, backup planning, and{" "}
             <a
              href="https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4"
              style={{ color: "#1d4ed8" }}
            >
              GLBA-aware
            </a>{" "}
                data protection practices appropriate for bankruptcy operations.
              </p>
            </div>

            {/* 
              Shared responsibility card.

              This card is important because it prevents the page from implying
              that software alone satisfies every client compliance obligation.
            */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Security is a shared responsibility
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Bankruptcy Control can support client security and compliance
                efforts, but each client remains responsible for its own legal,
                regulatory, employee access, endpoint security, internal policy,
                and lawful-use obligations.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                For background on financial privacy and safeguard expectations,
                see the FTC’s overview of the{" "}
              <a
                href="https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4"
                style={{ color: "#1d4ed8" }}
              >
                Gramm-Leach-Bliley Act
              </a>
                .
              </p>

              <div className="mt-6">
                <Button href="/contact">Request a Security Overview</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECURITY CONTROLS GRID

        These cards describe security-related platform concepts in plain
        business language for lenders, creditors, and creditor-side firms.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Platform Safeguards
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Controls designed around sensitive bankruptcy operations.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bankruptcy workflows may involve sensitive information, internal
              policies, deadlines, documents, and case activity. The platform is
              designed to support control, visibility, and accountability around
              that work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {securityControls.map((control) => (
              <div
                key={control.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-slate-950">
                  {control.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {control.description}
                </p>

                <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
                  {control.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {control.title === "Data Protection Practices" && (
                <p className="mt-6 text-base leading-7 text-slate-600">
                  For additional info, see the FTC’s overview of the{" "}
                <a
                  href="https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "#1d4ed8" }}
                >
                  Gramm-Leach-Bliley Act
                </a>
                  .
                </p>
              )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        DARK SHARED RESPONSIBILITY SECTION

        This section carefully separates platform safeguards from client-side
        compliance obligations. It is intentionally conservative.
      */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              Compliance-Aware, Not Compliance-Guaranteed
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built to support responsible operations.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Bankruptcy Control provides platform-level safeguards and
              operational controls designed to support bankruptcy operations. It
              does not replace a client’s own compliance program, legal review,
              employee training, vendor review, or internal security
              obligations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Role-Based Access",
              "Auditability & Activity History",
              "Secure Hosting Approach",
              "Data Protection Practices",
              "Backup and Recovery Planning",
              "Controlled User Administration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-800 bg-white/5 p-6"
              >
                <p className="text-base font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        FINAL CTA

        This encourages serious prospects to request a security-focused
        discussion without making detailed security documentation public.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-4xl border border-blue-200 bg-blue-50 p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Review security in a private discussion.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Request a private demo or security overview to discuss role-based
            access, auditability, hosting approach, data protection practices,
            and client-specific requirements.
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
