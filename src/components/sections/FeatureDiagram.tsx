"use client";

import React, { useRef } from "react";
import { Settings, Shield, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: diagramRef.current,
          start: "top 90%",
        },
      });

      // 1. Connection lines draw in - Much faster
      tl.fromTo(
        ".diagram-line",
        { strokeDashoffset: 100, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 0.4,
          duration: 0.8,
          ease: "power2.inOut",
        },
      )
        // 2. Central Hub
        .fromTo(
          ".central-hub",
          { scale: 0.6, opacity: 0, rotate: -30 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.4",
        )
        // 3. Feature items reveal - Elastic pop
        .fromTo(
          ".diagram-item",
          { opacity: 0, scale: 0, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "back.out(2)",
          },
          "-=0.6",
        );

      // Ambient Floating - More dynamic
      gsap.to(".central-hub", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Soft Pulse for indicators
      gsap.to(".pulse-ring", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.out",
      });
    },
    { scope: containerRef },
  );

  const features = [
    {
      title: "Real-time Fleet Tracking",
      description:
        "Advanced GPS and AIS integration for precise vessel positioning and monitoring.",
      icon: <Globe className="w-6 h-6 text-[#DC5817]" />,
      pos: "top-0 left-0 md:top-10 md:left-20",
    },
    {
      title: "Optimized Logistics",
      description: "Smart supply chain management systems reducing turnaround times by 30%.",
      icon: <Zap className="w-6 h-6 text-[#DC5817]" />,
      pos: "top-0 right-0 md:top-10 md:right-20",
    },
    {
      title: "QHSE Compliance",
      description: "Automated safety monitoring and reporting across all operational sites.",
      icon: <Shield className="w-6 h-6 text-[#DC5817]" />,
      pos: "bottom-0 left-0 md:bottom-10 md:left-20",
    },
    {
      title: "Integrative Systems",
      description: "Seamless API connections between offshore assets and onshore headquarters.",
      icon: <Settings className="w-6 h-6 text-[#DC5817]" />,
      pos: "bottom-0 right-0 md:bottom-10 md:right-20",
    },
  ];

  return (
    <section ref={containerRef} className="py-16 bg-[#082E29] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-light uppercase tracking-tighter leading-none mb-6">
            Operational <span className="italic text-[#DC5817]">Intelligence</span>
          </h2>
          <p className="text-white/40 font-light max-w-xl mx-auto leading-relaxed">
            Our technical infrastructure ensures precision and safety in the most demanding offshore
            environments.
          </p>
        </div>

        <div
          ref={diagramRef}
          className="relative min-h-[500px] md:h-[700px] flex flex-col md:items-center md:justify-center"
        >
          {/* Central Hub - Centered on mobile, relative to flow */}
          <div className="central-hub relative z-10 w-32 h-32 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-xl shadow-[0_0_100px_rgba(220,88,23,0.15)] mx-auto mb-12 md:mb-0">
            <div className="pulse-ring absolute inset-0 rounded-full border border-[#DC5817]/40" />
            <img src="/logo.png" alt="Logo" className="w-16 md:w-32 opacity-80" />

            {/* Spinning decorative ring */}
            <div className="absolute inset-2 rounded-full border-t-2 border-r-2 border-[#DC5817]/40 animate-[spin_10s_linear_infinite]" />
          </div>

          {/* Feature Points - Stacked on mobile, absolute on desktop */}
          <div className="flex flex-col md:block md:absolute md:inset-0 w-full">
            {features.map((f, i) => (
              <div key={i} className={cn(
                "w-full md:max-w-[280px] p-6 diagram-item md:absolute",
                f.pos
              )}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-display uppercase tracking-widest text-[#DC5817]">
                    {f.title}
                  </h3>
                </div>
                <p className="text-sm text-white/50 font-light leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          {/* Connection Lines (SVG) - Desktop Only */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block">
            <line
              x1="20%"
              y1="20%"
              x2="50%"
              y2="50%"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="100"
              className="diagram-line"
            />
            <line
              x1="80%"
              y1="20%"
              x2="50%"
              y2="50%"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="100"
              className="diagram-line"
            />
            <line
              x1="20%"
              y1="80%"
              x2="50%"
              y2="50%"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="100"
              className="diagram-line"
            />
            <line
              x1="80%"
              y1="80%"
              x2="50%"
              y2="50%"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="100"
              className="diagram-line"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
