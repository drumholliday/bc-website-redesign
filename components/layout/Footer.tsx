import Link from "next/link";

/*
  Compact site footer.

  The navbar handles the main site navigation.
  The footer keeps only contact info, vCard download, copyright, and legal links.
*/
export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-7">
        <div className="grid gap-6 text-sm text-slate-300 md:grid-cols-3 md:items-center">
          <div className="text-center md:text-left">
            <p className="font-semibold text-white">Bankruptcy Control</p>
            <p className="mt-1">Dallas, Texas</p>
          </div>

          <div className="text-center">
            <h2 className="text-sm font-semibold text-sky-300">Contact</h2>

            <a
              href="/bankruptcy-control.vcf"
              download
              className="mt-3 inline-flex rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:border-blue-400 hover:bg-blue-400/15 hover:text-white"
            >
              Download vCard
            </a>
          </div>

          <div className="text-center md:text-right">
            <p>
              <a
                href="mailto:info@bankruptcycontrol.com"
                className="inline-block rounded-full px-2 py-1 transition-all duration-200 hover:bg-blue-400/15 hover:text-white hover:underline hover:underline-offset-4"
              >
                info@bankruptcycontrol.com
              </a>
            </p>

            <p className="mt-1">(214) 555 - 5555</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Bankruptcy Control. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
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