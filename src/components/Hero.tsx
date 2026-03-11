'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: 'easeOut' } }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.25, ease: 'easeOut' } }
  }

  return (
    <section className="pt-40 pb-32 px-6 md:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-navy-200/25 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      
      {/* Lobster background image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none"
      >
        <img 
          src="/logos/lobster.png" 
          alt="" 
          className="h-full w-auto object-contain opacity-50"
          style={{ filter: 'brightness(0.8)' }}
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold tracking-wide">
              ENTERPRISE AGENT INFRASTRUCTURE
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-7xl lg:text-8xl font-black text-navy-900 mb-8 leading-tight"
          >
            OpenClaw Agents
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              for Every Business
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div
            variants={descVariants}
            initial="hidden"
            animate="visible"
            className="mb-10"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              Deploy specialized AI agents built for coding, design, scheduling, support, analytics, and more. 
              Mix and match agents to automate your entire business workflow. 
              <span className="text-blue-600 font-semibold"> Go from idea to production in minutes.</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
            >
              Get Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: '#f3f4f6' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border-2 border-gray-300 text-gray-900 rounded-xl font-bold text-lg hover:border-gray-400 transition-all"
            >
              Explore Agents
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
