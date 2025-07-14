'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Get all sections
      const sections = ['home','about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      // Find the current active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full h-16 bg-surface backdrop-blur-2xl shadow-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between text-text-primary">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-montserrat tracking-wide text-primary">
          Yogeesh S
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-poppins font-medium">
            <li>
              <Link 
                href="#home" 
                className={`px-4 py-2 rounded-lg transition ${activeSection === 'home' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className={`px-4 py-2 rounded-lg transition ${activeSection === 'about' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
              >
                About
            </Link>
          </li>
          <li>
            <Link 
              href="#skills" 
              className={`px-4 py-2 rounded-lg transition ${activeSection === 'skills' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              href="#experience" 
              className={`px-4 py-2 rounded-lg transition ${activeSection === 'experience' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              href="#projects" 
              className={`px-4 py-2 rounded-lg transition ${activeSection === 'projects' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className={`px-4 py-2 rounded-lg transition ${activeSection === 'contact' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-4 py-2 rounded-lg bg-button-bg hover:bg-button-bg-hover text-button-text text-sm font-semibold transition"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-text-primary flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
            {isMobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1E242D]/100 backdrop-blur-xl shadow-md border-b border-border px-6 py-4 space-y-4 text-sm font-poppins text-text-primary">
          <Link 
            href="#home" 
            className={`block px-4 py-2 rounded-lg transition ${activeSection === 'home' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className={`block px-4 py-2 rounded-lg transition ${activeSection === 'about' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
          >
            About
          </Link>
          <Link 
            href="#skills" 
            className={`block px-4 py-2 rounded-lg transition ${activeSection === 'skills' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
          >
            Skills
          </Link>
          <Link 
            href="#experience" 
            className={`block px-4 py-2 rounded-lg transition ${activeSection === 'experience' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
          >
            Experience
          </Link>
          <Link 
            href="#projects" 
            className={`block px-4 py-2 rounded-lg transition ${activeSection === 'projects' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className={`block px-4 py-2 rounded-lg transition ${activeSection === 'contact' ? 'bg-accent/10 text-accent border border-accent' : 'hover:bg-accent/10'}`}
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="inline-block mt-2 px-4 py-2 rounded-lg bg-button-bg hover:bg-button-bg-hover text-button-text text-sm font-semibold transition"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}

