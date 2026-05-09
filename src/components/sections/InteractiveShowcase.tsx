"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const showcaseImages = [
  { src: "/images/1bb29c36ab5595291b975f0e0daafc0c-xlarge.jpg", class: "md:col-span-2 md:row-span-1" },
  { src: "/images/389f3831e643a07448afb80f4dd3b8ad-xlarge.jpg", class: "md:col-span-2 md:row-span-2" },
  { src: "/images/7258b77a67b56c443499f654e54770f0-xlarge.jpg", class: "md:col-span-1 md:row-span-2" },
  { src: "/images/1H6A2307-scaled.jpeg", class: "md:col-span-1 md:row-span-1" },
  { src: "/images/73224431b07073688c4d4a54a934121c-xlarge.jpg", class: "md:col-span-2 md:row-span-1" },
  { src: "/images/82ba594d30689685b54ef85f85c0f870-xlarge.jpg", class: "md:col-span-1 md:row-span-1" },
  { src: "/images/a0ffdfc3098ae4216a73aa885862cbc1-xlarge.jpg", class: "md:col-span-1 md:row-span-1" },
  { src: "/images/abd9674e79b5d94da4786412caac4e48-xlarge.jpg", class: "md:col-span-2 md:row-span-1" },
];

const InteractiveShowcase = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Heading animation
      gsap.fromTo(
        ".showcase-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".showcase-heading", start: "top 85%", once: true },
        },
      );

      // Bento items animation - Exactly matching Services.tsx logic
      const wrappers = gsap.utils.toArray<HTMLElement>(".showcase-item-wrapper");
      
      const directions = [
        { x: "-101%", y: "0%" },   // Item 1: From Left
        { x: "0%", y: "-101%" },   // Item 2: From Top
        { x: "101%", y: "0%" },    // Item 3: From Right
        { x: "0%", y: "101%" },    // Item 4: From Bottom
        { x: "-101%", y: "0%" },   // Item 5: From Left
        { x: "0%", y: "-101%" },   // Item 6: From Top
        { x: "101%", y: "0%" },    // Item 7: From Right
        { x: "0%", y: "101%" },    // Item 8: From Bottom
      ];

      wrappers.forEach((wrapper, i) => {
        const item = wrapper.querySelector(".showcase-item");
        if (!item) return;

        const dir = directions[i % directions.length];

        gsap.fromTo(
          item,
          { ...dir },
          {
            x: "0%",
            y: "0%",
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 95%",
              end: "bottom 90%",
              scrub: 1.2,
            },
          }
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 bg-transparent overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 max-w-7xl mb-16">
        <div className="showcase-heading flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DC5817]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC5817]" />
              Visual Showcase
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Values in <span className="text-foreground/20">Action</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-md text-sm md:text-base font-medium">
            A look into our offshore operations, equipment maintenance, and technical expertise across the West African coast.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] md:auto-rows-[280px] gap-4 md:gap-6">
          {showcaseImages.map((image, index) => (
            <div
              key={index}
              className={`showcase-item-wrapper ${image.class} overflow-hidden rounded-[2rem] md:rounded-[2.5rem]`}
              style={{ backgroundColor: 'transparent' }}
            >
              <div className="showcase-item relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#DC5817]/10">
                <img
                  src={image.src}
                  alt={`Showcase image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.1] transition-transform duration-1000 ease-out"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcase;
