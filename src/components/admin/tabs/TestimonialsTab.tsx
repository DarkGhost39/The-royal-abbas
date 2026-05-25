import { Plus, Edit2, Trash2, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data";

export default function TestimonialsTab() {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 28,
      boxShadow: "0 2px 12px rgba(28,28,30,.05)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 24 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem",
          fontWeight: 400, color: "#1C1C1E" }}>Manage Testimonials</div>
        <button style={{ display: "inline-flex", alignItems: "center", gap: 6,
          padding: "9px 18px", background: "#1C1C1E", color: "white", border: "none",
          borderRadius: 8, fontSize: ".76rem", cursor: "pointer", fontFamily: "'Jost', sans-serif" }}>
          <Plus size={13} /> Add Review
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Client", "Role", "Review", "Rating", "Actions"].map((h) => (
              <th key={h} style={{ textAlign: "left", fontSize: ".65rem", letterSpacing: ".16em",
                textTransform: "uppercase", color: "rgba(28,28,30,.38)", padding: "0 0 12px",
                borderBottom: "1px solid rgba(28,28,30,.07)", fontWeight: 400 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TESTIMONIALS.map((t) => (
            <tr key={t.name}>
              <td style={{ padding: "14px 0", fontSize: ".83rem", fontWeight: 400,
                color: "#1C1C1E", borderBottom: "1px solid rgba(28,28,30,.045)" }}>{t.name}</td>
              <td style={{ padding: "14px 16px 14px 0", fontSize: ".83rem", fontWeight: 300,
                color: "rgba(28,28,30,.7)", borderBottom: "1px solid rgba(28,28,30,.045)" }}>{t.role}</td>
              <td style={{ padding: "14px 16px 14px 0", fontSize: ".83rem", fontWeight: 300,
                color: "rgba(28,28,30,.7)", maxWidth: 200, overflow: "hidden",
                textOverflow: "ellipsis", whiteSpace: "nowrap",
                borderBottom: "1px solid rgba(28,28,30,.045)" }}>{t.text}</td>
              <td style={{ padding: "14px 16px 14px 0", borderBottom: "1px solid rgba(28,28,30,.045)" }}>
                <div style={{ display: "flex", gap: 2 }}>
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} size={11} fill="#C9A870" color="#C9A870" />
                  ))}
                </div>
              </td>
              <td style={{ padding: "14px 0", borderBottom: "1px solid rgba(28,28,30,.045)" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {[<Edit2 size={13} />, <Trash2 size={13} />].map((icon, i) => (
                    <button key={i} style={{ padding: 6, borderRadius: 6, border: "none",
                      cursor: "pointer", background: "rgba(28,28,30,.05)", color: "rgba(28,28,30,.45)" }}>
                      {icon}
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
