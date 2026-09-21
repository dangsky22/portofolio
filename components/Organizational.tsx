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
    },
    {
      period: 'Nov 2023',
      organization: 'PKM National Bebras – Paramadina',
      role: 'Technical Team Member',
      highlight: null,
    },
    {
      period: 'Jan 2024 – Jan 2025',
      organization: 'HIMTI Paramadina',
      role: 'Head of Education & Training Dept',
      highlight: null,
    },
    {
      period: 'Jan 2024 – Jan 2025',
      organization: 'DKM Paramadina',
      role: 'Head of Technology Division',
      highlight: null,
    },
    {
      period: 'Jan 2023 – Jan 2024',
      organization: 'DKM Paramadina',
      role: 'Vice President',
      highlight: null,
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
          <p className="text-xs tracking-widest uppercase text-accent mb-8 font-medium">
            Leadership & Community
          </p>
          <h2 className="text-5xl md:text-6xl font-display text-ink leading-tight">
            Organizations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="fade-in glass p-8 hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <p className="text-xs text-ink-soft font-mono mb-4">
                {org.period}
              </p>
              <h3 className="text-xl font-display text-ink mb-2">
                {org.role}
              </h3>
              <p className="text-ink-soft mb-3">{org.organization}</p>
              {org.highlight && (
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium mt-2">
                  {org.highlight}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
