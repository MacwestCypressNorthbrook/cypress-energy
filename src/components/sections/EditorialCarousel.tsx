"use client";

import React, { useRef } from "react";
import TransitionLink from "@/components/TransitionLink";
import { services } from "@/lib/services-data";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CardSize = "sm" | "md" | "lg" | "full" | "portrait";

export default function EditorialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const getCardSize = (index: number): CardSize => {
    const gridSequence: CardSize[] = [
      "lg",
      "portrait", // 8 + 4 = 12
      "portrait",
      "lg", // 4 + 8 = 12 (swapped)
      "md",
      "sm", // 7 + 5 = 12
      "full", // 12
    ];
    return gridSequence[index % gridSequence.length];
  };

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".alliance-card");

      cards.forEach((card: any, i) => {
        const size = getCardSize(i);
        const duration = size === "full" ? 1 : size === "lg" || size === "md" ? 0.8 : 0.7;

        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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

      // Parallax for alliance images
      const images = gsap.utils.toArray(".alliance-img");
      images.forEach((img: any) => {
        gsap.to(img, {
          y: 60,
          scale: 1.2,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            fastScrollEnd: true,
          },
        });
      });
    },
    { scope: containerRef },
  );

  // Use a subset of services for alliances/case studies
  const allianceServices = services.slice(0, 4);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:grid md:grid-cols-12 items-start md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.95] md:leading-[0.85] text-black">
              Strategic <span className="block italic text-[#DC5817]">Alliances</span>
            </h2>
          </div>
          <p className="md:col-span-4 text-lg md:text-2xl text-muted-foreground font-light max-w-md leading-relaxed md:text-right">
            Collaborating with global leaders to bring world-class expertise to West Africa.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="asymmetric-grid-cols-12 gap-4 md:gap-8 lg:gap-12 flex flex-col md:grid">
          {allianceServices.map((service, i) => {
            const size = getCardSize(i);
            return (
              <TransitionLink
                key={i}
                href={`/services/${service.slug}`}
                className={cn(
                  "alliance-card group relative overflow-hidden flex flex-col rounded-[2rem] bg-white transition-all duration-700 hover:shadow-2xl will-change-transform",
                  size === "full" && "md:col-span-12 aspect-4/5 md:aspect-24/10",
                  size === "lg" && "md:col-span-8 aspect-4/5 md:aspect-16/10",
                  size === "md" && "md:col-span-7 aspect-4/5 md:aspect-14/10",
                  size === "sm" && "md:col-span-5 aspect-square md:aspect-10/10",
                  size === "portrait" && "md:col-span-4 aspect-4/5",
                )}
              >
                <div className="absolute inset-0 z-0 overflow-hidden gpu-accelerated">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="alliance-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="relative z-10 mt-auto p-8 md:p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-[#DC5817] mb-2 block">
                    Case Study {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-display font-light uppercase text-white tracking-tighter leading-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/60 font-light text-sm md:text-base leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {service.intro[0]}
                  </p>
                </div>
              </TransitionLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
