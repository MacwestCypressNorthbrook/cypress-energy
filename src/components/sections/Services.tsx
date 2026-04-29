"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const serviceList = [
  {
    id: "01",
    title: "Offshore Vessel Supply",
    href: "/services/offshore-vessel-supply",
    image: "/images/cp-3.jpeg",
  },
  {
    id: "02",
    title: "Manpower Management",
    href: "/services/manpower",
    image: "/images/1H6A2307-scaled.jpeg",
  },
  {
    id: "03",
    title: "Power Generation Units",
    href: "/services/power-generation",
    image: "/images/1H6A2643-scaled.jpeg",
  },
  {
    id: "04",
    title: "Onshore Service Base",
    href: "/services/onshore-service-base",
    image: "/images/1H6A2589-scaled.jpeg",
  },
  {
    id: "05",
    title: "Base Equipment Supply",
    href: "/services/onshore-base-equipment",
    image: "/images/1H6A3759-scaled.jpg",
  },
  {
    id: "06",
    title: "Pipe Supply and Storage",
    href: "/services/pipe-supply-and-storage",
    image: "/images/1H6A2856-1-scaled.jpeg",
  },
  {
    id: "07",
    title: "Procurement & Logistics",
    href: "/services/logistics-freight-forwarding",
    image: "/images/abd9674e79b5d94da4786412caac4e48-xlarge.jpg",
  },
  {
    id: "08",
    title: "Hospitality & Ship Chandling",
    href: "/services/hospitality-ship-chandling",
    image: "/images/WhatsApp-Image-2025-03-07-at-11.06.35-2-reset-6.jpeg",
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorImgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".services-section-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: ".services-section-heading", start: "top 85%", once: true },
        },
      );
      gsap.fromTo(
        ".service-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: ".services-list", start: "top 80%", once: true },
        },
      );
    },
    { scope: containerRef },
  );

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cursorImgRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    gsap.to(cursorImgRef.current, {
      x: e.clientX - rect.left + 24,
      y: e.clientY - rect.top - 80,
      duration: 0.35,
      ease: "power2.out",
    });
  }, []);

  const handleItemEnter = useCallback((image: string) => {
    if (!cursorImgRef.current) return;
    cursorImgRef.current.src = image;
    gsap.to(cursorImgRef.current, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.4)" });
  }, []);

  const handleItemLeave = useCallback(() => {
    if (!cursorImgRef.current) return;
    gsap.to(cursorImgRef.current, { opacity: 0, scale: 0.88, duration: 0.25, ease: "power2.in" });
  }, []);

  return (
    <section className="relative py-12 bg-white overflow-hidden" ref={containerRef} onMouseMove={handleMouseMove}>
      {/* Floating cursor image */}
      <img
        ref={cursorImgRef}
        src={serviceList[0].image}
        alt=""
        className="pointer-events-none absolute z-50 w-56 h-40 rounded-2xl overflow-hidden shadow-2xl object-cover opacity-0"
        style={{ top: 0, left: 0, transform: "scale(0.88)" }}
      />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="services-section-heading mb-14 space-y-3">
          {/* <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817]">
            What We Do
          </p> */}
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-none">
            Our <span className="text-foreground/15">Services</span>
          </h2>
        </div>

        {/* Numbered list */}
        <div className="services-list divide-y divide-border">
          {serviceList.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="service-item group flex items-center gap-8 py-7 transition-all duration-300 hover:pl-4"
              onMouseEnter={() => handleItemEnter(service.image)}
              onMouseLeave={handleItemLeave}
            >
              {(() => {
                const i = serviceList.indexOf(service);
                const green = i % 2 === 1;
                const accent = green ? "group-hover:text-[#13642C]" : "group-hover:text-[#DC5817]";
                const arrowBg = green
                  ? "group-hover:bg-[#13642C] group-hover:border-[#13642C]"
                  : "group-hover:bg-[#DC5817] group-hover:border-[#DC5817]";
                return (
                  <>
                    <span
                      className={`text-sm font-bold text-foreground/25 ${accent} transition-colors min-w-10`}
                    >
                      {service.id}
                    </span>
                    <h3
                      className={`flex-1 text-xl md:text-5xl font-black uppercase tracking-tight leading-none ${accent} transition-colors duration-300`}
                    >
                      {service.title}
                    </h3>
                    <div className="shrink-0">
                      <div
                        className={`w-11 h-11 rounded-full border border-border flex items-center justify-center ${arrowBg} transition-all duration-300`}
                      >
                        <svg
                          className="w-5 h-5 text-foreground/40 group-hover:text-white transform group-hover:rotate-45 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                );
              })()}
              <div className="hidden">
                <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}

          <div className="pt-8 flex items-center justify-between">
            <Link
              href="/services"
              className="text-sm font-bold text-[#13642C] uppercase tracking-widest hover:underline"
            >
              View All 13 Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
