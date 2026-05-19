"use client";

import { useRef } from "react";
import CircleButton from "@/components/ui/CircleButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // 1. Heading Character Animation
      const chars = headingRef.current?.querySelectorAll(".char");
      if (chars) {
        gsap.fromTo(
          chars,
          { y: 100, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 95%",
              once: true,
            },
          },
        );
      }

      // 2. Text Content Fade-In Stagger
      gsap.fromTo(
        ".about-text-line",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-text-content",
            start: "top 90%",
            once: true,
          },
        },
      );

      // 3. Image Reveal with Clip-Path
      gsap.fromTo(
        ".about-main-image-inner",
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.3 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-main-image-box",
            start: "top 95%",
            end: "bottom 70%",
            scrub: 1,
          },
        },
      );

      // 4. Bento Boxes Sequential Reveal
      gsap.fromTo(
        ".bento-box-extra",
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: ".bento-boxes-row",
            start: "top 95%",
            end: "bottom 80%",
            scrub: 1,
          },
        },
      );

      // 5. ISO Badge Reveal
      gsap.fromTo(
        ".iso-badge",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".iso-badge",
            start: "top 98%",
            end: "bottom 85%",
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  const splitHeading = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block origin-bottom">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="py-5 md:py-24 bg-transparent" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT — text content */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:pt-4">
            <div className="about-text-content space-y-8 max-w-md">
              <div className="space-y-2">
                <p className="about-text-line flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#13642C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#13642C]" />
                  Who We Are
                </p>
                <h2
                  ref={headingRef}
                  className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none overflow-hidden"
                >
                  {splitHeading("About ")}
                  <span className="text-foreground/15">{splitHeading("Us")}</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="about-text-line text-base text-muted-foreground font-medium leading-relaxed">
                  Cypress Energy Company Limited is a Ghanaian company delivering excellence in the
                  oil and gas sector. Headquartered in Accra, Ghana, we are building a strong
                  reputation for reliability, innovation, and service.
                </p>

                <p className="about-text-line text-base text-muted-foreground font-medium leading-relaxed">
                  Our strategic partnerships with international businesses afford us global exposure
                  and world-class expertise, enabling us to meet and exceed the standards of tier-1
                  operators across West Africa.
                </p>
              </div>

              <div className="about-text-line">
                <CircleButton href="/about" variant="secondary">
                  Read More
                </CircleButton>
              </div>
            </div>

            {/* ISO Certificate tucked here to keep the content */}
            <div className="iso-badge flex flex-col sm:flex-row sm:items-center gap-6 p-6 bg-[#F8F9FA] rounded-[2.5rem] border border-border/40 w-full">
              <div className="shrink-0">
                <img
                  src="/images/about/ISO-9001-C621988-0-en-US-20240910_page-0001-scaled.webp"
                  alt="DNV ISO 9001:2015 Certificate"
                  className="w-24 h-auto object-contain rounded-xl shadow-sm bg-white"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#13642C]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">
                    Certified
                  </p>
                </div>
                <p className="text-xs font-bold text-foreground/70 leading-relaxed">
                  ISO 9001:2015 — Quality Management System certified by DNV for the provision of
                  offshore supply vessels, ship agency, manpower, chandling, inspection, and
                  procurement services.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Bento Layout */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top — Main Image */}
            <div className="about-main-image-box bento-box relative rounded-[2.5rem] overflow-hidden shadow-xl h-[400px] w-full bg-muted/20">
              <img
                src="/images/1H6A2307-scaled.jpeg"
                alt="Cypress Energy team at work"
                className="about-main-image-inner w-full h-full object-cover"
              />
            </div>

            {/* Bottom Row */}
            <div className="bento-boxes-row grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {/* Bottom Left — 10+ Years */}
              <div className="bento-box-extra bg-[#082E29] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center text-white">
                <div className="flex items-start">
                  <div className="text-7xl md:text-8xl font-black leading-none">10</div>
                  <div className="text-4xl text-[#13642C] font-black leading-none">+</div>
                </div>
                <div className="mt-6 text-sm font-bold uppercase tracking-widest text-white/80 max-w-[200px] leading-relaxed">
                  Years Delivering Excellence
                </div>
              </div>

              {/* Bottom Right — 3 Points */}
              <div className="bento-box-extra bg-[#F8F9FA] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center gap-6 border border-border/40">
                <div className="flex items-center gap-5">
                  <span className="text-xl font-black text-[#13642C]">01</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-foreground/80">
                    100% Local Content
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-xl font-black text-[#13642C]">02</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-foreground/80">
                    Tier-1 Operators
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-xl font-black text-[#13642C]">03</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-foreground/80">
                    ISO 9001:2015 Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
