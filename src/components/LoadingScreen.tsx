"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const arc1Ref = useRef<SVGGElement>(null);
  const arc2Ref = useRef<SVGGElement>(null);
  const arc3Ref = useRef<SVGGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states — everything invisible
      gsap.set(logoRef.current, { scale: 0, opacity: 0 });
      gsap.set([arc1Ref.current, arc2Ref.current, arc3Ref.current], { opacity: 0 });

      const tl = gsap.timeline();

      // Logo scales in with spring
      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.75,
        ease: "back.out(1.8)",
      });

      // Arcs materialize with stagger
      tl.to(
        [arc1Ref.current, arc2Ref.current, arc3Ref.current],
        { opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.35",
      );

      // Continuous independent spins — each arc at its own pace and direction
      gsap.to(arc1Ref.current, {
        rotation: 360,
        duration: 4,
        ease: "none",
        repeat: -1,
        svgOrigin: "130 130",
      });
      gsap.to(arc2Ref.current, {
        rotation: -360,
        duration: 2.6,
        ease: "none",
        repeat: -1,
        svgOrigin: "130 130",
      });
      gsap.to(arc3Ref.current, {
        rotation: 360,
        duration: 1.7,
        ease: "none",
        repeat: -1,
        svgOrigin: "130 130",
      });

      // Hold while page hydrates
      tl.to({}, { duration: 1.6 });

      // Exit: arcs burst outward and dissolve
      tl.addLabel("exit");
      tl.to(
        arc1Ref.current,
        { scale: 1.45, opacity: 0, duration: 0.55, ease: "power3.in", svgOrigin: "130 130" },
        "exit",
      );
      tl.to(
        arc2Ref.current,
        { scale: 1.65, opacity: 0, duration: 0.45, ease: "power3.in", svgOrigin: "130 130" },
        "exit+=0.06",
      );
      tl.to(
        arc3Ref.current,
        { scale: 1.85, opacity: 0, duration: 0.35, ease: "power3.in", svgOrigin: "130 130" },
        "exit+=0.12",
      );
      // Logo shrinks away
      tl.to(
        logoRef.current,
        { scale: 0.8, opacity: 0, duration: 0.4, ease: "power2.in" },
        "exit+=0.1",
      );

      // White curtain slides up — premium page reveal
      tl.to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete,
        },
        "exit+=0.35",
      );
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-white"
    >
      {/* Whirling arc system */}
      <svg
        width="260"
        height="260"
        viewBox="0 0 260 260"
        className="absolute"
        style={{ overflow: "visible" }}
        aria-hidden
      >
        {/* Outer arc — green, 75% arc, slow clockwise. r=108, C≈679 */}
        <g ref={arc1Ref}>
          <circle
            cx="130"
            cy="130"
            r="108"
            fill="none"
            stroke="#13642C"
            strokeWidth="3"
            strokeDasharray="509 170"
            strokeLinecap="round"
          />
          {/* Leading bead at start of arc (rightmost point before rotation) */}
          <circle cx="238" cy="130" r="4.5" fill="#13642C" />
        </g>

        {/* Mid arc — orange, 50% arc, counterclockwise. r=86, C≈540 */}
        <g ref={arc2Ref}>
          <circle
            cx="130"
            cy="130"
            r="86"
            fill="none"
            stroke="#DC5817"
            strokeWidth="2.5"
            strokeDasharray="270 270"
            strokeLinecap="round"
          />
          <circle cx="216" cy="130" r="3.5" fill="#DC5817" />
        </g>

        {/* Inner arc — green, 30% arc, fast clockwise. r=64, C≈402 */}
        <g ref={arc3Ref}>
          <circle
            cx="130"
            cy="130"
            r="64"
            fill="none"
            stroke="#13642C"
            strokeWidth="2"
            strokeDasharray="121 281"
            strokeLinecap="round"
          />
          <circle cx="194" cy="130" r="3" fill="#13642C" />
        </g>
      </svg>

      {/* Logo — centered above the SVG in z-stack */}
      <img
        ref={logoRef}
        src="/images/LOGO-FOOTER-3.png"
        alt="Cypress Energy"
        className="relative z-10 w-24 h-auto select-none"
        draggable={false}
      />
    </div>
  );
};

export default LoadingScreen;
