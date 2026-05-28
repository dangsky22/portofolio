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
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-cyan/3 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="fade-in">
              <div className="mb-4">
                <div className="text-sm text-electric-cyan font-mono tracking-widest mb-2">
                  &lt;DEVELOPER /&gt;
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none">
                  <span className="block text-white">RIZKY</span>
                  <span className="block text-electric-cyan glow-text relative">
                    DERMAWAN
                    <div className="absolute -bottom-2 left-0 w-32 h-1 bg-electric-cyan"></div>
                  </span>
                </h1>
              </div>
            </div>

            <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
                Informatics Student · Mobile & Web Developer · Project
                Management
              </p>
            </div>

            <div className="fade-in" style={{ transitionDelay: '0.4s' }}>
              <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
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
                  className="group flex items-center gap-3 px-6 py-3 bg-dark-charcoal border border-electric-cyan/30 hover:border-electric-cyan hover:bg-electric-cyan/10 transition-all duration-300 rounded-sm hover:scale-110 hover:shadow-lg hover:shadow-electric-cyan/30"
                >
                  <i
                    className={`${link.icon} text-xl text-electric-cyan group-hover:scale-110 transition-transform`}
                  ></i>
                  <span className="text-gray-300 font-medium">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-electric-cyan/5 blur-3xl animate-pulse"></div>
              <div className="relative floating">
                <Image
                  src="/foto.png"
                  alt="Rizky Dermawan"
                  width={320}
                  height={320}
                  className="w-80 h-80 object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(0, 229, 255, 0.3))',
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-electric-cyan text-3xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}
