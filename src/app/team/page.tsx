"use client";

import React, { useState, useRef, useEffect } from "react";
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
    image: "/images/team/CEO.webp",
    description:
      "Kwabena Amponsah Osei-Bonsu is an accomplished business leader with more than thirty years of experience in land economy, valuation, and corporate governance. He holds a Bachelor of Science (Honors) degree in Land Economy from the Kwame Nkrumah University of Science and Technology.\n\nHis career began at the Land Valuation Board in Accra, where he contributed to national-scale property valuation projects. He later joined Chinbuah, Owusu-Adjapong & Partners Limited, where he distinguished himself in complex valuation and estate management assignments.\n\nMr. Osei-Bonsu is a Fellow of the Ghana Institution of Surveyors (GhIS), where he has played active leadership roles as a member of the Board of Examiners and the Divisional Committee for the Valuation and Estate section. His governance experience spans both local and international organizations. He serves on the boards of KOA Consult, Macwest Limited, Waterbridge Ltd., and Bumi Armada Sharpooji & Pallonji Limited, as well as Bumi Armada Ghana Limited, affiliations that have given him significant exposure to multinational operations and global business practices.\n\nAs Chief Executive Officer of Cypress Energy, Mr. Osei-Bonsu brings together technical expertise, institutional knowledge, and strategic leadership. He is committed to strengthening the company’s role as a trusted partner in Ghana’s energy sector, driving growth while positioning the firm within a wider regional context.",
  },

  {
    id: 3,
    name: "Kwabena Osei-Bonsu",
    role: "Executive Director",
    image: "/images/team/Kwabena.webp",
    description:
      "Kwabena Gyima Osei-Bonsu holds a Bachelor of Arts (Honours) degree in Law and Sociology from the Kwame Nkrumah University of Science and Technology. He began his professional career as a Legal Officer with the Ghana National Petroleum Corporation (GNPC), where he gained early exposure to the petroleum industry’s regulatory and operational framework.\n\nHe later joined Meridian Biao Bank in Accra as a Corporate Affairs Officer, contributing to the bank’s communications and stakeholder engagement efforts. Mr. Osei-Bonsu transitioned to the United Kingdom, where he was appointed Business Development Manager at Talk is Cheap Telecommunications in London, expanding his international business experience.\n\nIn 2003, he took the role of Executive Director at MX Corp, a company recognized for its work in the engineering sector. His leadership helped strengthen the firm’s profile within the industry. He currently serves on the Board of the State Insurance Company (SIC), Ghana’s largest general insurer, where he contributes to governance and strategic oversight.\n\nMr. Osei-Bonsu is the Executive Director of Cypress Energy Limited, where he brings more than two decades of multi-sector experience spanning energy, finance, telecommunications, and engineering. His career reflects a strong foundation in both corporate governance and business development.",
  },
  {
    id: 4,
    name: "Allen Whalley",
    role: "Finance Director",
    image: "/images/team/Whalley.webp",
    description:
      "Richard Allan Whalley earned a BSc in Biochemistry and Food Technology from the University of Leeds and later pursued professional qualifications in Accounting and Finance with CIMA. He also completed executive development programs with PricewaterhouseCoopers, INSEAD, and the Cranfield School of Management.\n\nHe began his career as a Graduate Trainee Accountant with Sandoz Holdings (now part of Clariant and Novartis), where he gained experience in the global pharmaceutical sector. In 2001, he was appointed Group Finance Director at Wier Holdings Limited, with responsibility for Finance, Human Resources, and IT across operations in the UK, France, Spain, Belgium, and Denmark.\n\nRichard went on to serve as Finance Director with the International Land Development Company/John Murphy Construction in 2005, where he managed financial operations and cashflow during a period of significant growth in civil construction and infrastructure projects. His work in these sectors sharpened his expertise in managing complex, multi-country operations and aligning financial strategy with business expansion.\n\nToday, Richard serves as Director of Finance for Cypress Energy Ghana Limited, where he applies more than three decades of international finance experience to support the company’s mission of driving energy and infrastructure growth across Africa.",
  },
  // {
  //   id: 5,
  //   name: "Efua Mensah",
  //   role: "QHSE Manager",
  //   image: "/images/73224431b07073688c4d4a54a934121c-xlarge.jpg",
  //   description:
  //     "Leading our Quality, Health, Safety, and Environment initiatives. Expert in international safety standards and environmental compliance for offshore energy projects.",
  // },
  // {
  //   id: 6,
  //   name: "Kojo Adu",
  //   role: "Project Coordinator",
  //   image: "/images/82ba594d30689685b54ef85f85c0f870-xlarge.jpg",
  //   description:
  //     "Managing operational timelines and resource allocation for complex energy campaigns. Focus on client communication and site-level efficiency.",
  // },
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
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />
      </div>

      {/* Overlapping white card */}
      <div className="bg-[#0d2a23] mx-5 -mt-44 p-8 rounded-[2rem] relative z-10 flex flex-col items-center text-center border border-black/5">
        <h3 className="text-white font-serif uppercase text-2xl lg:text-[1.5rem] leading-tight mb-2 group-hover:text-[#DC5817] transition-colors">
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

  // Prevent background scrolling when modal/drawer is open
  useEffect(() => {
    if (selectedMember || isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember, isVideoOpen]);

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

      <section className="relative pt-20 pb-32 overflow-hidden">
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
            <div className="flex flex-col items-center text-center min-h-0 grow pb-6">
              <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden shadow-xl ring-4 ring-[#DC5817]/10 ring-offset-4 mx-auto mb-8">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full flex flex-col min-h-0 grow">
                <div className="shrink-0">
                  {/* <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#DC5817]">
                    Team Member Profile
                  </p> */}
                  <h2 className="text-2xl font-black text-[#13642C] uppercase tracking-tight leading-tight">
                    {selectedMember.name}
                  </h2>
                  <p className="text-[#DC5817] font-bold uppercase tracking-widest text-xs py-1.5 px-3 bg-[#DC5817]/10 inline-block rounded-md mt-4 mx-auto mb-6">
                    {selectedMember.role}
                  </p>
                </div>

                <div className="w-12 h-1 bg-[#13642C] mx-auto shrink-0 mb-6" />

                <div
                  className="prose prose-slate max-w-none overflow-y-auto overscroll-contain min-h-0 grow pr-2 custom-scrollbar"
                  data-lenis-prevent="true"
                >
                  {selectedMember.description.split("\n").map((paragraph: string, idx: number) => {
                    if (!paragraph.trim()) return null;
                    return (
                      <p
                        key={idx}
                        className="text-muted-foreground text-left text-base leading-relaxed font-medium mb-4 last:mb-0"
                      >
                        {paragraph.trim()}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          <div className="pt-6 mt-auto shrink-0">
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
