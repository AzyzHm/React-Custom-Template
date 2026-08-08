/**
 * Formats an ISO date string (or Date) into a short, human-readable form.
 * Example: formatDate("2024-01-05T00:00:00Z") -> "Jan 5, 2024"
 */
export function formatDate(input: string | Date): string {
  const date = typeof input === "string" ? new Date(input) : input;

  if (Number.isNaN(date.getTime())) {
    throw new Error("formatDate received an invalid date");
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
