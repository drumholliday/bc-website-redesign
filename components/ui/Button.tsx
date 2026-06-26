import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition duration-200";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-500 hover:text-white",
  secondary:
    "border border-white bg-white text-slate-950 hover:bg-slate-100 hover:text-slate-950",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
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
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
