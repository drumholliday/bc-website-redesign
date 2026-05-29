"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/*
  Sticky responsive navbar.
  Desktop shows horizontal links; mobile uses a simple slide-down menu.
*/
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950 shadow-sm">
            BC
          </div>

          <div className="leading-tight">
            <p className="text-base font-semibold tracking-tight text-white">
              Bankruptcy Control
            </p>
            <p className="text-sm text-slate-400">
              Creditor-side case management
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {mainNavigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-base font-medium transition duration-200",
                  isActive
                    ? "bg-blue-500/10 text-blue-300"
                    : "text-slate-200 hover:bg-white/10 hover:text-blue-300"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

       <div className="hidden items-center gap-3 lg:flex">
        <Button href="/contact">Request a Demo</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-100 transition hover:bg-white/10 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {mainNavigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-medium transition",
                    isActive
                      ? "bg-blue-500/10 text-blue-300"
                      : "text-slate-200 hover:bg-white/10 hover:text-blue-300"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

           <div className="mt-4 grid gap-3">
            <Button href="/contact">Request a Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}