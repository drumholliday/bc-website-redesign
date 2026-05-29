/*
  Sanitized dashboard mockup for the homepage hero.
  This uses fake operational data only — no real case numbers, client names,
  borrower information, court documents, SSNs, or sensitive data.
*/
export function DashboardMockup() {
  const cases = [
    {
      case: "BK-1048",
      type: "Chapter 13",
      status: "Plan review",
      owner: "Case Team",
    },
    {
      case: "BK-1052",
      type: "Chapter 7",
      status: "Notice received",
      owner: "Operations",
    },
    {
      case: "BK-1061",
      type: "Chapter 13",
      status: "POC deadline",
      owner: "Legal",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Operational Workspace
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">
                Bankruptcy Operations Dashboard
              </h3>
            </div>

            <div className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 sm:block dark:bg-emerald-500/10 dark:text-emerald-300">
              Secure sample data
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            <MetricCard label="Active cases" value="248" />
            <MetricCard label="Open tasks" value="37" />
            <MetricCard label="Upcoming deadlines" value="12" />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Recent case activity
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Sample matters
              </p>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {cases.map((item) => (
                <div
                  key={item.case}
                  className="grid grid-cols-[1fr_1fr] gap-3 px-4 py-3 text-sm sm:grid-cols-[0.8fr_0.8fr_1fr_0.8fr]"
                >
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {item.case}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {item.type}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {item.status}
                  </span>
                  <span className="hidden text-slate-500 sm:block dark:text-slate-400">
                    {item.owner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Notice intake
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                8 new notices routed for review and assignment.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Reporting queue
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Portfolio activity summary ready for export.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
};

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
      <p className="text-2xl font-semibold text-slate-950 dark:text-white">
        {value}
      </p>
      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}