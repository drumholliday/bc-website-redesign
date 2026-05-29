import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  eyebrow?: string;
  children?: React.ReactNode;
  className?: string;
};

/*
  Reusable card component for feature and industry sections.
  Cards can be clickable when an href is provided.
*/
export function Card({
  title,
  description,
  href,
  eyebrow,
  children,
  className,
}: CardProps) {
  const content = (
    <div
      className={cn(
        "group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
      )}

      <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {children}

      {href && (
        <p className="mt-5 text-sm font-semibold text-blue-600 transition group-hover:translate-x-1 dark:text-blue-400">
          Learn more →
        </p>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}