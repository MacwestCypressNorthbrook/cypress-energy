"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const QHSEPolicy = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".qhse-policy-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 85%", once: true },
        },
      );
      gsap.fromTo(
        ".qhse-policy-card",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".qhse-policy-card", start: "top 80%", once: true },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-24 bg-[#F2F4F1] overflow-hidden">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="topo-qhse-policy" x="0" y="0" width="900" height="300" patternUnits="userSpaceOnUse">
            {[
              { d: "M0,90 Q225,50 450,90 Q675,130 900,90", o: 0.07 },
              { d: "M0,130 Q225,90 450,130 Q675,170 900,130", o: 0.06 },
              { d: "M0,50 Q225,10 450,50 Q675,90 900,50", o: 0.05 },
              { d: "M0,170 Q225,130 450,170 Q675,210 900,170", o: 0.05 },
              { d: "M0,210 Q225,170 450,210 Q675,250 900,210", o: 0.04 },
              { d: "M0,250 Q225,210 450,250 Q675,290 900,250", o: 0.03 },
            ].map((line, i) => (
              <path key={i} d={line.d} stroke="#13642C" fill="none" strokeWidth="1" opacity={line.o} />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-qhse-policy)" />
      </svg>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="qhse-policy-card bg-white rounded-[3rem] p-10 md:p-14 shadow-sm flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="qhse-policy-heading space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">QHSE</p>

              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Policy <span className="text-foreground/20">Statement</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Our approach to quality, health and safety is something we constantly monitor and
              improve to serve our clients with the highest standards.
            </p>

            <Link
              href="/qhse"
              className="inline-flex items-center gap-3 bg-[#13642C] hover:bg-[#0f4f22] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105 shadow-lg shadow-[#13642C]/20"
            >
              Our Latest Report
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl">
              <div className="absolute inset-0 border border-[#DC5817]/20 rounded-[2.5rem] pointer-events-none" />

              <img
                src="/images/1H6A2643-scaled.jpeg"
                alt="Safety Operations"
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QHSEPolicy;
