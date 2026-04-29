"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    id: "01",
    title: "Local Insight, Global Reach",
    description:
      "Ghanaian market expertise combined with international best practices from global partnerships.",
    accent: "orange",
  },
  {
    id: "02",
    title: "Supply Chain Networks",
    description:
      "Cypress Energy leads strategic supplier networks to eliminate delays and project risk.",
    accent: "green",
  },
  {
    id: "03",
    title: "Single Point of Contact",
    description:
      "One accountable partner managing multiple service streams to reduce vendor complexity.",
    accent: "orange",
  },
  {
    id: "04",
    title: "Proven at Scale",
    description:
      "Track record of supporting tier-1 operators like ENI and Tullow Oil on time-sensitive missions.",
    accent: "green",
  },
];

const Advantage = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".adv-heading",
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
        ".adv-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: ".adv-grid", start: "top 80%", once: true },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-24 bg-[#F2F4F1] overflow-hidden">
      {/* Blueprint engineering grid — technical/structural feel */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="topo-adv" x="0" y="0" width="900" height="300" patternUnits="userSpaceOnUse">
            {[
              { d: "M0,60 Q225,20 450,60 Q675,100 900,60", o: 0.08 },
              { d: "M0,100 Q225,60 450,100 Q675,140 900,100", o: 0.07 },
              { d: "M0,30 Q225,-10 450,30 Q675,70 900,30", o: 0.06 },
              { d: "M0,140 Q225,100 450,140 Q675,180 900,140", o: 0.05 },
              { d: "M0,180 Q225,140 450,180 Q675,220 900,180", o: 0.04 },
              { d: "M0,220 Q225,180 450,220 Q675,260 900,220", o: 0.04 },
            ].map((line, i) => (
              <path key={i} d={line.d} stroke="#13642C" fill="none" strokeWidth="1" opacity={line.o} />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-adv)" />
      </svg>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="adv-heading flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">Why Us</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              The Cypress <span className="text-foreground/20">Advantage</span>
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 bg-[#13642C] hover:bg-[#0f4f22] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105 shadow-lg shadow-[#13642C]/20"
          >
            Learn More
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

        <div className="adv-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv) => {
            const green = adv.accent === "green";
            const hoverBg = green ? "hover:bg-[#13642C]" : "hover:bg-[#DC5817]";
            const hoverText = green ? "group-hover:text-[#13642C]" : "group-hover:text-[#DC5817]";
            const numColor = green ? "text-[#13642C]/20" : "text-[#DC5817]/20";
            return (
              <div
                key={adv.id}
                className={`adv-card group bg-white rounded-[2.5rem] p-10 shadow-sm ${hoverBg} hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[280px]`}
              >
                <div className="space-y-4">
                  <span
                    className={`text-5xl font-black ${numColor} group-hover:text-white/20 transition-colors`}
                  >
                    {adv.id}
                  </span>
                  <h3
                    className={`text-xl font-black leading-tight ${hoverText} group-hover:text-white transition-colors`}
                  >
                    {adv.title}
                  </h3>
                </div>
                <p className="text-muted-foreground group-hover:text-white/70 text-sm font-medium leading-relaxed transition-colors">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
