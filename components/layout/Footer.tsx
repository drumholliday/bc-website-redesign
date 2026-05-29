import Link from "next/link";
import { footerNavigation } from "@/data/navigation";

/*
  Shared footer for the site.
  The footer keeps the business positioning, major navigation, and contact links visible.
*/
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-6 py-16 text-white dark:border-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
                Bankruptcy Control
              </div>

              <div>
                <p className="text-sm font-semibold">Bankruptcy Control</p>
                <p className="text-xs text-slate-400">
                  Creditor-side case management
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Creditor-side bankruptcy case management software for lenders,
              creditors, and creditor-side firms.
            </p>
          </div>

          <FooterColumn title="Platform" links={footerNavigation.platform} />
          <FooterColumn title="Industries" links={footerNavigation.industries} />
          <FooterColumn title="Company" links={footerNavigation.company} />

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>Bankruptcy Control</p>
              <p>Dallas, Texas</p>
              <p>
                <a
                  href="mailto:info@bankruptcycontrol.com"
                  className="transition hover:text-white"
                >
                  info@bankruptcycontrol.com
                </a>
              </p>
              <p>(___) ___-____</p>
            </div>

            <a
              href="/bankruptcy-control.vcf"
              download
              className="mt-5 inline-flex rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-400 hover:bg-blue-500/10"
            >
              Download vCard
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Bankruptcy Control. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Use
            </Link>
            <Link href="/disclaimer" className="transition hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}