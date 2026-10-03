"use client";

import { useState } from "react";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#results", label: "Benefits" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">

        {/* Logo / Brand */}
        <a
          href="#"
          className="flex items-center gap-3 font-bold text-lg text-ink-900"
        >
          <img
            src="/aidme-logo.png"
            alt="Aidme Medical Solutions"
            className="h-10 w-10 object-contain"
          />

          <span>Aidme Medical Solutions</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Request a Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-900/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-xl">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-ink-900/5 bg-white md:hidden">
          <div className="container-x flex flex-col gap-4 py-5">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-700 transition hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="btn-primary w-full text-center"
              onClick={() => setOpen(false)}
            >
              Request a Demo
            </a>

          </div>
        </div>
      )}
    </header>
  );
}