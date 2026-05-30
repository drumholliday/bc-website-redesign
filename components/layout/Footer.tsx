import Link from "next/link";
import { footerNavigation } from "@/data/navigation";

/*
  Shared footer for the site.
  The footer keeps the business positioning, major navigation, and contact links visible.
*/
export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.7fr_0.85fr_0.85fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950 shadow-sm">
                BC
              </div>

              <div className="min-w-0">
                <p className="text-base font-semibold text-white">
                  Bankruptcy Control
                </p>
                <p className="text-sm text-slate-400">
                  Creditor-side case management
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
              Creditor-side bankruptcy case management software for lenders,
              creditors, and creditor-side firms.
            </p>
          </div>

         <FooterColumn title="Product" links={footerNavigation.product} />
         <FooterColumn title="Company" links={footerNavigation.company} />

          <div>
            <h3 className="text-base font-semibold text-sky-300">
              Bankruptcy Control
            </h3>

            <div className="mt-4 space-y-3 text-base text-slate-300">
              <p>Dallas, Texas</p>
              <p>
                <a
                  href="mailto:info@bankruptcycontrol.com"
                  className="inline-block rounded-full px-2 py-1 -ml-2 transition-all duration-200 hover:bg-blue-400/15 hover:text-white hover:underline hover:underline-offset-4"
                >
                  info@bankruptcycontrol.com
                </a>
              </p>
              <p>(___) ___-____</p>
            </div>

            <a
              href="/bankruptcy-control.vcf"
              download
              className="mt-5 inline-flex rounded-full border border-slate-700 px-5 py-3 text-base font-semibold text-white transition-all duration-200 hover:border-blue-400 hover:bg-blue-400/15 hover:text-white"
            >
              Download vCard
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Bankruptcy Control. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/privacy"
              className="rounded-full px-3 py-1 transition-all duration-200 hover:bg-blue-400/15 hover:text-white hover:underline hover:underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="rounded-full px-3 py-1 transition-all duration-200 hover:bg-blue-400/15 hover:text-white hover:underline hover:underline-offset-4"
            >
              Terms of Use
            </Link>
            <Link
              href="/disclaimer"
              className="rounded-full px-3 py-1 transition-all duration-200 hover:bg-blue-400/15 hover:text-white hover:underline hover:underline-offset-4"
            >
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
      <h3 className="text-base font-semibold text-sky-300">{title}</h3>

      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
                href={link.href}
                className="inline-block rounded-full px-3 py-1.5 -ml-3 text-base text-slate-300 transition-all duration-200 hover:translate-x-1 hover:bg-sky-400/25 hover:text-white hover:underline hover:underline-offset-4"
                >
                {link.label}
                </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
