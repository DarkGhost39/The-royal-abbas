"use client";

import { useState } from "react";
import {
  BarChart2, Scissors, Users, Image,
  MessageSquare, Settings, LogOut,
} from "lucide-react";
import type { AdminTab } from "@/types";
import Sidebar from "./Sidebar";
import OverviewTab     from "./tabs/OverviewTab";
import ServicesTab     from "./tabs/ServicesTab";
import TeamTab         from "./tabs/TeamTab";
import GalleryTab      from "./tabs/GalleryTab";
import TestimonialsTab from "./tabs/TestimonialsTab";
import SettingsTab     from "./tabs/SettingsTab";

export const NAV_ITEMS = [
  { id: "overview",      icon: <BarChart2 size={15} />,     label: "Overview"      },
  { id: "services",      icon: <Scissors size={15} />,      label: "Services"      },
  { id: "team",          icon: <Users size={15} />,         label: "Team"          },
  { id: "gallery",       icon: <Image size={15} />,         label: "Gallery"       },
  { id: "testimonials",  icon: <MessageSquare size={15} />, label: "Testimonials"  },
  { id: "settings",      icon: <Settings size={15} />,      label: "Settings"      },
] as const;

export default function AdminDashboard() {
  const [tab, setTab] = useState<AdminTab>("overview");

  const tabLabel = NAV_ITEMS.find((n) => n.id === tab)?.label ?? "Overview";

  return (
    <div style={{ minHeight: "100vh", background: "#F3F4F6", display: "flex",
      fontFamily: "'Jost', sans-serif" }}>

      <Sidebar tab={tab} setTab={setTab} />

      {/* Main */}
      <main style={{ marginLeft: 248, padding: 40, flex: 1, minHeight: "100vh" }}>

        {/* Top Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem",
              fontWeight: 400, color: "#1C1C1E" }}>
              {tabLabel}
            </div>
            <div style={{ fontSize: ".78rem", color: "rgba(28,28,30,.42)", fontWeight: 300,
              letterSpacing: ".04em", marginTop: 2 }}>
              The Royal Abaas · Manage your salon content
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "linear-gradient(135deg,#C9A870,#C5A8A8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem",
              fontWeight: 500, color: "#FEFCF9",
            }}>A</div>
            <div>
              <div style={{ fontSize: ".82rem", fontWeight: 400, color: "#1C1C1E" }}>Abaas Khan</div>
              <div style={{ fontSize: ".7rem", color: "rgba(28,28,30,.4)", fontWeight: 300 }}>Founder</div>
            </div>
          </div>
        </div>

        {/* Tab Panels */}
        {tab === "overview"     && <OverviewTab />}
        {tab === "services"     && <ServicesTab />}
        {tab === "team"         && <TeamTab />}
        {tab === "gallery"      && <GalleryTab />}
        {tab === "testimonials" && <TestimonialsTab />}
        {tab === "settings"     && <SettingsTab />}
      </main>

      {/* Back to website */}
      <a href="/" style={{
        position: "fixed", bottom: 28, right: 28,
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "12px 24px", background: "var(--gold)", color: "white",
        borderRadius: 40, fontSize: ".76rem", letterSpacing: ".1em",
        textTransform: "uppercase", textDecoration: "none",
        transition: "var(--ease)", boxShadow: "0 8px 28px rgba(201,168,112,.38)",
        fontFamily: "'Jost', sans-serif", zIndex: 200,
      }}>
        ← View Website
      </a>
    </div>
  );
}
