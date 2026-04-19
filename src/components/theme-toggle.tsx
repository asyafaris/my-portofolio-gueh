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

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground transition duration-200 hover:border-accent/40 hover:bg-white/[0.08]"
    >
      <span aria-hidden="true">{theme === 'light' ? 'Sun' : 'Moon'}</span>
    </button>
  );
}
