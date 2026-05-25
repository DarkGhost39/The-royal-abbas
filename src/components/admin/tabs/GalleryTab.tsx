import Image from "next/image";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { GALLERY } from "@/data";

export default function GalleryTab() {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 28,
      boxShadow: "0 2px 12px rgba(28,28,30,.05)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 24 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem",
          fontWeight: 400, color: "#1C1C1E" }}>Manage Gallery</div>
        <button style={{ display: "inline-flex", alignItems: "center", gap: 6,
          padding: "9px 18px", background: "#1C1C1E", color: "white", border: "none",
          borderRadius: 8, fontSize: ".76rem", cursor: "pointer", fontFamily: "'Jost', sans-serif" }}>
          <Plus size={13} /> Upload Image
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        {GALLERY.map((g) => (
          <div key={g.label} style={{ aspectRatio: "1", borderRadius: 10,
            overflow: "hidden", position: "relative", background: "#F0EDE8", cursor: "pointer" }}>
            <Image src={`https://picsum.photos/seed/${g.seed}/300/300`}
              alt={g.label} fill style={{ objectFit: "cover" }} />
            {/* Hover overlay via inline hack */}
            <div className="gal-admin-over" style={{
              position: "absolute", inset: 0, background: "rgba(0,0,0,.48)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              opacity: 0, transition: "opacity .3s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}
            >
              {[<Edit2 size={13} />, <Trash2 size={13} />].map((icon, i) => (
                <button key={i} style={{
                  padding: 8, borderRadius: 6, border: "none", cursor: "pointer",
                  background: "rgba(255,255,255,.15)", color: "white",
                }}>{icon}</button>
              ))}
            </div>
          </div>
        ))}
        {/* Add New */}
        <div style={{ aspectRatio: "1", borderRadius: 10, border: "2px dashed rgba(28,28,30,.12)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", background: "transparent" }}>
          <div style={{ textAlign: "center", color: "rgba(28,28,30,.35)" }}>
            <Plus size={24} style={{ marginBottom: 6 }} />
            <div style={{ fontSize: ".74rem", letterSpacing: ".06em" }}>Add Photo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
