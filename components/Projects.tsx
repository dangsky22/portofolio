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
      gradient: 'from-electric-cyan/20 to-transparent',
    },
    {
      title: 'EcoSwap',
      subtitle: 'Sustainability Platform',
      tech: 'Node.js · Express.js · MongoDB',
      description:
        'Web-based platform promoting sustainable consumption through product exchange and eco-friendly recommendations.',
      tags: ['Web', 'Node.js', 'MongoDB'],
      gradient: 'from-green-500/20 to-transparent',
    },
    {
      title: 'Data Visualization',
      subtitle: 'Crawling & Analytics',
      tech: 'Python · Matplotlib',
      description:
        'Web crawling pipeline to collect and process data from online sources, with visualizations to surface actionable insights.',
      tags: ['Python', 'Data', 'Visualization'],
      gradient: 'from-purple-500/20 to-transparent',
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="section-padding bg-dark-charcoal/30 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-electric-cyan"></div>
            <span className="text-electric-cyan font-display text-sm tracking-widest">
              PROJECTS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white">
            Featured <span className="text-electric-cyan">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="fade-in group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-dark-bg border border-electric-cyan/20 hover:border-electric-cyan transition-all duration-300 h-full flex flex-col overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-electric-cyan/20">
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-electric-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="text-sm text-electric-cyan font-mono">
                      {project.tech}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-medium hover:bg-electric-cyan/20 hover:scale-110 transition-all duration-300 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
