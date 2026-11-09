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
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <p className="eyebrow mb-6">
            Capabilities
          </p>
          <h2 className="text-5xl md:text-6xl font-display text-ink leading-tight">
            Technical & Human Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="fade-in glass p-8 lg:col-span-7" style={{ transitionDelay: '0.1s' }}>
            <h3 className="flex items-center gap-3 text-sm tracking-widest uppercase text-ink mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              Development
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm text-ink-soft px-4 py-2 rounded-full bg-ink/5 border border-ink/10 hover:border-accent/50 hover:text-ink hover:bg-accent/10 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-in glass p-8 lg:col-span-5" style={{ transitionDelay: '0.2s' }}>
            <h3 className="flex items-center gap-3 text-sm tracking-widest uppercase text-ink mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-2" aria-hidden="true" />
              Leadership
            </h3>
            <ul className="space-y-1">
              {softSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-3 py-3 border-b border-ink/5 last:border-0 text-ink-soft hover:text-ink transition-colors"
                >
                  <span>{skill}</span>
                  <span className="text-accent-2 text-sm" aria-hidden="true">✦</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
