'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative z-10 min-h-screen py-24 overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-[#0d1117] to-[#1e293b] opacity-90" />

      {/* Accent Blurred Circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl pointer-events-none z-[-1]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full pointer-events-none z-[-1]" />

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-montserrat font-bold text-[var(--color-primary)] text-center mb-12"
        >
          About Me
        </motion.h2>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-open-sans leading-relaxed mb-6">
              I&apos;m <span className="text-[var(--color-text-primary)] font-semibold">Yogeesh S</span>, a 
              dedicated full-stack software engineer with expertise in building scalable web applications. 
              My expertise spans across <strong>full-stack development</strong>, <strong>system design</strong>, and <strong>cloud technologies</strong>,
              with a passion for creating scalable, efficient solutions.
            </p>
            <p className="text-base sm:text-lg text-[var(--color-text-muted)] font-open-sans leading-relaxed">
              I thrive on challenges that push the boundaries of what&apos;s possible with code.
              From architecting robust backend systems to crafting intuitive user interfaces, I bring ideas to life through technology.
            </p>
          </motion.div>

          {/* Right: Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 text-center sm:text-left text-[var(--color-text-secondary)] font-poppins text-sm"
          >
            {[
              { value: '1+', label: 'Years Experience' },
              { value: '20+', label: 'Projects Completed' },
              { value: '10+', label: 'Tech Stack' },
              { value: '1', label: 'University Rank' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 2, -2, 1, 0],
                  transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                className="relative group bg-[var(--color-surface)] backdrop-blur-[var(--color-surface-blur)] border border-[var(--color-border)] shadow-[var(--shadow-elevation-1)] p-6 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--color-accent)] group-hover:rotate-1 transition-all duration-500 pointer-events-none" />
                <p className="text-2xl font-bold text-[var(--color-text-primary)]">{stat.value}</p>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}