"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CEOMessage = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".ceo-quote-text",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ceo-quote-text", start: "top 80%", once: true },
        },
      );
      gsap.fromTo(
        ".ceo-sig",
        { opacity: 0, scale: 0.88, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".ceo-sig", start: "top 88%", once: true },
        },
      );
      gsap.fromTo(
        ".ceo-big-quote",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%", once: true },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-12 bg-[#F2F4F1] overflow-hidden">
      {/* Topographic contour lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="topo-ceo" x="0" y="0" width="900" height="300" patternUnits="userSpaceOnUse">
            {[
              { d: "M0,80 Q225,40 450,80 Q675,120 900,80", o: 0.08 },
              { d: "M0,120 Q225,80 450,120 Q675,160 900,120", o: 0.07 },
              { d: "M0,45 Q225,5 450,45 Q675,85 900,45", o: 0.06 },
              { d: "M0,160 Q225,120 450,160 Q675,200 900,160", o: 0.05 },
              { d: "M0,200 Q225,160 450,200 Q675,240 900,200", o: 0.04 },
              { d: "M0,240 Q225,200 450,240 Q675,280 900,240", o: 0.04 },
            ].map((line, i) => (
              <path
                key={i}
                d={line.d}
                stroke="#13642C"
                fill="none"
                strokeWidth="1"
                opacity={line.o}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-ceo)" />
      </svg>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* Giant quote */}
        <div
          className="ceo-big-quote text-[#DC5817]/20 font-black leading-none select-none text-[14rem] md:text-[18rem] absolute -top-10 left-4 pointer-events-none"
          aria-hidden
        >
          "
        </div>

        <div className="relative text-center space-y-12 pt-20">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">
              Leadership
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              CEO <span className="text-foreground/20">Message</span>
            </h2>
          </div>

          <blockquote className="ceo-quote-text text-2xl md:text-3xl lg:text-4xl text-[#13642C] font-light leading-relaxed italic max-w-3xl mx-auto">
            "We firmly believe in our company and our people. The combination of commitment to our
            core values, technical expertise, and experience enables us to drive sustainable growth
            for our clients continually."
          </blockquote>

          <div className="ceo-sig flex flex-col items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#DC5817] ring-offset-4 ring-offset-white shadow-xl">
                <img
                  src="/images/Screenshot-2023-02-28-at-13.53.31.png"
                  alt="Kwabena Amponsah Osei-Bonsu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="w-12 h-px bg-[#DC5817]/50 mx-auto mb-4" />

              <h4 className="text-lg font-black text-[#13642C] uppercase tracking-tight">
                Kwabena Amponsah Osei-Bonsu
              </h4>

              <p className="text-[#DC5817] font-bold uppercase tracking-widest text-xs">
                CEO, Cypress Energy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
