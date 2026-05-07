"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import TransitionBackground from "@/components/TransitionBackground";
import { useLenis } from "lenis/react";

const BLIND_COUNT = 12;

export default function PageTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const lenis = useLenis();

  const isFirstMount = useRef(true);

  // We expose a global function for TransitionLink to call
  useEffect(() => {
    (window as any).startPageTransition = (href: string, callback: () => void) => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        onComplete: callback,
      });

      // Stop scrolling during closing animation
      if (lenis) lenis.stop();

      tl.set(containerRef.current, { display: "flex", pointerEvents: "auto" })
        .fromTo(
          ".blind-slat-left",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.6,
            stagger: 0.02,
            ease: "power4.inOut",
          },
          0,
        )
        .fromTo(
          ".blind-slat-right",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.6,
            stagger: 0.02,
            ease: "power4.inOut",
          },
          0,
        )
        .to({}, { duration: 0.4 }); // Reduced hold time
    };
  }, [lenis]);

  // When pathname changes (after navigation), animate opening
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (!containerRef.current) return;

    gsap.set(containerRef.current, { display: "flex", pointerEvents: "auto" });

    const tl = gsap.timeline({
      onComplete: () => {
        // Resume scrolling after opening animation
        if (lenis) lenis.start();
        gsap.set(containerRef.current, { pointerEvents: "none" });
      }
    });

    tl.to(
      ".blind-slat-left",
      {
        scaleX: 0,
        duration: 0.7,
        stagger: 0.03,
        ease: "power4.inOut",
      },
      0.2,
    )
      .to(
        ".blind-slat-right",
        {
          scaleX: 0,
          duration: 0.7,
          stagger: 0.03,
          ease: "power4.inOut",
        },
        0.2,
      )
      .set(containerRef.current, { display: "none" });
  }, [pathname, lenis]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-none hidden">
      <div className="flex h-full w-full">
        {Array.from({ length: BLIND_COUNT }).map((_, i) => (
          <div key={i} className="relative flex-1 h-full">
            {/* Left Half of Slat */}
            <div 
              className="blind-slat-left absolute top-0 left-0 w-[50.1%] h-full origin-left will-change-transform overflow-hidden"
              style={{ transform: "scaleX(0)" }}
            >
              <div
                className="absolute top-0 h-full"
                style={{
                  width: `100vw`,
                  left: `-${i * (100 / BLIND_COUNT)}vw`,
                }}
              >
                <TransitionBackground />
              </div>
            </div>
            {/* Right Half of Slat */}
            <div 
              className="blind-slat-right absolute top-0 right-0 w-[50.1%] h-full origin-right will-change-transform overflow-hidden"
              style={{ transform: "scaleX(0)" }}
            >
              <div
                className="absolute top-0 h-full"
                style={{
                  width: `100vw`,
                  right: `-${(BLIND_COUNT - 1 - i) * (100 / BLIND_COUNT)}vw`,
                }}
              >
                <TransitionBackground />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
