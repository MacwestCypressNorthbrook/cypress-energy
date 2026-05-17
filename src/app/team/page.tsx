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
      "30+ years in land economy, valuation, and corporate governance. BSc (Hons) Land Economy, KNUST. Career spanning the Land Valuation Board (Accra) and Chinbuah, Owusu-Adjapong & Partners. Fellow, Ghana Institution of Surveyors (Board of Examiners; Valuation & Estate Divisional Committee).",
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

const SmallCard = ({ member, onClick }: { member: any; onClick: () => void }) => {
  if (!member) return null;
  return (
    <div
      className="team-card group cursor-pointer opacity-0 h-[220px] lg:h-[250px] flex bg-[#0d2a23] rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:shadow-[#DC5817]/20 transition-all duration-500 relative"
      onClick={onClick}
    >
      <div className="w-[42%] h-full relative overflow-hidden shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center relative">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white/50 group-hover:border-[#DC5817]/50 group-hover:text-[#DC5817] transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h3 className="text-white font-serif uppercase text-lg lg:text-xl leading-tight mb-1 group-hover:text-[#DC5817] transition-colors">
          {member.name}
        </h3>
        <p className="text-[#DC5817] font-bold text-[9px] uppercase tracking-[0.2em] mt-1">
          {member.role}
        </p>

        {/* Bottom right orange cut corner with arrow */}
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#DC5817] rounded-tl-[1.25rem] flex items-center justify-center transform group-hover:bg-[#b84610] transition-colors duration-300">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 19l16-16m0 0h-8m8 0v8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const LargeCard = ({ member, onClick }: { member: any; onClick: () => void }) => {
  if (!member) return null;
  return (
    <div
      className="team-card group cursor-pointer opacity-0 flex flex-col bg-[#0d2a23] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-2xl hover:shadow-[#DC5817]/20 transition-all duration-500 h-auto lg:h-[532px] relative"
      onClick={onClick}
    >
      {/* Crown Icon */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-12 bg-[#DC5817] rounded-b-xl flex items-center justify-center z-20 shadow-md">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3l4 6 3-6 3 6 4-6v15H5V3z"
          />
        </svg>
      </div> */}

      <div className="relative w-full h-full overflow-hidden shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Decorative subtle dot pattern for large card */}
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      </div>

      {/* Overlapping white card */}
      <div className="bg-white mx-5 -mt-44 p-8 rounded-[2rem] relative z-10 flex flex-col items-center text-center border border-black/5">
        <h3 className="text-black font-serif uppercase text-2xl lg:text-[1.5rem] leading-tight mb-2 group-hover:text-[#DC5817] transition-colors">
          {member.name}
        </h3>
        <p className="text-[#DC5817] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
          {member.role}
        </p>
      </div>
    </div>
  );
};

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

      // Background connection lines (subtle diagonal lines)
      const lines = gsap.utils.toArray<SVGPathElement>(".connect-line");
      lines.forEach((line) => {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(line, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
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
        {/* Delicate Connecting Lines matching the reference */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <svg
            className="w-full h-full max-w-[1400px] opacity-20"
            viewBox="0 0 1400 800"
            fill="none"
          >
            {/* Top Left Line */}
            <path className="connect-line" d="M700 400 L300 200" stroke="#13642C" strokeWidth="1" />
            {/* Bottom Left Line */}
            <path className="connect-line" d="M700 400 L300 600" stroke="#13642C" strokeWidth="1" />
            {/* Top Right Line */}
            <path
              className="connect-line"
              d="M700 400 L1100 200"
              stroke="#13642C"
              strokeWidth="1"
            />
            {/* Bottom Right Line */}
            <path
              className="connect-line"
              d="M700 400 L1100 600"
              stroke="#13642C"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="team-header text-center mb-8 space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif uppercase tracking-tight leading-none opacity-0">
              Meet <span className="text-foreground/20">the</span> team
            </h2>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,1.2fr)_1fr] gap-6 lg:gap-8 max-w-[1400px] mx-auto"
          >
            {/* Left Column */}
            <div className="flex flex-col gap-6 lg:gap-8 justify-center">
              <SmallCard
                member={teamMembers[1]}
                onClick={() => setSelectedMember(teamMembers[1])}
              />
              <SmallCard
                member={teamMembers[3]}
                onClick={() => setSelectedMember(teamMembers[3])}
              />
            </div>

            {/* Center Column (CEO) */}
            <div className="flex flex-col">
              <LargeCard
                member={teamMembers[0]}
                onClick={() => setSelectedMember(teamMembers[0])}
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 lg:gap-8 justify-center">
              <SmallCard
                member={teamMembers[2]}
                onClick={() => setSelectedMember(teamMembers[2])}
              />
              <SmallCard
                member={teamMembers[4]}
                onClick={() => setSelectedMember(teamMembers[4])}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Video Section */}
      <section className="py-5 bg-transparent">
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
                  {/* <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DC5817]">
                    Team Member Profile
                  </p> */}
                  <h2 className="text-2xl font-black text-[#13642C] uppercase tracking-tight leading-tight">
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
