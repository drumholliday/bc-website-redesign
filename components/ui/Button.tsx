import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition duration-200";

const variants = {
  primary:
    "border border-blue-600 bg-blue-600! text-white! hover:border-blue-500 hover:bg-blue-500! hover:text-white!",
  secondary:
    "border border-white bg-white! text-slate-950! hover:bg-slate-100! hover:text-slate-950!",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}