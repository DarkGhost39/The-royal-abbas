import { LogOut } from "lucide-react";
import type { AdminTab } from "@/types";
import { NAV_ITEMS } from "./AdminDashboard";

interface Props {
  tab: AdminTab;
  setTab: (t: AdminTab) => void;
}

export default function Sidebar({ tab, setTab }: Props) {
  return (
    <aside style={{
      position: "fixed", left: 0, top: 0, bottom: 0, width: 248,
      background: "#1C1C1E", display: "flex", flexDirection: "column", zIndex: 10,
    }}>
      {/* Logo */}
      <div style={{ padding: "28px 24px 24px",
        borderBottom: "1px solid rgba(255,255,255,.07)" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem",
          fontWeight: 400, letterSpacing: ".1em", color: "#FEFCF9" }}>
          THE <span style={{ color: "#C9A870" }}>ROYAL</span> ABAAS
        </div>
        <div style={{ fontSize: ".62rem", letterSpacing: ".2em", textTransform: "uppercase",
          color: "rgba(254,252,249,.3)", marginTop: 4 }}>
          Admin Dashboard
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "20px 0", flex: 1 }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id as AdminTab)}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "11px 22px", fontSize: ".8rem", fontWeight: 400,
              letterSpacing: ".03em", cursor: "pointer", transition: "var(--ease)",
              background: "none", border: "none", width: "100%", textAlign: "left",
              color: tab === item.id ? "#C9A870" : "rgba(254,252,249,.5)",
              borderLeft: tab === item.id ? "2px solid #C9A870" : "2px solid transparent",
              backgroundColor: tab === item.id ? "rgba(255,255,255,.05)" : "transparent",
              fontFamily: "'Jost', sans-serif",
            }}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
        <a href="/" style={{
          display: "flex", alignItems: "center", gap: 12, padding: "11px 0",
          fontSize: ".8rem", color: "rgba(254,252,249,.35)", textDecoration: "none",
          transition: "var(--ease)", fontFamily: "'Jost', sans-serif",
        }}>
          <LogOut size={15} /> Exit Dashboard
        </a>
      </div>
    </aside>
  );
}
