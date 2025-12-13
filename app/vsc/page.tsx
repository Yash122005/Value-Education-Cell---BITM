'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import {
  BookOpen,
  Heart,
  Users,
  Target,
  Award,
  Calendar,
  Brain,
  Mic,
  Presentation,
  Sparkles,
} from 'lucide-react'

export default function VSCPage() {
  return (
    <div>
      <PageHeader
        title="Vivekananda Study Circle (VSC)"
        subtitle="Student-Driven Initiative for Holistic Youth Development"
      />

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-900/50 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About VSC</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The <strong>Vivekananda Study Circle (VSC)</strong> is also known as the{' '}
                <strong>Value Education Cell (VEC)</strong>. It is a student-driven initiative at 
                BIT Mesra, Ranchi, guided by the timeless ideals and teachings of Swami Vivekananda.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our primary focus is on <strong>holistic youth development</strong>, encompassing 
                intellectual growth, character building, leadership skills, and spiritual awareness. 
                Through structured activities and experiential learning, we aim to shape well-rounded 
                individuals who can contribute meaningfully to society.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                VSC provides a nurturing environment where students can explore their potential, 
                engage in meaningful discussions, practice yoga and meditation, and develop essential 
                life skills under the guidance of experienced faculty and senior students.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities & Focus */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Activities & Focus</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive programs designed for holistic development
            </p>
          </motion.div>

          {/* Core Modules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-saffron-600 dark:text-saffron-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Core Modules</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Presentation,
                    title: 'Life Sketch & Presentations',
                    description:
                      'Students study and present the life stories and teachings of great personalities, learning valuable lessons from their journeys.',
                  },
                  {
                    icon: Heart,
                    title: 'Yoga Satra',
                    description:
                      'Regular yoga and meditation sessions focusing on physical fitness, mental clarity, and spiritual well-being.',
                  },
                  {
                    icon: Users,
                    title: 'Swadhya Varg',
                    description:
                      'Self-study sessions combined with group discussions on spiritual texts, philosophical concepts, and their practical applications.',
                  },
                  {
                    icon: Brain,
                    title: 'Meditation Sessions',
                    description:
                      'Guided meditation practices to enhance concentration, reduce stress, and promote inner peace and mindfulness.',
                  },
                ].map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 rounded-lg border border-saffron-100 dark:border-saffron-800/50"
                  >
                    <module.icon className="w-8 h-8 text-saffron-600 dark:text-saffron-400 mb-3" />
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{module.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{module.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Development Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-saffron-600 dark:text-saffron-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Development Sessions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Expert-led Lectures',
                    description:
                      'Invited speakers and experts conduct sessions on various topics including philosophy, leadership, and personal growth.',
                  },
                  {
                    title: 'Personality Development',
                    description:
                      'Workshops and activities focused on building confidence, communication skills, and a positive attitude.',
                  },
                  {
                    title: 'Public Speaking',
                    description:
                      'Regular practice sessions and competitions to enhance oratory skills and overcome stage fear.',
                  },
                ].map((session, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 rounded-lg"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{session.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{session.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Events & Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-saffron-600 dark:text-saffron-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Events & Competitions</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Mind Games',
                  'Vedic Chanting',
                  'Group Discussions',
                  'Seminars',
                  'Quizzes',
                  'National & College-level Events',
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-saffron-50 dark:bg-saffron-900/30 rounded-lg border border-saffron-200 dark:border-saffron-800/50 text-center"
                  >
                    <p className="font-medium text-gray-900 dark:text-white">{event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Leadership Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-saffron-600 dark:text-saffron-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Leadership Development</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Student-Managed Activities
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    VSC activities are primarily managed by students, providing them with hands-on 
                    experience in planning, organizing, and executing events. This approach fosters 
                    a sense of ownership and responsibility.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Managerial & Organizational Skills
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Through active participation in various roles, students develop essential 
                    managerial and organizational skills that are invaluable in their professional 
                    and personal lives.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Organization */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Leadership & Organization
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dedicated Core Team
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Each academic year, VSC forms a dedicated core team of enthusiastic students who 
                  take responsibility for organizing and managing various activities. This team 
                  structure ensures continuity and fresh perspectives each year.
                </p>
              </div>

              <div className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Faculty Co-Convener
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  VSC operates under the guidance of a faculty co-convener who is officially 
                  designated to oversee and support the activities. The faculty structure has been 
                  active since <strong>January 2023</strong>, providing mentorship and ensuring 
                  alignment with institutional values.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The faculty co-convener plays a crucial role in:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2 ml-4">
                  <li>Providing guidance and mentorship to the student team</li>
                  <li>Ensuring activities align with VEC's mission and values</li>
                  <li>Facilitating connections with external resources and experts</li>
                  <li>Maintaining continuity and institutional memory</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Collaborative Structure
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The organization operates on a collaborative model where students take the lead in 
                  planning and execution, while faculty provides support and guidance. This structure 
                  empowers students while ensuring quality and alignment with institutional goals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-saffron-600 to-saffron-700 dark:from-saffron-700 dark:to-saffron-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Join Vivekananda Study Circle</h2>
            <p className="text-xl text-saffron-100 mb-8 max-w-2xl mx-auto">
              Be part of a community dedicated to holistic development and making a positive impact.
            </p>
            <a
              href="/join"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-100 text-saffron-600 dark:text-saffron-700 rounded-lg font-semibold hover:bg-saffron-50 dark:hover:bg-gray-200 transition-colors shadow-lg"
            >
              Join VSC Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

