"use client";

import React from "react";
import Link from "next/link";

const serviceLinks = [
  { label: "Offshore Vessel Supply", href: "/services/offshore-vessel-supply" },
  { label: "Manpower Management", href: "/services/manpower" },
  { label: "Power Generation", href: "/services/power-generation" },
  { label: "Jack-up Drilling Rigs", href: "/services/jack-up-drilling-rigs" },
  { label: "Geo Seismic Surveys", href: "/services/geo-seismic-surveys" },
  { label: "Logistics & Freight", href: "/services/logistics-freight-forwarding" },
];

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* CTA Card */}
        <div className="bg-[#13642C] rounded-[3rem] p-12 md:p-24 relative overflow-hidden mb-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                Ready to work <br />
                with us?
              </h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-sm">
                Partner with Cypress Energy for reliable offshore and logistics solutions.
              </p>
            </div>

            <Link href="/contact" className="relative group cursor-pointer">
              <div
                className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#DC5817] flex items-center justify-center group-hover:bg-[#C44D14] transition-colors"
                style={{ animation: "spin-slow 20s linear infinite" }}
              >
                <div className="text-white text-center font-black leading-tight uppercase tracking-tighter">
                  Get <br /> Started
                </div>
              </div>
              <div
                className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                style={{ animation: "spin-slower 30s linear infinite" }}
              />
            </Link>
          </div>

          <div className="absolute top-10 right-10 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <Link href="/">
              <img src="/LOGO-FOOTER-3.png" alt="Cypress Energy" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed">
              Values that shape our operations. Indigenous Ghanaian oil & gas services company
              delivering excellence across West Africa.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="font-black uppercase tracking-widest text-sm text-[#13642C]">
              Our Services
            </h5>
            <ul className="space-y-3 text-sm font-bold text-muted-foreground">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black uppercase tracking-widest text-sm text-[#13642C]">Company</h5>
            <ul className="space-y-3 text-sm font-bold text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/management" className="hover:text-black transition-colors">
                  Management
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-black transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-black transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/qhse" className="hover:text-black transition-colors">
                  QHSE Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black uppercase tracking-widest text-sm text-[#13642C]">Contact</h5>
            <div className="space-y-4 text-sm font-medium text-muted-foreground">
              <p className="leading-relaxed">
                No 12 Joseph Richard Asiedu St,
                <br />
                Accra-Ghana
              </p>
              <div>
                <a
                  href="tel:+233244270797"
                  className="block hover:text-black transition-colors font-bold"
                >
                  +233 (0) 244 270797
                </a>
                <a
                  href="tel:+233302904525"
                  className="block hover:text-black transition-colors font-bold"
                >
                  +233 (0) 302 904525
                </a>
              </div>
              <a
                href="mailto:info@cypressenergyghana.com"
                className="block hover:text-black transition-colors font-bold break-all"
              >
                info@cypressenergyghana.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
          <p>Cypress Energy Company Limited</p>
          <p>© 2025 All Rights Reserved · Cypress Energy</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slower {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
