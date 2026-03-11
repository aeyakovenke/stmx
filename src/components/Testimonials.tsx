'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "OpenClaw's coding agent cut our code review time in half. We ship 40% faster and catch more bugs before production.",
      author: 'Sarah Chen',
      role: 'CTO, TechStartup Inc',
      avatar: '👩‍💻',
    },
    {
      quote: 'The OpenClaw design agent maintains our brand perfectly. Consistent components across all projects now.',
      author: 'Marcus Rodriguez',
      role: 'Design Lead, Creative Co',
      avatar: '🎨',
    },
    {
      quote: 'OpenClaw handled our support tickets 24/7. Response time from 2 days to 2 hours. Our customers notice.',
      author: 'Emily Watson',
      role: 'Customer Success, ServicePlus',
      avatar: '😊',
    },
  ]

  return (
    <section className="py-20 px-6 relative">
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-gradient-to-bl from-navy-200/25 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Teams Love OpenClaw
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Real results from businesses running OpenClaw agents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-navy-200 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
