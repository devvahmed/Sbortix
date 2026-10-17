export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  readingTime: string;
  author: string;
  category: string;
  relatedService: {
    title: string;
    href: string;
  };
  body: string; // Full markdown or formatted text body. If empty, considered draft.
  status: 'published' | 'draft';
}

/**
 * Sbortix Technical Whitepapers & Engineering Insights Repository.
 *
 * Rules:
 * - Articles with `status: "published"` MUST have a complete, non-empty `body`.
 * - Articles with only short excerpts remain `status: "draft"` to prevent thin content indexing.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'LOG_001',
    slug: 'why-most-enterprise-ai-projects-fail-at-the-data-pipeline-layer',
    title: 'Why Most Enterprise AI Projects Fail at the Data Pipeline Layer',
    description:
      'Fine-tuning LLMs is only 10% of the battle. Learn why robust ETL pipelines and vector indexing determine real-world AI accuracy.',
    date: '2024-07-15',
    updated: '2024-07-15',
    readingTime: '6 MIN READ',
    author: 'Sbortix Data Architecture Team',
    category: 'DATA ENGINEERING',
    relatedService: {
      title: 'Enterprise AI Solutions & Workflow Automation',
      href: '/services/ai-solutions',
    },
    body: '', // Pending full whitepaper draft from engineering team
    status: 'draft',
  },
  {
    id: 'LOG_002',
    slug: 'building-autonomous-sales-agents-without-hallucination-risk',
    title: 'Building Autonomous Sales Agents Without Hallucination Risk',
    description:
      'A technical breakdown of deterministic fallback loops, structured JSON function calling, and RAG validation strategies for sales agents.',
    date: '2024-07-02',
    updated: '2024-07-02',
    readingTime: '9 MIN READ',
    author: 'Sbortix AI Engineering Lead',
    category: 'AI ARCHITECTURE',
    relatedService: {
      title: 'Enterprise AI Solutions & Workflow Automation',
      href: '/services/ai-solutions',
    },
    body: '', // Pending full whitepaper draft from engineering team
    status: 'draft',
  },
  {
    id: 'LOG_003',
    slug: 'algorithmic-marketing-attribution-in-a-cookieless-ecosystem',
    title: 'Algorithmic Marketing Attribution in a Cookieless Ecosystem',
    description:
      'How multi-touch attribution models combined with first-party server-side tracking solve CAC inflation for B2B growth teams.',
    date: '2024-06-20',
    updated: '2024-06-20',
    readingTime: '7 MIN READ',
    author: 'Sbortix Digital Growth Lead',
    category: 'DIGITAL GROWTH',
    relatedService: {
      title: 'Technical SEO & High-ROAS Paid Ads Agency',
      href: '/services/digital-marketing',
    },
    body: '', // Pending full whitepaper draft from engineering team
    status: 'draft',
  },
  {
    id: 'LOG_004',
    slug: 'nextjs-app-router-performance-benchmarks-for-enterprise-web-apps',
    title: 'Next.js App Router Performance Benchmarks for Enterprise Web Apps',
    description:
      'Optimizing React Server Components, dynamic imports, and streaming SSR to achieve sub-200ms Core Web Vitals at scale.',
    date: '2024-06-05',
    updated: '2024-06-05',
    readingTime: '5 MIN READ',
    author: 'Sbortix Web Systems Architect',
    category: 'WEB ENGINEERING',
    relatedService: {
      title: 'Web Design & Brand Engineering Services',
      href: '/services/web-branding',
    },
    body: '', // Pending full whitepaper draft from engineering team
    status: 'draft',
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPublishedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.status === 'published' && post.body.trim().length > 0);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
