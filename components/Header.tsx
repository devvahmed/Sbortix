'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sparkles, Megaphone, Layout } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      subLinks: [
        { name: 'AI Chatbots & Automation', href: '/services/ai-solutions', icon: Sparkles, tag: 'AI & CHATBOTS' },
        { name: 'SEO & Paid Digital Marketing', href: '/services/digital-marketing', icon: Megaphone, tag: 'SEO & PPC' },
        { name: 'Web Design, WordPress & Branding', href: '/services/web-branding', icon: Layout, tag: 'WEB & BRANDING' },
      ]
    },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/80 backdrop-blur-md bg-white/95 shadow-xs">
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-7xl mx-auto w-full">
        {/* Brand Logo */}
        <div className="flex items-center gap-xs">
          <Link href="/" className="text-headline-md font-headline-md font-extrabold text-primary tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse inline-block"></span>
            Sbortix
          </Link>
          <span className="tech-label text-primary/70 bg-primary/5 px-2 py-0.5 rounded border border-primary/10 ml-xs hidden lg:block">[VER_2.4.0]</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-md">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.subLinks) {
              return (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 font-label-md text-label-md transition-colors duration-200 py-2 ${
                      active ? 'text-primary font-bold' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-primary/70" />
                  </Link>

                  {/* Submenu Dropdown */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white border border-indigo-100 rounded-xl shadow-xl p-xs mt-1 z-50 animate-in fade-in slide-in-from-top-2">
                      <div className="px-md py-xs border-b border-indigo-50 mb-xs">
                        <span className="tech-label text-primary text-[9px] font-semibold">[SYSTEM_MODULES]</span>
                      </div>
                      {link.subLinks.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex items-start gap-md p-xs rounded-lg hover:bg-indigo-50/60 transition-colors group/sub"
                          >
                            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover/sub:bg-primary group-hover/sub:text-white transition-colors">
                              <SubIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-on-background group-hover/sub:text-primary transition-colors">
                                {sub.name}
                              </div>
                              <span className="tech-label text-secondary/70 text-[8px]">{sub.tag}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-md text-label-md transition-all duration-200 ${
                  active ? 'text-primary font-bold bg-primary/10 px-3 py-1.5 rounded-md' : 'text-secondary hover:text-primary px-2 py-1'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-sm">
          <span className="tech-label text-primary/70 bg-primary/5 px-2 py-0.5 rounded border border-primary/10 hidden xl:block">[S_STATUS: OK]</span>
          
          <Link 
            href="/contact"
            className="brand-button-gradient text-white px-md py-xs rounded-lg font-label-md text-label-md hover:opacity-95 transition-all shadow-sm hover:shadow-indigo-500/20 inline-block"
          >
            Book a call
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-xs text-secondary hover:text-primary focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant px-margin-mobile py-md space-y-sm">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-xs font-label-md text-base ${
                  isActive(link.href) ? 'text-primary font-bold' : 'text-secondary'
                }`}
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <div className="pl-md space-y-xs mt-xs border-l-2 border-outline-variant">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-xs text-sm text-secondary hover:text-primary"
                    >
                      • {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
