"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export type CardSize = "sm" | "md" | "lg" | "full" | "text-only" | "portrait";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  slug: string;
  index: number;
  size: CardSize;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  slug,
  index,
  size,
  className,
}: ServiceCardProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isTextOnly = size === "text-only";

  useGSAP(
    () => {
      // Parallax effect on image - Increased scale to ensure void is filled
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: 60,
          scale: 1.2,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // Smoother scrub
          },
        });
      }

      // Sequential text reveal when entering viewport - Snappier
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%",
          toggleActions: "play none none none",
          fastScrollEnd: true,
        },
      });

      tl.fromTo(
        ".card-title",
        { y: 30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)", force3D: true },
      ).fromTo(
        ".card-description",
        { y: 15, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)", force3D: true },
        "-=0.5",
      );
    },
    { scope: containerRef },
  );

  const handleMouseEnter = () => {
    gsap.to(contentRef.current, {
      y: -15,
      duration: 0.4,
      ease: "power3.out",
      force3D: true,
    });
    gsap.to(".card-icon", {
      x: 8,
      y: -8,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
      force3D: true,
    });
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.25,
        duration: 0.8,
        ease: "power2.out",
        force3D: true,
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(contentRef.current, {
      y: 0,
      duration: 0.4,
      ease: "power3.out",
      force3D: true,
    });
    gsap.to(".card-icon", {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      force3D: true,
    });
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.2, // Back to parallax base scale
        duration: 0.8,
        ease: "power2.out",
        force3D: true,
      });
    }
  };

  return (
    <TransitionLink
      ref={containerRef}
      href={`/services/${slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "service-card group relative overflow-hidden flex flex-col rounded-[2rem] transition-all duration-700 bg-[#F8F9FA] hover:shadow-2xl will-change-transform",
        size === "full" && "md:col-span-12 aspect-4/5 md:aspect-24/10",
        size === "lg" && "md:col-span-8 aspect-4/5 md:aspect-16/10",
        size === "md" && "md:col-span-7 aspect-4/5 md:aspect-14/10",
        size === "sm" && "md:col-span-5 aspect-square md:aspect-10/10",
        size === "portrait" && "md:col-span-4 aspect-4/5",
        size === "text-only" && "md:col-span-4 aspect-square bg-black text-white",
        className,
      )}
    >
      {/* Background Image (if not text-only) */}
      {!isTextOnly && image && (
        <div className="absolute inset-0 z-0 overflow-hidden gpu-accelerated">
          <img ref={imageRef} src={image} alt={title} className="w-full h-full object-cover will-change-transform" />
          <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/60 group-hover:to-black/80 transition-all duration-700" />
        </div>
      )}

      {/* Content */}
      <div
        ref={contentRef}
        className={cn(
          "relative z-10 mt-auto p-8 md:p-12 flex flex-col",
          isTextOnly ? "h-full" : "",
        )}
      >
        <div className="flex items-start justify-between mb-4">
          <span
            className={cn(
              "text-xs font-display font-bold uppercase tracking-widest opacity-40",
              isTextOnly ? "text-white" : "text-white",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div
            className={cn(
              "card-icon w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500",
              isTextOnly
                ? "border-white/20 bg-white/10 group-hover:bg-[#DC5817] group-hover:border-[#DC5817]"
                : "border-white/30 bg-black/20 group-hover:bg-[#DC5817] group-hover:border-[#DC5817]",
            )}
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        <h3
          className={cn(
            "card-title text-2xl md:text-4xl font-display font-bold uppercase tracking-tighter leading-[0.95] mb-4 transition-colors",
            isTextOnly ? "text-white" : "text-white group-hover:text-[#DC5817]",
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "card-description text-sm md:text-base font-light leading-relaxed line-clamp-3 md:line-clamp-none max-w-sm",
            isTextOnly ? "text-white/60" : "text-white/70",
          )}
        >
          {description}
        </p>

        {isTextOnly && (
          <div className="mt-auto pt-8">
            <div className="h-1px w-full bg-white/10 mb-8" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#DC5817]" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>
        )}
      </div>
    </TransitionLink>
  );
}
