# Sbortix Content Management & Publishing Guide

This guide describes how to publish new technical whitepapers on `/blog` and case studies on `/work`.

---

## 1. Technical Architecture

All editorial content on Sbortix is managed through centralized, typed data registries in [`lib/`](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20(1)/lib/):

- **Blog Posts**: [`lib/blog-data.ts`](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20(1)/lib/blog-data.ts)
- **Case Studies**: [`lib/work-data.ts`](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20(1)/lib/work-data.ts)

When an entry is marked active/published:
1. **Static Route Generation**: Next.js App Router pre-renders the page at `/blog/[slug]` or `/work/[slug]` via `generateStaticParams()`.
2. **SEO Metadata**: Automatically generated via `buildMetadata()` with canonical URLs (`https://www.sbortix.com/...`), OpenGraph images, and Twitter cards.
3. **Structured Data**: Injects validated `BlogPosting` or `Article` JSON-LD paired with `BreadcrumbList`.
4. **Sitemap**: Automatically appended to [`/sitemap.xml`](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20%281%29/app/sitemap.ts) with `lastModified` timestamps.

---

## 2. Managing Blog Posts

### Status Lifecycle: `draft` vs. `published`

To prevent search engines from indexing thin placeholder content or broken links:
- **`status: "draft"`**: Used when only a title and 1–2 sentence excerpt exist. No detail route is generated. The post appears on `/blog` under *"Engineering Research & Whitepapers in Preparation"* with a target date and related service link, but without self-linking to `/blog` or creating 404 pages.
- **`status: "published"`**: Requires a complete, multi-paragraph `body`. Next.js generates `/blog/[slug]`, links to it from `/blog`, and registers it in `/sitemap.xml`.

### Schema Structure (`BlogPost`)

```typescript
export interface BlogPost {
  id: string;              // e.g. "LOG_005"
  slug: string;            // URL slug: e.g. "vector-database-latency-benchmarks"
  title: string;           // <= 60 characters: e.g. "Vector Database Latency Benchmarks in Production"
  description: string;     // 120 - 155 characters meta description
  date: string;            // ISO publication date: "YYYY-MM-DD"
  updated?: string;        // Optional revision date: "YYYY-MM-DD"
  readingTime: string;     // e.g. "7 MIN READ"
  author: string;          // e.g. "Sbortix Data Architecture Team"
  category: string;        // e.g. "DATA ENGINEERING", "AI ARCHITECTURE", "DIGITAL GROWTH", "WEB ENGINEERING"
  relatedService: {
    title: string;         // e.g. "Enterprise AI Solutions & Workflow Automation"
    href: string;          // e.g. "/services/ai-solutions"
  };
  body: string;            // Full markdown/formatted body (leave empty "" for drafts)
  status: 'published' | 'draft';
}
```

### Steps to Publish an Article

1. Open [`lib/blog-data.ts`](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20(1)/lib/blog-data.ts).
2. Locate the post entry or append a new object to `BLOG_POSTS`.
3. Add the complete article text to the `body` field.
4. Set `status: 'published'`.
5. Run verification:
   ```bash
   npm run build
   npm run seo:check
   npm run schema:check
   ```

---

## 3. Managing Case Studies

### Display Modes: Card Summary vs. Deep-Dive (`hasDetail`)

The `/work` hub showcases all 8 case studies with client-side category filters (`ALL`, `AI`, `MARKETING`, `WEB`). All 8 are server-rendered into the initial HTML document.

- **`hasDetail: false`**: Displays full card summary (Problem, Solution, Result, Tech Stack, and Live Demo link if available). No detail page is created.
- **`hasDetail: true`**: Creates `/work/[slug]`, renders deep-dive challenge analysis, system architecture highlights, deliverables, and verified metrics breakdown. Empty sections are automatically hidden.

### Schema Structure (`CaseStudy`)

```typescript
export interface CaseStudy {
  id: string;              // e.g. "09"
  slug: string;            // e.g. "enterprise-document-intelligence"
  eyebrow: string;         // e.g. "Document Intelligence"
  title: string;           // Full title of the project
  category: 'AI' | 'MARKETING' | 'WEB';
  client: string;          // e.g. "Global Logistics Operator"
  metrics: string;         // e.g. "85% Manual Cost Savings"
  overview: string;        // 1-2 sentence executive overview
  problem: string;         // Concise problem statement
  solution: string;        // Engineered solution summary
  result: string;          // Quantifiable outcome
  tags: string[];          // Frameworks & tech stack: ["Next.js", "Python", ...]
  imageUrl: string;        // Path in /public or hosted Unsplash URL
  imageAlt: string;        // Descriptive accessibility alt text
  statusTag: string;       // e.g. "Live Production • 99.8% Accuracy"
  liveUrl?: string;        // Optional live public website URL
  imageFit?: 'contain' | 'cover';
  imageBg?: string;        // Optional background color class (e.g. "bg-[#0B0D1B]")
  relatedService: {
    title: string;
    href: string;
  };
  hasDetail: boolean;
  detail?: {
    challengeDeepDive?: string;
    architectureHighlights?: string[];
    deliverables?: string[];
    metricsBreakdown?: Array<{
      label: string;
      value: string;
      context?: string;
    }>;
  };
}
```

---

## 4. Editorial & Claim Verification Guidelines

To preserve technical credibility and protect enterprise positioning:

1. **Specific Metrics Only**: Do not use vague claims like "massive growth" or "10x better". Every metric must specify what was measured (e.g., "58% faster incident detection time-to-mitigate", "0.45s page load speed").
2. **Proof & Audit Readiness**: Any client case study featuring specific percentages (e.g., CAC reduction, conversion lifts, ROAS multiples) must be backed by signed client waivers or internal benchmark logs.
3. **No Self-Links**: Navigation links must lead to valid destination routes; cards must never link back to the current page.
