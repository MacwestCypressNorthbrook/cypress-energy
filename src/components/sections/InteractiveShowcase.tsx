"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const showcaseImages = [
  "/images/1bb29c36ab5595291b975f0e0daafc0c-xlarge.jpg",
  "/images/389f3831e643a07448afb80f4dd3b8ad-xlarge.jpg",
  "/images/7258b77a67b56c443499f654e54770f0-xlarge.jpg",
  "/images/73224431b07073688c4d4a54a934121c-xlarge.jpg",
  "/images/82ba594d30689685b54ef85f85c0f870-xlarge.jpg",
];

const InteractiveShowcase = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".showcase-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".showcase-heading", start: "top 85%", once: true },
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
            id="topo-showcase"
            x="0"
            y="0"
            width="900"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            {[
              { d: "M0,65 Q225,25 450,65 Q675,105 900,65", o: 0.07 },
              { d: "M0,105 Q225,65 450,105 Q675,145 900,105", o: 0.06 },
              { d: "M0,35 Q225,-5 450,35 Q675,75 900,35", o: 0.05 },
              { d: "M0,145 Q225,105 450,145 Q675,185 900,145", o: 0.05 },
              { d: "M0,185 Q225,145 450,185 Q675,225 900,185", o: 0.04 },
              { d: "M0,225 Q225,185 450,225 Q675,265 900,225", o: 0.03 },
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
        <rect width="100%" height="100%" fill="url(#topo-showcase)" />
      </svg>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl mb-16">
        <div className="showcase-heading flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">
              Visual Showcase
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Photo <span className="text-foreground/20">Showcase</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-md text-sm md:text-base font-medium">
            Interactive sessions, technical demonstrations, and networking among professionals in
            Ghana's energy industry.
          </p>
        </div>
      </div>

      <div className="relative z-10 overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-4 snap-x snap-mandatory">
          {showcaseImages.map((src, index) => (
            <div
              key={index}
              className="group flex-none w-[80vw] md:w-[30vw] aspect-square rounded-[2.5rem] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 snap-center"
            >
              <img
                src={src}
                alt={`Showcase ${index}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default InteractiveShowcase;
