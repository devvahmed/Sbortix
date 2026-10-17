'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ServiceFaq } from '@/lib/services-faq';

interface ServiceFaqSectionProps {
  faqs: ServiceFaq[];
  title?: string;
  subtitle?: string;
}

export default function ServiceFaqSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = '// CLARITY & SPECIFICATIONS',
}: ServiceFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
      <div className="text-center mb-12">
        <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block mb-2">
          {subtitle}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151137] tracking-tight">
          {title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
          Clear answers to common questions regarding our technical scope, deployment workflows, data security, and engagement models.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#2D2D82]/15 shadow-xs transition-all overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold text-[#151137] group-hover:text-[#2D2D82] transition-colors pr-4">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full bg-[#ECEBF5] flex items-center justify-center shrink-0 text-[#2D2D82] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#2D2D82] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-[#2D2D82]/10 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
