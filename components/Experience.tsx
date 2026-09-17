'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { UiIcon } from './UiIcon';

type Settings = { theme: 'light' | 'dark'; motion: boolean; reducedMotion: boolean; toggleTheme: () => void; toggleMotion: () => void };
const SettingsContext = createContext<Settings>({ theme: 'light', motion: true, reducedMotion: false, toggleTheme: () => {}, toggleMotion: () => {} });

export function ExperienceProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [motion, setMotion] = useState(true);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    setMotion(document.documentElement.dataset.motion !== 'off');
    setReady(true);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const syncMotion = () => {
      setReducedMotion(media.matches);
      let preferred = true;
      try { preferred = localStorage.getItem('karat-motion') !== 'off'; } catch {}
      setMotion(preferred && !media.matches);
      document.documentElement.dataset.motion = preferred && !media.matches ? 'on' : 'off';
    };
    media.addEventListener('change', syncMotion);
    return () => media.removeEventListener('change', syncMotion);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(current => {
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      document.documentElement.style.colorScheme = next;
      try { localStorage.setItem('karat-theme', next); } catch {}
      return next;
    });
  }, []);

  const toggleMotion = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setMotion(current => {
      const next = !current;
      document.documentElement.dataset.motion = next ? 'on' : 'off';
      try { localStorage.setItem('karat-motion', next ? 'on' : 'off'); } catch {}
      return next;
    });
  }, []);

  useEffect(() => {
    let frame = 0;
    function update() {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
      document.documentElement.classList.toggle('is-scrolled', window.scrollY > 24);
    }
    function scroll() { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); }
    update();
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); };
  }, [pathname]);

  useEffect(() => {
    if (!ready || !motion || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const delay = Number(el.dataset.delay || 0);
        // Content always remains visible without JavaScript or animation support.
        animations.push(el.animate([
          { opacity: 0, transform: 'translate3d(0, 30px, 0)', filter: 'blur(3px)' },
          { opacity: 1, transform: 'translate3d(0, 0, 0)', filter: 'blur(0)' },
        ], { duration: 800, delay, easing: 'cubic-bezier(.2,.75,.2,1)', fill: 'backwards' }));
        observer.unobserve(el);
      });
    }, { threshold: 0.1 });
    nodes.forEach(node => observer.observe(node));
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
  }, [ready, motion, pathname]);

  return <SettingsContext.Provider value={{ theme, motion, reducedMotion, toggleTheme, toggleMotion }}>
    <div className="reading-progress" ref={progress} aria-hidden="true" />
    {children}
  </SettingsContext.Provider>;
}

export function useExperience() { return useContext(SettingsContext); }

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(SettingsContext);
  return <button className="appearance-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
    <UiIcon name="sun" className="theme-sun" /><UiIcon name="moon" className="theme-moon" />
  </button>;
}

export function MotionToggle() {
  const { motion, reducedMotion, toggleMotion } = useContext(SettingsContext);
  return <button className="motion-toggle" disabled={reducedMotion} title={reducedMotion ? "Your device prefers reduced motion" : "Control site animations"} onClick={toggleMotion} aria-pressed={motion} aria-label={reducedMotion ? 'Reduced motion enabled by your device' : motion ? 'Pause animations' : 'Enable animations'}><UiIcon name={motion ? 'pause' : 'play'} /><span>{reducedMotion ? 'Reduced motion' : `Motion ${motion ? 'on' : 'off'}`}</span></button>;
}
