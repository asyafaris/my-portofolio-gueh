'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { navItems } from '@/lib/portfolio-data';

import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigate = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="#hero" className="flex items-center gap-3" onClick={handleNavigate}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,_rgba(111,168,255,0.95),_rgba(61,125,255,0.25)_60%,_rgba(6,11,20,0)_100%)] text-sm font-semibold text-white shadow-[0_10px_30px_rgba(61,125,255,0.32)]">
            AF
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Asya Ismatullah Faris</p>
            <p className="text-xs text-muted-foreground">IT PMO | Product Owner</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={
                  isActive
                    ? 'rounded-full bg-white/[0.08] px-4 py-2 text-sm font-medium text-foreground'
                    : 'rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground'
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition hover:bg-white/[0.08] lg:hidden"
          >
            <span aria-hidden="true">{menuOpen ? 'X' : '='}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="border-t border-white/10 bg-background/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavigate}
                className={
                  activeSection === item.id
                    ? 'rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm font-medium text-foreground'
                    : 'rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-white/[0.04] hover:text-foreground'
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
