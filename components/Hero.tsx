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
      className="min-h-screen flex items-center relative overflow-hidden section-padding"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 pt-12">
            <div className="fade-in mb-16">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-display leading-none mb-8">
                <span className="block text-ink italic">Rizky</span>
                <span className="block text-ink italic">Dermawan</span>
              </h1>
              <div className="h-px w-24 bg-accent"></div>
            </div>

            <div className="fade-in mb-12" style={{ transitionDelay: '0.2s' }}>
              <p className="text-lg text-ink-soft max-w-xl leading-relaxed">
                Final-year Computer Science student at Paramadina University
                with hands-on experience in Flutter, Laravel, and Node.js.
              </p>
            </div>

            <div
              className="fade-in flex flex-wrap gap-6"
              style={{ transitionDelay: '0.4s' }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-ink transition-colors duration-300 text-sm tracking-widest uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <div className="fade-in" style={{ transitionDelay: '0.3s' }}>
              <Image
                src="/foto.png"
                alt="Rizky Dermawan"
                width={400}
                height={500}
                className="w-full max-w-md h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
