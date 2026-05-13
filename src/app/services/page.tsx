"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicePod from "@/components/sections/ServicePod";
import ServicesFooterCTA from "@/components/sections/ServicesFooterCTA";
import MarqueeSection from "@/components/sections/MarqueeSection";
import { services } from "@/lib/services-data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#EDF6F0] selection:bg-[#DC5817]/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <ServicesHero
        title="Integrated Energy Solutions"
        subtitle="Cypress Energy delivers world-class offshore and onshore support solutions tailored to the complex needs of the oil and gas industry in West Africa."
        image="/images/services/offshore vessel supply.avif"
      />

      {/* Services Pods */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col">
            {services.map((service, index) => (
              <ServicePod
                key={service.slug}
                slug={service.slug}
                index={index}
                title={service.title}
                description={service.intro}
                image={service.image}
                items={service.items}
                variant={index % 2 === 0 ? "card" : "minimal"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bold Footer CTA */}
      <div className="mb-20">
        <ServicesFooterCTA />
      </div>

      <Footer />
    </main>
  );
}
