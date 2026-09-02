'use client';

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarDays, ChevronDown, Home, Info, Menu, File } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/ferry', label: 'Ferry', Icon: Info },
  { to: '/calendar', label: 'Calendar', Icon: CalendarDays },
  { to: '/documents', label: 'Documents', Icon: File },
  { to: '/service-providers', label: 'Service Providers', Icon: Info },
];

function isActivePath(pathname, to) {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function Navigation() {
  const { pathname } = useLocation();
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const primaryItems = navItems.filter(({ to }) => to === '/' || to === '/calendar');
  const overflowItems = navItems.filter(({ to }) => to !== '/' && to !== '/calendar');
  const visibleItems = isCompact ? primaryItems : navItems;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4">
        <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-hidden">
          {visibleItems.map(({ to, label, Icon }) => {
            const active = isActivePath(pathname, to);

            return (
              <Link
                key={to}
                to={to}
                className={[
                  'inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-base font-medium transition-colors sm:text-lg',
                  active
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
                ].join(' ')}
              >
                <Icon className="h-4 w-4" />
                <span className={isCompact && to === '/' ? 'hidden sm:inline' : ''}>{label}</span>
              </Link>
            );
          })}
        </nav>

        {isCompact && overflowItems.length > 0 && (
          <div className="relative ml-auto flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle additional navigation links"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/60"
            >
              <Menu className="h-4 w-4" />
              <span>More</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-lg border border-border bg-background shadow-lg">
                {overflowItems.map(({ to, label, Icon }) => {
                  const active = isActivePath(pathname, to);

                  return (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => setIsMenuOpen(false)}
                      className={[
                        'flex items-center gap-3 px-4 py-3 text-sm transition-colors',
                        active
                          ? 'bg-accent text-accent-foreground'
                          : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
                      ].join(' ')}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="z-50 border-t border-border/60 bg-blue-600 text-center text-sm text-white">
        ANY Emergency Read &nbsp; <a href="https://bivc.net/wp-content/uploads/2024/05/S-Emergency-Basics.pdf" className="bg-green-800" target="_blank">Emergency Basics</a>
        &nbsp; & call 911
      </div>
    </header>
  );
}