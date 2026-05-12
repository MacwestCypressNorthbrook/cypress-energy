"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/services-data";
import ServiceCard, { CardSize } from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Define sizes for each index in the sequence to create the asymmetric look
  const getCardSize = (index: number): CardSize => {
    const gridSequence: CardSize[] = [
      "md",
      "sm", // 7 + 5 = 12
      "full", // 12
      "portrait",
      "lg", // 4 + 8 = 12
      "lg",
      "portrait", // 8 + 4 = 12 (swapped)
      "sm",
      "md", // 5 + 7 = 12 (swapped)
    ];

    return gridSequence[index % gridSequence.length];
  };

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".service-card");

      cards.forEach((card: any, i) => {
        const size = getCardSize(i);
        const duration = size === "full" ? 1 : size === "lg" || size === "md" ? 0.8 : 0.7;
        
        gsap.fromTo(
          card,
          {
            y: 40,
            scale: 0.8,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: duration,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              once: true,
            },
            delay: (i % 3) * 0.02,
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12 md:mb-24 flex flex-col md:grid md:grid-cols-12 items-start md:items-end justify-between gap-8">
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.95] md:leading-[0.85] text-black">
              Integrated <span className="block italic text-[#DC5817]/40">Solutions</span>
            </h2>
          </div>
          <p className="md:col-span-4 text-lg md:text-2xl text-muted-foreground font-light max-w-md leading-relaxed md:text-right">
            Explore our comprehensive range of offshore and onshore support services.
          </p>
        </div>

        {/* The Asymmetric Grid */}
        <div className="asymmetric-grid-cols-12 gap-4 md:gap-8 lg:gap-12 flex flex-col md:grid">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.intro[0]}
              image={service.image}
              slug={service.slug}
              index={i}
              size={getCardSize(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
