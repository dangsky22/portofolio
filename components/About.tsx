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
    { value: '3.73', label: 'GPA / 4.00' },
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
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
                <span className="text-electric-blue font-display text-sm tracking-widest font-bold">
                  ABOUT ME
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white-heading mb-6 leading-tight">
                Building the Future,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-violet">
                  One Line at a Time
                </span>
              </h2>
            </div>

            <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
              <p className="text-lg text-white-soft leading-relaxed mb-6 font-medium">
                I&apos;m a tech enthusiast who thrives at the intersection of
                software development and human collaboration. From building
                mobile apps to coordinating large-scale national programs, I
                bring both technical depth and organizational maturity to every
                project.
              </p>
              <div className="glass p-6 border-l-4 border-electric-blue rounded-r-2xl shadow-lg shadow-electric-blue/10">
                <p className="text-white-soft italic">
                  Currently pursuing <strong className="text-white-heading">S1 Informatika</strong> at{' '}
                  <strong className="text-electric-blue">
                    Paramadina University
                  </strong>{' '}
                  (Sep 2022 – Present)
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
                  className="glass p-8 hover:bg-white/10 transition-all duration-500 group hover:scale-110 hover:shadow-2xl hover:shadow-electric-blue/20 cursor-default rounded-3xl border border-white/10"
                >
                  <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-electric-blue to-violet mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-blue uppercase tracking-widest font-bold">
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
