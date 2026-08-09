import type { ReactNode } from "react";

export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  label,
  className = "",
  bordered = true,
  as: Tag = "section",
}: {
  children: ReactNode;
  id?: string;
  label?: string;
  className?: string;
  bordered?: boolean;
  as?: "section" | "div" | "article";
}) {
  return (
    <Tag
      id={id}
      className={`${bordered ? "border-t border-hairline" : ""} ${className}`}
    >
      <Shell className="py-20 md:py-32 lg:py-40">
        {label ? <SectionLabel>{label}</SectionLabel> : null}
        {children}
      </Shell>
    </Tag>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="t-mono-label mb-10 md:mb-14">{children}</p>;
}
