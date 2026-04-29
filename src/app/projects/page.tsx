"use client";

import React, { useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import { projects } from "@/lib/projects-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".project-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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
        title="Projects"
        subtitle="A selection of recent campaigns where Cypress Energy delivered integrated offshore support, logistics, and survey services for tier-1 operators across West Africa."
        image="/images/abd9674e79b5d94da4786412caac4e48-xlarge.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
        ]}
      />

      {/* Projects grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-item group bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817] mb-1">
                        {project.client}
                      </p>
                      <h3 className="text-xl font-black uppercase tracking-tight leading-tight group-hover:text-[#DC5817] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.date && (
                      <span className="text-xs font-bold text-muted-foreground bg-white px-3 py-1 rounded-full shrink-0">
                        {project.date}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {project.description}
                  </p>

                  {/* Services tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((svc) => (
                      <span
                        key={svc}
                        className="text-xs font-bold bg-white border border-border px-3 py-1.5 rounded-full text-foreground/60"
                      >
                        {svc}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="text-xs font-bold bg-white border border-border px-3 py-1.5 rounded-full text-foreground/40">
                        +{project.services.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Deliveries */}
                  {project.deliveries && (
                    <div className="pt-2 border-t border-border space-y-2">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Technical Deliveries
                      </p>
                      <ul className="space-y-1">
                        {project.deliveries.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-xs font-medium text-foreground/60"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#DC5817] shrink-0 mt-1.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "9+", label: "Major Campaigns" },
              { value: "Tier-1", label: "Clients Served" },
              { value: "5+", label: "Countries Involved" },
              { value: "100%", label: "HSE Compliance" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-5xl md:text-6xl font-black text-[#DC5817]">{stat.value}</div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
