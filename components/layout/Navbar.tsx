"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/*
  Main website navbar.

  This version keeps the original working navbar style but removes all dropdowns.

  Top-level structure:
  - Platform   -> /platform
  - Solutions  -> /industries
  - Resources  -> /resources
  - About      -> /about
  - Request a Demo -> /contact

  The detailed Platform, Solutions, and Resources links now live on their
  overview pages as clickable cards.
*/

type NavLink = {
  label: string;
  href: string;
  activePaths?: string[];
};

/*
  Main navbar links.

  activePaths lets a top-level nav item stay highlighted for related pages.
  Example: Resources also covers /security, /deployment, and /integrations.
*/
const navLinks: NavLink[] = [
  {
    label: "Platform",
    href: "/platform",
    activePaths: ["/platform"],
  },
  {
  label: "Industries",
  href: "/industries",
  activePaths: ["/industries"],
  },
  {
    label: "Resources",
    href: "/resources",
    activePaths: ["/resources", "/security", "/deployment", "/integrations"],
  },
  {
    label: "About",
    href: "/about",
    activePaths: ["/about"],
  },
];

export function Navbar() {
  const pathname = usePathname();

  /*
    Controls whether the mobile menu is open or closed.
  */
  const [isOpen, setIsOpen] = useState(false);

  /*
    Logo click behavior.

    If the user is already on the homepage, clicking the logo scrolls to top
    instead of reloading the homepage. It also closes the mobile menu.
  */
  function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  }

  /*
    Checks whether a nav link should be shown as active.
  */
  function isLinkActive(link: NavLink) {
    const pathsToCheck = link.activePaths ?? [link.href];

    return pathsToCheck.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo / home link */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Bankruptcy Control home"
          onClick={handleHomeClick}
        >
          {/* Logo mark */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-base font-bold text-white shadow-sm dark:bg-white dark:text-slate-950">
            BC
          </div>

          {/* Brand text */}
          <div className="leading-tight">
            <p className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">
              Bankruptcy Control
            </p>
            <p className="hidden text-sm text-slate-500 dark:text-slate-300 sm:block">
              A CredTx product
            </p>
          </div>
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isLinkActive(link);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex cursor-pointer items-center rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white",
                  active &&
                    "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop request demo button */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact">Request a Demo</Button>
        </div>

        {/* Mobile menu toggle */}
        {isOpen ? (
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-950 transition hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            aria-expanded="true"
            aria-controls="mobile-navigation"
          >
            <span className="text-xl" aria-hidden="true">
              &times;
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-950 transition hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800 lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-navigation"
          >
            <span className="text-xl" aria-hidden="true">
              &#9776;
            </span>
          </button>
        )}
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-slate-200 bg-white px-6 py-5 shadow-lg dark:border-slate-700 dark:bg-slate-900 lg:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3">
          {/* Mobile page links */}
          {navLinks.map((link) => {
            const active = isLinkActive(link);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-base font-bold text-slate-950 transition hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800",
                  active && "bg-slate-100 dark:bg-slate-800",
                )}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile request demo button */}
          <div className="grid gap-3 pt-2">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </div>
    </header>
  );
}