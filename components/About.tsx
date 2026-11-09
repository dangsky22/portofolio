'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '3.74', label: 'GPA / 4.00' },
    { value: '35+', label: 'Students Taught' },
    { value: '5000+', label: 'Schools Managed' },
    { value: '4', label: 'Internships & Roles' },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="fade-in mb-12">
              <p className="eyebrow mb-6">
                About Me
              </p>
              <h2 className="text-5xl md:text-6xl font-display text-ink mb-8 leading-tight">
                Building the Future, One Line at a Time
              </h2>
            </div>

            <div className="fade-in space-y-6" style={{ transitionDelay: '0.2s' }}>
              <p className="text-lg text-ink-soft leading-relaxed">
                I&apos;m a tech enthusiast who thrives at the intersection of
                software development and human collaboration. From building
                mobile apps to coordinating large-scale national programs, I
                bring both technical depth and organizational maturity to every
                project.
              </p>
              <div className="glass p-6 border-l-4 border-l-accent">
                <p className="text-ink-soft">
                  Graduated with an <strong className="text-ink">S1 Informatika</strong> degree from{' '}
                  <strong className="text-ink">
                    Paramadina University
                  </strong>{' '}
                  (Sep 2022 – Nov 2026)
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="fade-in grid grid-cols-2 gap-6"
              style={{ transitionDelay: '0.4s' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass glass-hover p-6"
                >
                  <div className="text-4xl font-display gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink-soft uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
