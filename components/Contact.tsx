'use client';

import { useEffect, useRef } from 'react';

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);

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

    const elements = contactRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      label: 'Email',
      value: 'rizkydermawanhendryputra@gmail.com',
      href: 'mailto:rizkydermawanhendryputra@gmail.com',
    },
    {
      label: 'WhatsApp',
      value: '+62 858 9063 3734',
      href: 'https://wa.me/6285890633734',
    },
    {
      label: 'GitHub',
      value: 'dangsky22',
      href: 'https://github.com/dangsky22',
    },
    {
      label: 'LinkedIn',
      value: 'Rizky Dermawan Hendry Putra',
      href: 'https://linkedin.com/in/rizkydermawan',
    },
  ];

  return (
    <section
      id="contact"
      ref={contactRef}
      className="section-padding relative min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="fade-in mb-16">
          <p className="text-xs tracking-widest uppercase text-accent mb-8 font-medium">
            Get In Touch
          </p>
          <h2 className="text-5xl md:text-7xl font-display text-ink leading-tight mb-8">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-xl text-ink-soft max-w-2xl">
            Have a project in mind or just want to connect? Feel free to reach
            out through any of these channels.
          </p>
        </div>

        <div
          className="fade-in grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          style={{ transitionDelay: '0.2s' }}
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="text-xs text-ink-soft uppercase tracking-widest mb-2">
                {method.label}
              </div>
              <div className="text-ink group-hover:text-accent transition-colors">
                {method.value}
              </div>
            </a>
          ))}
        </div>

        <div
          className="fade-in text-center border-t border-ink/5 pt-12"
          style={{ transitionDelay: '0.4s' }}
        >
          <p className="text-ink-soft text-sm">
            © 2026 Rizky Dermawan Hendry Putra
          </p>
          <p className="text-ink-soft/60 text-xs mt-2">
            Cengkareng, Jakarta Barat
          </p>
        </div>
      </div>
    </section>
  );
}
