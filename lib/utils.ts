// Small helper function for combining Tailwind class strings.
// It removes false, null, and undefined values before joining the classes.
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}