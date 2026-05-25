"use client";

import Image from "next/image";
import { Crown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { TEAM } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Team() {
  const [headerRef, headerVis] = useReveal();

  return (
    <section id="team" style={{ padding: "120px 48px", background: "var(--blush)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div ref={headerRef}>
          <SectionHeader
            eyebrow="The Artisans"
            title={<>Meet Our<br /><em style={{ color: "var(--gold)" }}>Expert Team</em></>}
            visible={headerVis}
          />
        </div>

        <div className="team-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 22, marginTop: 64,
        }}>
          {TEAM.map((member, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [ref, vis] = useReveal();
            return (
              <div
                key={member.name}
                ref={ref}
                className={`reveal rd${(i % 4) + 1}${vis ? " vis" : ""}`}
                style={{
                  background: "var(--ivory)", borderRadius: "var(--radius)",
                  overflow: "hidden", transition: "var(--ease)",
                  boxShadow: "0 4px 24px rgba(61,34,20,.05)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-9px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(61,34,20,.05)";
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                  <Image
                    src={`https://picsum.photos/seed/${member.seed}/400/520`}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover", transition: "transform .6s cubic-bezier(.25,.1,.25,1)" }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: 20 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.18rem",
                    fontWeight: 500, color: "var(--char)", marginBottom: 3 }}>
                    {member.name}
                  </div>
                  <div style={{ fontSize: ".72rem", letterSpacing: ".08em",
                    color: "var(--gold)", textTransform: "uppercase",
                    fontWeight: 400, marginBottom: 7 }}>
                    {member.role}
                  </div>
                  <div style={{ fontSize: ".78rem", color: "rgba(28,28,30,.5)", fontWeight: 300 }}>
                    {member.expertise}
                  </div>
                  {member.isOwner && (
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: 4,
                      background: "var(--char)", color: "var(--gold)",
                      fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase",
                      padding: "3px 10px", borderRadius: 20, marginTop: 8,
                    }}>
                      <Crown size={9} /> Founder
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
