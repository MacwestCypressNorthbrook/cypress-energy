"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "LTIFR", sublabel: "Lost Time Injury Frequency Rate", value: 0 },
  { label: "TRIFR", sublabel: "Total Recordable Injury Frequency Rate", value: 0 },
  { label: "First Aid Cases", sublabel: "Reported incidents requiring first aid", value: 0 },
  { label: "Fatalities", sublabel: "Zero tolerance policy enforced", value: 0 },
];

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = Math.round(obj.val).toString();
        },
      });
    },
    { scope: ref },
  );

  return <span ref={ref}>0</span>;
}

export default function QHSEPage() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".metric-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: metricsRef.current, start: "top 82%", once: true },
        },
      );
    },
    { scope: metricsRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".qhse-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%", once: true },
        },
      );
    },
    { scope: contentRef },
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        title="QHSE Policy Statement"
        subtitle="Our approach to quality, health and safety is something we constantly monitor and improve to serve our clients with the highest standards."
        image="/images/1H6A2643-scaled.jpeg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "QHSE", href: "/qhse" },
        ]}
      />

      {/* Policy intro */}
      <section className="py-24 bg-white" ref={contentRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 qhse-block">
              <div className="space-y-3">
                <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817]">
                  Our Commitment
                </p>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                  Safety Is <span className="text-foreground/15">Our Priority</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                At Cypress Energy, Quality, Health, Safety, and Environmental (QHSE) standards are
                not a box-ticking exercise — they are embedded in everything we do. Every project we
                deliver is underpinned by a commitment to the wellbeing of our people and the
                protection of the environment.
              </p>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                We operate in alignment with ISO 9001 and international best practices, conducting
                continuous monitoring, reporting, and improvement cycles across all service lines.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-[#DC5817] hover:bg-[#C44D14] text-white font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 shadow-lg shadow-[#DC5817]/20"
                >
                  Download Policy
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-border text-foreground font-bold px-8 py-4 rounded-full text-sm hover:border-[#DC5817] hover:text-[#DC5817] transition-all"
                >
                  QHSE Enquiry
                </Link>
              </div>
            </div>

            <div className="qhse-block space-y-6">
              <div className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
                <img
                  src="/images/1H6A2643-scaled.jpeg"
                  alt="QHSE Operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-[#F8F9FA]" ref={metricsRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-14 space-y-3">
            <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817]">
              Track Record
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              QHSE <span className="text-foreground/15">Performance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="metric-card bg-white rounded-[2.5rem] p-10 space-y-4 shadow-sm hover:bg-[#DC5817] hover:text-white transition-all duration-500 group"
              >
                <div className="flex items-start justify-between">
                  <div className="text-5xl font-black group-hover:text-white transition-colors">
                    <AnimatedCounter target={metric.value} />
                  </div>
                  <svg
                    className="w-6 h-6 text-foreground/20 group-hover:text-white/30 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="text-base font-black uppercase tracking-tight group-hover:text-white transition-colors">
                    {metric.label}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground group-hover:text-white/60 transition-colors leading-relaxed">
                    {metric.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Certification */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817]">
                Certification
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                ISO 9001 <span className="text-foreground/15">Certified</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Our ISO 9001 certification confirms our Quality Management System meets
                internationally recognised standards — giving our clients confidence in the
                consistency and reliability of our service delivery.
              </p>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                We maintain this certification through ongoing internal audits, continuous
                improvement processes, and regular external review.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-[#F8F9FA] rounded-[3rem] p-12 shadow-sm max-w-sm w-full">
                <img
                  src="/images/ISO-9001-C621988-0-en-US-20240910_page-0001-scaled.jpg"
                  alt="ISO 9001 Certificate"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
