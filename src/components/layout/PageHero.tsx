"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin();

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: { label: string; href: string }[];
}

const PageHero = ({
  title,
  subtitle,
  image = "/images/cp-3.jpeg",
  breadcrumb,
}: PageHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-heading",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-breadcrumb",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.1, ease: "power1.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full min-h-[50vh] flex items-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-16 pt-40">
        {breadcrumb && (
          <div className="hero-breadcrumb flex items-center gap-2 mb-6">
            {breadcrumb.map((crumb, i) => (
              <React.Fragment key={crumb.href}>
                {i > 0 && <span className="text-white/40 text-sm">/</span>}
                <Link
                  href={crumb.href}
                  className="text-white/60 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        )}
        <h1 className="hero-heading text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="hero-sub mt-6 text-white/70 text-lg font-medium max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
