'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import {
  BookOpen,
  Heart,
  Users,
  Target,
  Calendar,
  Brain,
  Presentation,
  Mic,
  Sparkles,
} from 'lucide-react'

const coreModules = [
  {
    icon: Presentation,
    title: 'Life Sketch & Presentations',
    description:
      'Students research and present the life stories of great personalities, learning valuable lessons from their journeys, struggles, and achievements. This activity enhances research skills, public speaking, and provides inspiration.',
    benefits: [
      'Improves research and analytical skills',
      'Enhances public speaking abilities',
      'Provides role models and inspiration',
      'Develops presentation skills',
    ],
  },
  {
    icon: Heart,
    title: 'Yoga Satra',
    description:
      'Regular yoga and meditation sessions focusing on physical fitness, mental clarity, and spiritual well-being. These sessions help students manage stress, improve concentration, and maintain overall health.',
    benefits: [
      'Physical fitness and flexibility',
      'Stress reduction and mental clarity',
      'Improved concentration and focus',
      'Enhanced overall well-being',
    ],
  },
  {
    icon: Users,
    title: 'Swadhya Varg (Self-Study Sessions)',
    description:
      'Structured self-study sessions combined with group discussions on spiritual texts, philosophical concepts, and their practical applications in daily life. Fosters critical thinking and deeper understanding.',
    benefits: [
      'Deepens understanding of spiritual concepts',
      'Encourages critical thinking',
      'Promotes group learning and discussion',
      'Applies philosophy to practical life',
    ],
  },
  {
    icon: Brain,
    title: 'Meditation Sessions',
    description:
      'Guided meditation practices to enhance concentration, reduce stress, and promote inner peace and mindfulness. Regular practice helps students develop mental discipline and emotional stability.',
    benefits: [
      'Enhanced concentration and focus',
      'Stress and anxiety reduction',
      'Emotional stability and balance',
      'Improved mental discipline',
    ],
  },
]

const developmentSessions = [
  {
    icon: Mic,
    title: 'Expert-led Lectures',
    description:
      'Invited speakers and experts conduct sessions on various topics including philosophy, leadership, personal growth, and contemporary issues. These sessions provide diverse perspectives and insights.',
  },
  {
    icon: Target,
    title: 'Personality Development',
    description:
      'Workshops and activities focused on building confidence, communication skills, positive attitude, and interpersonal skills. These sessions help students develop a well-rounded personality.',
  },
  {
    icon: Presentation,
    title: 'Public Speaking',
    description:
      'Regular practice sessions and competitions to enhance oratory skills, overcome stage fear, and develop effective communication. Students learn to articulate their thoughts clearly and confidently.',
  },
]

export default function Activities() {
  return (
    <div>
      <PageHeader
        title="Our Activities"
        subtitle="Comprehensive Programs for Holistic Development"
      />

      {/* Core Modules */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Modules</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Regular activities that form the foundation of our value education program
            </p>
          </motion.div>

          <div className="space-y-8">
            {coreModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-8 hover:shadow-xl dark:hover:shadow-gray-900 transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <module.icon className="w-12 h-12 text-saffron-600 dark:text-saffron-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{module.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{module.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Benefits:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {module.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <Sparkles className="w-4 h-4 text-saffron-600 dark:text-saffron-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Sessions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Development Sessions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized workshops and sessions for skill enhancement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developmentSessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-6 hover:shadow-xl dark:hover:shadow-gray-900 transition-shadow"
              >
                <session.icon className="w-10 h-10 text-saffron-600 dark:text-saffron-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{session.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{session.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly & Monthly Activities */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Weekly & Monthly Activities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Regular schedule of activities throughout the academic year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-8"
            >
              <Calendar className="w-10 h-10 text-saffron-600 dark:text-saffron-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Weekly Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-saffron-600 dark:text-saffron-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Yoga Satra sessions</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-saffron-600 dark:text-saffron-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Swadhya Varg discussions</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-saffron-600 dark:text-saffron-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Meditation practice</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-saffron-600 dark:text-saffron-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Group discussions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-8"
            >
              <Calendar className="w-10 h-10 text-saffron-600 dark:text-saffron-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Monthly Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-saffron-600 dark:text-saffron-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Expert lectures and workshops</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-saffron-600 dark:text-saffron-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Life sketch presentations</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-saffron-600 dark:text-saffron-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Competitions and quizzes</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-saffron-600 dark:text-saffron-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Special events and celebrations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

