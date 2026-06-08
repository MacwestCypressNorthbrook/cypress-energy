"use client";

import React, { useRef, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const enquiryTypes = [
  "Offshore Vessel Supply",
  "Manpower Management",
  "Power Generation Units",
  "Onshore Service Base",
  "Onshore Base Equipment",
  "Pipe Supply and Storage",
  "Logistics & Freight Forwarding",
  "Housing & Office Accommodation",
  "Hospitality & Ship Chandling Services",
  "Other",
];

const offices = [
  {
    city: "Accra, Ghana",
    label: "Headquarters",
    company: "Cypress Energy Company Ltd.",
    address: "No. 12 Joseph Richard Asiedu Street, Airport North, Accra",
    phones: ["+233 (0) 244 270797"],
    email: "info@cypressenergyghana.com",
    mapsUrl: "https://goo.gl/maps/3uRpqXsVqqAWhVhE6",
  },
  {
    city: "Abidjan, Ivory Coast",
    label: "Regional Office — Opening Soon",
    company: "Cypress Energy Solutions",
    address: "Zone Industrielle de Vridi, Socopao Berth, Abidjan — 01 BP 7071 Abidjan 01",
    phones: ["+225 07 97 84 51 64", "+225 07 14 53 91 64"],
    email: null,
    mapsUrl: null,
  },
];

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".office-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: officesRef.current, start: "top 82%", once: true },
        },
      );
    },
    { scope: officesRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".form-field",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: { trigger: formRef.current, start: "top 82%", once: true },
        },
      );
    },
    { scope: formRef },
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        title="Contact Us"
        subtitle="Cypress Energy maintains a strong presence in Ghana, with a soon-to-be fully launched office in Abidjan, Ivory Coast."
        image="/images/1H6A2307-scaled.jpeg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* Offices */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-14 space-y-3">
            <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817]">
              Find Us
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Our <span className="text-foreground/15">Offices</span>
            </h2>
          </div>

          <div ref={officesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div
                key={office.city}
                className="office-card bg-[#F8F9FA] rounded-[2.5rem] p-10 space-y-6"
              >
                <div className="space-y-1">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[#DC5817] px-3 py-1 rounded-full">
                    {office.label}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight pt-2">
                    {office.city}
                  </h3>
                </div>

                <div className="w-10 h-0.5 bg-[#DC5817]" />

                <div className="space-y-4 text-sm font-medium">
                  <div>
                    <p className="font-black text-foreground mb-1">{office.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{office.address}</p>
                  </div>

                  <div className="space-y-1">
                    {office.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block text-foreground/70 hover:text-[#DC5817] transition-colors font-bold"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>

                  {office.email && (
                    <a
                      href={`mailto:${office.email}`}
                      className="block text-foreground/70 hover:text-[#DC5817] transition-colors font-bold break-all"
                    >
                      {office.email}
                    </a>
                  )}

                  {office.mapsUrl && (
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817] hover:underline"
                    >
                      View on Maps →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#F8F9FA]" ref={formRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817]">
                  Get In Touch
                </p>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                  Send us a <span className="text-foreground/15">Message</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Whether you need offshore vessel supply, manpower management, or a complex
                integrated solution — our team is ready to discuss your requirements.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#DC5817] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      General
                    </p>
                    <a
                      href="mailto:info@cypressenergyghana.com"
                      className="font-bold text-sm hover:text-[#DC5817] transition-colors"
                    >
                      info@cypressenergyghana.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#DC5817] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Crewing
                    </p>
                    <a
                      href="mailto:crewing@cypressenergyghana.com"
                      className="font-bold text-sm hover:text-[#DC5817] transition-colors"
                    >
                      crewing@cypressenergyghana.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#DC5817] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Shipping
                    </p>
                    <a
                      href="mailto:shipping@cypressenergyghana.com"
                      className="font-bold text-sm hover:text-[#DC5817] transition-colors"
                    >
                      shipping@cypressenergyghana.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-[2rem] p-8 space-y-4">
                <h3 className="text-white font-black uppercase tracking-tight text-xl">
                  Technical Consultation
                </h3>
                <p className="text-white/60 font-medium text-sm leading-relaxed">
                  For technical enquiries, schedule a 15-minute call with our dedicated technical
                  team via our online booking portal.
                </p>
                <a
                  href="https://outlook.office.com/book/TechnicalConsultation4@cypressenergyghana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#DC5817] hover:bg-[#C44D14] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all hover:scale-105"
                >
                  Schedule Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm space-y-6">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-[#DC5817] rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black uppercase">Message Sent!</h3>
                  <p className="text-muted-foreground font-medium">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsLoading(true);
                    setError(null);
                    const formData = new FormData(e.currentTarget);
                    const data = Object.fromEntries(formData.entries());
                    try {
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                      });
                      if (res.ok) {
                        setSubmitted(true);
                      } else {
                        const errorData = await res.json();
                        setError(errorData.error || "Failed to send message. Please try again later.");
                      }
                    } catch (err) {
                      setError("An unexpected error occurred. Please try again.");
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                  className="space-y-5"
                >
                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                      {error}
                    </div>
                  )}
                  <div className="form-field grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest">
                        First Name *
                      </label>
                      <input
                        required
                        name="firstName"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#DC5817] transition-colors disabled:opacity-50"
                        placeholder="John"
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest">
                        Last Name *
                      </label>
                      <input
                        required
                        name="lastName"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#DC5817] transition-colors disabled:opacity-50"
                        placeholder="Doe"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="form-field space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#DC5817] transition-colors disabled:opacity-50"
                      placeholder="john@company.com"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-field space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#DC5817] transition-colors disabled:opacity-50"
                      placeholder="+233 ..."
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-field space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">
                      Enquiry Type
                    </label>
                    <select name="service" disabled={isLoading} className="w-full border border-border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#DC5817] transition-colors bg-white disabled:opacity-50">
                      <option value="">Select a service...</option>
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest">Message</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      disabled={isLoading}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-[#DC5817] transition-colors resize-none disabled:opacity-50"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <div className="form-field">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#DC5817] hover:bg-[#C44D14] text-white font-bold py-4 rounded-full text-sm transition-all hover:scale-[1.02] shadow-lg shadow-[#DC5817]/20 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
