"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/*
  Main website navbar.

  This version replaces the older flat navigation row with grouped
  dropdown navigation. The goal is to make the site feel more like a
  modern SaaS product without overloading the top-level navbar.

  Current top-level structure:
  - Platform
  - Solutions
  - Resources
  - Company
  - Request a Demo

  Search, language selection, and a light/dark/system theme picker can be
  added later after the main navigation structure is stable.
*/

type NavLink = {
  label: string;
  href: string;
  description?: string;
};

type NavSection = {
  title: string;
  links: NavLink[];
};

type NavGroup = {
  label: string;
  href: string;
  sections: NavSection[];
};

const navGroups: NavGroup[] = [
  {
    label: "Platform",
    href: "/platform",
    sections: [
      {
        title: "Core Platform",
        links: [
          {
            label: "Platform Overview",
            href: "/platform",
            description:
              "See how Bankruptcy Control organizes creditor-side bankruptcy work.",
          },
          {
            label: "Case Management",
            href: "/platform",
            description:
              "Track cases, parties, status, ownership, and activity history.",
          },
        ],
      },
      {
        title: "Workflow Management",
        links: [
          {
            label: "Monitoring & Notices",
            href: "/integrations",
            description:
              "Turn bankruptcy activity and notices into organized workflows.",
          },
          {
            label: "Tasks & Deadlines",
            href: "/platform",
            description:
              "Assign work, manage follow-up, and reduce missed handoffs.",
          },
        ],
      },
      {
        title: "Documents & Reporting",
        links: [
          {
            label: "Documents",
            href: "/platform",
            description:
              "Support generated documents, review copies, and document history.",
          },
          {
            label: "Reports & Exports",
            href: "/platform",
            description:
              "Create visibility for management, clients, and internal review.",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/industries",
    sections: [
      {
        title: "Lenders & Creditors",
        links: [
          {
            label: "Industries Overview",
            href: "/industries",
            description: "See who Bankruptcy Control is designed to support.",
          },
          {
            label: "Consumer & Installment Lenders",
            href: "/industries",
            description:
              "Support high-volume account and bankruptcy workflows.",
          },
          {
            label: "Title / Auto Lenders",
            href: "/industries",
            description:
              "Manage secured account issues, notices, and follow-up.",
          },
        ],
      },
      {
        title: "Financial Organizations",
        links: [
          {
            label: "Manufactured & Mobile Home Lenders",
            href: "/industries",
            description:
              "Track cases involving collateral, notices, and court activity.",
          },
          {
            label: "Credit Unions & Regional Lenders",
            href: "/industries",
            description:
              "Support internal teams with clearer bankruptcy workflow control.",
          },
          {
            label: "Specialty Finance Companies",
            href: "/industries",
            description:
              "Handle specialized creditor workflows and reporting needs.",
          },
        ],
      },
      {
        title: "Supporting Firms",
        links: [
          {
            label: "Creditor-Side Law Firms",
            href: "/industries",
            description:
              "Coordinate legal workflow, documents, deadlines, and client visibility.",
          },
          {
            label: "Other Creditor-Side Teams",
            href: "/industries",
            description:
              "Support organizations that manage creditor bankruptcy operations.",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/security",
    sections: [
      {
        title: "Security & Trust",
        links: [
          {
            label: "Security",
            href: "/security",
            description:
              "Review access control, auditability, and data-protection planning.",
          },
          {
            label: "GLBA-Aware Safeguards",
            href: "/security",
            description:
              "Understand the security posture and client responsibility boundaries.",
          },
        ],
      },
      {
        title: "Deployment",
        links: [
          {
            label: "Deployment Options",
            href: "/deployment",
            description:
              "Compare hosted SaaS, dedicated cloud, and client-controlled models.",
          },
          {
            label: "Implementation Planning",
            href: "/deployment",
            description:
              "Plan deployment around security, operations, and vendor review needs.",
          },
        ],
      },
      {
        title: "Integrations",
        links: [
          {
            label: "Integrations Overview",
            href: "/integrations",
            description:
              "Connect bankruptcy monitoring, court data, servicing systems, and reports.",
          },
          {
            label: "PACER & Court Data Workflows",
            href: "/integrations",
            description:
              "Support court-data workflows where access and authorization are available.",
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    sections: [
      {
        title: "Company",
        links: [
          {
            label: "About",
            href: "/about",
            description:
              "Learn why Bankruptcy Control was built from real workflow experience.",
          },
          {
            label: "Contact / Demo",
            href: "/contact",
            description: "Request a private demo or start a conversation.",
          },
        ],
      },
      {
        title: "Legal",
        links: [
          {
            label: "Privacy",
            href: "/privacy",
            description: "Review the website privacy placeholder.",
          },
          {
            label: "Terms",
            href: "/terms",
            description: "Review the website terms placeholder.",
          },
          {
            label: "Disclaimer",
            href: "/disclaimer",
            description: "Review the website disclaimer placeholder.",
          },
        ],
      },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

  function isHrefActive(href: string) {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  function isGroupActive(group: NavGroup) {
    return (
      isHrefActive(group.href) ||
      group.sections.some((section) =>
        section.links.some((link) => isHrefActive(link.href)),
      )
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Bankruptcy Control home"
          onClick={handleHomeClick}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-base font-bold text-white shadow-sm dark:bg-white dark:text-slate-950">
            BC
          </div>

          <div className="leading-tight">
            <p className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">
              Bankruptcy Control
            </p>
            <p className="hidden text-sm text-slate-500 dark:text-slate-300 sm:block">
              A CredTx product
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navGroups.map((group) => {
            const active = isGroupActive(group);

            return (
              <div key={group.label} className="group relative">
                <Link
                  href={group.href}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white",
                    active &&
                      "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-white",
                  )}
                >
                  {group.label}
                  <span aria-hidden="true" className="text-xs">
                    ▾
                  </span>
                </Link>

                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[44rem] max-w-[calc(100vw-3rem)] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                    <div className="grid gap-6 p-6 md:grid-cols-3">
                      {group.sections.map((section) => (
                        <div key={section.title}>
                          <p className="mb-3 cursor-default text-xs font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                            {section.title}
                          </p>

                          <div className="space-y-1">
                            {section.links.map((link) => (
                              <Link
                                key={`${section.title}-${link.label}`}
                                href={link.href}
                                className="block cursor-pointer rounded-2xl px-3 py-2 transition hover:bg-slate-50 dark:hover:bg-slate-800"
                              >
                                <span className="block text-sm font-semibold text-slate-950 dark:text-white">
                                  {link.label}
                                </span>

                                {link.description && (
                                  <span className="mt-1 block text-sm leading-6 text-slate-500 dark:text-slate-300">
                                    {link.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
              ×
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
              ☰
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
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          {navGroups.map((group) => (
            <div key={group.label}>
              <Link
                href={group.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl bg-slate-50 px-4 py-3 text-base font-bold text-slate-950 dark:bg-slate-800 dark:text-white"
              >
                {group.label}
              </Link>

              <div className="mt-3 grid gap-4">
                {group.sections.map((section) => (
                  <div key={section.title}>
                    <p className="px-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                      {section.title}
                    </p>

                    <div className="mt-2 grid gap-1">
                      {section.links.map((link) => (
                        <Link
                          key={`${group.label}-${section.title}-${link.label}`}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="grid gap-3">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
