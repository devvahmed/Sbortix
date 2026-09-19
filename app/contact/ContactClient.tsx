'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    identity: '',
    email: '',
    company: '',
    module: 'AI Solutions',
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
          module: 'AI Solutions',
          budget: '$10k - $25k',
          payload: '',
        });
      } else {
        setStatus('error');
        setStatusMsg(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Network error. Please try again.');
    }
  };

  return (
    <div className="w-full bg-[#FAFAFD] text-[#12131A] overflow-x-hidden">
      {/* Header */}
      <section
        className="relative pt-40 pb-16 lg:pt-52 lg:pb-20 border-b border-[#2D2D82]/15"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #ECEBF5 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
            Get in Touch
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151137] tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Initiate Project Inquiry & Architecture Discovery
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Connect directly with our engineering leadership team. Whether you need a data science audit, custom AI agent build, or growth marketing execution, we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Info Column (Editorial Tint Panel) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#ECEBF5] space-y-6">
            <h3
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl font-extrabold text-[#151137]"
            >
              Direct Communications
            </h3>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D2D82] flex items-center justify-center flex-shrink-0 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="font-bold text-sm text-[#151137]">Email Address</h6>
                  <p className="text-gray-600 font-mono text-xs mt-0.5">contact@sbortix.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D2D82] flex items-center justify-center flex-shrink-0 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="font-bold text-sm text-[#151137]">Our Office</h6>
                  <p className="text-gray-600 text-sm mt-0.5">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D2D82] flex items-center justify-center flex-shrink-0 text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h6 className="font-bold text-sm text-[#151137]">Response Time</h6>
                  <p className="text-gray-600 text-sm mt-0.5">Within 24 hours, guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#151137] text-white space-y-4">
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest block">
              Free Consultation
            </span>
            <h4
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-xl font-bold"
            >
              Prefer a Direct Video Consultation?
            </h4>
            <p className="text-indigo-200 text-xs leading-relaxed">
              Schedule a 30-minute introductory call directly on our engineering calendar.
            </p>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-[#151137] bg-white hover:bg-gray-100 transition-all"
            >
              Open Calendar Slot
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Form Column (Clean Borderless Panel) */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border-t border-[#2D2D82]/15 shadow-sm relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#151137] mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.identity}
                  onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                  placeholder="Full Name"
                  className="w-full bg-[#FAFAFD] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#2D2D82]/20 focus:border-[#2D2D82] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#151137] mb-2">Work Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="work@company.com"
                  className="w-full bg-[#FAFAFD] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#2D2D82]/20 focus:border-[#2D2D82] outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#151137] mb-2">Organization</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="w-full bg-[#FAFAFD] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#2D2D82]/20 focus:border-[#2D2D82] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#151137] mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#FAFAFD] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#2D2D82]/20 focus:border-[#2D2D82] outline-none transition-all"
                >
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#151137] mb-2">Service Required *</label>
              <select
                value={formData.module}
                onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                className="w-full bg-[#FAFAFD] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#2D2D82]/20 focus:border-[#2D2D82] outline-none transition-all"
              >
                <option>AI Solutions</option>
                <option>Digital Marketing</option>
                <option>Web & Branding</option>
                <option>Full Technical Audit</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#151137] mb-2">Project Details *</label>
              <textarea
                rows={5}
                required
                value={formData.payload}
                onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                placeholder="Tell us about your project, goals, and timeline..."
                className="w-full bg-[#FAFAFD] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#2D2D82]/20 focus:border-[#2D2D82] outline-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full text-white py-4 rounded-xl text-sm font-semibold transition-all shadow-md ${status === 'success' ? 'bg-emerald-600' : 'bg-[#2D2D82] hover:bg-[#2C2A78]'
                }`}
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Inquiry Submitted Successfully' : 'Submit Project Inquiry'}
            </button>

            {statusMsg && (
              <p className={`text-sm text-center ${status === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
                {statusMsg}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
