'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Bot } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
}

export default function AgentCards() {
  const agents = [
    {
      icon: Code2,
      title: 'Coding Agent',
      description: 'OpenClaw coding automation. Auto-review pull requests, generate code, catch bugs, refactor legacy systems. Ship features 3x faster.',
      features: ['Code Generation', 'PR Reviews', 'Bug Detection', 'Refactoring'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Palette,
      title: 'Design Agent',
      description: 'OpenClaw design system management. Generate components, enforce brand consistency, manage design assets at scale.',
      features: ['Component Gen', 'Design QA', 'Brand Sync', 'Asset Creation'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Bot,
      title: 'Assistant Agent',
      description: 'OpenClaw customer operations. Handle support tickets, automate business workflows, generate insights from your data.',
      features: ['Customer Support', 'Data Analysis', 'Scheduling', 'Reporting'],
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section id="agents" className="py-24 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-navy-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-900 to-blue-600 bg-clip-text text-transparent mb-4">
            Three OpenClaw Agents
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Choose the agents your business needs. Each OpenClaw agent handles a specific workflow and integrates seamlessly with your tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {agents.map((agent) => {
            const Icon = agent.icon
            return (
              <motion.div
                key={agent.title}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(31, 42, 92, 0.1)' }}
                className="p-8 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm hover:border-navy-200 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-block p-4 rounded-xl bg-gradient-to-r ${agent.color} mb-6 shadow-lg transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{agent.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{agent.description}</p>
                <ul className="space-y-2">
                  {agent.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        viewport={{ once: true }}
                        className="w-2 h-2 bg-gradient-to-r from-navy-600 to-blue-600 rounded-full mr-3"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
