"use client";

import React, { useRef } from "react";
import TransitionLink from "../TransitionLink";
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

// Configuration for the 4x4 Bento Grid mapping to 8 items
const bentoClasses = [
  "md:col-span-2 md:row-span-2", // 01: Large square
  "md:col-span-1 md:row-span-1", // 02: Small square
  "md:col-span-1 md:row-span-2", // 03: Tall portrait
  "md:col-span-1 md:row-span-1", // 04: Small square
  "md:col-span-2 md:row-span-1", // 05: Wide landscape
  "md:col-span-1 md:row-span-1", // 06: Small square
  "md:col-span-1 md:row-span-1", // 07: Small square
  "md:col-span-4 md:row-span-1 lg:col-span-4", // 08: Full width landscape
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
          scrollTrigger: { trigger: containerRef.current, start: "top 85%", once: true },
        }
      );

      const wrappers = gsap.utils.toArray<HTMLElement>(".bento-item-wrapper");
      
      const directions = [
        { x: "-101%", y: "0%" }, // 01: From Left
        { x: "0%", y: "-101%" }, // 02: From Top
        { x: "101%", y: "0%" },  // 03: From Right
        { x: "0%", y: "101%" },  // 04: From Bottom
        { x: "-101%", y: "0%" }, // 05: From Left
        { x: "0%", y: "101%" },  // 06: From Bottom
        { x: "101%", y: "0%" },  // 07: From Right
        { x: "0%", y: "101%" },  // 08: From Bottom
      ];

      wrappers.forEach((wrapper, i) => {
        const item = wrapper.querySelector(".bento-item");
        if (!item) return;

        const dir = directions[i % directions.length];

        gsap.fromTo(
          item,
          { ...dir },
          {
            x: "0%",
            y: "0%",
            ease: "none", // Linear ease is best for scrubbed scroll
            scrollTrigger: {
              trigger: wrapper,
              start: "top 95%", // Start as it enters the bottom
              end: "bottom 90%", // Fully settle as soon as the bottom of the card is visible
              scrub: 1.2, // Slightly faster catch-up
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="relative py-24 bg-transparent overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Heading */}
        <div className="services-section-heading mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DC5817]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC5817]" />
              What We Do
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Our <span className="text-foreground/15">Services</span>
            </h2>
          </div>
          <TransitionLink
            href="/services"
            className="hidden md:inline-flex items-center gap-2 text-[#13642C] font-bold hover:gap-4 transition-all text-sm uppercase tracking-widest group"
          >
            View All Services
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </TransitionLink>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] md:auto-rows-[320px] gap-4 md:gap-6 grid-flow-row-dense">
          {serviceList.map((service, i) => (
            <div 
              key={service.id} 
              className={`bento-item-wrapper ${bentoClasses[i]} rounded-[2rem] overflow-hidden`}
              style={{ backgroundColor: 'transparent' }} 
            >
              <TransitionLink
                href={service.href}
                className="bento-item relative w-full h-full block rounded-[2rem] overflow-hidden group shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#13642C]/20"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <span className="text-[#DC5817] font-black text-xs md:text-sm uppercase tracking-widest block mb-2 opacity-90">
                        {service.id}
                      </span>
                      <h3 className="text-white font-black text-xl md:text-2xl lg:text-3xl leading-tight uppercase tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Hover Arrow Icon */}
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#13642C] flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <svg className="w-5 h-5 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </TransitionLink>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Link */}
        <div className="mt-10 flex justify-center md:hidden">
          <TransitionLink
            href="/services"
            className="inline-flex items-center gap-2 text-[#13642C] font-bold hover:gap-4 transition-all text-sm uppercase tracking-widest group"
          >
            View All Services
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </TransitionLink>
        </div>

      </div>
    </section>
  );
};

export default Services;
