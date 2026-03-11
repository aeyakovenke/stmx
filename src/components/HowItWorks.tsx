'use client'

import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Agents',
      description: 'Pick the agents you need. Coding. Design. Support. All of them.',
    },
    {
      number: '02',
      title: 'Connect Your Tools',
      description: 'Link your GitHub, Slack, Figma, and more in seconds.',
    },
    {
      number: '03',
      title: 'Hit Deploy',
      description: 'One click. Your agents go live and start working immediately.',
    },
    {
      number: '04',
      title: 'Watch & Scale',
      description: 'Monitor results, adjust settings, scale as you grow.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            From Setup to Automation
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Get your first agent working in minutes. No code, no engineering team required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-navy-600 to-transparent origin-left"
                />
              )}

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto shadow-lg"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-bold text-navy-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
