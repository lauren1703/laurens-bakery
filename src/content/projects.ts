export const treeOfThoughts = {
  title: 'Tree of Thoughts',
  subtitle: 'Teaching a language model to explore, evaluate, and backtrack.',
  course: 'CS 4782 · Deep Learning · Cornell University',
  date: 'May 2026',
  collaborators: ['Jane Tenecota-Villa', 'Jade Lee', 'Lauren Ah-Hot'],
  repository: 'https://github.com/yunseoo2/deep-learning-tree-of-thought',
  report: '/projects/tree-of-thoughts/report.pdf',
  poster: '/projects/tree-of-thoughts/poster.png',
  ingredients: ['Python', 'GPT-4o', 'Breadth-first search', 'Prompt evaluation', 'Experiment design'],
  results: [
    { method: 'Direct prompting (IO)', success: '10%', cost: '~$0.0024', time: '~1.2s' },
    { method: 'Chain of Thought', success: '24%', cost: '~$0.0022', time: '~1.3s' },
    { method: 'Tree of Thoughts (BFS)', success: '88%', cost: '~$0.1020', time: '~86s' },
  ],
};
