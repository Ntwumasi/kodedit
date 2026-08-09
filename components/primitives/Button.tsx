import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[6px] px-4 h-10 text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-150 whitespace-nowrap";

const variants: Record<Variant, string> = {
  // The one rationed use of red as a fill — max one per viewport.
  // Dark ink rather than white: keeps the exact brand hex and clears AA.
  primary:
    "bg-accent text-[#0A0A0B] font-semibold hover:bg-[#ff4d56] active:bg-[#e62b35] border border-transparent",
  ghost:
    "border border-hairline text-ink hover:border-hairline-bright hover:bg-surface",
};

export function Button({
  href,
  children,
  variant = "ghost",
  className = "",
  external = false,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}

export function SubmitButton({
  children,
  disabled = false,
  className = "",
}: {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${base} ${variants.primary} disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
}

/** Text link with the animating red underline. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = `link-underline text-ink transition-colors duration-150 ${className}`;
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
