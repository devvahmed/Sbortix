'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sparkles, Megaphone, Layout } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

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
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 border-none shadow-none pointer-events-auto">
      <div className="flex justify-between items-center h-24 sm:h-28 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
        {/* Brand Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/sbortix-logo.png"
              alt="Sbortix — Innovating Digital Growth"
              width={650}
              height={190}
              className="h-24 sm:h-28 w-auto max-w-[220px] sm:max-w-none object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.subLinks) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm transition-all duration-200 px-4 py-1.5 rounded-full ${active
                      ? 'bg-[#2D2D82] text-white font-bold shadow-sm'
                      : 'text-[#151137]/80 hover:text-[#2D2D82] hover:bg-[#2D2D82]/10 font-medium'
                      }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Submenu Dropdown */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-lg border border-indigo-100/80 rounded-2xl shadow-xl p-2 mt-2 z-50 animate-in fade-in slide-in-from-top-2"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Invisible hover bridge */}
                      <div className="absolute top-[-12px] left-0 right-0 h-[12px] bg-transparent" />
                      
                      <div className="px-3 py-1.5 border-b border-indigo-50/80 mb-1">
                        <span className="text-[9px] font-bold text-[#2D2D82] uppercase">Core Services</span>
                      </div>
                      {link.subLinks.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#2D2D82]/8 transition-colors group/sub"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#2D2D82]/10 flex items-center justify-center flex-shrink-0 text-[#2D2D82] group-hover/sub:bg-[#2D2D82] group-hover/sub:text-white transition-colors">
                              <SubIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#151137] group-hover/sub:text-[#2D2D82] transition-colors">
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
                className={`text-sm transition-all duration-200 px-4 py-1.5 rounded-full ${active
                  ? 'bg-[#2D2D82] text-white font-bold shadow-sm'
                  : 'text-[#151137]/80 hover:text-[#2D2D82] hover:bg-[#2D2D82]/10 font-medium'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-sm">
          <Link
            href="/contact"
            className="bg-[#2D2D82] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md shadow-[#2D2D82]/25 hover:bg-[#1e1d6e] hover:scale-105 active:scale-95 transition-all inline-block"
          >
            Book a call
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 sm:p-xs text-secondary hover:text-primary focus:outline-none"
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
                className={`block py-xs font-label-md text-base ${isActive(link.href) ? 'text-primary font-bold' : 'text-secondary'
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
