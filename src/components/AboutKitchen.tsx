'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { about, interests, type InterestId } from '@/content/about';
import { HobbyIcon } from './HobbyIcon';
import { SocialLinks } from './SocialLinks';
export function AboutKitchen() {
  const [selected, setSelected] = useState<InterestId>('cafes');
  const story = interests.find(i => i.id === selected)!;
  return <main id="main" className="about-page">
    <div className="about-toolbar"><Link href="/bakery">← Back to the counter</Link><span>A peek into the back kitchen</span></div>
    <div className="about-kitchen">
      <Image src="/art/kitchen.jpg" alt="The bakery’s warm watercolor back kitchen, with a pale sage refrigerator and a wooden worktop." fill sizes="(max-width:760px) 100vw, 1200px" quality={90} preload className="kitchen-art"/>
      <section className="about-letter" aria-labelledby="about-title"><span className="letter-tape" aria-hidden="true"/><p className="eyebrow">Meet the baker</p><h1 id="about-title">{about.title}</h1><p>{about.introduction}</p><p>{about.cafeStory}</p><SocialLinks/></section>
      <section id="fridge" className="fridge-interests" aria-label="A little about me, in fridge magnets">
        <p className="fridge-invitation">A few things that make me, me.<span>Pick a magnet ↓</span></p>
        <div className="magnet-collection">{interests.map((interest,index)=><button key={interest.id} className={`fridge-magnet magnet-${interest.color}`} style={{'--magnet-turn': `${[-7,5,-3,5,-5,7][index]}deg`} as React.CSSProperties} aria-pressed={selected === interest.id} aria-controls="fridge-story" onClick={() => setSelected(interest.id)}><HobbyIcon id={interest.id}/><span>{interest.label}</span></button>)}</div>
        <div className="fridge-story" id="fridge-story" role="region" aria-label="Selected magnet story" aria-live="polite" aria-atomic="true"><span className="note-pin" aria-hidden="true"/><p className="eyebrow">{story.label}</p><h2>{story.title}</h2><p>{story.detail}</p></div>
      </section>
    </div>
  </main>;
}
