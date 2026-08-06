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
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-lg px-margin-desktop py-xl max-w-7xl mx-auto w-full relative z-10">
        {/* Col 1: Brand & Newsletter */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-xs mb-sm">
            <Link href="/" className="bg-white/90 px-3 py-1.5 rounded-lg border border-white/20 inline-block">
              <Image
                src="/sbortix-logo.png"
                alt="Sbortix Logo"
                width={150}
                height={40}
                className="h-8 w-auto object-contain"
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
      <div className="max-w-7xl mx-auto px-margin-desktop pb-lg flex flex-col md:flex-row justify-between items-center border-t border-outline-variant pt-md relative z-10">
        <p className="text-secondary tech-label text-[10px]">© 2026 SBORTIX_CORE. ALL_RIGHTS_RESERVED.</p>
        <div className="flex gap-md mt-md md:mt-0">
          <a className="text-secondary hover:text-primary transition-colors" href="https://linkedin.com" target="_blank" rel="noreferrer">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a className="text-secondary hover:text-primary transition-colors" href="https://twitter.com" target="_blank" rel="noreferrer">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.599 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
