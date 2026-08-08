import { describe, expect, it } from "vitest";
import { formatDate } from "@/utils/formatDate";

describe("formatDate", () => {
  it("formats an ISO string into a short human-readable date", () => {
    expect(formatDate("2024-01-05T00:00:00Z")).toBe("Jan 5, 2024");
  });

  it("accepts a Date instance directly", () => {
    expect(formatDate(new Date("2024-12-25T00:00:00Z"))).toBe("Dec 25, 2024");
  });

  it("throws on an invalid date string", () => {
    expect(() => formatDate("not-a-date")).toThrow("formatDate received an invalid date");
  });
});
