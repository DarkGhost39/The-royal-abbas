import { Instagram, Phone } from "lucide-react";
import { OPENING_HOURS, WA_URL, INSTAGRAM_URL, PHONE_NUMBER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "var(--mocha)", color: "var(--ivory)", padding: "72px 48px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Grid */}
        <div className="footer-grid" style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
          gap: 64, marginBottom: 56,
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem",
              fontWeight: 400, letterSpacing: ".1em", marginBottom: 14 }}>
              THE <span style={{ color: "var(--gold)" }}>ROYAL</span> ABAAS
            </div>
            <p style={{ fontSize: ".83rem", fontWeight: 300, lineHeight: 1.75,
              color: "rgba(254,252,249,.45)", maxWidth: 280 }}>
              A premium unisex salon crafted for those who appreciate the art of beauty
              and the luxury of exceptional care.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {[
                { href: INSTAGRAM_URL, icon: <Instagram size={15} /> },
                { href: `tel:${PHONE_NUMBER}`,   icon: <Phone size={15} />     },
              ].map(({ href, icon }, i) => (
                <a key={i} href={href} target={i === 0 ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{ width: 40, height: 40, borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,.1)", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    color: "rgba(254,252,249,.5)", textDecoration: "none",
                    transition: "var(--ease)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(254,252,249,.5)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div style={{ fontSize: ".65rem", letterSpacing: ".28em", textTransform: "uppercase",
              color: "var(--gold)", marginBottom: 20, fontWeight: 400 }}>
              Opening Hours
            </div>
            <ul style={{ listStyle: "none" }}>
              {OPENING_HOURS.map(({ day, open, close }) => (
                <li key={day} style={{ display: "flex", justifyContent: "space-between",
                  fontSize: ".8rem", fontWeight: 300, color: "rgba(254,252,249,.55)",
                  padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                  <span>{day}</span>
                  <span style={{ color: "rgba(254,252,249,.35)" }}>{open}–{close}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: ".65rem", letterSpacing: ".28em", textTransform: "uppercase",
              color: "var(--gold)", marginBottom: 20, fontWeight: 400 }}>
              Quick Links
            </div>
            <ul style={{ listStyle: "none" }}>
              {["About Us", "Services", "Our Team", "Gallery", "Book Now"].map((l) => (
                <li key={l} style={{ padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                  <a href={l === "Book Now" ? WA_URL : `#${l.toLowerCase().replace(/\s+/g, "")}`}
                    target={l === "Book Now" ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{ fontSize: ".8rem", fontWeight: 300, color: "rgba(254,252,249,.55)",
                      textDecoration: "none", transition: "var(--ease)" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: 24,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: ".73rem", color: "rgba(254,252,249,.28)",
            fontWeight: 300, letterSpacing: ".06em" }}>
            © {new Date().getFullYear()} The Royal Abaas. All rights reserved.
          </span>
          <a href="/admin" style={{ fontSize: ".67rem", letterSpacing: ".18em",
            textTransform: "uppercase", color: "rgba(254,252,249,.18)", textDecoration: "none" }}>
            Admin Panel
          </a>
        </div>
      </div>
    </footer>
  );
}
