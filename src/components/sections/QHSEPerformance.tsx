"use client";

import React, { useRef } from "react";
import CircleButton from "../ui/CircleButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "LTIFR", sublabel: "Lost Time Injury Frequency Rate", value: 0, accent: "green" },
  {
    label: "TRIFR",
    sublabel: "Total Recordable Injury Frequency Rate",
    value: 0,
    accent: "orange",
  },
  { label: "First Aid", sublabel: "First Aid Case Count", value: 0, accent: "green" },
  { label: "Fatality", sublabel: "Fatalities Count", value: 0, accent: "orange" },
];

const QHSEPerformance = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".qhse-heading",
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
        ".qhse-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: ".qhse-grid", start: "top 80%", once: true },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-10 md:py-12 bg-transparent overflow-hidden">
      {/* SAME blueprint grid style */}
      <svg
        className="hidden absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="topo-qhse"
            x="0"
            y="0"
            width="900"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            {[
              { d: "M0,70 Q225,30 450,70 Q675,110 900,70", o: 0.08 },
              { d: "M0,110 Q225,70 450,110 Q675,150 900,110", o: 0.07 },
              { d: "M0,40 Q225,0 450,40 Q675,80 900,40", o: 0.06 },
              { d: "M0,150 Q225,110 450,150 Q675,190 900,150", o: 0.05 },
              { d: "M0,190 Q225,150 450,190 Q675,230 900,190", o: 0.04 },
              { d: "M0,230 Q225,190 450,230 Q675,270 900,230", o: 0.04 },
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
        <rect width="100%" height="100%" fill="url(#topo-qhse)" />
      </svg>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Heading aligned with Advantage */}
        <div className="qhse-heading flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">
              Safety Metrics
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              QHSE <span className="text-foreground/20">Performance</span>
            </h2>
          </div>

          <CircleButton href="/qhse" variant="secondary">
            View Details
          </CircleButton>
        </div>

        {/* Grid */}
        <div className="qhse-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const green = stat.accent === "green";
            const hoverBg = green ? "hover:bg-[#082E29]" : "hover:bg-[#DC5817]";
            const hoverText = green ? "group-hover:text-[#13642C]" : "group-hover:text-[#DC5817]";
            const numColor = green ? "text-[#13642C]/20" : "text-[#DC5817]/20";

            return (
              <div
                key={i}
                className={`qhse-card group bg-white rounded-[0.5rem] p-10 shadow-sm ${hoverBg} hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-65`}
              >
                <div className="space-y-4">
                  <span
                    className={`text-6xl font-black ${numColor} group-hover:text-white/20 transition-colors`}
                  >
                    {stat.value}
                  </span>

                  <div>
                    <h3
                      className={`text-lg font-black uppercase tracking-widest ${hoverText} group-hover:text-white transition-colors`}
                    >
                      {stat.label}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-white/70 text-xs font-medium mt-2 leading-relaxed transition-colors">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QHSEPerformance;
