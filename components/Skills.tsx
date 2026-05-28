'use client';

import { useEffect, useRef } from 'react';

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);

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

    const elements = skillsRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    'Python',
    'JavaScript',
    'Dart',
    'C/C++',
    'C#',
    'PHP',
    'Flutter',
    'Node.js',
    'Express.js',
    'Laravel',
    'Laravel Filament',
    'EJS',
    'MongoDB',
    'Firebase',
    'Git',
    'GitHub',
    'GitLab',
    'VS Code',
    'Jupyter Notebook',
  ];

  const softSkills = [
    'Leadership & Teamwork',
    'Communication',
    'Problem-Solving',
    'Computational Thinking',
    'Analytical Reasoning',
    'Project Coordination',
  ];

  return (
    <section id="skills" ref={skillsRef} className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-electric-cyan"></div>
            <span className="text-electric-cyan font-display text-sm tracking-widest">
              SKILLS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white">
            Tech <span className="text-electric-cyan">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <i className="fas fa-code text-electric-cyan"></i>
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-dark-charcoal border border-electric-cyan/30 hover:border-electric-cyan hover:bg-electric-cyan/10 hover:scale-110 transition-all duration-300 cursor-default group hover:shadow-lg hover:shadow-electric-cyan/30"
                >
                  <span className="text-gray-300 group-hover:text-electric-cyan transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <i className="fas fa-users text-electric-cyan"></i>
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group cursor-default hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-2 h-2 bg-electric-cyan rounded-full group-hover:scale-150 transition-transform group-hover:shadow-lg group-hover:shadow-electric-cyan"></div>
                  <span className="text-lg text-gray-300 group-hover:text-electric-cyan transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
