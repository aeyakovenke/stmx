'use client'

import { motion } from 'framer-motion'

export default function UseCases() {
  const useCases = [
    {
      industry: 'SaaS Companies',
      agents: ['Code Agent', 'Design Agent', 'Support Agent', 'Analytics Agent'],
      benefit: 'Ship faster, maintain quality, support 24/7, track everything.',
    },
    {
      industry: 'Agencies',
      agents: ['Design Agent', 'Project Agent', 'Email Agent', 'Document Agent'],
      benefit: 'Scale teams, automate client work, manage communications, deliver faster.',
    },
    {
      industry: 'E-Commerce',
      agents: ['Support Agent', 'Schedule Agent', 'Analytics Agent', 'Email Agent'],
      benefit: 'Handle orders 24/7, optimize inventory, automate marketing, track ROI.',
    },
    {
      industry: 'Professional Services',
      agents: ['Schedule Agent', 'Call Agent', 'Document Agent', 'Email Agent'],
      benefit: 'Never miss appointments, screen calls, generate contracts, organize files.',
    },
    {
      industry: 'Enterprise',
      agents: ['All Agents', 'Security Agent', 'Workflow Agent', 'Analytics Agent'],
      benefit: 'Full stack automation, enterprise security, complete visibility, scale infinitely.',
    },
    {
      industry: 'Startups',
      agents: ['Code Agent', 'Support Agent', 'Analytics Agent', 'Workflow Agent'],
      benefit: 'Do more with less, automate everything, measure what matters, grow faster.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-900 to-blue-600 bg-clip-text text-transparent mb-4">
            Built for Every Business
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Whatever your industry, OpenClaw has agents that fit. Mix, match, customize to your exact workflow.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:border-navy-200 transition-all"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-3">{useCase.industry}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{useCase.benefit}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.agents.map((agent) => (
                  <span
                    key={agent}
                    className="inline-block px-3 py-1 bg-navy-100 text-navy-700 text-xs font-medium rounded-full"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
