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
          <p className="text-xs tracking-widest uppercase text-accent mb-8 font-medium">
            Professional Experience
          </p>
          <h2 className="text-5xl md:text-6xl font-display text-ink leading-tight">
            Work History
          </h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <p className="text-sm text-ink-soft font-mono mb-4">
                    {exp.period}
                  </p>
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-2xl font-display text-ink mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-accent mb-6">
                    {exp.company}
                  </p>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-ink-soft flex items-start gap-3"
                      >
                        <span className="text-accent mt-2">·</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
