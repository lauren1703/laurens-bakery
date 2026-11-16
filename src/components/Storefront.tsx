'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { SceneImage } from './SceneImage';
export function Storefront() {
  const router = useRouter();
  const [entering, setEntering] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => { router.prefetch('/bakery'); return () => { if (timer.current) clearTimeout(timer.current); }; }, [router]);
  function enter(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    event.preventDefault();
    if (entering) return;
    setEntering(true);
    timer.current = setTimeout(() => router.push('/bakery'), 720);
  }
  return <main id="main" className="storefront-page">
    <div className={`scene-window storefront-scene ${entering ? 'is-entering' : ''}`}>
      <SceneImage scene="storefront" priority alt="A watercolor French bakery with a peach striped awning, weathered teal doors, pastry windows, ivy and a little café table." />
      <div className="awning-title" aria-hidden="true">Lauren's Bakery</div>
      <Link href="/bakery" onClick={enter} className="door-hotspot" aria-label="Open the bakery door and step inside">
        <span className="door-threshold" /><span className="door-leaf left" /><span className="door-leaf right" />
        <span className="door-sign">Bonjour<span aria-hidden="true">♡</span></span>
        <span className="object-label">Come on in →</span>
      </Link>
      <h1 className="sr-only">Lauren’s Bakery — Lauren Ah-Hot’s portfolio</h1>
      <div className="entrance-copy">
        <Link href="/bakery" onClick={enter} className="enter-bakery-link">{entering ? 'Opening the door…' : 'Enter bakery'} <span aria-hidden="true">→</span></Link>
      </div>
      <div className="scene-fade" aria-hidden="true" />
    </div>
    <span className="sr-only" role="status">{entering ? 'Entering the bakery' : ''}</span>
  </main>;
}
