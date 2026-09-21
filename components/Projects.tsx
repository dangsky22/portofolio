'use client';

import { useEffect, useRef } from 'react';

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);

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

    const elements = projectsRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'ParaBite',
      subtitle: 'Canteen App',
      tech: 'Flutter · Firebase',
      description:
        'Mobile application for digital canteen management and food ordering, featuring menu display, order tracking, and transaction management.',
      tags: ['Mobile', 'Flutter', 'Firebase'],
    },
    {
      title: 'EcoSwap',
      subtitle: 'Sustainability Platform',
      tech: 'Node.js · Express.js · MongoDB',
      description:
        'Web-based platform promoting sustainable consumption through product exchange and eco-friendly recommendations.',
      tags: ['Web', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Data Visualization',
      subtitle: 'Crawling & Analytics',
      tech: 'Python · Matplotlib',
      description:
        'Web crawling pipeline to collect and process data from online sources, with visualizations to surface actionable insights.',
      tags: ['Python', 'Data', 'Visualization'],
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="section-padding relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <p className="text-xs tracking-widest uppercase text-accent mb-8 font-medium">
            Selected Work
          </p>
          <h2 className="text-5xl md:text-6xl font-display text-ink leading-tight">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-ink/5 last:border-0">
                <div className="md:col-span-3">
                  <h3 className="text-3xl font-display text-ink italic mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-soft uppercase tracking-widest">
                    {project.subtitle}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <p className="text-ink-soft leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-ink-soft px-3 py-1 border border-ink/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3">
                  <p className="text-sm text-ink-soft font-mono">
                    {project.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
