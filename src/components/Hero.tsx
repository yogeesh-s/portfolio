'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ProfilePicture from '@/assets/profile.jpeg';

// Primary Button Component
const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="px-5 py-2.5 rounded-md bg-[var(--color-button-bg)] hover:bg-[var(--color-button-bg-hover)] text-[var(--color-button-text)] text-sm font-medium transition"
  >
    {children}
  </Link>
);

// Secondary Button Component
const SecondaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="px-5 py-2.5 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-surface)] text-[var(--color-text-secondary)] text-sm font-medium transition"
  >
    {children}
  </Link>
);

const HERO_CONTENT = {
  role: "Software Engineer | Full Stack Developer | Problem Solver",
  name: "Yogeesh S",
  title: "Building tomorrow's web, one line at a time",
  description:
    "Innovative software engineer passionate about creating robust, user-centric applications. I transform complex problems into elegant solutions using cutting-edge technologies like React, Node.js, Python, and Django. Dedicated to writing clean, maintainable code that drives real-world impact.",
  skills: [
    "JavaScript",
    "React.js", 
    "Node.js",
    "Python",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "TypeScript",
    "AWS",
    "Docker"
  ],
  cta: {
    primary: {
      text: "Explore Work",
      href: "#projects"
    },
    secondary: {
      text: "Let's Connect", 
      href: "#contact"
    }
  },
  profile: {
    image: ProfilePicture,
    name: "Yogeesh S",
    role: "Full Stack Engineer | Tech Enthusiast",
    quote: `"Innovation through dedication, excellence through code"`
  },
  stats: {
    title: "At a Glance",
    items: [
      "🎯 Software Engineer",
      "⚡ 1+ Years Experience", 
      "🏆 20+ Projects Delivered",
      "📍 Karnataka, India"
    ]
  }
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section
        id="home"
        ref={ref}
        className="relative z-10 min-h-screen py-16 flex items-center justify-center px-6 sm:px-10 overflow-hidden"
        >
      {/* 🌈 Background Gradient Animation */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="absolute inset-0 z-[-1] bg-gradient-to-br from-[#0d1117] to-[#1e293b] animate-gradient opacity-0"
      />
      
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-[var(--color-accent)] opacity-10 blur-3xl rounded-full z-[-1]" />

      {/* 🔵 Bottom-right Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-[120px] rounded-full z-[-1]" />

      {/* 💬 Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl w-full bg-[var(--color-surface)] border border-[var(--color-glass-border)] backdrop-blur-[var(--color-surface-blur)] shadow-[var(--color-glass-shadow)] hover:shadow-[var(--shadow-elevation-2)] rounded-3xl px-6 py-10 sm:p-12"
      >
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          
          {/* LEFT: Main Content (70%) */}
          <div className="w-full lg:w-[70%] text-center lg:text-left">
            <p className="uppercase text-xs tracking-widest text-[var(--color-accent)] font-semibold mb-4 font-poppins">
              {HERO_CONTENT.role}
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-[var(--color-text-primary)] leading-tight mb-5">
              Hello, I&apos;m <span className="text-[var(--color-primary)]">{HERO_CONTENT.name}</span><br />
              <span className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">{HERO_CONTENT.title}</span>
            </h1>

            <p className="text-[var(--color-text-secondary)] text-sm sm:text-base font-open-sans mb-6 leading-relaxed">
              {HERO_CONTENT.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6 text-xs font-open-sans text-[var(--color-button-text)] justify-center lg:justify-start">
              {HERO_CONTENT.skills.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-[var(--color-button-bg)] rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <PrimaryButton href={HERO_CONTENT.cta.primary.href}>
                {HERO_CONTENT.cta.primary.text}
              </PrimaryButton>
              <SecondaryButton href={HERO_CONTENT.cta.secondary.href}>
                {HERO_CONTENT.cta.secondary.text}
              </SecondaryButton>
            </div>
          </div>

          {/* RIGHT: Cards (30%) */}
          <div className="w-full lg:w-[30%] flex flex-col gap-6">

            {/* Card 1: Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-elevation-1)] backdrop-blur-[var(--color-surface-blur)] p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-[var(--color-primary)]">
                <Image
                  src={HERO_CONTENT.profile.image}
                  alt={HERO_CONTENT.profile.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1 font-poppins">
                {HERO_CONTENT.profile.name}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mb-2">
                {HERO_CONTENT.profile.role}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                {HERO_CONTENT.profile.quote}
              </p>
            </motion.div>

            {/* Card 2: Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-elevation-1)] backdrop-blur-[var(--color-surface-blur)] p-6 text-left"
            >
              <h4 className="text-md font-semibold text-[var(--color-text-primary)] font-poppins mb-3">
                {HERO_CONTENT.stats.title}
              </h4>
              <ul className="text-sm text-[var(--color-text-secondary)] font-open-sans space-y-2 text-left">
                {HERO_CONTENT.stats.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
