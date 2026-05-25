import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Advantage from "@/components/sections/Advantage";
import QHSEPolicy from "@/components/sections/QHSEPolicy";
import QHSEPerformance from "@/components/sections/QHSEPerformance";
import Partners from "@/components/sections/Partners";
import OperationsGallery from "@/components/sections/OperationsGallery";
import InteractiveShowcase from "@/components/sections/InteractiveShowcase";
import CEOMessage from "@/components/sections/CEOMessage";
import Footer from "@/components/sections/Footer";
import ScrollDrawingSVGs from "@/components/ScrollDrawingSVGs";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#F2F4F1]">
      {/* Global Blueprint engineering grid */}
      <ScrollDrawingSVGs />
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern
              id="topo-global"
              x="0"
              y="0"
              width="900"
              height="300"
              patternUnits="userSpaceOnUse"
            >
              {[
                { d: "M0,60 Q225,20 450,60 Q675,100 900,60", o: 0.08 },
                { d: "M0,100 Q225,60 450,100 Q675,140 900,100", o: 0.07 },
                { d: "M0,30 Q225,-10 450,30 Q675,70 900,30", o: 0.06 },
                { d: "M0,140 Q225,100 450,140 Q675,180 900,140", o: 0.05 },
                { d: "M0,180 Q225,140 450,180 Q675,220 900,180", o: 0.04 },
                { d: "M0,220 Q225,180 450,220 Q675,260 900,220", o: 0.04 },
              ].map((line, i) => (
                <g key={i}>
                  {/* Base static line */}
                  <path d={line.d} stroke="#13642C" fill="none" strokeWidth="1" opacity={line.o} />

                  {/* Glowing energy flow line */}
                  <path
                    d={line.d}
                    stroke="#DC5817"
                    fill="none"
                    strokeWidth="0.8"
                    pathLength="1"
                    className="energy-path"
                    style={{
                      strokeDasharray: `${0.04 + (i % 4) * 0.04} 1`,
                      animationDuration: `${10 + i * 2}s`, // Slightly faster
                      animationDelay: `${i * 1.5}s`, // More compact staggering
                    }}
                    filter="url(#glow)"
                  />
                </g>
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-global)" />
        </svg>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutUs />
        <Partners />
        <Services />
        <Advantage />
        <Projects />
        <QHSEPolicy />
        <QHSEPerformance />
        <OperationsGallery />
        <InteractiveShowcase />
        <CEOMessage />
        <Footer />
      </div>
    </main>
  );
}
