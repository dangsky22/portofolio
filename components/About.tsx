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
      className="section-padding bg-dark-charcoal/30 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-electric-cyan"></div>
                <span className="text-electric-cyan font-display text-sm tracking-widest">
                  ABOUT ME
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Building the Future,
                <br />
                <span className="text-electric-cyan">One Line at a Time</span>
              </h2>
            </div>

            <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a tech enthusiast who thrives at the intersection of
                software development and human collaboration. From building
                mobile apps to coordinating large-scale national programs, I
                bring both technical depth and organizational maturity to every
                project.
              </p>
              <div className="border-l-2 border-electric-cyan pl-6 py-2">
                <p className="text-gray-400 italic">
                  Currently pursuing <strong>S1 Informatika</strong> at{' '}
                  <strong className="text-electric-cyan">
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
                  className="bg-dark-bg border border-electric-cyan/20 p-6 hover:border-electric-cyan transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-electric-cyan/20 cursor-default"
                >
                  <div className="text-4xl font-display font-bold text-electric-cyan mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
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
