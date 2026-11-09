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
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="fade-in mb-16">
          <p className="eyebrow mb-6">
            Professional Experience
          </p>
          <h2 className="text-5xl md:text-6xl font-display text-ink leading-tight">
            Work History
          </h2>
        </div>

        <ol className="relative border-l border-ink/10 ml-2 md:ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className="fade-in relative pl-8 md:pl-12"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span
                className={`absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full border-2 border-paper ${
                  index === 0 ? 'bg-accent-2 pulse-dot' : 'bg-accent'
                }`}
                aria-hidden="true"
              />
              <div className="glass glass-hover p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-block rounded-full bg-ink/5 border border-ink/10 px-3 py-1 text-xs text-ink-soft font-mono">
                    {exp.period}
                  </span>
                  {index === 0 && (
                    <span className="text-xs text-accent-2 tracking-wider uppercase">Latest</span>
                  )}
                </div>
                <h3 className="text-2xl font-display text-ink mb-1">
                  {exp.role}
                </h3>
                <p className="text-accent mb-6">{exp.company}</p>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-ink-soft flex items-start gap-3 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
