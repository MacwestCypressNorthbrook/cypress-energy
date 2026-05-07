"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  "/images/1H6A2307-scaled.jpeg",
  "/images/1H6A2643-scaled.jpeg",
  "/images/1H6A2631-scaled.jpeg",
  "/images/1H6A2589-scaled(1).jpeg",
  "/images/1H6A2856-1-scaled.jpeg",
];

const OperationsGallery = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gallery-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".gallery-heading", start: "top 85%", once: true },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-24 bg-transparent overflow-hidden">
      <svg
        className="hidden absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="topo-gallery"
            x="0"
            y="0"
            width="900"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            {[
              { d: "M0,80 Q225,40 450,80 Q675,120 900,80", o: 0.07 },
              { d: "M0,120 Q225,80 450,120 Q675,160 900,120", o: 0.06 },
              { d: "M0,45 Q225,5 450,45 Q675,85 900,45", o: 0.05 },
              { d: "M0,160 Q225,120 450,160 Q675,200 900,160", o: 0.05 },
              { d: "M0,200 Q225,160 450,200 Q675,240 900,200", o: 0.04 },
              { d: "M0,240 Q225,200 450,240 Q675,280 900,240", o: 0.03 },
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
        <rect width="100%" height="100%" fill="url(#topo-gallery)" />
      </svg>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl mb-16">
        <div className="gallery-heading flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">
              Visual Showcase
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Operations <span className="text-foreground/20">Gallery</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-md text-sm md:text-base font-medium">
            Capturing the precision and scale of our offshore activities and equipment.
          </p>
        </div>
      </div>

      {/* Scroll Row */}
      <div className="relative z-10 overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-4 w-max animate-scroll">
          {[...galleryImages, ...galleryImages].map((src, index) => (
            <div
              key={index}
              className="group relative max-w-115 aspect-video rounded-[1.5rem] overflow-hidden bg-white shadow-sm transition-all duration-500"
            >
              <img
                src={src}
                alt={`Operation ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 border border-[#13642C]/10 rounded-[2.5rem] pointer-events-none group-hover:border-[#13642C]/30 transition-colors duration-500" /> */}
            </div>
          ))}
        </div>
      </div>

      {/* edge fade */}
      {/* <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F2F4F1] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F2F4F1] to-transparent" /> */}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OperationsGallery;
