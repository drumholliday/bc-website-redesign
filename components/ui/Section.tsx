import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

/*
  Reusable section wrapper for consistent spacing and headings.
  This keeps the homepage clean and prevents every section from repeating layout code.
*/
export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
  centered = false,
}: SectionProps) {
  return (
    <section className={cn("px-6 py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-12 max-w-3xl",
              centered && "mx-auto text-center"
            )}
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}