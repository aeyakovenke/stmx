'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Code2, Palette, Mail, Calendar, Phone, BarChart3, Shield, Zap, Users, FileText, ChevronLeft, ChevronRight } from 'lucide-react'

export default function AgentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const agents = [
    {
      icon: Code2,
      title: 'Code Agent',
      description: 'Auto-generate code, review pull requests, detect bugs, refactor legacy systems. Ship features 3x faster with intelligent code automation.',
      features: ['Code Generation', 'PR Reviews', 'Bug Detection', 'Refactoring'],
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Palette,
      title: 'Design Agent',
      description: 'Generate design components, maintain brand consistency, manage assets at scale. Keep your design system perfect across all projects.',
      features: ['Component Gen', 'Design QA', 'Brand Sync', 'Asset Management'],
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: Mail,
      title: 'Email Agent',
      description: 'Manage inbox overload. Auto-sort emails, generate responses, schedule sends, prioritize urgent messages. Zero inbox stress.',
      features: ['Email Sorting', 'Response Gen', 'Scheduling', 'Prioritization'],
      color: 'from-red-500 to-red-600',
      bg: 'bg-red-50',
    },
    {
      icon: Calendar,
      title: 'Schedule Agent',
      description: 'Manage meetings and calendars automatically. Find time slots, send reminders, handle cancellations, coordinate teams.',
      features: ['Meeting Sync', 'Time Finding', 'Reminders', 'Coordination'],
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Phone,
      title: 'Call Agent',
      description: 'Screen calls, take notes, handle voicemail, transcribe calls. Never miss important information or calls again.',
      features: ['Call Screening', 'Transcription', 'Note Taking', 'Voicemail Mgmt'],
      color: 'from-cyan-500 to-cyan-600',
      bg: 'bg-cyan-50',
    },
    {
      icon: Users,
      title: 'Support Agent',
      description: 'Handle support tickets 24/7. Resolve common issues instantly, escalate complex ones, track satisfaction. Happy customers guaranteed.',
      features: ['Ticket Handling', 'Issue Resolution', 'Escalation', 'Satisfaction Track'],
      color: 'from-yellow-500 to-yellow-600',
      bg: 'bg-yellow-50',
    },
    {
      icon: BarChart3,
      title: 'Analytics Agent',
      description: 'Turn data into insights. Generate reports, analyze trends, forecast metrics, visualize KPIs. Data-driven decisions made easy.',
      features: ['Report Generation', 'Trend Analysis', 'Forecasting', 'KPI Tracking'],
      color: 'from-indigo-500 to-indigo-600',
      bg: 'bg-indigo-50',
    },
    {
      icon: Shield,
      title: 'Security Agent',
      description: 'Monitor for threats, enforce policies, manage access, audit logs. Enterprise-grade security automation without the headache.',
      features: ['Threat Detection', 'Policy Enforcement', 'Access Control', 'Audit Logs'],
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
    },
    {
      icon: Zap,
      title: 'Workflow Agent',
      description: 'Automate business processes. Connect apps, trigger actions, manage approvals, streamline operations. Full automation control.',
      features: ['Process Automation', 'App Integration', 'Approvals', 'Error Handling'],
      color: 'from-pink-500 to-pink-600',
      bg: 'bg-pink-50',
    },
    {
      icon: FileText,
      title: 'Document Agent',
      description: 'Process documents at scale. Extract data, generate contracts, manage signatures, organize files. Document chaos solved.',
      features: ['Data Extraction', 'Contract Gen', 'Signatures', 'Organization'],
      color: 'from-teal-500 to-teal-600',
      bg: 'bg-teal-50',
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % agents.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + agents.length) % agents.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const agent = agents[currentIndex]
  const Icon = agent.icon

  return (
    <section id="agents" className="py-24 px-6 relative overflow-hidden">
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-navy-400/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-400/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

      <div className="max-w-4xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-900 to-blue-600 bg-clip-text text-transparent mb-4">
            10+ OpenClaw Agents
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Mix and match specialized agents for your business. Every agent is fully customizable and integrates with your existing tools.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className={`p-8 md:p-12 rounded-2xl border border-gray-100 ${agent.bg} backdrop-blur-sm`}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`inline-block p-4 rounded-xl bg-gradient-to-r ${agent.color}`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold text-navy-900 mb-2">{agent.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{agent.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {agent.features.map((feature, i) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="inline-block px-4 py-2 bg-white border border-gray-200 text-navy-700 font-medium rounded-lg text-sm"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="p-3 rounded-full bg-navy-600 text-white hover:bg-navy-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 items-center justify-center flex-1 mx-4">
              {agents.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  initial={false}
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1,
                    backgroundColor: index === currentIndex ? '#3d4fc8' : '#d0ddf0',
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-navy-600' : 'bg-navy-200'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="p-3 rounded-full bg-navy-600 text-white hover:bg-navy-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-sm text-gray-600 font-medium">
            {currentIndex + 1} / {agents.length}
          </div>
        </div>
      </div>
    </section>
  )
}
