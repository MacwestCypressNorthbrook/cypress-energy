"use client";

import React, { useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const executives = [
  {
    name: "Kwabena Amponsah Osei-Bonsu",
    title: "Chief Executive Officer",
    image: "/images/Screenshot-2023-02-28-at-13.53.31.png",
    bio: "30+ years in land economy, valuation, and corporate governance. BSc (Hons) Land Economy, KNUST. Career spanning the Land Valuation Board (Accra) and Chinbuah, Owusu-Adjapong & Partners. Fellow, Ghana Institution of Surveyors (Board of Examiners; Valuation & Estate Divisional Committee). Board roles include KOA Consult, Macwest Limited, Waterbridge Ltd., Bumi Armada Sharpooji & Pallonji Limited, and Bumi Armada Ghana Limited.",
    index: "01",
  },
  {
    name: "Kwabena Gyima Osei-Bonsu",
    title: "Executive Director",
    image: "/images/WhatsApp-Image-2026-03-10-at-9.24.59-PM-1-2.jpeg",
    bio: "BA (Hons) Law and Sociology, KNUST. Career as Legal Officer at the Ghana National Petroleum Corporation (GNPC); Corporate Affairs Officer at Meridian Biao Bank; Business Development Manager at Talk is Cheap Telecommunications (London); and Executive Director at MX Corp (2003). Board member, State Insurance Company (SIC). Over 20 years across energy, finance, telecoms, and engineering.",
    index: "02",
  },
  {
    name: "Richard Allan Whalley",
    title: "Finance Director",
    image: "/images/1H6A3259-scaled-newwwwww.jpg",
    bio: "BSc Biochemistry & Food Technology (Leeds); CIMA qualified; executive programmes at PwC, INSEAD, and Cranfield. Career as Graduate Trainee Accountant at Sandoz Holdings; Group Finance Director at Wier Holdings (2001 – UK/France/Spain/Belgium/Denmark); Finance Director at International Land Development Co. / John Murphy Construction (2005). Over 30 years of international finance experience.",
    index: "03",
  },
];

export default function ManagementPage() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".exec-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%", once: true },
        },
      );
    },
    { scope: cardsRef },
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        title="Management"
        subtitle="The leadership team steering Cypress Energy's mission across West Africa's energy sector."
        image="/images/1H6A2631-scaled.jpeg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Management", href: "/management" },
        ]}
      />

      {/* Executives */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-14 space-y-3">
            <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817]">
              Our Leaders
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Executive <span className="text-foreground/15">Team</span>
            </h2>
          </div>

          <div ref={cardsRef} className="space-y-8">
            {executives.map((exec, i) => (
              <div
                key={exec.name}
                className={`exec-card group grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-[#F8F9FA] ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-4 aspect-square lg:aspect-auto relative overflow-hidden ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F8F9FA]/20" />
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-8 p-10 md:p-16 flex flex-col justify-center space-y-6 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817] mb-2">
                        {exec.title}
                      </p>
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
                        {exec.name}
                      </h2>
                    </div>
                    <span className="text-6xl font-black text-foreground/5 group-hover:text-[#DC5817]/10 transition-colors">
                      {exec.index}
                    </span>
                  </div>

                  <div className="w-12 h-0.5 bg-[#DC5817]" />

                  <p className="text-muted-foreground font-medium leading-relaxed text-base max-w-2xl">
                    {exec.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Work with our <span className="text-[#DC5817]">Team</span>
          </h2>
          <p className="text-muted-foreground font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            We firmly believe in our company and our people. Reach out to discuss how we can support
            your next offshore campaign.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#DC5817] hover:bg-[#C44D14] text-white font-bold px-10 py-5 rounded-full text-base transition-all hover:scale-105 shadow-xl shadow-[#DC5817]/20"
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
