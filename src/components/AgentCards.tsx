'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Bot } from 'lucide-react'

export default function AgentCards() {
  const agents = [
    {
      icon: Code2,
      title: 'Coding Agent',
      description: 'Automate development tasks, code reviews, testing, and deployment pipelines.',
      features: ['Code Generation', 'PR Reviews', 'Bug Detection', 'Refactoring'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Palette,
      title: 'Design Agent',
      description: 'Design systems, component generation, brand consistency, and asset management.',
      features: ['Component Gen', 'Design QA', 'Brand Sync', 'Asset Creation'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Bot,
      title: 'Assistant Agent',
      description: 'Customer support, workflow automation, scheduling, and business intelligence.',
      features: ['Customer Support', 'Data Analysis', 'Scheduling', 'Reporting'],
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section id="agents" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Meet Your Agent Team
          </h2>
          <p className="text-xl text-gray-600">
            Choose agents that fit your business needs. Mix and match.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => {
            const Icon = agent.icon
            return (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(31, 42, 92, 0.15)' }}
                className="p-8 rounded-2xl border border-gray-200 hover:border-navy-200 transition-all bg-white group"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${agent.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{agent.title}</h3>
                <p className="text-gray-600 mb-6">{agent.description}</p>
                <ul className="space-y-2">
                  {agent.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-navy-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
