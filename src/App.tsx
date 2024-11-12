import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import About from './pages/About';
import CookieConsent from './components/CookieConsent';
import { useCookieConsent } from './hooks/useCookieConsent';

export default function App() {
  useCookieConsent();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hakkimda" element={<About />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}