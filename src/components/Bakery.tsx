import Link from 'next/link';
import { SceneImage } from './SceneImage';
import { Pastry } from './Pastry';
export function Bakery() {
  return <main id="main" className="bakery-page">
    <h1 className="sr-only">Welcome inside Lauren&apos;s Bakery</h1>
    <div className="scene-window interior-scene" id="counter"><div className="interior-canvas">
      <SceneImage scene="interior" priority alt="Inside the watercolor bakery: a friendly baker, sage pendant lights, shelves of jars, a teal glass counter and gold-framed pictures." />
      <Link href="/about" className="room-object baker-object" aria-label="Meet Lauren, the baker"><span className="hanging-note">Meet the baker <span aria-hidden="true">↗</span></span></Link>
      <Link className="room-object experience-object" href="/experience" aria-label="Look at the experience wall"><span className="object-label">The experience wall</span></Link>
      <Link className="wall-title experience-sign" href="/experience">Experience <span aria-hidden="true">↗</span></Link>
      <div className="pastry-object featured-pastry decorative-pastry"><Pastry /><span className="pastry-card"><strong>Croissant</strong></span></div>
      <Link href="/projects/tree-of-thoughts" className="pastry-object second-pastry research-pastry" aria-label="Open the recipe notebook for Tree of Thoughts"><Pastry kind="roll" /><span className="pastry-card"><small>A little deep learning</small><strong>Tree of Thoughts</strong><span>Read the recipe →</span></span></Link>
      <div className="pastry-object third-pastry decorative-pastry"><Pastry kind="tart" /><span className="pastry-card"><strong>Apple tart</strong></span></div>
      <div className="pastry-object fourth-pastry decorative-pastry"><Pastry /><span className="pastry-card"><strong>Croissant</strong></span></div>
      <div className="counter-inscription" aria-hidden="true">Made with curiosity & a little care.</div>
    </div></div>
  </main>;
}
