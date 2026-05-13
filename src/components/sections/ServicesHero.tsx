"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InvertedCorner from "../ui/InvertedCorner";
import CircleButton from "../ui/CircleButton";

gsap.registerPlugin(ScrollTrigger);

interface ServicesHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ title, subtitle, image }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // Reveal animations
      const tl = gsap.timeline();
      tl.from(".hero-fade-up", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      // Parallax on media
      gsap.to(".parallax-media", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative w-full bg-[#EDF6F0]">
      {/* Dark Header Part */}
      <div className="bg-[#0B2D26] pt-24 pb-24 rounded-b-[2.5rem] md:rounded-b-[4rem] relative z-10">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="hero-fade-up mb-6">
              <span className="text-[10px] md:text-xs font-display font-bold text-[#DC5817] tracking-[0.4em] uppercase">
                Capabilities
              </span>
            </div>

            <h1
              ref={titleRef}
              className="hero-fade-up text-3xl md:text-5xl lg:text-6xl font-display font-light uppercase tracking-tight leading-[1.05] text-white"
            >
              Reach your operational targets with a scalable, reliable energy partner.
            </h1>

            <p className="hero-fade-up mt-8 text-sm md:text-base text-white/60 max-w-[480px] leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping Media Section */}
      <div className="max-w-[1140px] mx-auto px-6 -mt-16 md:-mt-24 pb-16 md:pb-24 relative z-20">
        <div className="relative w-full aspect-video md:aspect-1136/584 rounded-[25px] overflow-hidden group bg-black">
          {/* Media Content */}
          <div className="parallax-media absolute inset-0 top-[-10%] h-[120%]">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={image}
              className="w-full h-full object-cover transition-all duration-1000"
            >
              <source src="/videos/services-hero.mp4" type="video/mp4" />
              <img src={image} className="w-full h-full object-cover" alt={title} />
            </video>
          </div>

          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />

          {/* Bottom Right Overlay Link */}
          <div className="absolute bottom-0 right-0 bg-[#EDF6F0] pl-6 pt-6 md:pl-8 md:pt-8 rounded-tl-[25px] flex flex-col items-end">
            <InvertedCorner
              position="top-right"
              color="#EDF6F0"
              className="absolute bottom-[99.8%] right-0 w-10 h-10"
            />
            <InvertedCorner
              position="top-right"
              color="#EDF6F0"
              className="absolute bottom-0 right-[99.8%] w-10 h-10"
            />

            <CircleButton href="/contact" variant="secondary">
              Contact Us
            </CircleButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
