"use client";

import TransitionLink from "@/components/TransitionLink";

const serviceLinks = [
  // { label: "Offshore Vessel Supply", href: "/services/offshore-vessel-supply" },
  { label: "Offshore Vessel Supply", href: "/services#offshore-vessel-supply" },
  // { label: "Manpower Management", href: "/services/manpower" },
  { label: "Manpower Management", href: "/services#manpower" },
  // { label: "Power Generation", href: "/services/power-generation" },
  { label: "Power Generation", href: "/services#power-generation" },
  // { label: "Jack-up Drilling Rigs", href: "/services/jack-up-drilling-rigs" },
  { label: "Jack-up Drilling Rigs", href: "/services#jack-up-drilling-rigs" },
  // { label: "Geo Seismic Surveys", href: "/services/geo-seismic-surveys" },
  { label: "Geo Seismic Surveys", href: "/services#geo-seismic-surveys" },
  // { label: "Logistics & Freight", href: "/services/logistics-freight-forwarding" },
  { label: "Logistics & Freight", href: "/services#logistics-freight-forwarding" },
  { label: "All Services", href: "/services" },
];

const Footer = () => {
  return (
    <footer className="bg-transparent pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Refined 'Cuter' Engineering Blueprint CTA Card */}
        <div className="relative group rounded-[2.5rem] overflow-hidden mb-24 border border-[#13642C]/10 bg-linear-to-br from-[#FDFDFD] to-[#F5F7F5] shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-700 max-w-5xl mx-auto">
          {/* Blueprint Grid Background - Layered */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(#13642C 0.5px, transparent 0.5px)",
                backgroundSize: "20px 20px",
              }}
            />
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.02]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern
                id="footer-grid-refined"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#13642C" strokeWidth="0.1" />
              </pattern>
              <rect width="100" height="100" fill="url(#footer-grid-refined)" />
            </svg>
          </div>

          {/* Technical Markings - Subtle & Elegant */}
          <div className="absolute top-6 left-8 right-8 text-[8px] md:text-[9px] font-mono text-[#13642C]/20 uppercase tracking-[0.4em] flex justify-between md:justify-start md:gap-6 z-0">
            <span className="hidden sm:inline">REF: CE-CTA-2025</span>
            <span>COORD: 5.6037° N, 0.1870° W</span>
          </div>
          <div className="hidden md:block absolute bottom-6 right-8 text-[9px] font-mono text-[#13642C]/20 uppercase tracking-[0.4em]">
            SCALE: 1:50 / PRECISION: ELITE
          </div>

          {/* Delicate Corner Brackets */}
          <div className="absolute top-6 right-6 w-4 h-4 md:top-8 md:right-8 md:w-6 md:h-6 border-t border-r border-[#13642C]/15 rounded-tr-lg" />
          <div className="absolute bottom-6 left-6 w-4 h-4 md:bottom-8 md:left-8 md:w-6 md:h-6 border-b border-l border-[#13642C]/15 rounded-bl-lg" />

          <div className="relative p-10 md:p-16 pt-16 md:pt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 relative z-10">
              <div className="space-y-6 md:space-y-8 text-center md:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13642C]/5 border border-[#13642C]/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DC5817]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#13642C]">
                    Project Inquiry
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#13642C] uppercase tracking-tighter leading-[0.95] md:leading-[0.9]">
                  Ready to <br />
                  <span className="text-[#DC5817] underline decoration-[#DC5817]/20 underline-offset-4 md:underline-offset-6">
                    Collaborate?
                  </span>
                </h2>

                <p className="text-[#13642C]/60 font-bold text-xs md:text-sm max-w-md leading-relaxed uppercase tracking-widest opacity-80">
                  Partner with West Africa's most reliable energy logistics hub. Excellence in every
                  operation.
                </p>
              </div>

              <TransitionLink href="/contact" className="relative shrink-0">
                <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center group/btn">
                  {/* Rotating Technical Compass - More delicate */}
                  <div className="absolute inset-0 border border-[#13642C]/5 rounded-full" />
                  <div className="absolute inset-3 border border-dashed border-[#13642C]/10 rounded-full animate-spin-slow" />

                  {/* Main Action Button - Compact */}
                  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#13642C] group-hover/btn:scale-105 transition-all duration-500 shadow-xl flex flex-col items-center justify-center text-white gap-2 overflow-hidden ring-4 md:ring-6 ring-[#13642C]/5 ring-offset-0">
                    <span className="font-black uppercase text-[10px] md:text-sm tracking-tight z-10">
                      Start Now
                    </span>
                    <div className="w-6 md:w-10 h-[1.5px] bg-[#DC5817] z-10 transition-all duration-500 group-hover/btn:w-14" />

                    {/* Hover reveal */}
                    <div className="absolute inset-0 bg-[#DC5817] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </div>
                </div>
              </TransitionLink>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <TransitionLink href="/">
              <img src="/LOGO-FOOTER-3.png" alt="Cypress Energy" className="h-16 w-auto" />
            </TransitionLink>
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
                  <TransitionLink href={link.href} className="hover:text-black transition-colors">
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black uppercase tracking-widest text-sm text-[#13642C]">Company</h5>
            <ul className="space-y-3 text-sm font-bold text-muted-foreground">
              <li>
                <TransitionLink href="/about" className="hover:text-black transition-colors">
                  About Us
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/team" className="hover:text-black transition-colors">
                  Team
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/management" className="hover:text-black transition-colors">
                  Management
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/projects" className="hover:text-black transition-colors">
                  Projects
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/partners" className="hover:text-black transition-colors">
                  Partners
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/qhse" className="hover:text-black transition-colors">
                  QHSE Policy
                </TransitionLink>
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

        <div className="pt-0 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
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
        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
