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
          <p className="text-xs tracking-widest uppercase text-accent mb-8 font-medium">
            Capabilities
          </p>
          <h2 className="text-5xl md:text-6xl font-display text-ink leading-tight">
            Technical & Human Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="fade-in" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-sm tracking-widest uppercase text-ink-soft mb-8 border-b border-ink/5 pb-4">
              Development
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group">
                  <span className="text-base text-ink-soft group-hover:text-ink transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-sm tracking-widest uppercase text-ink-soft mb-8 border-b border-ink/5 pb-4">
              Leadership
            </h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-1 h-1 bg-accent rounded-full"></div>
                  <span className="text-base text-ink-soft group-hover:text-ink transition-colors">
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
