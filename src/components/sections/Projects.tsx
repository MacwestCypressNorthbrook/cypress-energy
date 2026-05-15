"use client";

import { useRef } from "react";
import TransitionLink from "@/components/TransitionLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CircleButton from "../ui/CircleButton";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    title: "Borr Drilling Campaign",
    client: "ENI GHANA E&P",
    image: "/images/b0d832026d85ab88e1515a1fccb38c06-xlarge.jpg",
    href: "/projects",
  },
  {
    title: "SAIPEM DVD Operations",
    client: "ENI GHANA E&P",
    image: "/images/1H6A2589-scaled.jpeg",
    href: "/projects",
  },
  {
    title: "Geotechnical Campaign",
    client: "RINA",
    image: "/images/7258b77a67b56c443499f654e54770f0-xlarge.jpg",
    href: "/projects",
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Title Reveal
      gsap.from(".projects-title-word", {
        y: "100%",
        opacity: 0,
        rotateX: -20,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 90%",
        },
      });

      // 2. Cards Staggered Entry
      gsap.from(".project-card-wrapper", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
        },
      });

      // 3. Parallax Effect for Images
      const cards = gsap.utils.toArray<HTMLElement>(".project-card-wrapper");
      cards.forEach((card) => {
        const img = card.querySelector("img");
        if (img) {
          gsap.to(img, {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: containerRef },
  );

  const slideUpWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden py-1 mr-2 md:mr-4">
        <span className="projects-title-word inline-block origin-bottom">{word}</span>
      </span>
    ));
  };

  return (
    <section className="py-20 md:py-32 bg-transparent overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="projects-header flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-20">
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#DC5817]">Execution Excellence</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none flex flex-wrap">
              {slideUpWords("Selected")}
              <span className="text-foreground/20 ml-2 md:ml-4">{slideUpWords("Portfolio")}</span>
            </h2>
          </div>
          
          <div className="shrink-0">
            <CircleButton href="/projects" variant="secondary">
              Full Archive
            </CircleButton>
          </div>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card-wrapper relative group aspect-4/5 rounded-[3rem] overflow-hidden bg-black/5"
            >
              <TransitionLink href={project.href} className="block w-full h-full relative">
                {/* Parallax Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute top-[-15%] left-0 w-full h-[130%] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Floating Content Card - Glassmorphism */}
                <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                  <div className="p-6 md:p-8 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 group-hover:bg-white/15 group-hover:border-white/30 group-hover:-translate-y-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-[#DC5817]" />
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#DC5817]">
                          {project.client}
                        </p>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">
                        {project.title}
                      </h3>

                      <div className="pt-4 flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                          View Details
                        </span>
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#DC5817] group-hover:border-[#DC5817] transition-colors duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Edge Glow on Hover */}
                <div className="absolute inset-0 rounded-[3rem] border border-white/0 group-hover:border-white/20 transition-colors duration-700 pointer-events-none" />
              </TransitionLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
