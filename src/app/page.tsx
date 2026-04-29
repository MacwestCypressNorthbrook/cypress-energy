import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Projects from "@/components/sections/Projects";
import Advantage from "@/components/sections/Advantage";
import QHSEPolicy from "@/components/sections/QHSEPolicy";
import QHSEPerformance from "@/components/sections/QHSEPerformance";
import Partners from "@/components/sections/Partners";
import OperationsGallery from "@/components/sections/OperationsGallery";
import InteractiveShowcase from "@/components/sections/InteractiveShowcase";
import CEOMessage from "@/components/sections/CEOMessage";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Advantage />
      <Projects />
      <Team />
      <QHSEPolicy />
      <QHSEPerformance />
      <OperationsGallery />
      <InteractiveShowcase />
      <CEOMessage />
      <Partners />
      <Footer />
    </main>
  );
}
