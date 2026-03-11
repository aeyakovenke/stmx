'use client'

import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Select OpenClaw Agents',
      description: 'Choose which agents your business needs. Coding. Design. Assistant.',
    },
    {
      number: '02',
      title: 'Configure & Connect',
      description: 'Link to your GitHub, Slack, Figma, or other tools. Takes minutes.',
    },
    {
      number: '03',
      title: 'Deploy Live',
      description: 'One click to launch. Your OpenClaw agents start working immediately.',
    },
    {
      number: '04',
      title: 'Monitor & Grow',
      description: 'Track automation results, optimize workflows, scale without limits.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 relative overflow-hidden">
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-navy-300/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Custom OpenClaw Setup for Your Business
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Choose any combination of agents. Configure them to match your workflow. Deploy and automate everything in minutes.
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
