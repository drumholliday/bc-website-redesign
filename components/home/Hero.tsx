import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/home/DashboardMockup";

/*
  Homepage hero section.
  The message is intentionally direct: monitoring detects the event,
  Bankruptcy Control helps creditor-side teams manage the operational response.
*/
export function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Creditor-side bankruptcy operations
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Creditor-Side Bankruptcy Case Management Software
          </h1>

          <div className="mt-7 max-w-2xl rounded-3xl border border-blue-200 bg-blue-50/80 p-5 shadow-sm">
            <p className="text-2xl font-semibold leading-9 text-slate-950">
              Bankruptcy monitoring tells you something happened.
            </p>
            <p className="mt-2 text-2xl font-semibold leading-9 text-blue-700">
              Bankruptcy Control helps your team manage what happens next.
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Bankruptcy Control helps creditors, lenders, and creditor-side law
            firms manage bankruptcy cases, notices, documents, tasks, reporting,
            and internal workflows in one secure platform.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Request a Private Demo</Button>
            <Button href="/platform" variant="secondary">
              Explore Platform
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl gap-4 border-t border-slate-300 pt-6 text-base font-medium text-slate-600 sm:grid-cols-3">
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
