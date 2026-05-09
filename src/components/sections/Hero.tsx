"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoading } from "@/context/LoadingContext";
import { useIsMobile } from "@/hooks/use-mobile";
import MaskButton from "../MaskButton";
import TransitionLink from "../TransitionLink";
import FluidButton from "../FluidButton";

const slides = [
  {
    heading: "Powering West Africa's Offshore Operations",
    ctaLabel: "Projects",
    ctaHref: "/projects",
    image: "/images/cp-3.jpeg",
  },
  {
    heading: "End-to-End Marine & Logistics Solutions",
    ctaLabel: "Meet a Technical Lead",
    ctaHref: "/contact",
    image: "/images/abd9674e79b5d94da4786412caac4e48-xlarge.jpg",
  },
  {
    heading: "Local Content Expertise meets International Standards",
    ctaLabel: "Partner With Us",
    ctaHref: "/projects",
    image: "/images/1H6A2307-scaled.jpeg",
  },
];

const Hero = () => {
  const [introDone, setIntroDone] = useState(false);
  const { isLoaded } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!isLoaded) return;

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => setIntroDone(true),
      });

      // 1. Initial Visibility (remove the hidden state)
      tl.set(".hero-reveal-init", { visibility: "visible", opacity: 1 });

      // 2. Background Zoom-out
      tl.fromTo(
        ".hero-bg-zoom",
        { scale: 1.25, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out" },
        0,
      );

      // 3. Word-level reveal for heading
      const words = headingRef.current?.querySelectorAll(".word-inner");
      if (words) {
        tl.fromTo(
          words,
          { y: "110%", rotateX: -15 },
          {
            y: "0%",
            rotateX: 0,
            duration: 1.5,
            stagger: 0.08,
          },
          0.4,
        );
      }

      // 4. Subtext and CTA reveal
      tl.fromTo(
        ".hero-content-up",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
        },
        "-=1.1",
      );
    },
    { scope: containerRef, dependencies: [isLoaded] },
  );

  // Draw SVG line from hero container bottom to button bottom after intro
  useEffect(() => {
    if (!introDone || !svgRef.current || !buttonRef.current || !containerRef.current) return;

    const button = buttonRef.current;
    const container = containerRef.current;
    const svg = svgRef.current;

    // Get positions relative to container
    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const buttonBottomX = buttonRect.left - containerRect.left + buttonRect.width / 2;
    const buttonBottomY = buttonRect.bottom - containerRect.top;
    const containerBottomY = containerRect.height;

    // Update path - from container bottom to button bottom
    const path = svg.querySelector("path") as SVGPathElement;
    if (path) {
      path.setAttribute(
        "d",
        `M ${buttonBottomX} ${containerBottomY - 30} L ${buttonBottomX} ${buttonBottomY + 20}`,
      );

      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "linear",
      });
    }
  }, [introDone]);

  const slide = slides[0];

  const splitWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden py-2 mr-3 md:mr-6">
        <span className="word-inner inline-block origin-bottom transition-colors duration-500">
          {word}
        </span>
      </span>
    ));
  };

  const isMobile = useIsMobile();

  return (
    <section className="bg-transparent pt-0 md:pt-4 pb-6 px-0 md:px-4" ref={containerRef}>
      {/* SVG for the connecting line animation */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        style={{ top: 0, left: 0 }}
      >
        <path stroke="#DC5817" strokeWidth="2" fill="none" />
      </svg>

      {/* Hidden SVG — defines the clip shape */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute", display: "block", overflow: "hidden" }}
      >
        <defs>
          {/* Desktop — 1285 × 693 artboard */}
          <clipPath
            id="hero-clip-desktop"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.000778816, 0.001442997)"
          >
            {/* <path d="M33.51,692.5c-18.2,0-33.01-14.81-33.01-33.01V33.51C.5,15.31,15.31.5,33.51.5h1217.98c18.2,0,33.01,14.81,33.01,33.01v545.98c0,18.2-14.81,33.01-33.01,33.01h-69.98c-18.75,0-34.01,15.26-34.01,34.01v12.98c0,18.2-14.81,33.01-33.01,33.01H33.51Z" /> */}
            <path d="M20.65,686.12c-11.11,0-20.14-8.61-20.14-19.19V19.67C.51,9.09,9.54.48,20.65.48h351.28c9.21,0,17.23,5.94,19.51,14.43l4.26,15.86c2.4,8.93,10.83,15.15,20.5,15.15h436.62c9.68,0,18.1-6.24,20.5-15.15l4.26-15.86c2.28-8.5,10.3-14.43,19.51-14.43h364.48c11.11,0,20.14,8.61,20.14,19.19v647.25c0,10.58-9.04,19.19-20.14,19.19H20.65Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        style={!isMobile ? { clipPath: "url(#hero-clip-desktop)" } : {}}
        className={`relative w-full h-[80vh] md:h-screen flex items-center justify-center bg-black overflow-hidden ${
          isMobile ? "rounded-b-[1.5rem]" : ""
        }`}
      >
        {/* Single Image Background */}
        <div className="hero-bg-zoom absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/60 to-black/80" />

        {/* Content - Hidden by default to prevent flickering */}
        <div
          className="hero-reveal-init relative z-10 w-full text-center px-6 md:px-16 flex flex-col items-center justify-center gap-10"
          style={{ visibility: "hidden", opacity: 0 }}
        >
          <div className="space-y-4">
            {/* <div className="hero-content-up overflow-hidden">
              <p className="text-[#DC5817] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                Cypress Energy • Offshore Logistics
              </p>
            </div> */}
            <h1
              ref={headingRef}
              className="text-[clamp(1.5rem,7vw,2.75rem)] md:text-5xl font-black text-white leading-[1.1] md:leading-none tracking-tight uppercase max-w-4xl md:max-w-6xl mx-auto flex flex-wrap justify-center"
            >
              {splitWords(slide.heading)}
            </h1>
          </div>

          <div className="hero-content-up flex flex-wrap items-center justify-center gap-4">
            <div ref={buttonRef}>
              {/* <PremiumButton href={slide.ctaHref} label={slide.ctaLabel} /> */}
              {/* <MaskButton text="Contact Us" backgroundColor="#fd7435" /> */}

              <FluidButton href={slide.ctaHref} className="hidden md:inline-flex">
                {slide.ctaLabel}
              </FluidButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
