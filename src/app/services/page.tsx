"use client";

import React, { useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import EditorialHero from "@/components/sections/EditorialHero";
import EditorialGrid from "@/components/sections/EditorialGrid";
import FeatureDiagram from "@/components/sections/FeatureDiagram";
import EditorialCarousel from "@/components/sections/EditorialCarousel";
import EditorialTestimonials from "@/components/sections/EditorialTestimonials";
import TransitionLink from "@/components/TransitionLink";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Global Page Fade-in
      gsap.to(pageRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power1.out",
      });

      // Optional: Pinning for technical showcase if desired
      // But based on the prompt, "Consider pinning one major section briefly"
      // I'll add a slight pinning effect to FeatureDiagram to make it feel immersive
    },
    { scope: pageRef }
  );

  return (
    <main ref={pageRef} className="page-fade-in min-h-screen bg-white selection:bg-[#DC5817]/30">
      <Navbar />

      {/* Cinematic Hero */}
      <EditorialHero 
        title="Integrated Energy Solutions"
        subtitle="Cypress Energy delivers world-class offshore and onshore support solutions tailored to the complex needs of the oil and gas industry in West Africa."
        image="/images/services/offshore vessel supply.avif"
      />

      {/* Asymmetric Modular Grid */}
      <EditorialGrid />

      {/* Technical Showcase */}
      <FeatureDiagram />

      {/* Horizontal Scrolling Features / Case Studies */}
      <EditorialCarousel />

      {/* Asymmetric Testimonials */}
      <EditorialTestimonials />

      {/* Final Editorial CTA */}
      <section className="py-16 md:py-32 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
          <div className="asymmetric-grid-cols-12 gap-12 items-center flex flex-col md:grid">
            <div className="md:col-span-7">
              <h2 className="text-5xl md:text-[7rem] font-display font-light uppercase tracking-tighter leading-[0.85] text-black mb-12">
                Ready to <span className="block italic text-[#DC5817]/40">Elevate</span> Your Operations?
              </h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="https://outlook.office.com/book/TechnicalConsultation4@cypressenergyghana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between bg-black text-white px-10 py-6 rounded-full hover:bg-[#DC5817] transition-all duration-500 min-w-[280px]"
                >
                  <span className="font-display font-medium uppercase tracking-widest text-sm">
                    Book a Consultation
                  </span>
                  <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                <TransitionLink
                  href="/contact"
                  className="group flex items-center justify-between border border-black/10 text-black px-10 py-6 rounded-full hover:bg-black hover:text-white transition-all duration-500 min-w-[280px]"
                >
                  <span className="font-display font-medium uppercase tracking-widest text-sm">
                    Get in Touch
                  </span>
                  <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </TransitionLink>
              </div>
            </div>
            
            <div className="md:col-span-5 md:pl-12">
              <div className="aspect-4/5 rounded-[3rem] overflow-hidden bg-muted">
                <img 
                  src="/images/1H6A3759-scaled.jpg" 
                  alt="Contact" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="mt-8 flex items-center justify-between opacity-40">
                <span className="text-xs font-display font-bold uppercase tracking-[0.3em]">Cypress Energy</span>
                <span className="text-xs font-display font-bold uppercase tracking-[0.3em]">© 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
