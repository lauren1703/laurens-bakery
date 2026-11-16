export type Experience = {
  id: string;
  organization: string;
  motif: 'building' | 'campus' | 'flower';
  title: string;
  dates: string;
  status: string;
  summary: string;
  contributions: string[];
  tools: string[];
};

export const experiences: Experience[] = [
  {
    id: 'rippling',
    organization: 'Rippling',
    motif: 'building',
    title: 'Incoming Software Engineer',
    dates: 'Starting June 2027 · New York',
    status: 'Upcoming full-time role',
    summary: 'Returning to Rippling full-time after graduating one year early with a B.S. in Computer Science from Cornell.',
    contributions: [],
    tools: [],
  },
  {
    id: 'appdev',
    organization: 'Cornell AppDev',
    motif: 'campus',
    title: 'Backend Developer & Intro to Backend Lead Instructor',
    dates: 'February 2025 – Present',
    status: 'Building & teaching',
    summary: 'Developing apps for the Cornell community, while sharing my knowledge in backend development.',
    contributions: [
      'Own Resell’s roadmap, product requirements, and feature scoping across an 11-person engineering and design team; shipped 5+ features in Spring 2026.',
      'Architected an AI-powered recommendation feed and event-discovery experience for approximately 10,000 monthly active users.',
    ],
    tools: ['TypeScript', 'Express.js', 'PostgreSQL', 'Product scoping'],
  },
  {
    id: 'psyflo',
    organization: 'Psyflo',
    motif: 'flower',
    title: 'Full Stack Engineer Intern',
    dates: 'June – August 2025',
    status: 'Full-stack development',
    summary: 'Built tools to help educators identify patterns and respond to students’ needs more quickly.',
    contributions: [
      'Built a Next.js educator dashboard with real-time filtering and trend analysis, reducing time to insight by 30% and review time by 40%.',
      'Enforced tenant-level data isolation with Supabase Row Level Security and Drizzle ORM.',
      'Collaborated with business, design, and AI teams to ship features in an agile environment.',
    ],
    tools: ['Next.js', 'Supabase', 'Row Level Security', 'Drizzle ORM'],
  },
];

export const ripplingInternship = {
  title: 'Software Engineer Intern',
  dates: 'May – August 2026',
  contributions: [
    'Scaled bulk bank-account uploads from 150 to 8,000 employees per request (53×) with parallel processing and query batching, reducing MongoDB reads by approximately 80%.',
    'Partnered with Core Experiences and AI teams on an AI-guided onboarding backend, reducing setup from days to hours and enabling 5× more new customers to onboard.',
    'Built payroll import validation, agent-facing CLI workflows, and AI evaluations across providers using Python and Go.',
  ],
  tools: ['Python', 'Go', 'MongoDB', 'AI evaluations'],
};

export const teaching = {
  title: 'Intro to Backend Development',
  role: 'Lead instructor · Cornell AppDev',
  duration: '7-week course',
  metrics: [
    { value: '80+', label: 'students per semester' },
    { value: '~90%', label: 'completion rate' },
    { value: '4.7/5', label: 'student rating' },
  ],
};
