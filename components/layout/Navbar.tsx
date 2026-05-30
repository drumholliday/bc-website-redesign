"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/*
  Sticky responsive navbar.
  The colors are intentionally explicit for consistent contrast across browsers.
*/
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#020617] shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950 shadow-sm">
            BC
          </div>

          <div className="leading-tight">
            <p className="text-base font-semibold tracking-tight text-white">
              Bankruptcy Control
            </p>
            <p className="text-sm text-slate-200">
              Creditor-side case management
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {mainNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-base font-medium transition-all duration-200",
                  isActive
                    ? "bg-white/12 text-white"
                    : "text-slate-100 hover:bg-white/12 hover:text-white"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 text-white transition hover:bg-white/12 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-[#020617] px-6 py-5 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {mainNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-medium transition-all duration-200",
                    isActive
                      ? "bg-white/12 text-white"
                      : "text-slate-100 hover:bg-white/12 hover:text-white"
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