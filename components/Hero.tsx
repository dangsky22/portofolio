'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      icon: 'fab fa-github',
      href: 'https://github.com/dangsky22',
      label: 'GitHub',
    },
    {
      icon: 'fab fa-linkedin',
      href: 'https://linkedin.com/in/rizkydermawan',
      label: 'LinkedIn',
    },
    {
      icon: 'fab fa-whatsapp',
      href: 'https://wa.me/6285890633734',
      label: 'WhatsApp',
    },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="fade-in">
              <div className="mb-4">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none">
                  <span className="block text-white-heading">RIZKY</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-violet glow-text relative">
                    DERMAWAN
                    <div className="absolute -bottom-2 left-0 w-32 h-2 bg-gradient-to-r from-electric-blue to-violet rounded-full shadow-lg shadow-electric-blue/50"></div>
                  </span>
                </h1>
              </div>
            </div>

            <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-white-soft font-medium mb-6">
                Informatics Student · Mobile & Web Developer · Project
                Management
              </p>
            </div>

            <div className="fade-in" style={{ transitionDelay: '0.4s' }}>
              <p className="text-lg text-white-soft max-w-2xl mb-8 leading-relaxed">
                Final-year Computer Science student at Paramadina University
                with hands-on experience in Flutter, Laravel, and Node.js —
                bridging code and collaboration.
              </p>
            </div>

            <div
              className="fade-in flex flex-wrap gap-4"
              style={{ transitionDelay: '0.6s' }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 glass-dark border border-white/10 hover:border-electric-blue/50 hover:bg-white/10 transition-all duration-300 rounded-xl hover:scale-110 hover:shadow-xl hover:shadow-electric-blue/20"
                >
                  <i
                    className={`${link.icon} text-xl text-electric-blue group-hover:text-cyan-highlight group-hover:scale-110 transition-all`}
                  ></i>
                  <span className="text-white-soft font-medium group-hover:text-white-heading transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-electric-blue/10 blur-3xl rounded-full"></div>
              <div className="relative floating">
                <Image
                  src="/foto.png"
                  alt="Rizky Dermawan"
                  width={320}
                  height={320}
                  className="w-80 h-80 object-cover rounded-3xl opacity-95 hover:opacity-100 transition-opacity duration-500 glass p-2"
                  style={{
                    filter: 'drop-shadow(0 20px 50px rgba(91, 140, 255, 0.4))',
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-cyan-highlight text-3xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}
