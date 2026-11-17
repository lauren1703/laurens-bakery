'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { SceneImage } from './SceneImage';
import { SocialLinks } from './SocialLinks';
export function Bakery() {
  const connect = useRef<HTMLDialogElement>(null);
  const openConnect = () => connect.current?.showModal();
  return <main id="main" className="bakery-page">
    <h1 className="sr-only">Welcome inside Lauren&apos;s Bakery</h1>
    <div className="scene-window interior-scene" id="counter"><div className="interior-canvas">
      <SceneImage scene="interior" priority alt="A quiet illustrated bakery with Lauren behind a sage counter, three pastries, two framed pictures and a café table." />
      <Link href="/about" className="room-object baker-object" aria-label="Meet Lauren, the baker"><span className="hanging-note">Meet the baker <span aria-hidden="true">↗</span></span></Link>
      <Link className="room-object experience-object" href="/experience" aria-label="Look at the experience wall"><span className="experience-sign">Experience <span aria-hidden="true">↗</span></span></Link>
      <Link href="/projects/tree-of-thoughts" className="pastry-object featured-pastry research-pastry" aria-label="Open the recipe notebook for Tree of Thoughts"><span className="pastry-card"><strong>Tree of Thoughts <span aria-hidden="true">→</span></strong></span></Link>
      <button className="room-object connect-object" onClick={openConnect} aria-label="Let’s connect"><span className="object-label">Let’s connect <span aria-hidden="true">↗</span></span></button>

    </div>
      <button className="connect-mobile" onClick={openConnect}>Let’s connect <span aria-hidden="true">↗</span></button>
    </div>
    <dialog ref={connect} className="paper-dialog connect-dialog" aria-labelledby="connect-title" onClick={event => {
      if (event.target !== event.currentTarget) return;
      const box = event.currentTarget.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) connect.current?.close();
    }}>
      <button className="close-note" onClick={() => connect.current?.close()} aria-label="Close connection note">Back to the bakery ×</button>
      <h2 id="connect-title">Let’s connect.</h2>
      <p>I’d love to hear what you’re building. You can find me on LinkedIn or GitHub.</p>
      <SocialLinks/>
    </dialog>
  </main>;
}
