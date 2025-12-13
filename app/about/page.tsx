'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { Target, Eye, Heart, BookOpen, GraduationCap, Users } from 'lucide-react'

const coreValues = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Upholding moral and ethical principles in all our actions and decisions.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Striving for the highest standards in personal and professional development.',
  },
  {
    icon: Users,
    title: 'Service',
    description: 'Dedicated to serving the community and contributing to societal welfare.',
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'Continuous learning and growth through self-study and shared knowledge.',
  },
]

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Value Education Cell"
        subtitle="Fostering Holistic Development Through Timeless Values"
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The Value Education Cell (VEC) at Birla Institute of Technology, Mesra, Ranchi, is a 
              dedicated initiative aimed at nurturing holistic development among students. Established 
              with the vision of integrating value-based education into the academic framework, VEC 
              serves as a bridge between academic excellence and character development.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Through the <strong>Vivekananda Study Circle (VSC)</strong>, we provide a structured 
              platform for students to engage in self-reflection, spiritual growth, and community 
              service. Our activities are inspired by the teachings of Swami Vivekananda, emphasizing 
              the development of a strong character, leadership qualities, and a sense of social responsibility.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              At VEC, we believe that true education goes beyond textbooks and examinations. It encompasses 
              the development of the whole person—intellectual, emotional, physical, and spiritual—preparing 
              students to face life's challenges with wisdom, courage, and compassion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-900/50"
            >
              <Eye className="w-12 h-12 text-saffron-600 dark:text-saffron-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To create a generation of students who are not only academically excellent but also 
                morally upright, socially responsible, and spiritually aware, contributing meaningfully 
                to the betterment of society.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-900/50"
            >
              <Target className="w-12 h-12 text-saffron-600 dark:text-saffron-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To provide a comprehensive platform for value-based education through structured activities, 
                discussions, workshops, and community service, fostering holistic development and preparing 
                students to become leaders of tomorrow.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900 transition-shadow text-center"
              >
                <value.icon className="w-10 h-10 text-saffron-600 dark:text-saffron-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Relevance */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-10 h-10 text-saffron-600 dark:text-saffron-400 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">History & Relevance at BIT Mesra</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The Value Education Cell was established at BIT Mesra with the recognition that technical 
                education, while essential, must be complemented by value-based learning. In an era where 
                students face increasing pressures and challenges, VEC provides a sanctuary for reflection, 
                growth, and connection.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The initiative gained momentum with the formation of the Vivekananda Study Circle (VSC), 
                which has become the cornerstone of our activities. Since its inception, VEC has been 
                actively organizing regular sessions, workshops, and events that have touched the lives 
                of hundreds of students.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At BIT Mesra, VEC plays a crucial role in:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2 mt-4 ml-4">
                <li>Complementing technical education with moral and ethical values</li>
                <li>Providing stress relief and mental well-being support through yoga and meditation</li>
                <li>Fostering leadership skills through student-managed activities</li>
                <li>Creating a sense of community and belonging among students</li>
                <li>Preparing students to be responsible citizens and future leaders</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

