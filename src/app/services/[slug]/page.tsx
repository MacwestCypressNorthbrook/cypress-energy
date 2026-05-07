"use client";

import React, { useRef } from "react";
import { useParams, notFound } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import ContactSidebar from "@/components/sections/ContactSidebar";
import { getServiceBySlug, BOOKING_URL } from "@/lib/services-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const service = getServiceBySlug(slug);

  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".service-intro-block",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".capability-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".capabilities-list", start: "top 85%", once: true },
        }
      );
    },
    { scope: contentRef }
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        title={service.h1}
        image={service.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />

      <section className="py-24 bg-white" ref={contentRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Intro paragraphs */}
              <div className="space-y-6">
                {service.intro.map((paragraph, i) => (
                  <p
                    key={i}
                    className="service-intro-block text-lg text-muted-foreground font-medium leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Image */}
              <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-xl service-intro-block">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Capabilities */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                  {service.listLabel}
                </h2>
                <ul className="capabilities-list space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="capability-item flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#DC5817] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-base font-medium text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-[#F8F9FA] rounded-[2rem] p-8 space-y-4 service-intro-block">
                <h3 className="text-xl font-black uppercase tracking-tight">
                  Ready to discuss your requirements?
                </h3>
                {service.ctaType === "booking" ? (
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#DC5817] hover:bg-[#C44D14] text-white font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 shadow-lg shadow-[#DC5817]/20"
                  >
                    Schedule Technical Consultation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ) : (
                  <TransitionLink
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-[#DC5817] hover:bg-[#C44D14] text-white font-bold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 shadow-lg shadow-[#DC5817]/20"
                  >
                    Contact Us About This Service
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </TransitionLink>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <ContactSidebar />

              {/* Other services */}
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-muted-foreground">
                  Other Services
                </h4>
                <ul className="space-y-2">
                  {["offshore-vessel-supply", "manpower", "power-generation", "logistics-freight-forwarding", "geo-seismic-surveys"]
                    .filter((s) => s !== slug)
                    .slice(0, 4)
                    .map((s) => {
                      const linked = getServiceBySlug(s);
                      if (!linked) return null;
                      return (
                        <li key={s}>
                          <TransitionLink
                            href={`/services/${s}`}
                            className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-[#DC5817] transition-colors py-2 border-b border-border"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DC5817] shrink-0" />
                            {linked.title}
                          </TransitionLink>
                        </li>
                      );
                    })}
                  <li>
                    <TransitionLink href="/services" className="text-sm font-bold text-[#DC5817] hover:underline">
                      View All Services →
                    </TransitionLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
