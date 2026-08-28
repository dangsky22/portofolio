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
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-violet rounded-full shadow-lg shadow-electric-blue/20"></div>
            <span className="text-electric-blue font-display text-sm tracking-widest font-bold">
              CONTACT
            </span>
            <div className="h-1 w-16 bg-gradient-to-r from-violet to-electric-blue rounded-full shadow-lg shadow-violet/20"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white-heading mb-6 leading-tight">
            Let&apos;s Build Something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-violet">Together</span>
          </h2>
          <p className="text-xl text-white-soft max-w-2xl mx-auto font-medium">
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
              className="glass hover:bg-white/10 transition-all duration-500 p-8 group hover:scale-105 hover:shadow-2xl hover:shadow-electric-blue/20 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 glass border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all rounded-2xl shadow-md">
                  <i
                    className={`${method.icon} text-electric-blue text-2xl group-hover:text-cyan-highlight transition-colors`}
                  ></i>
                </div>
                <div>
                  <div className="text-xs text-gray-blue uppercase tracking-widest mb-1 font-bold">
                    {method.label}
                  </div>
                  <div className="text-white-heading font-bold group-hover:text-electric-blue transition-colors">
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
          <div className="h-1 w-32 bg-gradient-to-r from-electric-blue/30 to-violet/30 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-blue text-sm font-bold">
            © 2026 Rizky Dermawan Hendry Putra
          </p>
          <p className="text-gray-blue/70 text-xs mt-2 font-medium">
            Cengkareng, Jakarta Barat
          </p>
        </div>
      </div>
    </section>
  );
}
