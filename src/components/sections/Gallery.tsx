"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { GALLERY } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Gallery() {
  const [headerRef, headerVis] = useReveal();

  return (
    <section id="gallery" style={{ padding: "120px 48px", background: "var(--ivory)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div ref={headerRef} style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 64,
        }}>
          <SectionHeader
            eyebrow="Visual Portfolio"
            title={<>The <em style={{ color: "var(--gold)" }}>Abaas</em><br />Aesthetic</>}
            visible={headerVis}
          />
          <p className={`reveal rd3${headerVis ? " vis" : ""}`}
            style={{ fontSize: ".85rem", fontWeight: 300, color: "rgba(28,28,30,.5)",
              maxWidth: 280, lineHeight: 1.7 }}>
            A curated glimpse into our world of luxury beauty, artful transformation,
            and premium craft.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="gallery-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.15fr .85fr 1fr",
          gridTemplateRows: "220px 220px 220px",
          gap: 10,
        }}>
          {GALLERY.map((item, i) => (
            <GalleryItem key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  item, index,
}: {
  item: typeof GALLERY[number];
  index: number;
}) {
  const spanStyles: Record<number, React.CSSProperties> = {
    0: { gridRow: "span 2" },
    3: { gridColumn: "span 2" },
    6: { gridRow: "span 2", gridColumn: 3 },
    7: { display: "none" },
  };

  return (
    <div
      style={{
        borderRadius: "var(--radius-sm)", overflow: "hidden",
        position: "relative", cursor: "pointer",
        ...spanStyles[index],
      }}
    >
      <Image
        src={`https://picsum.photos/seed/${item.seed}/600/800`}
        alt={item.label}
        fill
        style={{
          objectFit: "cover",
          transition: "transform .6s cubic-bezier(.25,.1,.25,1)",
        }}
      />
      {/* Overlay on hover via CSS — handled with group */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top,rgba(28,28,30,.65) 0%,transparent 55%)",
        opacity: 0, transition: "var(--ease)",
        display: "flex", alignItems: "flex-end", padding: 14,
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}
      >
        <span style={{ fontSize: ".72rem", letterSpacing: ".14em",
          textTransform: "uppercase", color: "rgba(255,255,255,.9)", fontWeight: 300 }}>
          {item.label}
        </span>
      </div>
    </div>
  );
}
