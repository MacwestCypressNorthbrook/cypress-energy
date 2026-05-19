"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import ServicesFooterCTA from "@/components/sections/ServicesFooterCTA";
import CircleButton from "@/components/ui/CircleButton";
import { projects } from "@/lib/projects-data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const project = projects.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(project?.images?.[0] || "");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  // Initialize active image when project is loaded
  useEffect(() => {
    if (project && project.images.length > 0) {
      setActiveImage(project.images[0]);
    }
  }, [project]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen || !project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, lightboxIndex, project]);

  useGSAP(
    () => {
      if (!project) return;

      // Animate left content column
      gsap.fromTo(
        ".project-detail-fade",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%", once: true },
        }
      );

      // Animate gallery container
      gsap.fromTo(
        ".project-gallery-fade",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gallery-section", start: "top 80%", once: true },
        }
      );
    },
    { scope: contentRef, dependencies: [project] }
  );

  if (!project) {
    notFound();
  }

  const handleThumbnailClick = (img: string, idx: number) => {
    setActiveImage(img);
    setLightboxIndex(idx);
  };

  const handleOpenLightbox = () => {
    const idx = project.images.indexOf(activeImage);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setIsLightboxOpen(true);
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <main className="min-h-screen bg-[#EDF6F0] selection:bg-[#DC5817]/30">
      <Navbar />

      <PageHero
        title={project.title}
        subtitle={`Partner: ${project.client}`}
        image={project.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title, href: `/projects/${project.id}` },
        ]}
      />

      <section className="py-24 bg-white" ref={contentRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Project Meta Info Card */}
              <div className="project-detail-fade bg-[#EDF6F0] rounded-[2rem] p-8 md:p-10 border border-black/5 space-y-6">
                <h3 className="text-xl font-display font-black uppercase tracking-tight text-[#082E29]">
                  Campaign Overview
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-sans font-medium text-black/70">
                  <div>
                    <span className="block text-black/40 uppercase tracking-widest text-[10px] font-bold mb-1">
                      Client / Operator
                    </span>
                    <span className="text-base text-black font-semibold">{project.client}</span>
                  </div>
                  {project.vessel && (
                    <div>
                      <span className="block text-black/40 uppercase tracking-widest text-[10px] font-bold mb-1">
                        Operational Vessel
                      </span>
                      <span className="text-base text-[#DC5817] font-semibold">{project.vessel}</span>
                    </div>
                  )}
                  {project.date && (
                    <div>
                      <span className="block text-black/40 uppercase tracking-widest text-[10px] font-bold mb-1">
                        Completion Date
                      </span>
                      <span className="text-base text-black font-semibold">{project.date}</span>
                    </div>
                  )}
                  <div>
                    <span className="block text-black/40 uppercase tracking-widest text-[10px] font-bold mb-1">
                      Sector
                    </span>
                    <span className="text-base text-black font-semibold">Offshore Support & Marine Services</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="project-detail-fade space-y-6">
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-black">
                  Project Description
                </h3>
                <p className="text-lg text-black/70 font-sans font-medium leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Services Provided */}
              <div className="project-detail-fade space-y-6">
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-black">
                  Scope of Services
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-[#EDF6F0]/50 border border-black/5 hover:border-[#DC5817]/35 transition-colors group">
                      <div className="w-6 h-6 rounded-full bg-[#DC5817] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-base font-sans font-semibold text-black/85">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Deliveries */}
              {project.deliveries && project.deliveries.length > 0 && (
                <div className="project-detail-fade space-y-6">
                  <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-black">
                    Key Deliveries
                  </h3>
                  <ul className="space-y-4">
                    {project.deliveries.map((delivery, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="shrink-0 w-2 h-2 rounded-full bg-[#FF7500] mt-2.5" />
                        <span className="text-base font-sans font-medium text-black/75 leading-relaxed">
                          {delivery}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Interactive Gallery */}
            <div className="lg:col-span-5 gallery-section space-y-6">
              <h3 className="text-2xl font-display font-black uppercase tracking-tight text-black lg:hidden">
                Project Gallery
              </h3>
              
              <div className="project-gallery-fade space-y-4">
                {/* Main Large Display Image */}
                <div 
                  onClick={handleOpenLightbox}
                  className="relative rounded-[2.5rem] overflow-hidden aspect-4/3 shadow-xl group cursor-zoom-in border border-black/5 bg-[#EDF6F0]"
                >
                  {activeImage ? (
                    <img
                      src={activeImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                  
                  {/* Click to expand overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Gallery Thumbnails List */}
                {project.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleThumbnailClick(img, idx)}
                        className={`relative rounded-2xl overflow-hidden aspect-4/3 border bg-[#EDF6F0] transition-all ${
                          activeImage === img 
                            ? "ring-2 ring-[#DC5817] border-transparent scale-[0.98]" 
                            : "border-black/5 hover:border-black/20 hover:scale-[1.02]"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Navigation Back Button Action */}
          <div className="mt-20 pt-10 border-t border-black/5 flex justify-center">
            <CircleButton href="/projects" variant="secondary">
              Back to Projects
            </CircleButton>
          </div>
        </div>
      </section>

      {/* CTA and Footer */}
      <div className="bg-[#EDF6F0] py-24">
        <ServicesFooterCTA />
      </div>

      <Footer />

      {/* Custom Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-99999 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center select-none animate-in fade-in duration-350">
          
          {/* Close trigger */}
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:scale-115 transition-all p-3 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer z-99999"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container with Prev/Next click zones */}
          <div className="relative flex items-center justify-center w-full h-[80vh] px-4 md:px-20">
            
            {/* Left Prev navigation */}
            <button 
              onClick={handlePrevImage}
              className="absolute left-6 text-white/70 hover:text-white hover:scale-110 hover:bg-white/20 transition-all p-4 bg-white/10 rounded-full cursor-pointer z-50"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Lightbox Image */}
            <div className="max-w-[90vw] max-h-[75vh] md:max-h-[80vh] overflow-hidden rounded-xl shadow-2xl flex items-center justify-center">
              {project.images[lightboxIndex] ? (
                <img
                  src={project.images[lightboxIndex]}
                  alt={`${project.title} - Full size`}
                  className="max-w-full max-h-full object-contain select-none"
                />
              ) : null}
            </div>

            {/* Right Next navigation */}
            <button 
              onClick={handleNextImage}
              className="absolute right-6 text-white/70 hover:text-white hover:scale-110 hover:bg-white/20 transition-all p-4 bg-white/10 rounded-full cursor-pointer z-50"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Bottom Counter text */}
          <div className="mt-4 text-white/50 text-sm font-sans tracking-wide">
            Image {lightboxIndex + 1} of {project.images.length}
          </div>

        </div>
      )}
    </main>
  );
}
