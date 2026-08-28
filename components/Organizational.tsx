'use client';

import { useEffect, useRef } from 'react';

export default function Organizational() {
  const orgRef = useRef<HTMLElement>(null);

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

    const elements = orgRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const organizations = [
    {
      period: 'Nov 2024',
      organization: 'PKM National Bebras – Paramadina',
      role: 'Head of Technical Team',
      highlight: '5000+ sekolah',
      icon: 'fas fa-trophy',
    },
    {
      period: 'Nov 2023',
      organization: 'PKM National Bebras – Paramadina',
      role: 'Technical Team Member',
      highlight: null,
      icon: 'fas fa-laptop-code',
    },
    {
      period: 'Jan 2024 – Jan 2025',
      organization: 'HIMTI Paramadina',
      role: 'Head of Education & Training Dept',
      highlight: null,
      icon: 'fas fa-graduation-cap',
    },
    {
      period: 'Jan 2024 – Jan 2025',
      organization: 'DKM Paramadina',
      role: 'Head of Technology Division',
      highlight: null,
      icon: 'fas fa-cogs',
    },
    {
      period: 'Jan 2023 – Jan 2024',
      organization: 'DKM Paramadina',
      role: 'Vice President',
      highlight: null,
      icon: 'fas fa-user-tie',
    },
  ];

  return (
    <section
      id="organizational"
      ref={orgRef}
      className="section-padding relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
            <span className="text-electric-blue font-display text-sm tracking-widest font-bold">
              ORGANIZATIONS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white-heading leading-tight">
            Organizational{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-violet">& Community</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="glass p-8 h-full group hover:scale-105 hover:shadow-2xl hover:shadow-electric-blue/20 transition-all duration-500 hover:bg-white/10 rounded-3xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 glass border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:scale-110 transition-all rounded-2xl shadow-md">
                    <i className={`${org.icon} text-electric-blue text-2xl`}></i>
                  </div>

                  <div className="flex-1">
                    <div className="text-xs text-white-soft font-mono font-bold mb-3 bg-white/5 px-3 py-1 rounded-full border border-white/10 inline-block">
                      {org.period}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white-heading mb-2 group-hover:text-electric-blue transition-colors">
                      {org.role}
                    </h3>
                    <p className="text-white-soft mb-3 font-medium">{org.organization}</p>
                    {org.highlight && (
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-electric-blue to-violet text-white text-sm font-bold rounded-full shadow-lg shadow-electric-blue/30">
                        {org.highlight}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
