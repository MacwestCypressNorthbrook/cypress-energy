"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const logos = [
  { src: "/images/partners/eni.webp", alt: "ENI Ghana" },
  { src: "/images/partners/tullow.webp", alt: "Tullow Oil" },
  { src: "/images/partners/boor.webp", alt: "Borr Drilling" },
  { src: "/images/partners/rina.webp", alt: "RINA" },
  { src: "/images/partners/eo.webp", alt: "EO" },
  { src: "/images/partners/macwest.webp", alt: "Macwest" },
  { src: "/images/partners/northbrook.webp", alt: "Northbrook" },
];

const Partners = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;
      const totalWidth = trackRef.current.scrollWidth / 2;
      gsap.to(trackRef.current, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-0 overflow-hidden">
      {/* Topographic contour pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="topo-partners"
            x="0"
            y="0"
            width="700"
            height="220"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,80 Q175,40 350,80 Q525,120 700,80"
              stroke="#13642C"
              fill="none"
              strokeWidth="1"
              opacity="0.07"
            />
            <path
              d="M0,115 Q175,75 350,115 Q525,155 700,115"
              stroke="#13642C"
              fill="none"
              strokeWidth="1"
              opacity="0.05"
            />
            <path
              d="M0,48 Q175,8 350,48 Q525,88 700,48"
              stroke="#13642C"
              fill="none"
              strokeWidth="1"
              opacity="0.04"
            />
            <path
              d="M0,150 Q175,110 350,150 Q525,190 700,150"
              stroke="#13642C"
              fill="none"
              strokeWidth="1"
              opacity="0.04"
            />
            <path
              d="M0,185 Q175,145 350,185 Q525,225 700,185"
              stroke="#13642C"
              fill="none"
              strokeWidth="1"
              opacity="0.03"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-partners)" />
      </svg>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            Our <span className="text-foreground/20">Partners</span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden">
        <div ref={trackRef} className="flex items-center will-change-transform">
          {/* Original + duplicate for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="shrink-0 px-10 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
