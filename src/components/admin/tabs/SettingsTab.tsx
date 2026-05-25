import { OPENING_HOURS } from "@/lib/constants";

const FIELDS = [
  { label: "Salon Name",        value: "The Royal Abaas",    key: "name"      },
  { label: "WhatsApp Number",   value: "+92 300 1234567",    key: "wa"        },
  { label: "Instagram Handle",  value: "@theroyalabaas",     key: "instagram" },
  { label: "Address",           value: "DHA Phase 6, Lahore",key: "address"   },
];

export default function SettingsTab() {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 28,
      boxShadow: "0 2px 12px rgba(28,28,30,.05)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 28 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem",
          fontWeight: 400, color: "#1C1C1E" }}>Salon Settings</div>
        <button style={{ display: "inline-flex", alignItems: "center", gap: 6,
          padding: "9px 18px", background: "#1C1C1E", color: "white", border: "none",
          borderRadius: 8, fontSize: ".76rem", cursor: "pointer", fontFamily: "'Jost', sans-serif" }}>
          Save Changes
        </button>
      </div>

      {/* Fields */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 28 }}>
        {FIELDS.map((f) => (
          <div key={f.key}>
            <label style={{ display: "block", fontSize: ".68rem", letterSpacing: ".14em",
              textTransform: "uppercase", color: "rgba(28,28,30,.42)", marginBottom: 8,
              fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
              {f.label}
            </label>
            <input
              defaultValue={f.value}
              style={{ width: "100%", padding: "10px 14px",
                border: "1px solid rgba(28,28,30,.1)", borderRadius: 8,
                fontSize: ".85rem", fontFamily: "'Jost', sans-serif",
                color: "#1C1C1E", background: "#FAFAFA", outline: "none" }}
            />
          </div>
        ))}
      </div>

      {/* Hours */}
      <div style={{ paddingTop: 24, borderTop: "1px solid rgba(28,28,30,.06)" }}>
        <div style={{ fontSize: ".78rem", fontWeight: 400, color: "#1C1C1E", marginBottom: 16 }}>
          Opening Hours
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {OPENING_HOURS.map(({ day, open, close }) => (
            <div key={day} style={{ background: "#F8F8F8", padding: "12px 14px", borderRadius: 8 }}>
              <div style={{ fontSize: ".72rem", color: "rgba(28,28,30,.45)", marginBottom: 8,
                fontFamily: "'Jost', sans-serif" }}>{day}</div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <input defaultValue={open} style={{ width: 70, padding: "5px 8px",
                  border: "1px solid rgba(28,28,30,.1)", borderRadius: 6,
                  fontSize: ".8rem", fontFamily: "'Jost', sans-serif" }} />
                <span style={{ color: "rgba(28,28,30,.3)", fontSize: ".8rem" }}>—</span>
                <input defaultValue={close} style={{ width: 70, padding: "5px 8px",
                  border: "1px solid rgba(28,28,30,.1)", borderRadius: 6,
                  fontSize: ".8rem", fontFamily: "'Jost', sans-serif" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
