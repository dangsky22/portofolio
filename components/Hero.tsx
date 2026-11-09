'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ROLES = ['Mobile Developer', 'Web Developer', 'Project Manager'];

function getGreeting(hour: number) {
  if (hour >= 5 && hour < 12) return 'Good morning';
  if (hour >= 12 && hour < 17) return 'Good afternoon';
  if (hour >= 17 && hour < 21) return 'Good evening';
  return 'Hello, night owl';
}

const socialLinks = [
  { href: 'https://github.com/dangsky22', label: 'GitHub' },
  { href: 'https://linkedin.com/in/rizkydermawan', label: 'LinkedIn' },
  { href: 'https://wa.me/628981648190', label: 'WhatsApp' },
];

export default function Hero() {
  // Default matches server render; real greeting set on client to avoid hydration mismatch.
  const [greeting, setGreeting] = useState('Hello');
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setGreeting(getGreeting(new Date().getHours()));
  }, []);

  useEffect(() => {
    const role = ROLES[roleIndex];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setTyped(role);
      const t = setTimeout(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2500);
      return () => clearTimeout(t);
    }

    let delay = deleting ? 40 : 90;
    if (!deleting && typed === role) delay = 1800;
    if (deleting && typed === '') delay = 300;

    const t = setTimeout(() => {
      if (!deleting && typed === role) {
        setDeleting(true);
      } else if (deleting && typed === '') {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      } else {
        setTyped(role.slice(0, typed.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden px-6 md:px-12 lg:px-24 pt-32 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="glow w-[420px] h-[420px] bg-accent -top-24 -left-24" aria-hidden="true" />
      <div className="glow w-[380px] h-[380px] bg-accent-2 bottom-0 right-0 opacity-20" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" aria-hidden="true" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="greet-in inline-flex items-center gap-3 rounded-full border border-ink/10 bg-surface/60 backdrop-blur px-4 py-2 text-sm text-ink-soft mb-8">
              <span className="wave text-lg" role="img" aria-label="waving hand">
                👋
              </span>
              <span>
                {greeting}, I&apos;m
              </span>
            </p>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-display leading-[0.95] mb-6">
              <span className="block text-ink">Rizky</span>
              <span className="block italic gradient-text pb-2">Dermawan</span>
            </h1>

            <p className="text-2xl md:text-3xl font-display text-ink-soft min-h-[2.5rem] mb-8">
              <span className="sr-only">{ROLES[roleIndex]}</span>
              <span aria-hidden="true">
                <span className="text-ink-soft/60">a </span>
                <span className="text-ink">{typed}</span>
                <span className="caret">|</span>
              </span>
            </p>

            <p className="text-lg text-ink-soft max-w-xl leading-relaxed mb-10">
              Welcome — thanks for stopping by! I&apos;m a final-year Computer
              Science student at Paramadina University with hands-on experience
              in Flutter, Laravel, and Node.js.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-paper px-7 py-3.5 font-medium hover:bg-ink transition-colors duration-300"
              >
                Let&apos;s say hi <span aria-hidden="true">→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 text-ink px-7 py-3.5 hover:border-accent hover:text-accent transition-colors duration-300"
              >
                See my work
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="text-ink-soft/60">Find me on</span>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-accent transition-colors duration-300"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-56 sm:w-72 lg:w-full lg:max-w-sm">
              <div
                className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-accent/60 via-accent/10 to-accent-2/50 blur-sm"
                aria-hidden="true"
              />
              <div className="relative rounded-[2.25rem] overflow-hidden border border-ink/10 bg-surface">
                <Image
                  src="/foto.png"
                  alt="Rizky Dermawan"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 288px, 224px"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-8 whitespace-nowrap flex items-center gap-2 rounded-full bg-surface border border-ink/10 px-4 py-2 text-sm text-ink shadow-xl shadow-black/30">
                <span className="w-2 h-2 rounded-full bg-accent-2 pulse-dot" aria-hidden="true" />
                Open to opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
