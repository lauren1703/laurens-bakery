import type { Metadata } from 'next';
import Link from 'next/link';
import { experiences, ripplingInternship, teaching } from '@/content/experience';
import { profile } from '@/content/profile';
export const metadata: Metadata = { title: 'Behind the counter', description: 'Lauren Ah-Hot’s engineering experience at Rippling, Cornell AppDev, and Psyflo, plus teaching Intro to Backend Development.' };
export default function ExperiencePage() {
  return <main id="main" className="experience-page">
    <Link className="back-link" href="/bakery">← Back inside the bakery</Link>
    <header className="experience-heading"><h1>Behind the counter</h1><p>my experiences</p><span className="heading-flourish" aria-hidden="true">— ❧ —</span></header>
    <div className="experience-layout"><aside className="experience-gallery" aria-label="Jump to an experience">
      {experiences.map(e=><Link key={e.id} href={`#${e.id}`} className={`experience-frame frame-${e.motif}`}><div className="frame-picture" aria-hidden="true"/><span className="frame-plaque">{e.organization}</span></Link>)}
      <Link className="teaching-gallery-link" href="#teaching">Visit the classroom →</Link>
    </aside><div className="experience-stories">
      {experiences.map(e=><article key={e.id} id={e.id} className="experience-story"><p className="eyebrow">{e.status}</p><h2>{e.organization}</h2><h3>{e.title}</h3><p className="experience-date">{e.dates}</p><p>{e.summary}</p>
        {e.contributions.length > 0 && <ul className="contribution-list">{e.contributions.map(c=><li key={c}>{c}</li>)}</ul>}
        {e.tools.length > 0 && <ul className="tool-list" aria-label={`${e.organization} skills`}>{e.tools.map(t=><li key={t}>{t}</li>)}</ul>}
        {e.id === 'rippling' && <section className="past-role"><p className="eyebrow">Previously at Rippling</p><h3>{ripplingInternship.title}</h3><p className="experience-date">{ripplingInternship.dates}</p><ul className="contribution-list">{ripplingInternship.contributions.map(c=><li key={c}>{c}</li>)}</ul><ul className="tool-list" aria-label="Rippling internship skills">{ripplingInternship.tools.map(t=><li key={t}>{t}</li>)}</ul></section>}
        {e.id === 'appdev' && <section className="teaching-story" id="teaching"><p className="eyebrow">A seat in the classroom</p><h3>{teaching.title}</h3><p className="experience-date">{teaching.role} · {teaching.duration}</p><p>I lead a seven-week introduction to backend development for more than 80 students each semester. Teaching is part of how I contribute at AppDev: helping others build a foundation alongside the products I work on.</p><dl className="teaching-metrics">{teaching.metrics.map(m=><div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>)}</dl></section>}
      </article>)}
      <aside className="education-note"><p className="eyebrow">The foundation</p><h2>Cornell University</h2><p>{profile.education}</p><p>{profile.graduation}. {profile.nextChapter}.</p></aside>
    </div></div>
  </main>;
}
