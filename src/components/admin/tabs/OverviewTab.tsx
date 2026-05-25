import { Users, Scissors, Image, MessageSquare } from "lucide-react";

const STATS = [
  { icon: <Users size={18} />,       bg: "#F4E8E8", ic: "#C9A870", n: "8",  label: "Team Members",  trend: "↑ 2 this month" },
  { icon: <Scissors size={18} />,    bg: "#E8F4F8", ic: "#5B9BD5", n: "8",  label: "Active Services",trend: "All live"        },
  { icon: <Image size={18} />,       bg: "#F4F4E8", ic: "#8B9B5B", n: "8",  label: "Gallery Items",  trend: "↑ 3 added"      },
  { icon: <MessageSquare size={18}/>, bg: "#F8EDF4", ic: "#B55BA5", n: "5",  label: "Testimonials",   trend: "5★ average"     },
];

const ACTIVITY = [
  { title: "Gallery updated",      sub: "New interior photo added",        time: "2h ago" },
  { title: "Testimonial received", sub: "5★ review from Aisha S.",        time: "1d ago" },
  { title: "Service edited",       sub: "Keratin Treatment price updated", time: "3d ago" },
  { title: "Team member added",    sub: "Layla Rizvi — Junior Stylist",    time: "1w ago" },
];

export default function OverviewTab() {
  return (
    <>
      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)",
        gap: 18, marginBottom: 32 }}>
        {STATS.map((s) => (
          <div key={s.label} style={{ background: "white", borderRadius: 16,
            padding: 24, boxShadow: "0 2px 12px rgba(28,28,30,.05)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: s.bg,
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 14, color: s.ic }}>
              {s.icon}
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem",
              fontWeight: 400, color: "#1C1C1E", lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: ".72rem", color: "rgba(28,28,30,.42)",
              letterSpacing: ".08em", textTransform: "uppercase",
              marginTop: 6, fontWeight: 300 }}>{s.label}</div>
            <div style={{ fontSize: ".74rem", color: "#22C55E", marginTop: 6 }}>{s.trend}</div>
          </div>
        ))}
      </div>

      {/* Activity */}
      <div style={{ background: "white", borderRadius: 16, padding: 28,
        boxShadow: "0 2px 12px rgba(28,28,30,.05)" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem",
          fontWeight: 400, color: "#1C1C1E", marginBottom: 24 }}>
          Recent Activity
        </div>
        {ACTIVITY.map(({ title, sub, time }) => (
          <div key={title} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 0", borderBottom: "1px solid rgba(28,28,30,.05)",
          }}>
            <div>
              <div style={{ fontSize: ".84rem", fontWeight: 400, color: "#1C1C1E" }}>{title}</div>
              <div style={{ fontSize: ".76rem", color: "rgba(28,28,30,.45)",
                marginTop: 2, fontWeight: 300 }}>{sub}</div>
            </div>
            <div style={{ fontSize: ".72rem", color: "rgba(28,28,30,.35)", fontWeight: 300 }}>{time}</div>
          </div>
        ))}
      </div>
    </>
  );
}
