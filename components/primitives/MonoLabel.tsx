import type { ReactNode } from "react";

export function MonoLabel({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
}) {
  return <Tag className={`t-mono-label ${className}`}>{children}</Tag>;
}

export function StatusDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pulse-dot inline-block size-[5px] shrink-0 rounded-full bg-accent ${className}`}
    />
  );
}
