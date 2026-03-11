'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Robot3D = dynamic(() => import('./Robot3D'), { ssr: false })

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight"
          >
            Agents for Every Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            Deploy OpenClaw agents tailored to your business needs. From coding automation to design systems, assistant workflows, and more. Start in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4 flex-wrap"
          >
            <button 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-navy-600 to-navy-800 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-navy-600/30 transition-all hover:scale-105"
            >
              Request Demo
            </button>
            <button 
              onClick={() => document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-navy-600 text-navy-600 rounded-lg font-medium hover:bg-navy-50 transition-colors"
            >
              Explore Agents
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - 3D Robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Robot3D />
        </motion.div>
      </div>
    </section>
  )
}
