'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative z-10 py-6 bg-[var(--color-surface)] border-t border-[var(--color-border)] text-[var(--color-text-muted)] text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* ❤️ Made with Love */}
        <div className="text-center md:text-left">
          Made with <span className="text-red-500">♥</span> by <span className="text-[var(--color-primary)] font-semibold">Yogeesh S</span>
        </div>

        {/* 🌐 Social Links */}
        <div className="flex items-center gap-4 text-lg">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
