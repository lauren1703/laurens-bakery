import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Pastry } from '@/components/Pastry';
import { treeOfThoughts as project } from '@/content/projects';
export const metadata: Metadata = { title: 'Tree of Thoughts', description: 'A Cornell deep learning project on search-based LLM reasoning: 88% success on 50 Game of 24 puzzles, with an evaluator ablation and cost analysis.' };
export default function TreeOfThoughtsPage() {
  return <main id="main" className="project-page research-project">
    <div className="notebook-toolbar"><Link href="/bakery">← Back to the pastry counter</Link><span>Recipe no. 01</span></div>
    <article className="recipe-book">
      <div className="book-rings" aria-hidden="true">{Array.from({length:9},(_,i)=><span key={i}/>)}</div>
      <header className="recipe-heading"><p className="eyebrow">{project.course}</p><h1>{project.title}</h1><p>{project.subtitle}</p><div className="recipe-pastry" aria-hidden="true"><Pastry kind="roll"/></div></header>
      <figure className="project-figure poster-figure"><a href={project.poster} target="_blank" rel="noopener noreferrer" aria-label="Open the full Tree of Thoughts project poster in a new tab"><Image src="/projects/tree-of-thoughts/poster.webp" alt="Tree of Thoughts project poster by Jane Tenecota-Villa, Jade Lee, and Lauren Ah-Hot, summarizing the search method, experiment results, and evaluator study." width={2000} height={1335} sizes="(max-width:760px) 90vw, 1100px" quality={90} preload/></a><figcaption>Project poster · select to open at full size.</figcaption></figure>
        <div className="project-resource-links"><a href={project.repository} className="paint-button teal" target="_blank" rel="noopener noreferrer">View code ↗</a><a href={project.report} className="paint-button peach" target="_blank" rel="noopener noreferrer">Read the report ↗</a></div>
      <div className="recipe-spread"><div className="recipe-left">

        <section className="ingredients"><h2>The ingredients</h2><ul>{project.ingredients.map(i=><li key={i}>{i}</li>)}</ul></section>
        <dl className="project-facts"><div><dt>When</dt><dd>{project.date}</dd></div><div><dt>The team</dt><dd>{project.collaborators.join(', ')}</dd></div><div><dt>Starting point</dt><dd>Reimplementation of Yao et al., NeurIPS 2023</dd></div></dl>
      </div><div className="recipe-right">
        <section><h2><span aria-hidden="true">01.</span> The problem</h2><p>Some problems reward exploring alternatives and revising early decisions. We tested whether treating LLM reasoning as a search could help solve the Game of 24: use four numbers exactly once to make 24.</p></section>
        <section><h2><span aria-hidden="true">02.</span> My contribution</h2><p>I implemented a breadth-first Tree of Thoughts inference pipeline with proposer and evaluator components, designed experiments comparing direct, Chain-of-Thought, and Tree-of-Thoughts prompting, and conducted an evaluator ablation with cost and latency analysis.</p></section>
        <section><h2><span aria-hidden="true">03.</span> The approach</h2><p>Using GPT-4o, we generated candidate arithmetic steps, scored them as “sure,” “maybe,” or “impossible,” and kept the top five candidates at each of three search levels. We compared this with five-shot direct and Chain-of-Thought prompting on 50 sampled puzzles.</p></section>
        <section><h2><span aria-hidden="true">04.</span> The result</h2><p>Tree of Thoughts solved 88% of the sampled puzzles, compared with 24% for Chain of Thought and 10% for direct prompting. The improvement came with substantially higher API cost and runtime.</p></section>
      </div></div>
      <section className="research-results" aria-labelledby="results-heading"><p className="eyebrow">The tasting notes</p><h2 id="results-heading">Better answers, with a real tradeoff.</h2><p>Team results on <strong>50 Game of 24 puzzles</strong> using GPT-4o. Success requires a valid expression using every input exactly once and evaluating to 24.</p>
        <div className="results-table-wrap"><table><caption>Main experiment · 50-puzzle sample</caption><thead><tr><th scope="col">Method</th><th scope="col">Success</th><th scope="col">Cost / puzzle</th><th scope="col">Time / puzzle</th></tr></thead><tbody>{project.results.map(r=><tr key={r.method}><th scope="row">{r.method}</th><td>{r.success}</td><td>{r.cost}</td><td>{r.time}</td></tr>)}</tbody></table></div>
        <div className="ablation-note"><div><p className="eyebrow">A separate experiment · 20 puzzles</p><h3>The evaluator matters.</h3><p>Holding the proposer and beam fixed, our seven-example evaluator achieved <strong>95% (19/20)</strong> success. Removing its examples reduced success to <strong>25% (5/20)</strong>. Average runtime was approximately 97 seconds with examples and 70 seconds without.</p></div><div><h3>What I took away</h3><p>A search algorithm is only as useful as the judgments guiding it. The zero-shot evaluator pruned promising “maybe” states too early; examining that failure became a central part of the project.</p></div></div>
        <details className="research-details"><summary>Limitations & what I’d explore next</summary><p>We used a 50-puzzle sample and GPT-4o, whereas the original paper used 100 puzzles and an older GPT-4 checkpoint. These are not controlled, like-for-like model comparisons, and the small samples limit generalization. ToT cost approximately $0.10 per puzzle and took about 86 seconds, versus approximately $0.002 and 1–1.3 seconds for the baselines.</p><p>Next steps would be testing depth-first search with early stopping and varying the number of evaluator examples to find a better accuracy–cost balance.</p></details>
        <p className="project-footnote">Source: our <a href={project.report} target="_blank" rel="noopener noreferrer">course report</a> and <a href={project.repository} target="_blank" rel="noopener noreferrer">project repository</a>. Based on <a href="https://arxiv.org/abs/2305.10601" target="_blank" rel="noopener noreferrer">Yao et al., Tree of Thoughts (2023)</a>.</p>
      </section>
    </article>
  </main>;
}
