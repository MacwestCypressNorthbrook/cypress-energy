"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InvertedCorner from "../ui/InvertedCorner";
import CircleButton from "../ui/CircleButton";

gsap.registerPlugin(ScrollTrigger);

interface ProjectPodProps {
  title: string;
  client: string;
  description: string;
  image: string;
  services: string[];
  deliveries?: string[];
  index: number;
  variant?: "card" | "minimal";
}

const ProjectPod: React.FC<ProjectPodProps> = ({
  title,
  client,
  description,
  image,
  services,
  deliveries,
  index,
  variant = "card",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const isEven = index % 2 === 0;

  useGSAP(
    () => {
      // Reveal animation
      gsap.from(containerRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });

      // Cinematic Slow Zoom effect on scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1 },
        {
          scale: 1.25,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  if (variant === "minimal") {
    return (
      <div ref={containerRef} className="relative w-full mb-20 md:mb-32 last:mb-0 group">
        <div
          className={`grid grid-cols-1 md:grid-cols-[minmax(0,417fr)_minmax(0,725fr)] gap-16 md:gap-24 items-center ${!isEven ? "md:grid-cols-[minmax(0,725fr)_minmax(0,417fr)]" : ""}`}
        >
          {/* Text Column */}
          <div className={`flex flex-col ${!isEven ? "md:order-2" : ""}`}>
            <div className="max-w-[365px]">
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.4em] text-[#DC5817] mb-2 block">
                {client}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-light uppercase tracking-tight mb-8 leading-[1.1] text-black">
                {title}
              </h2>
              <div className="space-y-4 mb-10">
                <p className="text-black/60 text-sm md:text-base leading-relaxed">{description}</p>
              </div>
              <CircleButton href="/contact" variant="secondary" className="scale-90 origin-left">
                Inquire
              </CircleButton>
            </div>
          </div>

          {/* Media Column */}
          <div
            className={`relative aspect-700/472 rounded-[25px] overflow-hidden ${!isEven ? "md:order-1" : ""}`}
          >
            <div className="absolute inset-0 scale-110">
              <img
                ref={imageRef}
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>

          </div>
        </div>
      </div>
    );
  }

  // Card Variant
  // Fixed layout: Text left, Image right
  const buttonAreaClasses = "justify-end";
  const buttonContainerClasses = "rounded-tl-[25px] pl-8 pt-8";

  return (
    <div ref={containerRef} className="relative w-full mb-16 md:mb-24 last:mb-0 group">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,417fr)_minmax(0,725fr)] gap-8 md:gap-10 items-stretch">
        {/* Text Card */}
        <div className="flex flex-col h-full">
          <div className="bg-[#0B2D26] text-white rounded-[25px] px-[30px] pt-[28px] pb-[36px] flex flex-col h-full relative overflow-hidden">
            {/* Dashed Title Border */}
            <div className="border-b-2 border-[#DC5817] border-dashed pb-6 mb-8">
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.4em] text-[#DC5817] mb-2 block">
                {client}
              </span>
              <h3 className="text-xl md:text-3xl font-display font-light uppercase tracking-tight leading-[1.1]">
                {title}
              </h3>
            </div>

            <div className="flex-1">
              <div className="space-y-4 mb-10">
                <p className="text-white text-[15px] leading-relaxed max-w-[420px]">
                  {description}
                </p>
              </div>

              <div className="space-y-6 mb-10">
                {services.length > 0 && (
                  <div>
                    <p className="text-[10px] font-display font-bold uppercase tracking-[0.4em] opacity-30 mb-3">
                      Core Services
                    </p>
                    <ul className="space-y-2">
                      {services.slice(0, 3).map((svc, i) => (
                        <li key={i} className="flex items-start gap-3 text-[13px] text-white/80">
                          <div className="w-1 h-1 rounded-full bg-[#DC5817] mt-1.5 shrink-0" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {deliveries && deliveries.length > 0 && (
                  <div>
                    <p className="text-[10px] font-display font-bold uppercase tracking-[0.4em] opacity-30 mb-3">
                      Key Deliveries
                    </p>
                    <ul className="space-y-2">
                      {deliveries.slice(0, 3).map((delivery, i) => (
                        <li key={i} className="flex items-start gap-3 text-[13px] text-white/80">
                          <div className="w-1 h-1 rounded-full bg-[#DC5817] mt-1.5 shrink-0" />
                          <span>{delivery}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Action Area */}
            <div className={`mt-auto mx-[-30px] mb-[-36px] flex ${buttonAreaClasses}`}>
              <div className={`relative bg-[#EDF6F0] ${buttonContainerClasses}`}>
                <InvertedCorner
                  position="top-right"
                  color="#EDF6F0"
                  className="absolute bottom-[99.8%] right-0 w-12 h-12"
                />
                <InvertedCorner
                  position="top-right"
                  color="#EDF6F0"
                  className="absolute bottom-0 right-[99.8%] w-12 h-12"
                />

                <CircleButton show={false} href="/contact" variant="primary">
                  Inquire
                </CircleButton>
              </div>
            </div>
          </div>
        </div>

        {/* Media Block */}
        <div className="relative min-h-[400px] rounded-[25px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              ref={imageRef}
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </div>


          <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-white font-display text-lg font-bold">{index + 1}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPod;
