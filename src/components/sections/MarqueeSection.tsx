"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MarqueeSectionProps {
  text: string;
  className?: string;
}

const MarqueeSection: React.FC<MarqueeSectionProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      const totalWidth = marquee.scrollWidth / 2;

      gsap.to(marquee, {
        x: -totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      className={`relative w-full py-20 md:py-32 overflow-hidden bg-white border-y border-black/5 ${className}`}
    >
      <div 
        ref={marqueeRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <h2 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-display font-light uppercase tracking-tighter leading-none text-black">
              {text} <span className="text-[#DC5817]">/</span>
            </h2>
            <h2 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-display font-light uppercase tracking-tighter leading-none text-transparent stroke-black stroke-1" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.2)" }}>
              {text} <span className="text-[#DC5817]">/</span>
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
