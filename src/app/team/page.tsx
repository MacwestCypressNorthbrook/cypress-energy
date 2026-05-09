"use client";

import React, { useState, useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useLoading } from "@/context/LoadingContext";

gsap.registerPlugin(ScrollTrigger);

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "Kwabena Amponsah Osei-Bonsu",
    role: "Chief Executive Officer",
    image: "/images/Screenshot-2023-02-28-at-13.53.31.png",
    description:
      "30+ years in land economy, valuation, and corporate governance. BSc (Hons) Land Economy, KNUST. Career spanning the Land Valuation Board (Accra) and Chinbuah, Owusu-Adjapong & Partners. Fellow, Ghana Institution of Surveyors (Board of Examiners; Valuation & Estate Divisional Committee). Board roles include KOA Consult, Macwest Limited, Waterbridge Ltd., Bumi Armada Sharpooji & Pallonji Limited, and Bumi Armada Ghana Limited.",
  },
  {
    id: 2,
    name: "Kwabena Gyima Osei-Bonsu",
    role: "Executive Director",
    image: "/images/WhatsApp-Image-2026-03-10-at-9.24.59-PM-1-2.jpeg",
    description:
      "BA (Hons) Law and Sociology, KNUST. Career as Legal Officer at the Ghana National Petroleum Corporation (GNPC); Corporate Affairs Officer at Meridian Biao Bank; Business Development Manager at Talk is Cheap Telecommunications (London); and Executive Director at MX Corp (2003). Board member, State Insurance Company (SIC). Over 20 years across energy, finance, telecoms, and engineering.",
  },
  {
    id: 3,
    name: "Richard Allan Whalley",
    role: "Finance Director",
    image: "/images/1H6A3259-scaled-newwwwww.jpg",
    description:
      "BSc Biochemistry & Food Technology (Leeds); CIMA qualified; executive programmes at PwC, INSEAD, and Cranfield. Career as Graduate Trainee Accountant at Sandoz Holdings; Group Finance Director at Wier Holdings (2001 – UK/France/Spain/Belgium/Denmark); Finance Director at International Land Development Co. / John Murphy Construction (2005). Over 30 years of international finance experience.",
  },
  {
    id: 4,
    name: "Nana Yaw Osei-Bonsu",
    role: "Technical Operations Manager",
    image: "/images/1H6A2307-scaled.jpeg",
    description:
      "Specializes in offshore logistics and technical maintenance. Extensive experience in subsea engineering and campaign coordination across the West African coast.",
  },
  {
    id: 5,
    name: "Efua Mensah",
    role: "QHSE Manager",
    image: "/images/73224431b07073688c4d4a54a934121c-xlarge.jpg",
    description:
      "Leading our Quality, Health, Safety, and Environment initiatives. Expert in international safety standards and environmental compliance for offshore energy projects.",
  },
  {
    id: 6,
    name: "Kojo Adu",
    role: "Project Coordinator",
    image: "/images/82ba594d30689685b54ef85f85c0f870-xlarge.jpg",
    description:
      "Managing operational timelines and resource allocation for complex energy campaigns. Focus on client communication and site-level efficiency.",
  },
];

