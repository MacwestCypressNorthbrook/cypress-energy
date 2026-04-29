"use client";

import React, { useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import { partners } from "@/lib/partners-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function PartnersPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".partner-logo",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
        },
      );
    },
    { scope: gridRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".partner-detail",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: listRef.current, start: "top 82%", once: true },
        },
      );
    },
    { scope: listRef },
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        title="Partners"
        subtitle="The heart of our success is attributed to our well-equipped team and our strategic partnerships."
        image="/images/1H6A2589-scaled.jpeg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Partners", href: "/partners" },
        ]}
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            Strategic <span className="text-foreground/15">Alliances</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto">
            Affiliations with international businesses have afforded us international exposure and
            world-class expertise. These partnerships are the foundation of our ability to deliver
            integrated solutions that meet global standards.
          </p>
        </div>
      </section>

      {/* Logo grid */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="partner-logo bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-xl transition-all duration-500 group min-h-[140px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                  draggable={false}
                />
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">
                  {partner.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-14 space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#13642C]">
              Partnership Details
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Our <span className="text-foreground/15">Clients</span>
            </h2>
          </div>

          <div ref={listRef} className="space-y-0 divide-y divide-border">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="partner-detail group grid grid-cols-1 md:grid-cols-12 gap-8 py-10 hover:bg-[#F8F9FA] transition-colors duration-300 px-4 rounded-2xl"
              >
                <div className="md:col-span-3 space-y-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-300"
                    draggable={false}
                  />
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[#13642C] px-3 py-1 rounded-full">
                    {partner.category}
                  </span>
                </div>
                <div className="md:col-span-9 space-y-1">
                  <h3 className="text-lg font-bold text-foreground">{partner.name}</h3>
                  <p className="text-base text-muted-foreground font-medium leading-relaxed">
                    {partner.narrative}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
