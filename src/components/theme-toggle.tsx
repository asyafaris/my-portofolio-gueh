'use client';

import { useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';
const THEME_EVENT = 'portfolio-theme-change';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('light', theme === 'light');
  root.style.colorScheme = theme;
}

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  return window.localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener('storage', handleStorage);
  window.addEventListener(THEME_EVENT, callback);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => 'dark');

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const icon =
    theme === 'light' ? (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current text-[#ffc857]">
        <circle cx="12" cy="12" r="5" />
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1.5" x2="12" y2="4.25" />
          <line x1="12" y1="19.75" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="4.25" y2="12" />
          <line x1="19.75" y1="12" x2="22.5" y2="12" />
          <line x1="4.6" y1="4.6" x2="6.7" y2="6.7" />
          <line x1="17.3" y1="17.3" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6.7" y2="17.3" />
          <line x1="17.3" y1="6.7" x2="19.4" y2="4.6" />
        </g>
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M15.2 3.6a7.9 7.9 0 1 0 5.2 14.06A8.7 8.7 0 0 1 15.2 3.6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/90 bg-transparent text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition duration-200 hover:scale-[1.03] hover:border-accent hover:text-accent"
    >
      {icon}
    </button>
  );
}
