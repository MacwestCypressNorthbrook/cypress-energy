"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const svgs = [
  { name: "drill.svg", color: "bg-[#13642C]", size: "w-32 h-32 md:w-64 md:h-64" },
  { name: "oil-container.svg", color: "bg-[#DC5817]", size: "w-24 h-24 md:w-48 md:h-48" },
  { name: "oil-platform-v2.svg", color: "bg-[#13642C]", size: "w-40 h-40 md:w-80 md:h-80" },
  { name: "oil-platform.svg", color: "bg-[#DC5817]", size: "w-36 h-36 md:w-72 md:h-72" },
  { name: "sea-waves.svg", color: "bg-white", size: "w-48 h-48 md:w-96 md:h-96" },
  { name: "ship-with-cargo-on-sea.svg", color: "bg-[#13642C]", size: "w-40 h-40 md:w-80 md:h-80" },
];

export default function FloatingBackgroundSVGs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".floating-svg");

      items.forEach((item: any) => {
        const isWhite = item.classList.contains("bg-white");
        const targetOpacity = isWhite ? 0.15 : 0.03 + Math.random() * 0.04;

        // Set random initial 3D positions
        gsap.set(item, {
          x: () => Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
          y: () => Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          z: () => (Math.random() - 0.5) * 500,
          rotationX: () => Math.random() * 360,
          rotationY: () => Math.random() * 360,
          rotationZ: () => Math.random() * 360,
          scale: () => 0.4 + Math.random() * 0.6,
          opacity: 0,
        });

        // Fade in
        gsap.to(item, {
          opacity: targetOpacity,
          duration: 3 + Math.random() * 3,
          ease: "power2.out",
        });

        // Crazy 3D tumbling animation
        gsap.to(item, {
          x: `+=${(Math.random() - 0.5) * 600}`,
          y: `+=${(Math.random() - 0.5) * 600}`,
          z: `+=${(Math.random() - 0.5) * 600}`,
          rotationX: `+=${(Math.random() - 0.5) * 360}`,
          rotationY: `+=${(Math.random() - 0.5) * 360}`,
          rotationZ: `+=${(Math.random() - 0.5) * 360}`,
          duration: 25 + Math.random() * 20,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Duplicate the array to fill the screen with more floating elements */}
      {[...svgs, ...svgs].map((svg, i) => (
        <div
          key={i}
          className={`floating-svg absolute ${svg.color} ${svg.size}`}
          style={{
            WebkitMaskImage: `url('/svgs/${svg.name}')`,
            maskImage: `url('/svgs/${svg.name}')`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      ))}
    </div>
  );
}
