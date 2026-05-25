"use client";

import { Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { TESTIMONIALS } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  const [headerRef, headerVis] = useReveal();

  return (
    <section id="reviews" style={{
      padding: "120px 48px", background: "var(--char)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div ref={headerRef} style={{ textAlign: "center", maxWidth: 540, margin: "0 auto 64px" }}>
          <SectionHeader
            eyebrow="Client Voices"
            title={<>What Our Clients<br /><em style={{ color: "var(--gold)" }}>Are Saying</em></>}
            visible={headerVis}
            centered
            dark
          />
        </div>

        <div className="testi-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22,
        }}>
          {TESTIMONIALS.map((t, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [ref, vis] = useReveal();
            return (
              <div
                key={t.name}
                ref={ref}
                className={`reveal rd${i + 1}${vis ? " vis" : ""}`}
                style={{
                  background: "rgba(255,255,255,.045)",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: "var(--radius)", padding: "40px 32px",
                  transition: "var(--ease)", backdropFilter: "blur(12px)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,.07)";
                  el.style.borderColor = "rgba(201,168,112,.28)";
                  el.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,.045)";
                  el.style.borderColor = "rgba(255,255,255,.07)";
                  el.style.transform = "";
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={12} fill="#C9A870" color="#C9A870" />
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: "1.12rem",
                  fontWeight: 300, fontStyle: "italic", color: "rgba(254,252,249,.82)",
                  lineHeight: 1.75, marginBottom: 26,
                }}>
                  "{t.text}"
                </p>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg,var(--gold) 0%,var(--dusty) 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem",
                    fontWeight: 500, color: "var(--ivory)", flexShrink: 0,
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: ".88rem", fontWeight: 500, color: "var(--ivory)" }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: ".72rem", color: "rgba(254,252,249,.4)",
                      fontWeight: 300, marginTop: 1 }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
