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
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-navy-600 to-navy-800 bg-clip-text text-transparent"
        >
          STMX
        </motion.div>

        <nav className="hidden md:flex gap-8">
          {['agents', 'how-it-works', 'pricing', 'faq'].map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-gray-700 hover:text-navy-600 transition-colors capitalize"
            >
              {item.replace('-', ' ')}
            </motion.button>
          ))}
        </nav>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          onClick={() => scrollToSection('demo')}
          className="px-6 py-2 bg-gradient-to-r from-navy-600 to-navy-800 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-navy-600/30 transition-all"
        >
          Request Demo
        </motion.button>
      </div>
    </motion.header>
  )
}
