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
      value: '+62 898 1648 190',
      href: 'https://wa.me/628981648190',
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
      className="section-padding relative overflow-hidden"
    >
      <div className="glow w-[500px] h-[500px] bg-accent left-1/2 -translate-x-1/2 top-10 opacity-20" aria-hidden="true" />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="fade-in relative rounded-[2rem] border border-ink/10 bg-surface/70 backdrop-blur p-8 md:p-14 mb-16 overflow-hidden">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
            aria-hidden="true"
          />
          <p className="eyebrow mb-6">
            Get In Touch
          </p>
          <h2 className="text-5xl md:text-7xl font-display text-ink leading-[1.05] mb-6">
            Let&apos;s build something <span className="italic gradient-text">together</span>
          </h2>
          <p className="text-lg md:text-xl text-ink-soft max-w-2xl mb-10">
            Have a project in mind or just want to connect? My inbox is always
            open — I&apos;ll get back to you as soon as I can.
          </p>
          <a
            href={contactMethods[0].href}
            className="inline-flex items-center gap-2 rounded-full bg-accent text-paper px-7 py-3.5 font-medium hover:bg-ink transition-colors duration-300"
          >
            Say hello <span aria-hidden="true">→</span>
          </a>
        </div>

        <div
          className="fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          style={{ transitionDelay: '0.2s' }}
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-6 group"
            >
              <div className="flex items-center justify-between text-xs text-ink-soft uppercase tracking-widest mb-3">
                {method.label}
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">↗</span>
              </div>
              <div className="text-ink group-hover:text-accent transition-colors text-sm break-words">
                {method.value}
              </div>
            </a>
          ))}
        </div>

        <div
          className="fade-in text-center border-t border-ink/10 pt-12"
          style={{ transitionDelay: '0.4s' }}
        >
          <p className="text-ink-soft text-sm">
            © 2026 Rizky Dermawan Hendry Putra · Thanks for visiting 🧡
          </p>
          <p className="text-ink-soft/60 text-xs mt-2">
            Cengkareng, Jakarta Barat
          </p>
        </div>
      </div>
    </section>
  );
}
