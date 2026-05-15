"use client";

import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ProjectsHero from "@/components/sections/ProjectsHero";
import ProjectPod from "@/components/sections/ProjectPod";
import ServicesFooterCTA from "@/components/sections/ServicesFooterCTA";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#EDF6F0] selection:bg-[#DC5817]/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <ProjectsHero
        title="Engineering Success Across West Africa"
        subtitle="Explore our portfolio of complex offshore campaigns, technical surveys, and logistics support for the world's leading energy operators."
        image="/images/abd9674e79b5d94da4786412caac4e48-xlarge.jpg"
      />

      {/* Project Pods */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <ProjectPod
                key={project.id}
                index={index}
                title={project.title}
                client={project.client}
                description={project.description}
                image={project.image}
                services={project.services}
                deliveries={project.deliveries}
                variant={index % 2 === 0 ? "card" : "minimal"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-24 bg-[#0B2D26] rounded-t-[2.5rem] md:rounded-t-[4rem]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "9+", label: "Major Campaigns" },
              { value: "Tier-1", label: "Clients Served" },
              { value: "5+", label: "Countries Involved" },
              { value: "100%", label: "HSE Compliance" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-4">
                <div className="text-5xl md:text-6xl font-display font-light text-[#DAFDA3]">{stat.value}</div>
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.4em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-20">
        <ServicesFooterCTA />
      </div>

      <Footer />
    </main>
  );
}
