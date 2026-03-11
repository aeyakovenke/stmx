'use client'

import { motion } from 'framer-motion'

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100 shadow-lg shadow-gray-200/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img src="/logos/stmx-logo-main.png" alt="STMX" className="h-12 w-auto" />
        </motion.button>

        <nav className="hidden md:flex gap-8">
          {[
            { id: 'agents', label: 'Agents' },
            { id: 'how-it-works', label: 'How it works' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'faq', label: 'FAQ' },
          ].map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              whileHover={{ color: '#3d4fc8', y: -2 }}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-semibold text-gray-600 transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('demo')}
          className="px-6 py-2.5 bg-gradient-to-r from-navy-600 to-navy-800 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-navy-600/30 transition-all"
        >
          Request Demo
        </motion.button>
      </div>
    </motion.header>
  )
}
