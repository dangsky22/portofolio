'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#organizational', label: 'Organizations' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-surface/80 backdrop-blur-md border border-ink/10 shadow-lg shadow-black/20'
            : 'border border-transparent'
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 group" aria-label="Back to top">
          <span className="w-9 h-9 rounded-full bg-accent text-paper font-display italic text-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            R
          </span>
          <span className="font-display italic text-lg text-ink hidden sm:inline">Rizky.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                active === link.href
                  ? 'bg-ink/10 text-ink'
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-paper text-sm font-medium hover:bg-ink transition-colors duration-300"
        >
          Contact
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-ink hover:bg-ink/10 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 rounded-3xl bg-surface/95 backdrop-blur-md border border-ink/10 p-3">
          {[...navLinks, { href: '#contact', label: 'Contact' }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-2xl text-sm transition-colors ${
                active === link.href ? 'bg-ink/10 text-ink' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
