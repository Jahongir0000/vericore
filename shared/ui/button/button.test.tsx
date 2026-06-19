/* eslint-disable @next/next/no-html-link-for-pages -- Slot polymorphism smoke test */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("applies primary variant by default", () => {
    render(<Button>Tap</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-secondary-container");
  });

  it("supports asChild via Slot", () => {
    render(
      <Button asChild>
        <a href="/x">Link</a>
      </Button>,
    );
    expect(screen.getByRole("link", { name: /link/i })).toBeInTheDocument();
  });
});
