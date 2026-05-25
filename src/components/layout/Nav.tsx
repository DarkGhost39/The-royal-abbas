"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { WA_URL } from "@/lib/constants";

const LINKS = ["About", "Services", "Team", "Gallery", "Reviews"];

export default function Nav() {
  const scrolled = useScrolled(40);
  const [open, setOpen]  = useState(false);

  return (
    <>
      {/* ── Desktop Nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
          px-12 h-[76px] transition-all duration-300
          ${scrolled
            ? "bg-[var(--glass)] backdrop-blur-2xl border-b border-[rgba(201,168,112,.14)] shadow-[0_4px_32px_rgba(61,34,20,.05)]"
            : ""
          }`}
      >
        {/* Logo */}
        <a href="/" className="font-cormorant text-[1.25rem] font-semibold tracking-[.18em]
          text-[var(--char)] uppercase">
          THE <span className="text-[var(--gold)]">ROYAL</span> ABAAS
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-[.74rem] font-normal tracking-[.14em] uppercase
                  text-[var(--char)] opacity-65 hover:opacity-100 hover:text-[var(--gold)]
                  transition-all duration-300 no-underline"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-[10px] bg-[var(--char)] text-[var(--ivory)] rounded-[40px]
                text-[.74rem] tracking-[.1em] uppercase no-underline
                hover:bg-[var(--gold)] transition-all duration-300"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-1 text-[var(--char)]"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {open && (
        <div className="fixed inset-0 z-[99] bg-[var(--ivory)] flex flex-col
          items-center justify-center gap-8">
          <button
            className="absolute top-7 right-6 bg-transparent border-none
              cursor-pointer text-[var(--char)]"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-cormorant text-[2.4rem] font-light text-[var(--char)]
                no-underline opacity-75 hover:opacity-100 hover:text-[var(--gold)]
                transition-all duration-300 tracking-[.04em]"
            >
              {l}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-10 py-4 bg-[var(--char)]
              text-[var(--ivory)] rounded-[40px] text-[.82rem] tracking-[.15em]
              uppercase no-underline hover:bg-[var(--gold)] transition-all duration-300"
          >
            <Sparkles size={14} /> Book Appointment
          </a>
        </div>
      )}
    </>
  );
}
