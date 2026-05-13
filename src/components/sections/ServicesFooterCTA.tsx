"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleButton from "../ui/CircleButton";

gsap.registerPlugin(ScrollTrigger);

const ServicesFooterCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-fade-up", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-0 bg-[#EDF6F0]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="asymmetric-grid-cols-12 gap-12 lg:gap-20 items-center flex flex-col md:grid">
          {/* Text Content */}
          <div className="md:col-span-7 cta-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light uppercase tracking-tight leading-[1.1] text-black mb-12">
              Ready to <span className="italic text-[#DC5817]">Elevate</span>{" "}
              <br className="hidden lg:block" /> Your Operations?
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <CircleButton
                href="https://outlook.office.com/book/TechnicalConsultation4@cypressenergyghana.com/"
                variant="primary"
              >
                Book a Consultation
              </CircleButton>
              <CircleButton href="/contact" variant="secondary">
                Get in Touch
              </CircleButton>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:col-span-5 cta-fade-up">
            <div className="relative aspect-4/5 rounded-[25px] overflow-hidden bg-black/5">
              <img
                src="/images/1H6A3759-scaled.jpg"
                alt="Cypress Team"
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-700" />
            </div>
            <div className="mt-8 flex items-center justify-between opacity-30">
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em]">
                Cypress Energy
              </span>
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em]">
                © 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFooterCTA;
