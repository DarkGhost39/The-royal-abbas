import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "sm" | "wa";
  href?: string;
  onClick?: () => void;
  target?: "_blank";
  rel?: string;
}

const styles: Record<string, React.CSSProperties> = {
  primary: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "16px 48px", background: "var(--char)", color: "var(--ivory)",
    border: "none", borderRadius: 60, fontFamily: "'Jost', sans-serif",
    fontSize: ".8rem", fontWeight: 400, letterSpacing: ".18em",
    textTransform: "uppercase", textDecoration: "none", cursor: "pointer",
    transition: "var(--ease)",
  },
  ghost: {
    display: "inline-flex", alignItems: "center", gap: 10,
    padding: "15px 40px", background: "transparent", color: "var(--char)",
    border: "1px solid rgba(28,28,30,.18)", borderRadius: 60,
    fontFamily: "'Jost', sans-serif", fontSize: ".8rem", fontWeight: 400,
    letterSpacing: ".18em", textTransform: "uppercase",
    textDecoration: "none", cursor: "pointer", transition: "var(--ease)",
  },
  sm: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "9px 18px", background: "var(--char)", color: "white",
    border: "none", borderRadius: 8, fontFamily: "'Jost', sans-serif",
    fontSize: ".76rem", fontWeight: 400, letterSpacing: ".06em",
    cursor: "pointer", transition: "var(--ease)",
  },
  wa: {
    display: "inline-flex", alignItems: "center", gap: 12,
    padding: "18px 56px", background: "#25D366", color: "white",
    border: "none", borderRadius: 60, fontFamily: "'Jost', sans-serif",
    fontSize: ".82rem", fontWeight: 500, letterSpacing: ".16em",
    textTransform: "uppercase", textDecoration: "none", cursor: "pointer",
    transition: "var(--ease)", boxShadow: "0 10px 36px rgba(37,211,102,.28)",
  },
};

export default function Button({
  children, variant = "primary", href, onClick, target, rel,
}: ButtonProps) {
  const style = styles[variant];

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
