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
          }
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
          }
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
        }
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
        }
      );
    },
    { scope: containerRef },
  );

  const splitWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden py-1 mr-1.5 md:mr-3">
        <span className="word-inner inline-block origin-bottom">
          {word}
        </span>
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative py-24 bg-transparent overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Giant quote */}
        <div
          className="ceo-big-quote text-[#DC5817]/10 font-black leading-none select-none text-[16rem] md:text-[22rem] absolute -top-16 left-0 pointer-events-none"
          aria-hidden
        >
          "
        </div>

        <div className="relative text-center space-y-16 pt-10">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#13642C]">Leadership Vision</p>
            <h2 
              ref={headingRef}
              className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none flex flex-wrap justify-center"
            >
              {splitWords("CEO")} 
              <span className="text-foreground/20 ml-3">{splitWords("Message")}</span>
            </h2>
          </div>

          <blockquote 
            ref={quoteRef}
            className="ceo-quote-text text-xl md:text-2xl lg:text-3xl text-[#13642C] font-light leading-relaxed italic max-w-4xl mx-auto flex flex-wrap justify-center"
          >
            {splitWords("We firmly believe in our company and our people. The combination of commitment to our core values, technical expertise, and experience enables us to drive sustainable growth for our clients continually.")}
          </blockquote>

          <div className="ceo-sig flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#DC5817]/20 ring-offset-4 ring-offset-white shadow-2xl">
                <img
                  src="/images/Screenshot-2023-02-28-at-13.53.31.png"
                  alt="Kwabena Amponsah Osei-Bonsu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#13642C] rounded-full flex items-center justify-center text-white shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>


            <div className="space-y-2">
              <div className="w-16 h-1 bg-linear-to-r from-transparent via-[#DC5817]/40 to-transparent mx-auto mb-4" />

              <h4 className="text-xl font-black text-[#13642C] uppercase tracking-tight">
                Kwabena Amponsah Osei-Bonsu
              </h4>

              <p className="text-[#DC5817] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Chief Executive Officer, Cypress Energy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
