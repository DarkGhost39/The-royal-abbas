"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const STATS = [
  { num: "500+", label: "Happy Clients"    },
  { num: "8",    label: "Expert Staff"     },
  { num: "100%", label: "Premium Products" },
];

export default function About() {
  const [ref1, vis1] = useReveal();
  const [ref2, vis2] = useReveal();

  return (
    <section id="about" style={{ padding: "120px 48px", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="about-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 88, alignItems: "center",
        }}>

          {/* Visual */}
          <div ref={ref1} className={`reveal${vis1 ? " vis" : ""}`}
            style={{ position: "relative", height: 580 }}>
            {/* Main Image */}
            <div style={{
              position: "absolute", top: 0, left: 0, width: "73%", height: "84%",
              borderRadius: "var(--radius)", overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
            }}>
              <Image src="https://picsum.photos/seed/luxsalon1/600/700"
                alt="Salon Interior" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Accent Image */}
            <div style={{
              position: "absolute", bottom: 0, right: 0, width: "52%", height: "52%",
              borderRadius: "var(--radius)", overflow: "hidden",
              border: "6px solid var(--cream)", boxShadow: "var(--shadow)",
            }}>
              <Image src="https://picsum.photos/seed/luxsalon2/400/400"
                alt="Styling Detail" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Badge */}
            <div style={{
              position: "absolute", top: "50%", right: -16,
              transform: "translateY(-50%)", background: "var(--char)",
              color: "var(--ivory)", padding: "22px 18px", borderRadius: "var(--radius-sm)",
              textAlign: "center", minWidth: 118, boxShadow: "var(--shadow-lg)",
            }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem",
                fontWeight: 300, color: "var(--gold)", display: "block", lineHeight: 1 }}>
                5★
              </span>
              <span style={{ fontSize: ".62rem", letterSpacing: ".14em",
                textTransform: "uppercase", opacity: .65, lineHeight: 1.5, marginTop: 4, display: "block" }}>
                Rated<br />Premium
              </span>
            </div>
          </div>

          {/* Copy */}
          <div ref={ref2}>
            <span className={`reveal${vis2 ? " vis" : ""}`}
              style={{ fontSize: ".68rem", fontWeight: 400, letterSpacing: ".32em",
                textTransform: "uppercase", color: "var(--gold)", marginBottom: 14, display: "block" }}>
              Our Story
            </span>

            <h2 className={`reveal rd1${vis2 ? " vis" : ""}`}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem,5.5vw,4.8rem)",
                fontWeight: 300, lineHeight: 1.06, color: "var(--char)", letterSpacing: "-.02em" }}>
              Crafted for the<br /><em style={{ color: "var(--gold)" }}>Discerning Few</em>
            </h2>

            <div className={`gold-rule reveal rd2${vis2 ? " vis" : ""}`} style={{ margin: "22px 0" }} />

            <p className={`reveal rd3${vis2 ? " vis" : ""}`}
              style={{ fontSize: "1.02rem", fontWeight: 300, lineHeight: 1.95,
                color: "rgba(28,28,30,.68)", marginBottom: 24 }}>
              The Royal Abaas was born from a singular vision — to create a sanctuary where luxury
              beauty and expert grooming exist in perfect harmony. We believe that true elegance
              lies in the details, the unhurried touch, and the transformative power of artistry.
            </p>
            <p className={`reveal rd4${vis2 ? " vis" : ""}`}
              style={{ fontSize: "1.02rem", fontWeight: 300, lineHeight: 1.95,
                color: "rgba(28,28,30,.68)", marginBottom: 0 }}>
              Our team of master stylists and beauty experts bring international expertise to every
              appointment. From precision cuts to bespoke color treatments, every service is a
              curated experience designed exclusively for you.
            </p>

            {/* Stats */}
            <div className={`reveal rd5${vis2 ? " vis" : ""}`}
              style={{ display: "flex", gap: 44, marginTop: 44, paddingTop: 40,
                borderTop: "1px solid rgba(201,168,112,.2)" }}>
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem",
                    fontWeight: 300, color: "var(--gold)", display: "block", lineHeight: 1 }}>
                    {num}
                  </span>
                  <span style={{ fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase",
                    color: "rgba(28,28,30,.45)", marginTop: 5, display: "block" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
