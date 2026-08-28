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
      className="section-padding relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
            <span className="text-electric-blue font-display text-sm tracking-widest font-bold">
              PROJECTS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white-heading leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-violet">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="fade-in group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="glass hover:bg-white/10 transition-all duration-500 h-full flex flex-col overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-electric-blue/20 rounded-3xl border border-white/10">
                <div
                  className={`h-3 bg-gradient-to-r ${project.gradient} rounded-t-3xl`}
                ></div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold text-white-heading mb-1 group-hover:text-electric-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-blue font-bold">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-white-soft mb-6 flex-1 font-medium leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="text-sm text-electric-blue font-mono font-bold bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                      {project.tech}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-cyan-highlight text-xs font-bold hover:bg-white/10 hover:scale-110 transition-all duration-300 cursor-default rounded-full shadow-sm"
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
