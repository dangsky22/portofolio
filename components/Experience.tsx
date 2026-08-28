'use client';

import { useEffect, useRef } from 'react';

export default function Experience() {
  const expRef = useRef<HTMLElement>(null);

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

    const elements = expRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: 'Feb 2026 – Jul 2026',
      company: 'PT Multi Medika Internasional Tbk',
      role: 'Project Management Intern',
      responsibilities: [
        'Supported project managers in coordinating project activities, timelines, and deliverables',
        'Assisted in analyzing project-related data to monitor progress and improve operational efficiency',
        'Prepared project documentation, reports, and meeting summaries for internal stakeholders',
        'Collaborated with internal teams to ensure smooth project execution and communication',
      ],
    },
    {
      period: 'Aug 2025 – Jan 2026',
      company: 'PT Kamar Orang Semua (Koze Management)',
      role: 'Android & Web Developer Intern',
      responsibilities: [
        'Developed mobile application features using Flutter',
        'Built and maintained the internal web dashboard using Laravel Filament, including CRUD operations, role management, and UI customization',
        'Collaborated with designers and developers to deliver responsive UI/UX and debug cross-platform issues',
      ],
    },
    {
      period: 'Sep 2025 – Jan 2026',
      company: 'Paramadina University',
      role: 'Assistant Lecturer',
      responsibilities: [
        'Assisted in teaching the Human-Computer Interaction (HCI) course',
        'Delivered both theoretical concepts and practical sessions to a class of 47+ students',
        'Evaluated student performance through assignments, projects, and weekly assessments',
      ],
    },
    {
      period: 'Sep 2024 – Jan 2025',
      company: 'Paramadina University',
      role: 'Assistant Lecturer',
      responsibilities: [
        'Assisted in teaching the Algorithms and Structured Programming Course',
        'Instructed theoretical material and practical applications to a class of 35+ students',
        'Evaluated student learning outcomes through regular assessments and feedback',
      ],
    },
  ];

  return (
    <section id="experience" ref={expRef} className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-violet rounded-full"></div>
            <span className="text-electric-blue font-display text-sm tracking-widest font-bold">
              EXPERIENCE
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white-heading leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-violet">Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-blue/50 via-violet/50 to-transparent rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="fade-in relative pl-8 md:pl-20"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-0 md:left-8 top-2 w-4 h-4 bg-electric-blue rounded-full transform -translate-x-[6px] ring-4 ring-navy-deep shadow-lg shadow-electric-blue/50"></div>

                <div className="glass p-6 md:p-10 hover:bg-white/10 transition-all duration-500 group hover:shadow-2xl hover:shadow-electric-blue/20 rounded-3xl border border-white/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white-heading mb-2 group-hover:text-electric-blue transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-electric-blue font-bold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-gray-blue text-sm mt-2 md:mt-0 font-mono font-bold bg-white/5 px-4 py-1 rounded-full border border-white/10">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-white-soft flex items-start gap-3 font-medium"
                      >
                        <i className="fas fa-chevron-right text-cyan-highlight text-xs mt-1.5"></i>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
