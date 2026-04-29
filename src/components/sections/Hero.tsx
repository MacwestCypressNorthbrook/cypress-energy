"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin();

const slides = [
  {
    heading: "Powering West Africa's Offshore Operations",
    ctaLabel: "View Our Projects",
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
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.15 },
      );
    },
    { scope: containerRef },
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!headingRef.current) return;
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    );
  }, [current]);

  const slide = slides[current];

  return (
    // <section className="bg-white pt-4 pb-6 px-4" ref={containerRef}>
    <section className="bg-white" ref={containerRef}>
      {/* <div className="relative w-full rounded-[3rem] overflow-hidden min-h-[92vh] flex items-center justify-center"> */}
      {/* <div className="relative w-full overflow-hidden min-h-[92vh] flex items-center justify-center"> */}
      <div className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
        {/* Slides */}
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${s.image}')`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}
        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/55" />

        {/* Content — centered */}
        <div className="relative z-10 w-full text-center px-6 md:px-16 flex flex-col items-center justify-center gap-8">
          <div className="hero-content space-y-5">
            <p className="text-white font-bold uppercase tracking-widest text-xs">
              Values that shape our operations.
            </p>
            <h1
              ref={headingRef}
              className="text-[clamp(1.75rem,9vw,3rem)] md:text-8xl font-black text-white leading-none tracking-tight uppercase max-w-4xl md:max-w-6xl mx-auto"
            >
              {slide.heading}
            </h1>
          </div>

          <div className="hero-content flex flex-wrap items-center justify-center gap-4">
            <Link
              href={slide.ctaHref}
              className="inline-flex items-center gap-3 bg-[#DC5817] hover:bg-[#C44D14] text-white font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 shadow-xl shadow-[#DC5817]/30"
            >
              {slide.ctaLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="hero-content flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-8 h-2 bg-[#DC5817]" : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide counter */}
        {/* <div className="absolute top-8 right-8 font-black text-xs tracking-widest">
          <span className="text-[#DC5817]">0{current + 1}</span>
          <span className="text-white/40"> / 0{slides.length}</span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
