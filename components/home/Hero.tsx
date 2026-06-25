import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/home/DashboardMockup";

/*
  Homepage hero section.

  Keeps the original content hierarchy, but moves the hero into the darker
  navy SaaS theme used across the updated site direction.
*/
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 pt-12 pb-16 text-white sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Subtle background depth without motion or heavy effects. */}
      <div className="absolute left-[-10rem] top-[-10rem] h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-8rem] h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
            From monitoring to case resolution
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bankruptcy Case Management Software for Creditor-Side Operations
          </h1>

          <div className="mt-7 max-w-2xl rounded-3xl border border-blue-400/20 bg-blue-500/10 p-5 shadow-sm">
            <p className="text-2xl font-semibold leading-9 text-white">
              Bankruptcy monitoring tells you when something happened.
            </p>

            <p className="mt-3 text-2xl font-semibold leading-9 text-blue-300">
              Bankruptcy Control helps you manage what happens next.
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Bankruptcy Control helps creditors, lenders, and creditor-side firms
            monitor bankruptcy activity and manage cases, notices, documents,
            tasks, reporting, and internal workflows in one secure platform.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Request a Private Demo</Button>

            <Button href="/platform" variant="secondary">
              View Platform Overview
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl gap-4 border-t border-white/10 pt-6 text-base font-medium text-slate-300 sm:grid-cols-3">
            <p>Case tracking</p>
            <p>Notice workflows</p>
            <p>Audit visibility</p>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}