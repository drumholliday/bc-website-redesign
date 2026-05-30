import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
};

/*
  Reusable button component.
  If an href is provided, it renders as a Next.js Link.
  Otherwise, it renders as a standard button.

  Primary button text color is forced with inline style because some PC browsers
  displayed the text too dark even when Tailwind's text-white class was present.
*/
export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:text-white hover:shadow-md",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-blue-500 dark:hover:bg-slate-800",
    ghost:
      "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  const forcedPrimaryTextStyle =
    variant === "primary"
      ? {
          color: "#ffffff",
          WebkitFontSmoothing: "antialiased" as const,
          MozOsxFontSmoothing: "grayscale" as const,
        }
      : undefined;

  if (href) {
    return (
      <Link href={href} className={classes} style={forcedPrimaryTextStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} style={forcedPrimaryTextStyle}>
      {children}
    </button>
  );
}