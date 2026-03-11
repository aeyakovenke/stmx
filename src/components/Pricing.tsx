'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Great for testing the waters',
      agents: 1,
      features: [
        '1 Agent Type',
        'Up to 1,000 tasks/month',
        'Email support',
        'Basic integrations',
        'Community access',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Most popular for growing teams',
      agents: 3,
      features: [
        '3 Agent Types',
        'Up to 10,000 tasks/month',
        'Priority chat & email support',
        'Advanced integrations',
        'Custom workflows',
        'Team dashboard',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For high-volume operations',
      agents: 'Unlimited',
      features: [
        'All Agent Types',
        'Unlimited tasks',
        '24/7 dedicated support',
        'Custom integrations',
        'Full API access',
        'SLA guarantee',
        'White-label options',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Plans for Every Team
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Start small, scale big. No surprises, no lock-in contracts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-navy-600 to-navy-800 text-white ring-2 ring-navy-400 shadow-2xl'
                  : 'bg-gray-50 border border-gray-200 text-gray-900'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-navy-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-navy-900'}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                  {plan.period}
                </span>
              </div>

              <div className={`mb-8 p-4 rounded-lg ${plan.highlighted ? 'bg-white/10' : 'bg-white'}`}>
                <p className={`font-semibold ${plan.highlighted ? 'text-white' : 'text-navy-900'}`}>
                  {plan.agents} Agent Type{typeof plan.agents === 'number' && plan.agents !== 1 ? 's' : ''}
                </p>
              </div>

              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 px-6 rounded-lg font-medium mb-8 transition-all ${
                  plan.highlighted
                    ? 'bg-white text-navy-700 hover:bg-gray-100'
                    : 'bg-navy-600 text-white hover:bg-navy-700'
                }`}
              >
                Request Demo
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-green-300' : 'text-green-500'}`} />
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
