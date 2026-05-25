"use client";

import { useReveal } from "@/hooks/useReveal";
import { SERVICES } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Services() {
  const [headerRef, headerVis] = useReveal();

  return (
    <section id="services" style={{ padding: "120px 48px", background: "var(--ivory)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div ref={headerRef} style={{ textAlign: "center", maxWidth: 520, margin: "0 auto 64px" }}>
          <SectionHeader
            eyebrow="What We Offer"
            title={<>Premium<br /><em style={{ color: "var(--gold)" }}>Services</em></>}
            visible={headerVis}
            centered
          />
        </div>

        <div className="svc-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18,
        }}>
          {SERVICES.map((s, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [ref, vis] = useReveal();
            return (
              <ServiceCard key={s.name} service={s} ref={ref} vis={vis} delay={i % 4} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service, ref, vis, delay
}: {
  service: typeof SERVICES[number];
  ref: React.RefObject<HTMLDivElement>;
  vis: boolean;
  delay: number;
}) {
  return (
    <div
      ref={ref}
      className={`reveal rd${delay + 1}${vis ? " vis" : ""}`}
      style={{
        background: "var(--ivory)", border: "1px solid rgba(201,168,112,.1)",
        borderRadius: "var(--radius)", padding: "36px 28px",
        transition: "var(--ease)", cursor: "default", position: "relative", overflow: "hidden",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-7px)";
        el.style.boxShadow = "var(--shadow-lg)";
        el.style.borderColor = "rgba(201,168,112,.22)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.boxShadow = "";
        el.style.borderColor = "rgba(201,168,112,.1)";
      }}
    >
      <span style={{ fontSize: "1.8rem", marginBottom: 20, display: "block",
        color: "var(--gold)" }}>{service.icon}</span>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.38rem",
        fontWeight: 500, color: "var(--char)", marginBottom: 12 }}>{service.name}</h3>
      <p style={{ fontSize: ".83rem", fontWeight: 300, lineHeight: 1.75,
        color: "rgba(28,28,30,.58)", marginBottom: 18 }}>{service.desc}</p>
      <span style={{ fontSize: ".76rem", letterSpacing: ".1em",
        color: "var(--gold)", fontWeight: 400, textTransform: "uppercase" }}>
        {service.price}
      </span>
    </div>
  );
}
