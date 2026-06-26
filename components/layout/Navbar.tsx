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
            href: "/platform/case-management",
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
            href: "/platform/monitoring-notices",
            description:
              "Turn bankruptcy activity and notices into organized workflows.",
          },
          {
            label: "Tasks & Deadlines",
            href: "/platform/tasks-deadlines",
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
            href: "/platform/documents",
            description:
              "Support generated documents, review copies, and document history.",
          },
          {
            label: "Reporting & Audit Trails",
            href: "/platform/reporting-audit-trails",
            description:
              "Create visibility for management, clients, compliance review, and internal operations.",
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
            label: "Lenders & Creditors Overview",
            href: "/industries/lenders-creditors",
            description:
              "Review bankruptcy workflow support for lenders and creditor teams.",
          },
          {
            label: "Consumer & Installment Lenders",
            href: "/industries/consumer-installment-lenders",
            description:
              "Support high-volume account and bankruptcy workflows.",
          },
          {
            label: "Title / Auto Lenders",
            href: "/industries/title-auto-lenders",
            description:
              "Manage secured account issues, notices, and follow-up.",
          },
          {
            label: "Manufactured & Mobile Home Lenders",
            href: "/industries/manufactured-mobile-home-lenders",
            description:
              "Track cases involving collateral, notices, and court activity.",
          },
          {
            label: "Secured Creditors",
            href: "/industries/secured-creditors",
            description:
              "Organize collateral-related case activity, notices, and deadlines.",
          },
        ],
      },
      {
        title: "Financial Organizations",
        links: [
          {
            label: "Financial Organizations Overview",
            href: "/industries/financial-organizations",
            description:
              "Review bankruptcy workflow support for financial organizations.",
          },
          {
            label: "Credit Unions & Regional Lenders",
            href: "/industries/credit-unions-regional-lenders",
            description:
              "Support internal teams with clearer bankruptcy workflow control.",
          },
          {
            label: "Specialty Finance Companies",
            href: "/industries/specialty-finance-companies",
            description:
              "Handle specialized creditor workflows and reporting needs.",
          },
        ],
      },
      {
        title: "Supporting Firms",
        links: [
          {
            label: "Supporting Firms Overview",
            href: "/industries/supporting-firms",
            description:
              "Review workflow support for firms serving creditor-side operations.",
          },
          {
            label: "Creditor-Side Law Firms",
            href: "/industries/creditor-side-law-firms",
            description:
              "Coordinate legal workflow, documents, deadlines, and client visibility.",
          },
          {
            label: "Other Creditor-Side Teams",
            href: "/industries/other-creditor-side-teams",
            description:
              "Support organizations that manage creditor bankruptcy operations.",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    sections: [
      {
        title: "Security & Trust",
        links: [
          {
            label: "Resources Overview",
            href: "/resources",
            description:
              "Review security, deployment, and integration resources.",
          },
          {
            label: "Security",
            href: "/security",
            description:
              "Review access control, auditability, and data-protection planning.",
          },
          {
            label: "GLBA-Aware Safeguards",
            href: "/resources/glba-aware-safeguards",
            description:
              "Understand the security posture and client responsibility boundaries.",
          },
        ],
      },
      {
        title: "Deployment",
        links: [
          {
            label: "Deployment Overview",
            href: "/deployment",
            description:
              "Review hosted deployment, rollout, and implementation planning.",
          },
          {
            label: "Implementation Planning",
            href: "/resources/implementation-planning",
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
            href: "/resources/pacer-court-data-workflows",
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
            label: "Terms & Disclaimer",
            href: "/terms",
            description: "Review website terms and disclaimer information.",
          },
        ],
      },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsOpen(false);
      setOpenMobileGroup(null);
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
            const isMegaMenu = group.sections.length >= 3;
            const menuOpen = openGroup === group.label;

            return (
              <div
                key={group.label}
                className="relative flex h-20 items-center"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <Link
                  href={group.href}
                  onClick={() => setOpenGroup(null)}
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
                <div
                  className={cn(
                    "z-50 pt-3 transition duration-200",
                    menuOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0",
                    isMegaMenu
                      ? "fixed left-0 right-0 top-20"
                      : "absolute right-0 top-full w-[32rem] max-w-[calc(100vw-3rem)]",
                  )}
                >
                  <div
                    className={cn(
                      "overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-950/20 dark:border-slate-600 dark:bg-slate-800 dark:shadow-blue-950/40",
                      isMegaMenu ? "rounded-none border-x-0" : "rounded-3xl",
                    )}
                  >
                    <div
                      className={cn(
                        "grid gap-8 p-6",
                        isMegaMenu
                          ? "mx-auto max-w-7xl md:grid-cols-3"
                          : "md:grid-cols-2",
                      )}
                    >
                      {group.sections.map((section) => (
                        <div key={section.title}>
                          <p className="mb-3 cursor-default text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                            {section.title}
                          </p>

                          <div className="space-y-1">
                            {section.links.map((link) => (
                              <Link
                                key={`${section.title}-${link.label}`}
                                href={link.href}
                                onClick={() => setOpenGroup(null)}
                                className="block cursor-pointer rounded-2xl px-3 py-2 transition hover:bg-slate-50 dark:hover:bg-slate-700"
                              >
                                <span className="block text-sm font-semibold text-slate-950 dark:text-white">
                                  {link.label}
                                </span>
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
            onClick={() => {
              setIsOpen(false);
              setOpenMobileGroup(null);
            }}
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
            >
             <button
                type="button"
                onClick={() =>
                  setOpenMobileGroup((current) =>
                    current === group.label ? null : group.label,
                  )
                }
                className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-bold text-slate-950 transition hover:bg-slate-50 dark:text-white dark:hover:bg-slate-800"
              >
                <span>{group.label}</span>
                <span className="text-lg text-slate-500 dark:text-slate-300">
                  {openMobileGroup === group.label ? "−" : "+"}
                </span>
              </button>

              {openMobileGroup === group.label && (
                <div className="border-t border-slate-200 px-4 py-4 dark:border-slate-700">
                  <Link
                    href={group.href}
                    onClick={() => {
                      setIsOpen(false);
                      setOpenMobileGroup(null);
                    }}
                    className="mb-4 block rounded-xl bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200"
                  >
                    {group.label} Overview
                  </Link>

                  <div className="space-y-5">
                    {group.sections.map((section) => (
                      <div key={section.title}>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-500 dark:text-sky-300">
                          {section.title}
                        </p>

                        <div className="space-y-1">
                          {section.links.map((link) => (
                            <Link
                              key={`${group.label}-${section.title}-${link.label}`}
                              href={link.href}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenMobileGroup(null);
                              }}
                              className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            onClick={() => {
              setIsOpen(false);
              setOpenMobileGroup(null);
            }}
            className="mt-2 block rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