const TeamPage = () => {
  const { isLoaded } = useLoading();
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const VIMEO_ID = "1099920704";

  // General animations
  useGSAP(
    () => {
      if (!isLoaded) return;

      // Header reveal
      gsap.fromTo(
        ".team-header > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        },
      );

      // Staggered reveal for cards
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );

      // Video section reveal
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      // Background lines animation
      const lines = gsap.utils.toArray<SVGPathElement>(".connect-line");
      lines.forEach((line) => {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(line, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef, dependencies: [isLoaded] },
  );

  // Drawer animation logic
  useGSAP(
    () => {
      if (selectedMember) {
        // Open Animation
        const tl = gsap.timeline();
        tl.to(backdropRef.current, { autoAlpha: 1, duration: 0.3, ease: "power2.out" })
          .fromTo(
            drawerRef.current,
            { x: "100%", autoAlpha: 1 },
            { x: "0%", duration: 0.5, ease: "power3.out" },
            "<",
          )
          .fromTo(
            ".drawer-content > *",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power2.out" },
            "-=0.2",
          );
      } else {
        // Close Animation
        const tl = gsap.timeline();
        tl.to(drawerRef.current, { x: "100%", duration: 0.4, ease: "power2.in" }).to(
          backdropRef.current,
          { autoAlpha: 0, duration: 0.2, ease: "power2.in" },
          "-=0.2",
        );
      }
    },
    { dependencies: [selectedMember], scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#FDFDFD] selection:bg-[#DC5817]/30 overflow-x-hidden"
    >
      <Navbar />

      <section className="relative py-32 overflow-hidden">
        {/* Connection Lines Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <svg className="w-full h-full opacity-30" viewBox="0 0 1440 2000" fill="none">
            {/* Horizontal Lines */}
            <path className="connect-line" d="M0 400 L1440 400" stroke="#13642C" strokeWidth="1" />
            <path className="connect-line" d="M0 800 L1440 800" stroke="#DC5817" strokeWidth="1" />
            <path
              className="connect-line"
              d="M0 1200 L1440 1200"
              stroke="#13642C"
              strokeWidth="1"
            />
            <path
              className="connect-line"
              d="M0 1600 L1440 1600"
              stroke="#DC5817"
              strokeWidth="1"
            />

            {/* Vertical Lines */}
            <path className="connect-line" d="M200 0 V2000" stroke="#13642C" strokeWidth="0.5" />
            <path className="connect-line" d="M1240 0 V2000" stroke="#DC5817" strokeWidth="0.5" />

            {/* Diagonal "circuit" lines */}
            <path
              className="connect-line"
              d="M200 400 L400 600 L1000 600 L1240 400"
              stroke="#13642C"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
            <path
              className="connect-line"
              d="M1240 800 L1040 1000 L440 1000 L200 800"
              stroke="#DC5817"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
            <path
              className="connect-line"
              d="M200 1200 L400 1400 L1000 1400 L1240 1200"
              stroke="#13642C"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="team-header text-center mb-20 space-y-4">
            {/* <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#DC5817] opacity-0">
              Our Human Capital
            </p> */}
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none opacity-0">
              Meet <span className="text-foreground/15">the</span> team
            </h2>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="team-card group cursor-pointer opacity-0"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-xl mb-6 bg-gray-100 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:ring-1 group-hover:ring-[#DC5817]/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#DC5817] translate-x-8 -translate-y-8 rotate-45 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />

                  {/* Bottom info overlay (mobile only) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent md:hidden">
                    <p className="text-white font-bold text-lg">{member.name}</p>
                    <p className="text-white/70 text-xs uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>

                <div className="hidden md:block space-y-1">
                  <h3 className="text-2xl font-black text-[#13642C] uppercase tracking-tight group-hover:text-[#DC5817] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#DC5817] font-bold uppercase tracking-widest text-xs opacity-70">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Video Section */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 max-w-7xl">
          <div
            ref={videoRef}
            className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src="/images/1H6A3759-scaled.jpg"
              alt="Cypress Energy Team"
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-24 h-24 bg-[#DC5817] rounded-full flex items-center justify-center shadow-2xl shadow-[#DC5817]/40 transition-all group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-white fill-current translate-x-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-12 bg-linear-to-t from-black/80 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-2xl font-bold uppercase tracking-tight">
                Our Story: <span className="text-white/60">The Excellence behind our success.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&byline=0&portrait=0`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>

          <button
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
            onClick={() => setIsVideoOpen(false)}
          >
            <svg
              className="w-6 h-6 text-white group-hover:rotate-90 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Team Member Drawer (GSAP Controlled) */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100 opacity-0 invisible"
        onClick={() => setSelectedMember(null)}
      />

      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white z-101 shadow-[-20px_0_60px_rgba(0,0,0,0.1)] overflow-hidden translate-x-full invisible"
      >
        <div className="p-12 md:p-16 h-full flex flex-col drawer-content">
          {selectedMember && (
            <div className="space-y-8 grow flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-[#DC5817]/10 ring-offset-4 mx-auto">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 w-full">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DC5817]">
                    Team Member Profile
                  </p>
                  <h2 className="text-3xl md:text-4xl font-black text-[#13642C] uppercase tracking-tight leading-tight">
                    {selectedMember.name}
                  </h2>
                  <p className="text-[#DC5817] font-bold uppercase tracking-widest text-xs py-1.5 px-3 bg-[#DC5817]/10 inline-block rounded-md mt-4 mx-auto">
                    {selectedMember.role}
                  </p>
                </div>

                <div className="w-12 h-1 bg-[#13642C] my-6 mx-auto" />

                <div className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground text-base leading-relaxed font-medium">
                    {selectedMember.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="pt-12 mt-auto">
            <button
              onClick={() => setSelectedMember(null)}
              className="w-full bg-[#13642C] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#DC5817] transition-all hover:scale-[1.02] active:scale-95 text-sm"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default TeamPage;
