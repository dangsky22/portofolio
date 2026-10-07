import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const About = dynamic(() => import('@/components/About'), { ssr: true });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: true });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: true });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true });
const Organizational = dynamic(() => import('@/components/Organizational'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Organizational />
      <Contact />
    </main>
  );
}
