'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Calendar, Target, Heart } from 'lucide-react'
import EventCard from '@/components/EventCard'

const recentEvents = [
  {
    title: 'Yoga Satra Session',
    date: '21 Jun 2025',
    location: 'Sport Complex',
    description: 'Weekly yoga and meditation session focusing on physical and mental well-being.',
    image: '/images/IYD.jpg',
  },
  {
    title: 'Swadhya Varg Discussion',
    date: '10 Jan 2024',
    location: 'Seminar Hall',
    description: 'Group discussion on Swami Vivekananda\'s teachings and their relevance today.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
  },
  {
    title: 'Personality Development Workshop',
    date: '5 Jan 2024',
    location: 'CAT HALL',
    description: 'Expert-led workshop on personality development and public speaking skills.',
    image: '/images/Group.jpg',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-saffron-50 dark:from-saffron-900/20 via-white dark:via-gray-900 to-saffron-50 dark:to-saffron-900/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Value Education Cell
              </h1>
              <p className="text-2xl md:text-3xl text-saffron-600 dark:text-saffron-400 font-semibold mb-8">
                BIT Mesra, Ranchi
              </p>
            </motion.div>
            
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-8 border-l-4 border-saffron-500 dark:border-saffron-400 pl-6"
            >
              "Arise, awake, and stop not until the goal is reached."
              <footer className="text-lg text-gray-600 dark:text-gray-400 mt-2 not-italic">
                — Swami Vivekananda
              </footer>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-8 py-3 bg-saffron-600 text-white rounded-lg font-semibold hover:bg-saffron-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Join VEC / VSC
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-saffron-600 border-2 border-saffron-600 rounded-lg font-semibold hover:bg-saffron-50 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Value Education Cell</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The Value Education Cell (VEC) at BIT Mesra is dedicated to fostering holistic development 
              among students through the timeless teachings of Swami Vivekananda. We believe in nurturing 
              not just academic excellence, but also character, leadership, and spiritual growth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our initiatives, particularly the <strong>Vivekananda Study Circle (VSC)</strong>, provide 
              a platform for students to engage in self-study, group discussions, yoga, meditation, and 
              various development activities that shape well-rounded individuals ready to contribute 
              meaningfully to society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VSC Highlight Section */}
      <section className="py-16 bg-gradient-to-br from-saffron-50 dark:from-saffron-900/20 to-white dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Vivekananda Study Circle (VSC)
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                The <strong>Vivekananda Study Circle (VSC)</strong>, also known as Value Education Cell (VEC), 
                is a student-driven initiative at BIT Mesra guided by Swami Vivekananda's ideals. Our focus 
                is on holistic youth development through structured activities, discussions, and experiential learning.
              </p>
              <Link
                href="/vsc"
                className="inline-flex items-center text-saffron-600 font-semibold hover:text-saffron-700 transition-colors"
              >
                Learn more about VSC
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Activities Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Activities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our diverse range of activities promotes holistic development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Life Sketch & Presentations',
                description: 'Study and present the life and teachings of great personalities.',
              },
              {
                icon: Heart,
                title: 'Yoga Satra',
                description: 'Regular yoga and meditation sessions for physical and mental well-being.',
              },
              {
                icon: Users,
                title: 'Swadhya Varg',
                description: 'Self-study and group discussions on spiritual and philosophical topics.',
              },
              {
                icon: Target,
                title: 'Development Sessions',
                description: 'Expert-led workshops on personality development and public speaking.',
              },
              {
                icon: Calendar,
                title: 'Events & Competitions',
                description: 'Mind games, quizzes, seminars, and national-level competitions.',
              },
              {
                icon: Users,
                title: 'Leadership Development',
                description: 'Student-managed activities fostering organizational and leadership skills.',
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900 transition-shadow"
              >
                <activity.icon className="w-12 h-12 text-saffron-600 dark:text-saffron-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{activity.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/activities"
              className="inline-flex items-center px-6 py-3 bg-saffron-600 text-white rounded-lg font-semibold hover:bg-saffron-700 transition-colors"
            >
              View All Activities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent Events Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Recent Events</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Stay updated with our latest activities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <EventCard key={index} {...event} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/events"
              className="inline-flex items-center px-6 py-3 bg-saffron-600 text-white rounded-lg font-semibold hover:bg-saffron-700 transition-colors"
            >
              View All Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-saffron-600 to-saffron-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Join VEC / VSC Today</h2>
            <p className="text-xl text-saffron-100 mb-8 max-w-2xl mx-auto">
              Be part of a community dedicated to holistic development and making a positive impact.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center px-8 py-4 bg-white text-saffron-600 rounded-lg font-semibold hover:bg-saffron-50 transition-colors shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

