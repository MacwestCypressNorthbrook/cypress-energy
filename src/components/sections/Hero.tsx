"use client";

import React, { useState, useEffect, useRef } from "react";
import TransitionLink from "@/components/TransitionLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoading } from "@/context/LoadingContext";

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
  const [introDone, setIntroDone] = useState(false);
  const { isLoaded } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

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

  // Auto-slide effect (Only starts after intro is done)
  useEffect(() => {
    if (!introDone) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [introDone]);

  // Handle slide transitions with word-level animation
  useEffect(() => {
    if (!headingRef.current || !introDone) return;

    const words = headingRef.current?.querySelectorAll(".word-inner");
    if (words) {
      // Small flicker fix: ensure they are hidden before the transition starts
      gsap.set(words, { y: "100%", rotateX: -10 });

      gsap.to(words, {
        y: "0%",
        rotateX: 0,
        duration: 1.2,
        stagger: 0.04,
        ease: "expo.out",
        clearProps: "all",
      });
    }
  }, [current, introDone]);

  const slide = slides[current];

  const splitWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden py-2 mr-3 md:mr-6">
        <span className="word-inner inline-block origin-bottom transition-colors duration-500">
          {word}
        </span>
      </span>
    ));
  };

  return (
    <section className="bg-transparent pt-0 md:pt-4 pb-6 px-0 md:px-4" ref={containerRef}>
      <div className="relative w-full rounded-none md:rounded-[3rem] overflow-hidden min-h-[92vh] flex items-center justify-center bg-black">
        {/* Slides Wrapper for Zoom Effect */}
        <div className="hero-bg-zoom absolute inset-0">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${s.image}')`,
              }}
            />
          ))}
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80" />

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
              className="text-[clamp(1.5rem,7vw,2.75rem)] md:text-7xl font-black text-white leading-[1.1] md:leading-none tracking-tight uppercase max-w-4xl md:max-w-6xl mx-auto flex flex-wrap justify-center"
            >
              {splitWords(slide.heading)}
            </h1>
          </div>

          <div className="hero-content-up flex flex-wrap items-center justify-center gap-4">
            <TransitionLink
              href={slide.ctaHref}
              className="inline-flex items-center gap-3 bg-[#DC5817] hover:bg-[#C44D14] text-white font-black px-10 py-5 rounded-lg text-xs md:text-sm transition-all hover:scale-105 shadow-2xl shadow-[#DC5817]/40 uppercase tracking-widest"
            >
              {slide.ctaLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </TransitionLink>
          </div>

          {/* Slide indicators */}
          <div className="hero-content-up flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (introDone) setCurrent(i);
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-12 h-1.5 bg-white" : "w-6 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
