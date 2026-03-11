'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How quickly can I set up OpenClaw agents?',
      answer: 'Most OpenClaw agents are live in under 10 minutes. Select your agents, connect your tools (GitHub, Slack, Figma, etc.), and deploy. That\'s it.',
    },
    {
      question: 'Can I combine multiple OpenClaw agents?',
      answer: 'Yes! OpenClaw agents work perfectly together. Combine the Coding, Design, and Assistant agents for complete automation.',
    },
    {
      question: 'What tools does OpenClaw integrate with?',
      answer: 'OpenClaw supports 100+ integrations: GitHub, Slack, Jira, Figma, Stripe, Salesforce, and more. Custom integrations available on Enterprise plans.',
    },
    {
      question: 'Is my data safe with OpenClaw?',
      answer: 'Absolutely. Enterprise-grade encryption, SOC2 compliance, and regular security audits. All data encrypted in transit and at rest.',
    },
    {
      question: 'Can I cancel my OpenClaw subscription?',
      answer: 'Yes. Cancel anytime—no contracts, no lock-in. Your data is yours. We\'ll export everything in any format you need.',
    },
    {
      question: 'What support do you provide?',
      answer: 'All plans include documentation and community support. Professional+ plans get dedicated support, onboarding, and training.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-6 relative">
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-navy-300/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            OpenClaw Questions
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Everything you need to know before setting up your OpenClaw agents.
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
