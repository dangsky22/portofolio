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
      className="section-padding bg-dark-charcoal/30 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-electric-cyan"></div>
            <span className="text-electric-cyan font-display text-sm tracking-widest">
              ORGANIZATIONS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white">
            Organizational{' '}
            <span className="text-electric-cyan">& Community</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-dark-bg border border-electric-cyan/20 hover:border-electric-cyan transition-all duration-300 p-6 h-full group hover:scale-105 hover:shadow-lg hover:shadow-electric-cyan/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric-cyan/10 border border-electric-cyan/30 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-cyan/20 transition-colors">
                    <i className={`${org.icon} text-electric-cyan text-xl`}></i>
                  </div>

                  <div className="flex-1">
                    <div className="text-sm text-gray-400 font-mono mb-2">
                      {org.period}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-electric-cyan transition-colors">
                      {org.role}
                    </h3>
                    <p className="text-gray-300 mb-2">{org.organization}</p>
                    {org.highlight && (
                      <div className="inline-block px-3 py-1 bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-sm font-bold">
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
