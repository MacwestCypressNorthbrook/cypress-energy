"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: ".projects-grid", start: "top 80%", once: true },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            {/* <p className="text-2xl underline font-extrabold uppercase tracking-widest text-[#DC5817]">
              Our Work
            </p> */}
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
              Our <span className="text-foreground/15">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 bg-[#DC5817] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#C44D14] transition-all hover:scale-105"
          >
            View All Projects
          </Link>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => {
            const green = index === 1;
            const arrowBg = green ? "bg-[#13642C]" : "bg-[#DC5817]";
            const titleHover = green ? "group-hover:text-[#13642C]" : "group-hover:text-[#DC5817]";
            return (
              <Link
                key={index}
                href={project.href}
                className="project-card group flex flex-col gap-4"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-5 right-5">
                    <div
                      className={`w-12 h-12 ${arrowBg} rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:rotate-45 transition-transform duration-300`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 px-2">
                  <h3 className={`text-xl font-black ${titleHover} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-bold uppercase text-xs tracking-widest">
                    {project.client}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#DC5817] text-white px-6 py-3 rounded-full font-bold text-sm"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
