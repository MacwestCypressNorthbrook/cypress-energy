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
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Trigger immediate staggered spin when the grid enters the view
      gsap.fromTo(
        ".partner-card",
        { 
          rotationY: 0, 
          opacity: 0, 
          scale: 0.5 
        },
        {
          rotationY: 360,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: "back.out(1.2)", // Adds a slight "snap" at the end
          scrollTrigger: {
            trigger: ".partners-grid",
            start: "top 80%",
            toggleActions: "play none none none", // Plays once immediately
            once: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-12 md:py-24 overflow-hidden bg-transparent">
      <div className="relative z-10 container mx-auto px-4 max-w-7xl mb-20">
        <div className="space-y-2 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#DC5817]">Global Network</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
            Strategic <span className="text-foreground/20">Partnerships</span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="partners-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 perspective-[2000px]">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="partner-card group relative aspect-square bg-black/5 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center p-10 hover:bg-black/10 hover:border-white/40 transition-colors duration-300 shadow-xl"
            >
              {/* Refinement sheen */}
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-30 rounded-2xl" />
              
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 pointer-events-none"
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
