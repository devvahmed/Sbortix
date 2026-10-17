'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function HomeContactForm() {
  const [formData, setFormData] = useState({
    identity: '',
    email: '',
    module: 'AI Solutions [SRVC_01]',
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
          service: formData.module,
          payload: formData.payload,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        trackEvent('form_submit', {
          form_name: 'home_inquiry',
          page_path: typeof window !== 'undefined' ? window.location.pathname : '/',
        });
        setStatus('success');
        setStatusMsg(data.message);
        setFormData({ identity: '', email: '', module: 'AI Solutions [SRVC_01]', payload: '' });
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
    <div className="bg-white border border-indigo-100 p-md rounded-2xl shadow-xl relative overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-md relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div>
            <label className="block text-secondary mb-xs font-semibold text-xs uppercase tracking-wider">Your Full Name</label>
            <input
              type="text"
              required
              value={formData.identity}
              onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
              placeholder="John Doe"
              className="w-full bg-[#FAFAFD] border border-indigo-100 rounded-xl px-md py-xs text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-secondary mb-xs font-semibold text-xs uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@company.com"
              className="w-full bg-[#FAFAFD] border border-indigo-100 rounded-xl px-md py-xs text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-secondary mb-xs font-semibold text-xs uppercase tracking-wider">Service of Interest</label>
          <select
            value={formData.module}
            onChange={(e) => setFormData({ ...formData, module: e.target.value })}
            className="w-full bg-[#FAFAFD] border border-indigo-100 rounded-xl px-md py-xs text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          >
            <option>AI Chatbots & Automation</option>
            <option>AI Data & Predictive Analytics</option>
            <option>SEO & Paid Advertising (Google & Meta Ads)</option>
            <option>Web Design, WordPress & Branding</option>
          </select>
        </div>

        <div>
          <label className="block text-secondary mb-xs font-semibold text-xs uppercase tracking-wider">Project Details</label>
          <textarea
            rows={4}
            value={formData.payload}
            onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
            placeholder="Tell us about your business goals and requirements..."
            className="w-full bg-[#FAFAFD] border border-indigo-100 rounded-xl px-md py-xs text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full text-white py-md rounded-xl font-label-md text-label-md transition-all-200 shadow-md ${
            status === 'success' ? 'bg-emerald-600' : 'brand-button-gradient hover:opacity-95 hover:shadow-indigo-500/25'
          }`}
        >
          {status === 'loading' ? 'TRANSMITTING...' : status === 'success' ? 'SUCCESS: DATA_RECEIVED' : 'Execute Inquiry Submission'}
        </button>

        {statusMsg && (
          <p className={`tech-label text-xs text-center ${status === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
            {statusMsg}
          </p>
        )}
      </form>
    </div>
  );
}
