'use client';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bird, Home, Info, Search } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/ferry', label: 'Ferry', Icon: Info },
  { to: '/calendar', label: 'Calendar', Icon: Info },
  { to: '/documents', label: 'Documents', Icon: Info },
  { to: '/service-providers', label: 'Service Providers', Icon: Info },


  // { to: '/testing', label: 'Testing', Icon: Info },

];

function isActivePath(pathname, to) {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function Navigation() {
  // const { pathname } = useLocation();
      const pathname = "/"
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4">
        {/* <Link to="/" className="font-semibold tracking-tight text-lg">CardMarmot</Link> */}

        <nav className="flex items-center gap-1">
          {navItems.map(({ to, label, Icon }) => {
            const active = isActivePath(pathname, to);
            return (
              <Link
                key={to}
                to={to}
                className={[
                  'inline-flex items-center gap-2 rounded-md px-3 py-2 text-xl transition-colors',
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
          
        </nav>

        <div className="ml-auto flex items-center gap-2">

        </div>

      </div>
              <div className='z-50 border-t border-border/60 bg-blue-600 text-center'>

                ANY Emergency Read &nbsp; <a href="docs/Other/S - Emergency Basics.pdf" className='bg-green-800'>  Emergency Basics</a> 
                &nbsp; & call 911
                </div>
    </header>
  );
}