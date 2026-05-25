import { Sparkles } from "lucide-react";
import { WA_URL, SITE_TAGLINE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative", minHeight: "100vh", display: "flex",
        alignItems: "center", justifyContent: "center", overflow: "hidden",
        background: "linear-gradient(140deg,#F9EDEA 0%,#FEF8F4 45%,#F4ECE4 75%,#EDE4DC 100%)",
      }}
    >
      {/* Ambient Orbs */}
      {[
        { w:700, h:700, top:"-150px", right:"-150px", color:"rgba(201,168,112,.2)",  dur:"9s" },
        { w:500, h:500, bottom:"-80px",left:"-80px",   color:"rgba(232,200,200,.45)", dur:"11s", rev:true },
        { w:220, h:220, top:"38%",    left:"18%",      color:"rgba(201,168,112,.22)", dur:"7s"  },
        { w:120, h:120, top:"20%",    right:"25%",     color:"rgba(232,200,200,.6)",  dur:"5s"  },
      ].map((o, i) => (
        <div
          key={i}
          style={{
            position: "absolute", borderRadius: "50%", pointerEvents: "none",
            width: o.w, height: o.h,
            ...(o.top    ? { top:    o.top }    : {}),
            ...(o.bottom ? { bottom: o.bottom } : {}),
            ...(o.left   ? { left:   o.left }   : {}),
            ...(o.right  ? { right:  o.right }  : {}),
            background: `radial-gradient(circle,${o.color} 0%,transparent 68%)`,
            animation: `floatY ${o.dur} ease-in-out infinite ${o.rev ? "reverse" : ""}`,
          }}
        />
      ))}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center",
        padding: "0 24px", maxWidth: 880 }}>

        <div className="anim-up d1" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "8px 20px", border: "1px solid rgba(201,168,112,.35)",
          borderRadius: 40, fontSize: ".68rem", letterSpacing: ".28em",
          textTransform: "uppercase", color: "var(--gold-d)", marginBottom: 28,
          background: "rgba(255,255,255,.5)", backdropFilter: "blur(8px)",
        }}>
          <span style={{ width:5, height:5, borderRadius:"50%", background:"var(--gold)",
            display:"inline-block", animation:"floatY 2s ease-in-out infinite" }} />
          ✦ Luxury Unisex Salon · Established 2024
        </div>

        <h1 className="anim-up d2" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(4rem,11vw,8.5rem)", fontWeight: 300,
          lineHeight: 0.92, color: "var(--char)", letterSpacing: "-.02em",
          marginBottom: 6,
        }}>
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>The</em> Royal
          <br />
          <strong style={{ fontWeight: 500 }}>Abaas</strong>
        </h1>

        <p className="anim-up d3" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.4rem,3.5vw,2.8rem)", fontWeight: 300,
          fontStyle: "italic", color: "var(--dusty)", marginBottom: 28,
          letterSpacing: ".02em",
        }}>
          {SITE_TAGLINE}
        </p>

        <p className="anim-up d4 hero-desc" style={{
          fontSize: ".92rem", fontWeight: 300, color: "rgba(28,28,30,.55)",
          letterSpacing: ".06em", maxWidth: 440, margin: "0 auto 52px",
          lineHeight: 1.85,
        }}>
          A premium sanctuary of beauty and grooming, crafted for those who demand nothing but the finest.
        </p>

        <div className="anim-up d5" style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 16, flexWrap: "wrap",
        }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "16px 48px", background: "var(--char)", color: "var(--ivory)",
            border: "none", borderRadius: 60, fontFamily: "'Jost', sans-serif",
            fontSize: ".8rem", fontWeight: 400, letterSpacing: ".18em",
            textTransform: "uppercase", textDecoration: "none", cursor: "pointer",
            transition: "var(--ease)",
          }}>
            <Sparkles size={14} /> Book Appointment
          </a>
          <a href="#services" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "15px 40px", background: "transparent", color: "var(--char)",
            border: "1px solid rgba(28,28,30,.18)", borderRadius: 60,
            fontFamily: "'Jost', sans-serif", fontSize: ".8rem", fontWeight: 400,
            letterSpacing: ".18em", textTransform: "uppercase", textDecoration: "none",
            cursor: "pointer", transition: "var(--ease)",
          }}>
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
        animation: "fadeIn 1s 1s both",
      }}>
        <span style={{ fontSize: ".62rem", letterSpacing: ".25em",
          textTransform: "uppercase", color: "rgba(28,28,30,.35)" }}>
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
