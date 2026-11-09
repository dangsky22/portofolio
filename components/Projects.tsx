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
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <p className="eyebrow mb-6">
            Selected Work
          </p>
          <h2 className="text-5xl md:text-6xl font-display text-ink leading-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="fade-in glass glass-hover group flex flex-col overflow-hidden"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className="h-1.5 bg-gradient-to-r from-accent via-accent/60 to-accent-2"
                aria-hidden="true"
              />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-5xl text-ink/10 group-hover:text-accent/40 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-accent-2 uppercase tracking-widest mt-2">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className="text-3xl font-display text-ink mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-ink-soft leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="pt-5 border-t border-ink/10">
                  <p className="text-xs text-ink-soft/70 font-mono mb-3">{project.tech}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-ink px-3 py-1 rounded-full bg-ink/5 border border-ink/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
