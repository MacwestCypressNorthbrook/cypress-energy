"use client";

import React, { useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Integrity",
    description:
      "We work constantly to earn the trust of our partners by being transparent and honest with our operations.",
    image: "/images/values/Integrity.webp",
  },
  {
    title: "Excellence",
    description: "We value innovation, excellent timely delivery on our promise.",
    image: "/images/values/excellence.webp",
  },
  {
    title: "Team Work",
    description: "A collaborated effort in achieving the corporate mandate.",
    image: "/images/values/team-work.webp",
  },
  {
    title: "Safety Mindset",
    description:
      "We ensure our immediate working area is safe and meets all environmental requirements.",
    image: "/images/values/Safet.webp",
  },
];

export default function AboutPage() {
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const csrRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".mission-block",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: missionRef.current, start: "top 82%", once: true },
        },
      );
    },
    { scope: missionRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".value-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: valuesRef.current, start: "top 82%", once: true },
        },
      );
    },
    { scope: valuesRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".csr-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: csrRef.current, start: "top 85%", once: true },
        },
      );
    },
    { scope: csrRef },
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        title="About Us"
        subtitle="An indigenous Ghanaian oil & gas services company built on hard work, resilience, and a skilled team."
        image="/images/1H6A2307-scaled.jpeg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Who We <span className="text-foreground/15">Are</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Cypress Energy Company Limited is a Ghanaian oil-and-gas services company built on
                hard work, resilience, and a skilled team supported by strategic partnerships with
                international businesses.
              </p>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                Our collaborations give us access to global expertise and ensure our operations meet
                international standards. From our Accra headquarters, we serve tier-1 operators
                across West Africa's upstream oil and gas sector.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
                <img
                  // src="/images/1H6A2643-scaled.jpeg"
                  src="/images/about/ISO-9001-C621988-0-en-US-20240910_page-0001-scaled.webp"
                  alt="Cypress Energy Operations"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#DC5817] rounded-[2rem] p-8 text-white shadow-xl">
                <div className="text-4xl font-black">ISO</div>
                <div className="text-sm font-bold">9001 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#F8F9FA]" ref={missionRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mission-block bg-white rounded-[2.5rem] p-12 space-y-6 shadow-sm">
              <div className="w-12 h-12 bg-[#DC5817] rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight">Our Mission</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                Deliver reliable offshore support and logistics solutions meeting global standards
                of safety, efficiency, and compliance, leveraging local expertise and international
                partnerships.
              </p>
            </div>

            <div className="mission-block bg-black rounded-[2.5rem] p-12 space-y-6 shadow-sm">
              <div className="w-12 h-12 bg-[#DC5817] rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                Our Vision
              </h3>
              <p className="text-white/60 font-medium leading-relaxed text-lg">
                Be a leading brand in offshore support services and logistical needs across the
                sub-region and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white" ref={valuesRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-14 space-y-3">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Core <span className="text-foreground/15">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={val.title}
                className="value-card bg-[#F8F9FA] rounded-[2.5rem] p-10 space-y-5 hover:shadow-xl transition-all duration-500 group cursor-default"
              >
                <div className="flex items-center justify-center">
                  <img src={val.image} alt={val.title} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl text-center font-black uppercase tracking-tight">
                  {val.title}
                </h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="py-24 bg-[#F8F9FA]" ref={csrRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="csr-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[3rem] overflow-hidden aspect-video shadow-2xl">
              <img
                src="/images/1H6A3267-scaled-neeeeeew.jpg"
                alt="Community engagement"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                Corporate Social <span className="text-foreground/15">Responsibility</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Cypress Energy is committed to community wellbeing, livelihoods, socio-economic
                development, and environmental stewardship.
              </p>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                Our local fabrication capabilities support community job creation, and our local
                content commitment ensures Ghanaian communities benefit directly from the upstream
                energy sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
