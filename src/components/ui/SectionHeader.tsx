import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  visible: boolean;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeader({ eyebrow, title, visible, centered, dark }: Props) {
  return (
    <>
      <span className={`reveal${visible ? " vis" : ""}`} style={{
        fontSize: ".68rem", fontWeight: 400, letterSpacing: ".32em",
        textTransform: "uppercase", color: "var(--gold)",
        marginBottom: 14, display: "block",
        textAlign: centered ? "center" : "left",
      }}>
        {eyebrow}
      </span>

      <h2 className={`reveal rd1${visible ? " vis" : ""}`} style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2.4rem,5.5vw,4.8rem)", fontWeight: 300,
        lineHeight: 1.06, letterSpacing: "-.02em",
        color: dark ? "var(--ivory)" : "var(--char)",
        textAlign: centered ? "center" : "left",
      }}>
        {title}
      </h2>

      <div className={`gold-rule reveal rd2${visible ? " vis" : ""}`} style={{
        margin: centered ? "22px auto" : "22px 0",
        background: "var(--gold)",
      }} />
    </>
  );
}
