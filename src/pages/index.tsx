import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Experience from "@/components/sections/index/Experience";
import Projects from "@/components/sections/index/Projects";
import Footer from "@/components/sections/index/Footer";
import { GridPattern } from "@/components/GridPattern";
import KurwaCard from '@/components/sections/index/kurwa';

export default function Home() {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden px-6">
        <Hero inView={inView} descRef={ref} />
        <About />
        <Experience />
        <Projects />
        <KurwaCard />
        <Footer />
      </main>
    </>
  );
}
