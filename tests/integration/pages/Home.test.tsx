import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomePage } from "@/pages/Home/Home";

describe("HomePage (integration)", () => {
  it("renders the app name as a heading", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders the call-to-action button", () => {
    render(<HomePage />);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });
});
