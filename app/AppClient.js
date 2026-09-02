'use client';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../things/page'
import Navigation from '../nav/page';
import Footer from '../footer/page';
import Calendar from '../things/calendar/page';
import Documents from '../documents/page';

export default function AppClient() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="mx-auto w-full max-w-6xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/documents" element={<Documents />} />
            {/* <Route path="/order" element={<Orders />} />
            <Route path="/game" element={<Canvas />} />
            <Route path="/testing" element={<Testing />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}