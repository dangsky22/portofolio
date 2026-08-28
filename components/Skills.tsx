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
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
            <span className="text-electric-blue font-display text-sm tracking-widest font-bold">
              SKILLS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white-heading leading-tight">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-violet">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-2xl font-display font-bold text-white-heading mb-8 flex items-center gap-3">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/10">
                <i className="fas fa-code text-electric-blue"></i>
              </div>
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-3 glass border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-500 cursor-default group hover:shadow-xl hover:shadow-electric-blue/20 rounded-2xl"
                >
                  <span className="text-white-soft font-bold group-hover:text-electric-blue transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-display font-bold text-white-heading mb-8 flex items-center gap-3">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/10">
                <i className="fas fa-users text-violet"></i>
              </div>
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group cursor-default hover:translate-x-3 transition-all duration-300 glass p-4 rounded-2xl border border-white/10 hover:bg-white/10 hover:shadow-lg hover:shadow-violet/10"
                >
                  <div className="w-3 h-3 bg-gradient-to-br from-electric-blue to-violet rounded-full group-hover:scale-150 transition-transform shadow-lg shadow-electric-blue/50"></div>
                  <span className="text-base text-white-soft font-bold group-hover:text-cyan-highlight transition-colors">
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
