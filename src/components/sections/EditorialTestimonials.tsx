"use client";

import React, { useRef } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reveal animations for testimonial blocks
      const items = gsap.utils.toArray(".testimonial-item");
      
      items.forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { 
            opacity: 0, 
            y: 40,
            scale: 0.9,
            rotate: i % 2 === 0 ? -2 : 2 
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 100%",
              once: true,
            },
            delay: i * 0.05,
          },
        );
      });

      // Parallax for testimonial images
      const images = gsap.utils.toArray(".parallax-img");
      images.forEach((img: any) => {
        gsap.to(img, {
          y: 60,
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  const testimonials = [
    {
      quote: "Cypress Energy's vessel supply services have been instrumental in the success of our offshore drilling campaigns. Their commitment to QHSE is world-class.",
      author: "Senior Operations Manager",
      company: "Major E&P Operator",
      image: "/images/1H6A2589-scaled.jpeg",
    },
    {
      quote: "Reliable, responsive, and technically proficient. They are our go-to partner for West African logistics.",
      author: "Logistics Director",
      company: "Global Oilfield Services",
      image: "/images/1H6A2307-scaled.jpeg",
    },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <div className="asymmetric-grid-cols-12 gap-8 md:gap-16 items-center flex flex-col md:grid">
          {/* Testimonial 1 - Large */}
          <div className="md:col-span-8 group testimonial-item">
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="relative w-full md:w-1/2 aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].author}
                  className="parallax-img w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-[#DC5817]/10 mix-blend-multiply" />
              </div>
              
              <div className="w-full md:w-1/2">
                <Quote className="w-8 h-8 md:w-12 md:h-12 text-[#DC5817] mb-6 md:mb-8 opacity-20" />
                <blockquote className="text-2xl sm:text-3xl md:text-5xl font-display font-light italic leading-[1.1] tracking-tighter text-black mb-8">
                  "{testimonials[0].quote}"
                </blockquote>
                <div>
                  <p className="text-lg md:text-xl font-display uppercase tracking-widest text-black">
                    {testimonials[0].author}
                  </p>
                  <p className="text-muted-foreground font-light uppercase text-xs md:text-sm tracking-widest mt-1">
                    {testimonials[0].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 - Small/Offset */}
          <div className="md:col-span-4 md:mt-32 testimonial-item w-full">
            <div className="bg-[#F8F9FA] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-[#DC5817] mb-6 opacity-20" />
              <blockquote className="text-lg md:text-2xl font-display font-light italic leading-tight tracking-tighter text-black mb-8 relative z-10">
                "{testimonials[1].quote}"
              </blockquote>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#DC5817]/20">
                  <img src={testimonials[1].image} alt={testimonials[1].author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-display uppercase tracking-widest text-black">
                    {testimonials[1].author}
                  </p>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground font-light uppercase tracking-widest mt-1">
                    {testimonials[1].company}
                  </p>
                </div>
              </div>
              
              {/* Decorative shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC5817]/5 rounded-bl-[5rem] -mr-8 -mt-8 transition-all duration-700 group-hover:scale-150" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
