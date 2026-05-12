"use client";

import React, { useRef, useState, useEffect } from "react";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TransitionLink from "@/components/TransitionLink";
import FluidButton from "../FluidButton";

gsap.registerPlugin(ScrollTrigger);

interface EditorialHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function EditorialHero({ title, subtitle, image }: EditorialHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Headline reveal
      tl.fromTo(
        ".char",
        { y: 60, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.015 },
      )
        // 2. Hero image - pops in from behind
        .fromTo(
          imageRef.current,
          { scale: 0.9, opacity: 0, y: 50 },
          { scale: 1.1, opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.6",
        )
        // 3. Supporting text
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.8",
        )
        // 4. CTA
        .fromTo(
          ctaRef.current,
          { scale: 0, opacity: 0, rotate: -15 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.8, ease: "back.out(2)" },
          "-=0.7",
        );

      // Parallax effect on image - Increased scale to fill void during shift
      gsap.to(imageRef.current, {
        y: 80,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Gentle floating idle for CTA
      gsap.to(ctaInnerRef.current, {
        y: -15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef },
  );

  // Magnetic Cursor Effect for CTA - Increased sensitivity
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(ctaInnerRef.current, {
      x: x * 0.45,
      y: y * 0.45,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ctaInnerRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const splitTitle = title.split("").map((char, i) => (
    <span key={i} className="char inline-block whitespace-pre">
      {char}
    </span>
  ));

  return (
    <section
      ref={containerRef}
      className="relative pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        {/* Top-left Headline */}
        <div className="max-w-4xl mb-10 md:mb-16">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.95] md:leading-[0.9] tracking-tighter uppercase text-[#082E29] flex flex-wrap"
          >
            {splitTitle}
          </h1>
          <p
            ref={subtitleRef}
            className="mt-6 text-lg md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed"
          >
            {subtitle}
          </p>
        </div>

        {/* Cinematic Hero Image */}
        <div className="relative">
          <div
            ref={imageRef}
            className="relative aspect-video md:aspect-24/10 overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-muted shadow-2xl"
          >
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20" />
          </div>

          {/* Floating CTA Pill with Magnetic Effect */}
          <div
            ref={ctaRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute -bottom-6 -right-4 md:bottom-12 md:-right-8 z-20 cursor-pointer"
          >
            <div ref={ctaInnerRef}>
              <FluidButton
                href="https://outlook.office.com/book/TechnicalConsultation4@cypressenergyghana.com/"
                className="px-8! py-6! shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm md:text-base font-display font-bold uppercase tracking-widest">
                    Partner with us
                  </span>
                  <MoveRight className="w-5 h-5" />
                </div>
              </FluidButton>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating label */}
      <div className="absolute top-1/2 -right-12 -rotate-90 hidden lg:block opacity-10 pointer-events-none">
        <span className="text-9xl font-display font-black uppercase tracking-tighter select-none">
          Services
        </span>
      </div>
    </section>
  );
}
