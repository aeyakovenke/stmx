'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
}

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-navy-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 -right-40 w-80 h-80 bg-navy-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-8 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-navy-900 via-navy-700 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
              Agents for Every Business
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Deploy OpenClaw agents tailored to your business needs. From coding automation to design systems, assistant workflows, and more. Start in minutes.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-navy-600 to-navy-800 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-navy-600/40 transition-all"
            >
              Request Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-navy-600 text-navy-600 rounded-xl font-semibold hover:bg-navy-50 transition-colors"
            >
              Explore Agents
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right side - Lobster Emoji */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 backdrop-blur-sm flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #a6c1e8 0%, #5677d4 100%)',
          }}
        >
          <div className="text-9xl md:text-[200px]">🦞</div>
        </motion.div>
      </div>
    </section>
  )
}
