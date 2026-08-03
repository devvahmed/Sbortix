'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    identity: '',
    email: '',
    company: '',
    module: 'AI Solutions [SRVC_01]',
    budget: '$10k - $25k',
    payload: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.identity,
          email: formData.email,
          company: formData.company,
          service: formData.module,
          message: formData.payload,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setStatusMsg(data.message);
        setFormData({
          identity: '',
          email: '',
          company: '',
          module: 'AI Solutions [SRVC_01]',
          budget: '$10k - $25k',
          payload: '',
        });
      } else {
        setStatus('error');
        setStatusMsg(data.message || 'TRANSMISSION_FAILED');
      }
    } catch {
      setStatus('error');
      setStatusMsg('NETWORK_ERROR: Connection failed.');
    }
  };

  return (
    <div className="w-full bg-white py-xl">
      {/* Header */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-16">
        <div className="inline-block px-xs py-1 border hairline-border rounded mb-md bg-white">
          <span className="tech-label text-primary">[OPEN_TRANSMISSION_CHANNEL]</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-md max-w-4xl">
          Initiate Contact & Technical Inquiry
        </h1>
        <p className="text-secondary font-body-lg text-body-lg max-w-3xl">
          Connect directly with our engineering team. Whether you need a full data architecture audit, custom AI integration, or growth strategy, we respond within 24 hours.
        </p>
      </section>

      {/* Main Grid */}
      <section className="px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl mb-24">
        {/* Info Col */}
        <div className="lg:col-span-5 space-y-lg">
          <div className="p-lg bg-surface-container-low border border-outline-variant rounded-xl">
            <h3 className="font-headline-md text-headline-md font-bold mb-md">Direct Comms</h3>
            
            <div className="space-y-md">
              <div className="flex items-start gap-md">
                <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h6 className="font-label-md text-label-md font-bold">Email Address</h6>
                  <p className="text-secondary font-mono text-sm">hello@sbortix.com</p>
                </div>
              </div>

              <div className="flex items-start gap-md">
                <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h6 className="font-label-md text-label-md font-bold">Operational Base</h6>
                  <p className="text-secondary font-mono text-sm uppercase">NODE_KHI: DHA PHASE 6, KARACHI</p>
                </div>
              </div>

              <div className="flex items-start gap-md">
                <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h6 className="font-label-md text-label-md font-bold">Response SLA</h6>
                  <p className="text-secondary font-mono text-sm uppercase">&lt; 24 HOURS GUARANTEED</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-lg bg-primary-container text-white rounded-xl">
            <span className="tech-label opacity-70 block mb-xs">[BOOK_CALL_DIRECT]</span>
            <h4 className="font-headline-md text-headline-md mb-xs">Prefer a Live Video Audit?</h4>
            <p className="opacity-90 text-label-md mb-md">Book a 30-minute introductory call directly on our team calendar.</p>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-primary px-md py-xs rounded-lg font-label-md font-bold hover:bg-surface-container-low transition-colors"
            >
              Open Calendar Slot
            </a>
          </div>
        </div>

        {/* Form Col */}
        <div className="lg:col-span-7 bg-white hairline-border p-lg md:p-xl rounded-xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-xs tech-label text-outline-variant text-[8px]">INPUT_FORM_V2</div>
          
          <form onSubmit={handleSubmit} className="space-y-md relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div>
                <label className="block tech-label text-secondary mb-xs">USER_IDENTITY *</label>
                <input
                  type="text"
                  required
                  value={formData.identity}
                  onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                  placeholder="Full Name"
                  className="w-full bg-surface border border-outline-variant rounded-lg px-md py-xs font-mono text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all-200"
                />
              </div>

              <div>
                <label className="block tech-label text-secondary mb-xs">SMTP_CONTACT *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="work@company.com"
                  className="w-full bg-surface border border-outline-variant rounded-lg px-md py-xs font-mono text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div>
                <label className="block tech-label text-secondary mb-xs">ORGANIZATION</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="w-full bg-surface border border-outline-variant rounded-lg px-md py-xs font-mono text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all-200"
                />
              </div>

              <div>
                <label className="block tech-label text-secondary mb-xs">BUDGET_RANGE</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-surface border border-outline-variant rounded-lg px-md py-xs font-mono text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all-200"
                >
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block tech-label text-secondary mb-xs">MODULE_INTEREST *</label>
              <select
                value={formData.module}
                onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                className="w-full bg-surface border border-outline-variant rounded-lg px-md py-xs font-mono text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all-200"
              >
                <option>AI Solutions [SRVC_01]</option>
                <option>Digital Marketing [SRVC_02]</option>
                <option>Web & Branding [SRVC_03]</option>
                <option>Full Technical Audit [SRVC_00]</option>
              </select>
            </div>

            <div>
              <label className="block tech-label text-secondary mb-xs">TRANSMISSION_PAYLOAD *</label>
              <textarea
                rows={5}
                required
                value={formData.payload}
                onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                placeholder="Detail your technical requirements or goals..."
                className="w-full bg-surface border border-outline-variant rounded-lg px-md py-xs font-mono text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all-200"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full text-white py-md rounded-lg font-label-md text-label-md transition-all-200 border-b-2 border-primary ${
                status === 'success' ? 'bg-green-600' : 'bg-primary-container hover:opacity-90'
              }`}
            >
              {status === 'loading' ? 'TRANSMITTING PAYLOAD...' : status === 'success' ? 'SUCCESS: INQUIRY_LOGGED' : 'Execute Inquiry Submission'}
            </button>

            {statusMsg && (
              <p className={`tech-label text-xs text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {statusMsg}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
