"use client";

import { useRef } from "react";
import CircleButton from "../ui/CircleButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    id: "01",
    title: "Local Insight, Global Reach",
    description:
      "Ghanaian market expertise combined with international best practices from global partnerships.",
    accent: "orange",
  },
  {
    id: "02",
    title: "Supply Chain Networks",
    description:
      "Cypress Energy leads strategic supplier networks to eliminate delays and project risk.",
    accent: "green",
  },
  {
    id: "03",
    title: "Single Point of Contact",
    description:
      "One accountable partner managing multiple service streams to reduce vendor complexity.",
    accent: "orange",
  },
  {
    id: "04",
    title: "Proven at Scale",
    description:
      "Track record of supporting tier-1 operators like ENI and Tullow Oil on time-sensitive missions.",
    accent: "green",
  },
];

const Advantage = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Heading Reveal
      gsap.from(".adv-heading-item", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-16 bg-transparent overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="adv-heading flex flex-col md:flex-row justify-between items-end mb-10 gap-12">
          <div className="space-y-4 max-w-2xl">
            <p className="adv-heading-item text-xs font-bold uppercase tracking-[0.4em] text-[#13642C]">
              Strategic Superiority
            </p>
            <h2 className="adv-heading-item text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              The Cypress <span className="text-foreground/20">Advantage</span>
            </h2>
          </div>

          <div className="adv-heading-item">
            <CircleButton href="/about" variant="secondary">
              Corporate Overview
            </CircleButton>
          </div>
        </div>

        {/* Staircase Grid - Items start ensures they don't stretch to same height */}
        <div className="adv-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start pb-12">
          {advantages.map((adv, index) => {
            const green = adv.accent === "green";
            const hoverBg = green ? "hover:bg-[#082E29]" : "hover:bg-[#DC5817]";
            const hoverText = green ? "group-hover:text-[#13642C]" : "group-hover:text-[#DC5817]";
            const numColor = green ? "text-[#13642C]/20" : "text-[#DC5817]/20";
            const accentColor = green ? "bg-[#082E29]" : "bg-[#DC5817]";

            // Clean staircase offsets for visual separation
            const stepClass =
              index === 0
                ? "md:translate-y-0"
                : index === 1
                  ? "md:translate-y-12"
                  : index === 2
                    ? "md:translate-y-24"
                    : "md:translate-y-36";

            return (
              <div
                key={adv.id}
                className={`adv-card-wrapper transition-all duration-500 ${stepClass}`}
              >
                <div
                  className={`adv-card group h-full bg-white rounded-[0.5rem] p-10 shadow-sm ${hoverBg} hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[300px] relative overflow-hidden`}
                >
                  {/* Colored Top Border Accent */}
                  <div
                    className={`absolute top-0 left-0 w-full h-[4px] ${accentColor} opacity-80`}
                  />

                  <div className="space-y-4 pt-2">
                    <span
                      className={`text-5xl font-black ${numColor} group-hover:text-white/20 transition-colors`}
                    >
                      {adv.id}
                    </span>
                    <h3
                      className={`text-xl font-black leading-tight ${hoverText} group-hover:text-white transition-colors`}
                    >
                      {adv.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground group-hover:text-white/70 text-sm font-medium leading-relaxed transition-colors">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
