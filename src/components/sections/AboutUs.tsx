"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-col",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%", once: true },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT — text content */}
          <div className="about-col lg:col-span-3 space-y-8 lg:pt-4">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                About <span className="text-foreground/15">Us</span>
              </h2>
            </div>

            <p className="text-base text-muted-foreground font-medium leading-relaxed">
              Cypress Energy Company Limited is a Ghanaian company delivering excellence in the oil
              and gas sector. Headquartered in Accra, Ghana, we are building a strong reputation for
              reliability, innovation, and service.
            </p>

            <p className="text-base text-muted-foreground font-medium leading-relaxed">
              Our strategic partnerships with international businesses afford us global exposure and
              world-class expertise, enabling us to meet and exceed the standards of tier-1 operators
              across West Africa.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC5817]" />
                <span className="text-sm font-bold uppercase tracking-widest text-foreground/60">100% Local Content</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#13642C]" />
                <span className="text-sm font-bold uppercase tracking-widest text-foreground/60">Tier-1 Operators</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC5817]" />
                <span className="text-sm font-bold uppercase tracking-widest text-foreground/60">ISO 9001:2015 Certified</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#13642C] font-bold hover:gap-4 transition-all text-sm uppercase tracking-widest group"
            >
              Read More
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* CENTER — operational photo */}
          <div className="about-col lg:col-span-5">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src="/images/1H6A2307-scaled.jpeg"
                alt="Cypress Energy team at work"
                className="w-full h-full object-cover"
              />
              {/* subtle green tint overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#13642C]/30 via-transparent to-transparent" />
              {/* floating stat badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white">
                <div className="text-3xl font-black">10+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/80 mt-1">Years Delivering Excellence</div>
              </div>
            </div>
          </div>

          {/* RIGHT — ISO certificate */}
          <div className="about-col lg:col-span-4 space-y-6">
            {/* Certificate card */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border border-border/40">
              <img
                src="/images/about/ISO-9001-C621988-0-en-US-20240910_page-0001-scaled.webp"
                alt="DNV ISO 9001:2015 Certificate — Cypress Energy Company Limited"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Caption */}
            <div className="px-2 space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#13642C]" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">Certified</p>
              </div>
              <p className="text-sm font-bold text-foreground/70 leading-relaxed">
                ISO 9001:2015 — Quality Management System certified by DNV for the provision of offshore supply vessels, ship agency, manpower, chandling, inspection, and procurement services.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
