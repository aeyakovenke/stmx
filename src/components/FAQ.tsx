'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How quickly can I deploy an agent?',
      answer: 'Most agents are ready to go in less than 10 minutes. Configure your settings, connect your integrations, and launch. That\'s it.',
    },
    {
      question: 'Can I use multiple agents together?',
      answer: 'Absolutely! Agents work seamlessly together. The Coding Agent can work with the Design Agent for end-to-end automation.',
    },
    {
      question: 'What integrations are supported?',
      answer: 'We support 100+ integrations including Slack, GitHub, Jira, Figma, Stripe, and more. Custom integrations available on Enterprise.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use enterprise-grade encryption, SOC2 compliance, and regular security audits. All data is encrypted in transit and at rest.',
    },
    {
      question: 'What if I need to cancel?',
      answer: 'No problem. Cancel anytime, no lock-in contracts. Your data is yours—we\'ll export it in any format you need.',
    },
    {
      question: 'Do you offer training and support?',
      answer: 'Yes. All plans include documentation and community support. Professional and Enterprise plans include dedicated support.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Questions We Get
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Everything you need to know to get started.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-navy-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold text-navy-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-navy-600" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
