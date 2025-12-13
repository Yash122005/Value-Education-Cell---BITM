'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { CheckCircle, Users, Target, Heart, BookOpen, Sparkles } from 'lucide-react'
import { useState } from 'react'

const benefits = [
  {
    icon: Users,
    title: 'Community & Networking',
    description: 'Connect with like-minded students and build lasting friendships.',
  },
  {
    icon: Target,
    title: 'Personal Growth',
    description: 'Develop leadership skills, confidence, and a well-rounded personality.',
  },
  {
    icon: Heart,
    title: 'Holistic Development',
    description: 'Balance academic excellence with spiritual and emotional well-being.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge & Wisdom',
    description: 'Learn from great personalities and apply timeless wisdom to modern life.',
  },
]

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    year: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', branch: '', year: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <PageHeader
        title="Join VEC / VSC"
        subtitle="Be Part of a Community Dedicated to Holistic Development"
      />

      {/* Why Join Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Join VEC / VSC?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Joining the Value Education Cell and Vivekananda Study Circle offers you a unique 
              opportunity to grow beyond academics. You'll be part of a community that values 
              character, leadership, and service while providing a supportive environment for 
              personal and spiritual development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900 transition-shadow"
              >
                <benefit.icon className="w-10 h-10 text-saffron-600 dark:text-saffron-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Students */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Benefits for Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Regular yoga and meditation sessions for stress relief',
                'Opportunities for public speaking and presentation skills',
                'Leadership roles and organizational experience',
                'Access to expert lectures and workshops',
                'Participation in competitions and events',
                'Personal mentorship and guidance',
                'Character building and value-based learning',
                'Networking with peers and alumni',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start space-x-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm dark:shadow-gray-900/50"
                >
                  <CheckCircle className="w-6 h-6 text-saffron-600 dark:text-saffron-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-saffron-50 dark:from-saffron-900/30 to-white dark:to-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/50 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Join Us Today</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-center">
                Fill out the form below to express your interest in joining VEC / VSC. We'll get 
                back to you with more information.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <Sparkles className="w-16 h-16 text-saffron-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We've received your information. Our team will contact you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                      placeholder="your.email@bitmesra.ac.in"
                    />
                  </div>

                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Branch *
                    </label>
                    <input
                      type="text"
                      id="branch"
                      name="branch"
                      required
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                      placeholder="e.g., Computer Science, Electronics, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Academic Year *
                    </label>
                    <select
                      id="year"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="M.Tech 1st Year">M.Tech 1st Year</option>
                      <option value="M.Tech 2nd Year">M.Tech 2nd Year</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-saffron-600 text-white rounded-lg font-semibold hover:bg-saffron-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

