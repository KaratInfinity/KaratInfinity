'use client';

import { useEffect, useRef, useState } from 'react';
import { useExperience } from './Experience';
import { moduleMedia } from '@/lib/module-media';
import { UiIcon } from './UiIcon';

/** Decorative media: all meaningful product information is real HTML above it. */
export function ModuleMedia({ slug, video = false, priority = false }: { slug: string; video?: boolean; priority?: boolean }) {
  const media = moduleMedia[slug];
  const root = useRef<HTMLDivElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const { motion, reducedMotion } = useExperience();
  const [visible, setVisible] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: EventTarget & { saveData?: boolean; effectiveType?: string } }).connection;
    const update = () => setAllowed(!connection?.saveData && !['slow-2g', '2g'].includes(connection?.effectiveType || ''));
    update();
    connection?.addEventListener('change', update);
    const visibility = () => setPageVisible(!document.hidden);
    visibility();
    document.addEventListener('visibilitychange', visibility);
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return () => { connection?.removeEventListener('change', update); document.removeEventListener('visibilitychange', visibility); };
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.05 });
    if (root.current) observer.observe(root.current);
    return () => { observer.disconnect(); connection?.removeEventListener('change', update); document.removeEventListener('visibilitychange', visibility); };
  }, []);

  const canPlay = video && visible && pageVisible && allowed && motion && !reducedMotion && !paused && !failed;
  useEffect(() => {
    const element = player.current;
    if (!element) return;
    if (canPlay) {
      let cancelled = false;
      element.play().catch(() => { if (!cancelled) setPlaying(false); });
      return () => { cancelled = true; element.pause(); };
    }
    element.pause();
  }, [canPlay]);

  if (!media) return null;
  return <><div ref={root} className={`module-media ${playing ? 'is-playing' : ''}`}>
    <img className="module-poster" src={media.image} srcSet={media.image.startsWith('https://images.pexels.com/') ? [480, 800, 1400].map(width => `${media.image.replace(/([?&])w=\d+/, `$1w=${width}`)} ${width}w`).join(', ') : undefined} sizes={video ? '100vw' : '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw'} alt="" aria-hidden="true" width="1280" height="800" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" style={{ objectPosition: media.position || 'center' }} />
    {video && allowed && motion && !reducedMotion && visible && !failed && <video ref={player} className="module-video" src={media.video} poster={media.image} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setFailed(true); setPlaying(false); }} />}
    <div className="module-shade" aria-hidden="true" />
    </div>
    {video && allowed && motion && !reducedMotion && !failed && <button type="button" className="media-control" aria-label={playing ? 'Pause background video' : 'Play background video'} onClick={() => { if (playing) setPaused(true); else { setPaused(false); player.current?.play().catch(() => setPlaying(false)); } }}><UiIcon name={playing ? 'pause' : 'play'} /><span>{playing ? 'Pause video' : 'Play video'}</span></button>}
  </>;
}
