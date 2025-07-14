'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website v2',
    description:
      'Personal portfolio showcasing projects and blog posts.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
    tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    link: 'https://yogeesh-s.github.io/portfolio_v2/',
    github: 'https://github.com/yogeesh-s/portfolio'
  },
  {
    title: 'College Staff Data Management',
    description:
      'System for staff data entry, dynamic reports & analysis using PHP, MySQL & JS.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    link: '#',
    github: '#'
  },
  {
    title: 'Multivendor E-commerce Platform',
    description:
      'Buyer/seller/admin modules built with PHP, MySQL, JS & CSS.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    link: '#',
  },
  {
    title: 'Microservices & Authentication',
    description:
      'Auth, profiles & notifications microservices with Google OAuth.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    tech: ['Node.js', 'Express', 'Docker', 'OAuth'],
    link: '#',
  },
  {
    title: 'Movie Data Scraping & Analysis',
    description:
      'Scraped 48K+ movie records using Selenium; performed EDA with Python.',
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b',
    tech: ['Python', 'Selenium', 'Pandas', 'Matplotlib'],
    link: '#',
  },
  {
    title: 'Colorizer App (Deep Learning)',
    description:
      'CNN-based app to colorize grayscale images, deployed via Streamlit.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    tech: ['Python', 'TensorFlow', 'Streamlit'],
    link: '#',
  },
  {
    title: 'Sports Event Management System',
    description:
      'Full-stack sports event platform with scheduling & dashboards.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: '#',
  },
  {
    title: '30+ IoT Projects',
    description:
      'Various IoT solutions with sensor integration & data logging.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475', 
    tech: ['Arduino', 'Raspberry Pi', 'MQTT'],
    link: '#',
  },
  {
    title: 'SGPA Calculator',
    description:
      'Seminar GPA calculator based on grades & credits.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    github: '#'
  },
  {
    title: 'Weather Forecast App',
    description:
      'Current weather + 7-day forecast using OpenWeather API.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
    tech: ['React', 'API', 'CSS'],
    link: '#',
    github: '#'
  },
  {
    title: 'BMI Calculator',
    description:
      'UI-driven BMI calculator with instant results.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[var(--color-surface)] border border-[var(--color-border)] backdrop-blur-[var(--color-surface-blur)] shadow-[var(--shadow-elevation-1)] rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-[var(--shadow-elevation-2)] transition-all duration-300"
    >
      <div className="h-48 w-full relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={index < 3}
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 mb-4">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-[var(--color-button-bg)] text-[var(--color-button-text)] rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.link}
            className="flex-1 text-center px-4 py-2.5 rounded-md bg-[var(--color-button-bg)] hover:bg-[var(--color-button-bg-hover)] text-[var(--color-button-text)] text-sm font-medium transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          {project.github && (
            <a
              href={project.github}
              className="px-4 py-2.5 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-surface)] text-[var(--color-text-secondary)] text-sm font-medium transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 min-h-screen py-24 overflow-hidden flex flex-col justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-[#0d1117] to-[#1e293b] opacity-90" />
      
      {/* Accent Blurred Circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl pointer-events-none z-[-1]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full pointer-events-none z-[-1]" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-montserrat font-bold text-[var(--color-primary)] text-center mb-14"
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}