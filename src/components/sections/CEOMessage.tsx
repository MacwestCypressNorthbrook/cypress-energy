"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CEOMessage = () => {
  const containerRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // 1. Heading Split Reveal
      const headingWords = headingRef.current?.querySelectorAll(".word-inner");
      if (headingWords) {
        gsap.fromTo(
          headingWords,
          { y: "110%", rotateX: -20, opacity: 0 },
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 95%",
              end: "bottom 80%",
              scrub: 1.2,
            },
          },
        );
      }

      // 2. Quote Split Reveal
      const quoteWords = quoteRef.current?.querySelectorAll(".word-inner");
      if (quoteWords) {
        gsap.fromTo(
          quoteWords,
          { y: 20, opacity: 0, filter: "blur(4px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 90%",
              end: "bottom 60%",
              scrub: 1.5,
            },
          },
        );
      }

      // 3. Signature & Image Fade
      gsap.fromTo(
        ".ceo-sig",
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".ceo-sig",
            start: "top 95%",
            end: "bottom 85%",
            scrub: 1.2,
          },
        },
      );

      // 4. Big Quote Background
      gsap.fromTo(
        ".ceo-big-quote",
        { opacity: 0, scale: 0.8, x: -50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "center 50%",
            scrub: 1.8,
          },
        },
      );
    },
    { scope: containerRef },
  );

  const splitWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden py-1 mr-1.5 md:mr-3">
        <span className="word-inner inline-block origin-bottom">{word}</span>
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 bg-transparent overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="relative bg-orange-200/5 backdrop-blur-[5px] border border-white/20 p-8 md:p-16 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.02),inset_0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-700 hover:shadow-[0_30px_80px_rgba(0,0,0,0.04)] overflow-hidden group">
          {/* Shine/Reflection Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/10 to-transparent rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
            {/* Left: Big CEO Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="ceo-image-wrapper relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Screenshot-2023-02-28-at-13.53.31.png"
                  alt="Kwabena Amponsah Osei-Bonsu"
                  className="w-full h-auto transition-all duration-1000"
                />
                {/* Subtle accent border */}
                <div className="absolute inset-0 border-8 border-white/10 rounded-2xl pointer-events-none" />

                {/* Floating Badge */}
                <div className="ceo-sig absolute bottom-8 right-8 bg-[#13642C] text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#DC5817] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                      CEO Message
                    </span>
                  </div>
                  <p className="text-sm font-medium italic leading-relaxed">
                    "Committed to sustainable growth across West Africa."
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#DC5817]">
                  Leadership Vision
                </p>
                <h2
                  ref={headingRef}
                  className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none flex flex-wrap"
                >
                  {splitWords("CEO")}
                  <span className="text-foreground/20 ml-3">{splitWords("Message")}</span>
                </h2>
              </div>

              <div className="relative">
                {/* Giant decorative quote */}
                <div
                  className="ceo-big-quote text-[#13642C]/5 font-black select-none text-[12rem] absolute -top-16 -left-8 pointer-events-none"
                  aria-hidden
                >
                  "
                </div>

                <blockquote
                  ref={quoteRef}
                  className="relative z-10 text-xl md:text-3xl text-[#13642C] font-light leading-snug max-w-2xl flex flex-wrap"
                >
                  {splitWords(
                    "We firmly believe in our company and our people. The combination of commitment to our core values, technical expertise, and experience enables us to drive sustainable growth for our clients continually.",
                  )}
                </blockquote>
              </div>

              <div className="ceo-sig pt-6 border-t border-[#13642C]/10 inline-block">
                <h4 className="text-2xl font-black text-[#13642C] uppercase tracking-tight mb-1">
                  Kwabena Amponsah Osei-Bonsu
                </h4>
                <p className="text-[#DC5817] font-bold uppercase tracking-[0.2em] text-xs">
                  Chief Executive Officer, Cypress Energy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
