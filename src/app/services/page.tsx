"use client";

import React, { useRef } from "react";
import TransitionLink from "@/components/TransitionLink";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import { services } from "@/lib/services-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".service-hub-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
        },
      );
    },
    { scope: gridRef },
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        title="Our Services"
        subtitle="Cypress Energy delivers integrated offshore and onshore support solutions tailored to the upstream oil and gas industry in West Africa."
        image="/images/1H6A2856-1-scaled.jpeg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/services" },
        ]}
      />

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-14 space-y-3">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Explore All <span className="text-foreground/15">Services</span>
            </h2>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <TransitionLink
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-hub-card group bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-black text-foreground/20 group-hover:text-[#DC5817]/30 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:bg-[#DC5817] group-hover:border-[#DC5817] transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-foreground/40 group-hover:text-white group-hover:rotate-45 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-[#DC5817] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed line-clamp-2">
                    {service.intro[0]}
                  </p>
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-black rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left space-y-4 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Need a bespoke solution?
              </h2>
              <p className="text-white/50 font-medium leading-relaxed">
                Our technical team can design an integrated service package matched to your specific
                operational requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="https://outlook.office.com/book/TechnicalConsultation4@cypressenergyghana.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#DC5817] hover:bg-[#C44D14] text-white font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105"
              >
                Schedule Consultation
              </a>
              <TransitionLink
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/20 text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-all"
              >
                Contact Us
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
