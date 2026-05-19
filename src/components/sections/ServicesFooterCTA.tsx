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
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <div className="cta-fade-up space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light uppercase tracking-tight leading-[1.1] text-black">
            Ready to <span className="italic text-[#DC5817]">Elevate</span> <br /> Your Operations?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
      </div>
    </section>
  );
};

export default ServicesFooterCTA;
