import Link from 'next/link';
import { ArrowRight, Bot, Target, Layout } from 'lucide-react';

interface RelatedServicesBlockProps {
  currentSlug: 'digital-marketing' | 'ai-solutions' | 'web-branding';
}

const ALL_SERVICES = [
  {
    slug: 'ai-solutions',
    href: '/services/ai-solutions',
    anchorText: 'Explore Enterprise AI Solutions & Workflow Automation',
    title: 'Enterprise AI Solutions & Automation',
    tag: 'PRODUCTION AI AGENTS',
    description:
      'Engineer custom retrieval-augmented generation (RAG) assistants, predictive data intelligence pipelines, and autonomous business process automation in your private cloud.',
    icon: Bot,
  },
  {
    slug: 'digital-marketing',
    href: '/services/digital-marketing',
    anchorText: 'Explore Technical SEO & High-ROAS Performance Marketing',
    title: 'Technical SEO & Performance Marketing',
    tag: 'ALGORITHMIC GROWTH',
    description:
      'Combine deep technical search optimization, multi-channel paid acquisition across Google, LinkedIn, and Meta, and automated lifecycle email sequences for measurable pipeline revenue.',
    icon: Target,
  },
  {
    slug: 'web-branding',
    href: '/services/web-branding',
    anchorText: 'Explore Web Design & Brand Engineering Services',
    title: 'Web Engineering & Brand Identity',
    tag: 'SYSTEM DESIGN & UI',
    description:
      'Architect lightning-fast Next.js web applications, lightweight custom WordPress platforms, and complete vector brand design systems engineered to convert enterprise buyers.',
    icon: Layout,
  },
];

export default function RelatedServicesBlock({ currentSlug }: RelatedServicesBlockProps) {
  const related = ALL_SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section className="py-20 bg-[#ECEBF5]/60 border-t border-[#2D2D82]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block mb-2">
            // COMPLEMENTARY CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151137] tracking-tight">
            Related Enterprise Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Sbortix delivers integrated digital systems where engineered software, artificial intelligence, and performance marketing amplify one another.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {related.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="bg-white rounded-2xl p-8 border border-[#2D2D82]/15 shadow-xs flex flex-col justify-between hover:border-[#2D2D82]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ECEBF5] text-[#2D2D82] flex items-center justify-center shrink-0 group-hover:bg-[#2D2D82] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#151137] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-bold text-sm text-[#2D2D82] hover:text-[#151137] transition-colors group/link"
                  >
                    <span>{service.anchorText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
