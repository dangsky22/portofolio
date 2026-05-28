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
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'rizkydermawanhendryputra@gmail.com',
      href: 'mailto:rizkydermawanhendryputra@gmail.com',
    },
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp',
      value: '+62 858 9063 3734',
      href: 'https://wa.me/6285890633734',
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'dangsky22',
      href: 'https://github.com/dangsky22',
    },
    {
      icon: 'fab fa-linkedin',
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
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-electric-cyan"></div>
            <span className="text-electric-cyan font-display text-sm tracking-widest">
              CONTACT
            </span>
            <div className="h-px w-16 bg-electric-cyan"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Let&apos;s Build Something
            <br />
            <span className="text-electric-cyan">Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach
            out through any of these channels.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto fade-in"
          style={{ transitionDelay: '0.2s' }}
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-charcoal border border-electric-cyan/20 hover:border-electric-cyan hover:bg-electric-cyan/5 transition-all duration-300 p-8 group hover:scale-105 hover:shadow-xl hover:shadow-electric-cyan/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-electric-cyan/10 border border-electric-cyan/30 flex items-center justify-center group-hover:bg-electric-cyan/20 group-hover:scale-110 transition-all">
                  <i
                    className={`${method.icon} text-electric-cyan text-2xl`}
                  ></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                    {method.label}
                  </div>
                  <div className="text-white font-medium group-hover:text-electric-cyan transition-colors">
                    {method.value}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div
          className="text-center mt-20 fade-in"
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="h-px w-32 bg-electric-cyan/30 mx-auto mb-8"></div>
          <p className="text-gray-500 text-sm">
            © 2026 Rizky Dermawan Hendry Putra
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Cengkareng, Jakarta Barat
          </p>
        </div>
      </div>
    </section>
  );
}
