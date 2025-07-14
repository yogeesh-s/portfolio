'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineer – Full Stack',
    company: 'Efficient Capital Labs',
    location: 'Bengaluru, India',
    period: 'Jun 2024 - Present',
    type: 'Full-time',
    description: [
      'Leading full stack development of internal tools using React, Next.js, Django, PostgreSQL, and AWS',
      'Focused on scalable architecture, secure APIs, and team collaboration',
      'Architecting and implementing enterprise-level solutions'
    ],
    technologies: ['React', 'Next.js', 'Django', 'PostgreSQL', 'TypeScript', 'Rest API'],
    achievements: ['I worked on different projects including a full stack project with Next.js and Django',"Enitire onboarding journey of singapore lending and admin portal was built by me"]
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Efficient Capital Labs',
    location: 'Bengaluru, India',
    period: 'Nov 2023 - Dec 2023',
    type: 'Internship',
    description: [
      'Built production features with PHP, PHP, and MySQL',
      'Full project developed from scratch with and overcome challenges in a fast-paced environment',
      'Worked in a fast-paced startup environment, with a focus on rapid development and deployment'
    ],
    technologies: ['PHP', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    achievements: ['Delivered full project within deadline', 'Improved code efficiency by 30%']
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'ArcSolar (E-Commerce)',
    location: 'Remote',
    period: '2022 - 2023',
    type: 'Freelance',
    description: [
      'Developed and maintained a solar e-commerce platform using Next.js, MongoDB, and Tailwind CSS',
      'Added product flows, admin panel, and handled deployment',
      'Implemented responsive design and optimized user experience'
    ],
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'React', 'Node.js'],
    achievements: ['Increased conversion rate by 25%', 'Built complete admin dashboard']
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Bus Travel Website',
    location: 'Remote',
    period: '2021 - 2022',
    type: 'Freelance',
    description: [
      'Built a responsive travel booking website with React and Express',
      'Integrated location-based search, payment gateways, and backend APIs',
      'Developed admin panel and user management system'
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Payment APIs', 'CSS'],
    achievements: ['Processed 1000+ bookings', 'Integrated 3 payment gateways']
  },
  {
    title: 'Freelance Developer & SEO Specialist',
    company: 'Pooja Travels & Multiple Clients',
    location: 'Remote',
    period: '2019 - 2021',
    type: 'Freelance',
    description: [
      'Worked on WordPress websites, SEO optimization, Google Ads, and digital marketing',
      'Delivered full-cycle websites and increased search visibility',
      'Managed multiple client projects simultaneously'
    ],
    technologies: ['WordPress', 'PHP', 'SEO', 'Google Ads', 'HTML/CSS'],
    achievements: ['Improved SEO rankings by 200%', 'Managed 15+ client websites']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 min-h-screen py-24 overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-[#0d1117] to-[#1e293b] opacity-90" />
      
      {/* Accent Blurred Circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl pointer-events-none z-[-1]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full pointer-events-none z-[-1]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-montserrat font-bold text-[var(--color-primary)] mb-4">
            Professional Journey
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
1+ years of professional experience building scalable web applications and leading development teams
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] backdrop-blur-[var(--color-surface-blur)] rounded-3xl p-8 shadow-[var(--shadow-elevation-1)] hover:shadow-[var(--shadow-elevation-2)] transition-all duration-500 hover:scale-[1.02]">
                
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl flex items-center justify-center">
                        <FaBriefcase className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] font-poppins">
                          {exp.title}
                        </h3>
                        <p className="text-[var(--color-primary)] font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <FaCalendarAlt className="text-[var(--color-accent)]" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <FaMapMarkerAlt className="text-[var(--color-accent)]" />
                      {exp.location}
                    </div>
                    <span className="inline-block px-3 py-1 bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-medium rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Description */}
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-[var(--color-text-secondary)]">
                          <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    {exp.achievements && (
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs rounded-full border border-[var(--color-primary)]/20"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-2 bg-[var(--color-button-bg)] text-[var(--color-button-text)] text-xs font-medium rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[var(--color-text-secondary)] mb-6">
            Interested in working together? Let&apos;s discuss your next project.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaBriefcase />
            Let&apos;s Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}