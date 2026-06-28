import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/home/DashboardMockup";

/*
  Homepage hero section.

  This keeps Bankruptcy Control's current message, but changes the hero into
  a more polished dark gradient section. The rest of the homepage can stay
  light with explicit white/slate backgrounds.
*/
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] px-6 py-24 text-white sm:py-28 lg:py-32">
      {/* Decorative gradient background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.28),transparent_34%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.18),transparent_30%),linear-gradient(135deg,#07111F_0%,#0B1220_45%,#111827_100%)]" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Hero content */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200">
            From monitoring to case resolution
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bankruptcy Case Management Software for Creditor-Side Operations
          </h1>

          <div className="mt-7 max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-5 shadow-sm">
            <p className="text-2xl font-semibold leading-9 text-white">
              Bankruptcy monitoring tells you when something happened.
            </p>

            <p className="mt-3 text-2xl font-semibold leading-9 text-blue-300">
              Bankruptcy Control helps you manage what happens next.
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Manage cases, notices, documents, tasks, deadlines, reporting, and
            internal workflows in one secure creditor-side bankruptcy platform.
          </p>

          {/* Hero call-to-action buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Request a Private Demo</Button>

            <Button
              href="/platform"
              variant="secondary"
              className="border-white! bg-white! text-slate-950! hover:bg-slate-100! hover:text-slate-950!"
            >
              View Platform Overview
            </Button>
          </div>

          {/* Quick proof points */}
          <div className="mt-10 grid max-w-xl gap-4 border-t border-white/10 pt-6 text-base font-medium text-slate-300 sm:grid-cols-3">
            <p>Case tracking</p>
            <p>Notice workflows</p>
            <p>Audit visibility</p>
          </div>
        </div>

        {/* Dashboard visual */}
        <DashboardMockup />
      </div>
    </section>
  );
}
