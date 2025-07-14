'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiExpress,
  SiAmazonwebservices,
  SiNginx
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'Nginx', icon: SiNginx, color: '#000000' },    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 min-h-screen py-24 px-6 sm:px-10 overflow-hidden flex flex-col justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-[#0d1117] to-[#1e293b] opacity-90" />
      
      {/* Accent Blurred Circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl pointer-events-none z-[-1]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full pointer-events-none z-[-1]" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-montserrat font-bold text-[var(--color-primary)] text-center mb-16"
      >
        Technical Expertise
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 last:mb-0"
          >
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] text-center mb-8 font-poppins">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
              {category.skills.map(({ name, icon: Icon, color }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (categoryIndex * 0.2) + (index * 0.1), duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] backdrop-blur-[var(--color-surface-blur)] p-6 rounded-xl flex flex-col items-center justify-center shadow-[var(--shadow-elevation-1)] transition-all duration-300 hover:shadow-[var(--shadow-elevation-2)] cursor-pointer min-h-[120px] w-full max-w-[140px]"
                >
                  {/* Animated glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: color }}
                  />

                  {/* Icon */}
                  <Icon 
                    className="text-4xl mb-3 z-10 transition-colors duration-300" 
                    style={{ color: color }}
                  />

                  {/* Label */}
                  <p className="text-xs font-medium text-[var(--color-text-secondary)] font-poppins z-10 text-center">
                    {name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}