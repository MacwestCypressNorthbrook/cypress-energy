"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InlineSVG from "./InlineSVG";

gsap.registerPlugin(ScrollTrigger);

const svgs = [
  { name: "drill.svg", color: "text-[#13642C]", alignment: "left" },
  { name: "oil-container.svg", color: "text-[#DC5817]", alignment: "right" },
  { name: "oil-platform-v2.svg", color: "text-[#13642C]", alignment: "left" },
  { name: "oil-platform.svg", color: "text-[#DC5817]", alignment: "right" },
  { name: "sea-waves.svg", color: "text-white", alignment: "left" },
  { name: "ship-with-cargo-on-sea.svg", color: "text-[#13642C]", alignment: "right" },
];

export default function ScrollDrawingSVGs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  const handleLoaded = useCallback((svgEl: SVGSVGElement) => {
    svgEl.style.width = "100%";
    svgEl.style.height = "100%";
    setLoadedCount((prev) => prev + 1);
  }, []);

  useGSAP(
    () => {
      // Only run once all SVGs are loaded
      if (!containerRef.current || loadedCount < svgs.length) return;

      const items = gsap.utils.toArray<HTMLElement>(".scroll-svg-wrapper");

      items.forEach((wrapper) => {
        const svgEl = wrapper.querySelector("svg");
        if (!svgEl) return;

        const paths = svgEl.querySelectorAll("path, circle, rect, line, polyline, polygon");
        
        // Prepare paths for drawing
        paths.forEach((path: any) => {
          path.style.fill = "transparent";
          path.style.stroke = "currentColor";
          // Thinnest possible line
          path.style.strokeWidth = "1px"; 
          
          let length = 2000; // Fallback length
          if (path.getTotalLength) {
            const actualLength = path.getTotalLength();
            if (actualLength > 0) length = actualLength;
          }
          
          path.style.strokeDasharray = length;
          // Add a small offset to ensure it's completely hidden at the very start
          path.style.strokeDashoffset = length + 10;
        });

        gsap.set(wrapper, { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            // Start when the top of the element reaches 80% down the screen (just entering)
            start: "top 80%", 
            // Finish drawing when the bottom of the element reaches 10% down the screen (almost leaving)
            end: "bottom 10%", 
            // Higher scrub value makes the drawing lazier and slower to catch up
            scrub: 2.5, 
          },
        });

        // 1. Fade in wrapper quickly 
        tl.to(wrapper, { opacity: 0.15, duration: 0.05, ease: "none" }, 0);

        // 2. Draw stroke slowly over the entire remaining scroll distance
        if (paths.length > 0) {
          tl.to(
            paths,
            {
              strokeDashoffset: 0,
              duration: 0.95,
              ease: "power2.out",
            },
            0.05
          );
        }

        // Parallax drift effect relative to natural scroll position
        gsap.to(wrapper, {
          y: -100, // Gentle drift upwards
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      
      ScrollTrigger.refresh();
    },
    { scope: containerRef, dependencies: [loadedCount] }
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {svgs.map((svg, i) => (
        <div
          key={i}
          className={`absolute w-full flex ${
            svg.alignment === "left" ? "justify-start pl-[5%] md:pl-[10%]" : "justify-end pr-[5%] md:pr-[10%]"
          }`}
          style={{ 
            // Distribute them vertically over the page.
            top: `${(i / svgs.length) * 85}%`,
            // Add a 100vh top margin so the very first SVG starts rendering AFTER the Hero section
            marginTop: '100vh' 
          }}
        >
          <InlineSVG
            src={`/svgs/${svg.name}`}
            // Further reduced sizes to be subtle background accents
            className={`scroll-svg-wrapper w-12 h-12 md:w-16 md:h-16 ${svg.color}`}
            onLoaded={handleLoaded}
          />
        </div>
      ))}
    </div>
  );
}
