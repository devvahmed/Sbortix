'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Subscribed successfully!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Subscription failed.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant relative">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-lg px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto w-full relative z-10">
        {/* Col 1: Brand & Newsletter */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-xs mb-sm">
            <Link href="/" className="bg-white/90 px-4 py-2 rounded-lg border border-white/20 inline-block">
              <Image
                src="/sbortix-logo.png"
                alt="Sbortix Logo"
                width={200}
                height={50}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <span className="tech-label text-outline ml-2">[SYS_CORE]</span>
          </div>
          <p className="text-secondary text-label-sm leading-relaxed uppercase tech-label opacity-80 mb-md max-w-sm">
            Enterprise-grade AI, data science, and marketing engineering nodes. Delivering autonomous growth systems.
          </p>

          {/* Newsletter Input */}
          <form onSubmit={handleSubscribe} className="space-y-xs max-w-sm">
            <span className="tech-label text-primary block">[SUBSCRIBE_UPDATES]</span>
            <div className="flex gap-xs">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@enterprise.com"
                required
                className="w-full bg-surface border border-outline-variant rounded-lg px-md py-xs font-mono text-xs focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-primary-container text-white px-md py-xs rounded-lg font-label-md text-xs hover:opacity-90 transition-opacity whitespace-nowrap border-b-2 border-primary"
              >
                {status === 'loading' ? 'JOINING...' : 'SUBSCRIBE'}
              </button>
            </div>
            {message && (
              <p className={`tech-label text-[10px] ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </form>
        </div>

        {/* Col 2: Services */}
        <div>
          <h6 className="text-secondary font-bold text-xs uppercase mb-md tracking-wider">OUR SERVICES</h6>
          <ul className="space-y-xs text-xs">
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/services/ai-solutions">AI Chatbots &amp; Voice</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/services/ai-solutions">Workflow Automation</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/services/digital-marketing">SEO &amp; Paid Advertising</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/services/web-branding">Web Design &amp; WordPress</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/services/web-branding">Logo Design &amp; Branding</Link></li>
          </ul>
        </div>

        {/* Col 3: Structure */}
        <div>
          <h6 className="text-secondary font-bold text-xs uppercase mb-md tracking-wider">COMPANY</h6>
          <ul className="space-y-xs text-xs">
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/">Home</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/about">About Us</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/work">Our Work</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/blog">Blog &amp; Insights</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 4: Legal */}
        <div>
          <h6 className="text-secondary font-bold text-xs uppercase mb-md tracking-wider">LEGAL</h6>
          <ul className="space-y-xs text-xs">
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/terms">Terms of Service</Link></li>
            <li><Link className="text-secondary hover:text-primary transition-colors" href="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-lg flex flex-col md:flex-row justify-between items-center border-t border-outline-variant pt-md relative z-10">
        <p className="text-secondary tech-label text-[10px]">© 2026 SBORTIX_CORE. ALL_RIGHTS_RESERVED.</p>
        <div className="flex gap-md mt-md md:mt-0">
          {/* LinkedIn */}
          <a className="text-secondary hover:text-primary transition-colors" href="https://www.linkedin.com/company/sbortix-global" target="_blank" rel="noreferrer">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          {/* Instagram */}
          <a className="text-secondary hover:text-primary transition-colors" href="https://www.instagram.com/sbor_tix/" target="_blank" rel="noreferrer">
            <span className="sr-only">Instagram</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          {/* Facebook */}
          <a className="text-secondary hover:text-primary transition-colors" href="https://www.facebook.com/sbortix" target="_blank" rel="noreferrer">
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
