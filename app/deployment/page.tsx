import { Button } from "@/components/ui/Button";

/*
  Deployment option cards.

  These explain possible deployment models without overpromising that every
  option is available to every client. The copy intentionally presents
  client-controlled deployment as selective, not the default.
*/
const deploymentOptions = [
  {
    title: "Bankruptcy Control-Hosted SaaS",
    description:
      "A managed SaaS option for teams that want Bankruptcy Control hosted, maintained, and updated without managing the underlying infrastructure themselves.",
    items: [
      "Managed hosting approach",
      "Centralized platform updates",
      "Lower infrastructure burden",
      "Private demo and onboarding planning",
    ],
  },
  {
    title: "Dedicated Cloud Environment",
    description:
      "A dedicated cloud environment for organizations that need greater separation, control, and deployment planning around their bankruptcy operations.",
    items: [
      "Dedicated environment planning",
      "Client-specific configuration",
      "Controlled access model",
      "Infrastructure separation options",
    ],
  },
  {
    title: "Client-Controlled Deployment",
    description:
      "A selective option for qualified clients with specific internal hosting, control, vendor review, or infrastructure requirements.",
    items: [
      "Selective deployment path",
      "Client infrastructure coordination",
      "Internal review support",
      "Qualified-client planning",
    ],
  },
];

/*
  Comparison rows for the deployment table.

  This keeps the table content separate from the JSX layout so it is easier
  to update the wording later if deployment options change.
*/
const comparisonRows = [
  {
    category: "Best for",
    saas: "Teams that want a managed platform experience.",
    dedicated: "Organizations needing stronger environment separation.",
    client: "Qualified clients with specific internal hosting requirements.",
  },
  {
    category: "Infrastructure ownership",
    saas: "Managed by Bankruptcy Control.",
    dedicated: "Dedicated cloud environment planning.",
    client: "Coordinated with the client’s infrastructure requirements.",
  },
  {
    category: "Operational burden",
    saas: "Lowest client infrastructure burden.",
    dedicated: "Moderate planning and coordination.",
    client: "Highest coordination and client-side responsibility.",
  },
  {
    category: "Customization",
    saas: "Configured around standard platform needs.",
    dedicated: "More client-specific configuration options.",
    client: "Selective configuration based on client requirements.",
  },
];

/*
  Deployment page.

  This page explains the deployment direction for Bankruptcy Control. The goal
  is to sound flexible and enterprise-ready without implying that every client
  can choose every hosting model automatically.
*/
export default function DeploymentPage() {
  return (
    <main className="bg-white text-slate-950">
      {/* 
        PAGE HERO

        This section introduces deployment flexibility while keeping the default
        message practical: most buyers will likely care about a secure, managed,
        reliable platform before they care about custom infrastructure details.
      */}
      <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Deployment
          </p>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Flexible deployment options for creditors and lenders.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Bankruptcy Control can be planned around managed SaaS hosting,
                dedicated cloud environments, or selective client-controlled
                deployment needs depending on the organization’s requirements.
              </p>
            </div>

            {/* 
              AWS / cloud positioning card.

              This wording is careful. It mentions AWS-based infrastructure
              without overclaiming AWS compliance or implying that hosting alone
              satisfies client regulatory obligations.
            */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Cloud-capable by design
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Bankruptcy Control can be deployed using cloud infrastructure
                designed for secure hosting, backups, monitoring, operational
                reliability, and controlled access. Final deployment planning
                should reflect each client’s security, vendor review, and
                operational requirements.
              </p>

              <div className="mt-6">
                <Button href="/contact">Discuss Deployment</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        DEPLOYMENT OPTIONS GRID

        These cards present the three deployment models from most standard to
        most specialized. This keeps client-controlled deployment from sounding
        like the default option.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Deployment Models
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Choose the right level of hosting and control.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Different creditor-side organizations have different operational,
              security, vendor review, and infrastructure needs. Bankruptcy
              Control is intended to support flexible deployment planning
              without forcing every client into the same model.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {deploymentOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-slate-950">
                  {option.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {option.description}
                </p>

                <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
                  {option.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        COMPARISON TABLE

        A simple comparison table helps business buyers understand that the
        deployment options differ by ownership, operational burden, and control.
      */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Deployment Comparison
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Compare the deployment paths.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The final deployment model should be selected based on the
              client’s internal controls, vendor review process, security
              requirements, and operational support needs.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-6 py-5 text-base font-semibold">
                      Category
                    </th>
                    <th className="px-6 py-5 text-base font-semibold">
                      BC-Hosted SaaS
                    </th>
                    <th className="px-6 py-5 text-base font-semibold">
                      Dedicated Cloud
                    </th>
                    <th className="px-6 py-5 text-base font-semibold">
                      Client-Controlled
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.category}
                      className="border-t border-slate-200"
                    >
                      <td className="px-6 py-5 text-base font-semibold text-slate-950">
                        {row.category}
                      </td>
                      <td className="px-6 py-5 text-base leading-7 text-slate-600">
                        {row.saas}
                      </td>
                      <td className="px-6 py-5 text-base leading-7 text-slate-600">
                        {row.dedicated}
                      </td>
                      <td className="px-6 py-5 text-base leading-7 text-slate-600">
                        {row.client}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 
        DARK OPERATIONS SECTION

        This section reinforces that deployment is not just a hosting choice.
        It affects operations, access control, data handling, support, and
        client responsibility.
      */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              Deployment Planning
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Deployment should match the way your team operates.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Bankruptcy Control deployment planning should account for user
              access, data flow, backup expectations, reporting needs, vendor
              review, support responsibilities, and the client’s internal
              security obligations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Access planning",
              "Backup expectations",
              "Vendor review needs",
              "Support model",
              "Data flow design",
              "Client responsibilities",
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

        Encourages prospects to discuss deployment privately because the right
        hosting model depends on the client's real requirements.
      */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-200 bg-blue-50 p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Review deployment options in a private demo.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Request a private demo to discuss hosting preferences, deployment
            requirements, security review needs, and the best model for your
            creditor-side bankruptcy operations.
          </p>

          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}