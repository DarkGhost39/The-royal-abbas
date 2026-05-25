import { Plus, Edit2, Eye, Trash2 } from "lucide-react";
import { SERVICES } from "@/data";

export default function ServicesTab() {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 28,
      boxShadow: "0 2px 12px rgba(28,28,30,.05)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 24 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem",
          fontWeight: 400, color: "#1C1C1E" }}>Manage Services</div>
        <button style={{ display: "inline-flex", alignItems: "center", gap: 6,
          padding: "9px 18px", background: "#1C1C1E", color: "white", border: "none",
          borderRadius: 8, fontSize: ".76rem", cursor: "pointer", fontFamily: "'Jost', sans-serif" }}>
          <Plus size={13} /> Add Service
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Service Name", "Description", "Starting Price", "Status", "Actions"].map((h) => (
              <th key={h} style={{ textAlign: "left", fontSize: ".65rem", letterSpacing: ".16em",
                textTransform: "uppercase", color: "rgba(28,28,30,.38)", padding: "0 0 12px",
                borderBottom: "1px solid rgba(28,28,30,.07)", fontWeight: 400 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SERVICES.map((s) => (
            <tr key={s.name}>
              <td style={{ padding: "14px 0", fontSize: ".83rem", fontWeight: 400,
                color: "#1C1C1E", borderBottom: "1px solid rgba(28,28,30,.045)" }}>{s.name}</td>
              <td style={{ padding: "14px 16px 14px 0", fontSize: ".83rem", fontWeight: 300,
                color: "rgba(28,28,30,.7)", maxWidth: 220, overflow: "hidden",
                textOverflow: "ellipsis", whiteSpace: "nowrap",
                borderBottom: "1px solid rgba(28,28,30,.045)" }}>{s.desc}</td>
              <td style={{ padding: "14px 16px 14px 0", fontSize: ".83rem", fontWeight: 300,
                color: "rgba(28,28,30,.7)", borderBottom: "1px solid rgba(28,28,30,.045)" }}>
                {s.price}</td>
              <td style={{ padding: "14px 16px 14px 0", borderBottom: "1px solid rgba(28,28,30,.045)" }}>
                <span style={{ display: "inline-flex", padding: "3px 10px", borderRadius: 20,
                  fontSize: ".64rem", background: "rgba(34,197,94,.1)", color: "#16A34A" }}>
                  Active
                </span>
              </td>
              <td style={{ padding: "14px 0", borderBottom: "1px solid rgba(28,28,30,.045)" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {[<Edit2 size={13} />, <Eye size={13} />, <Trash2 size={13} />].map((icon, i) => (
                    <button key={i} style={{ padding: 6, borderRadius: 6, border: "none",
                      cursor: "pointer", background: "rgba(28,28,30,.05)",
                      color: "rgba(28,28,30,.45)", transition: "var(--ease)" }}>
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
