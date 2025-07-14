'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 min-h-screen py-24 overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-[#1e1b4b] via-[#1e293b] to-[#0f172a] opacity-90" />

      {/* Blurred Accent Circles */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl z-[-1]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full z-[-1]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-montserrat font-bold text-[var(--color-primary)] mb-4">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg font-open-sans max-w-2xl mx-auto">
            Ready to turn your ideas into reality? I&apos;m always excited to discuss new opportunities and innovative projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] backdrop-blur-[var(--color-surface-blur)] shadow-[var(--shadow-elevation-1)] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6 font-poppins">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--color-button-bg)] rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-[var(--color-button-text)]" />
                  </div>
                  <div>
                    <p className="text-[var(--color-text-secondary)] text-sm">Email</p>
                    <p className="text-[var(--color-text-primary)] font-medium">yogeesh.dev@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--color-button-bg)] rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[var(--color-button-text)]" />
                  </div>
                  <div>
                    <p className="text-[var(--color-text-secondary)] text-sm">Location</p>
                    <p className="text-[var(--color-text-primary)] font-medium">Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 text-2xl">
              {[
                { icon: FaGithub, href: 'https://github.com/yogeesh-s', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/yogeesh-s', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://twitter.com/yogeeshYu', label: 'Twitter' },
                { icon: FaEnvelope, href: 'mailto:yogeesh.sryd@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] backdrop-blur-[var(--color-surface-blur)] shadow-[var(--shadow-elevation-2)] rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project ideas..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] hover:from-[var(--color-primary-hover)] hover:to-[var(--color-accent-hover)] text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}