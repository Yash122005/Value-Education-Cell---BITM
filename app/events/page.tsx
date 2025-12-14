'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import EventCard from '@/components/EventCard'
import { useState } from 'react'

const upcomingEvents = [
  {
    title: 'Yoga & Meditation Workshop',
    date: '25 Feb 2026',
    location: 'Sport Complex',
    description:
      'A comprehensive workshop on yoga asanas, pranayama, and meditation techniques for stress management and mental well-being.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
  },
  {
    title: 'Swami Vivekananda Jayanti Celebration',
    date: '12 Jan 2026',
    location: 'CAT HALL',
    description:
      'Annual celebration of Swami Vivekananda\'s birth anniversary with special sessions, discussions, and cultural programs.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
  },
]

// Past events stored as array with year as number property
// This structure allows dynamic year filtering and easy addition of new events
const pastEvents = [
  {
    year: 2025,
    events: [
      {
        title: 'Personality Development Workshop',
        date: '15 Jan 2025',
        location: 'Conference Hall',
        description:
          'Expert-led workshop focusing on building confidence, communication skills, and leadership qualities.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      },
      {
        title: 'Swadhya Varg Discussion',
        date: '10 Jan 2025',
        location: 'VEC Hall',
        description:
          'Group discussion on Swami Vivekananda\'s teachings and their relevance in modern times.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        title: 'National Youth Day Celebration',
        date: '12 Jan 2024',
        location: 'Main Auditorium',
        description:
          'Celebration of National Youth Day with various competitions, cultural programs, and inspirational talks.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      },
      {
        title: 'Mind Games Competition',
        date: '5 Dec 2024',
        location: 'VEC Hall',
        description:
          'Intellectual competition featuring puzzles, quizzes, and brain teasers to enhance cognitive abilities.',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800',
      },
      {
        title: 'Vedic Chanting Session',
        date: '20 Nov 2024',
        location: 'VEC Hall',
        description:
          'Special session on Vedic chanting and its significance in spiritual practice and mental peace.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      },
    ],
  },
]

export default function Events() {
  // Dynamically extract all years from event data structure (sorted descending)
  // This allows future years to automatically appear in filters when added to data
  const allYears = pastEvents.map((group) => group.year).sort((a, b) => b - a)
  
  // Default to latest year (2025) - dynamically determined from data structure
  // This ensures the most recent year is selected by default, even if it has no events yet
  const [selectedYear, setSelectedYear] = useState<number | 'all'>(allYears[0] || 'all')

  return (
    <div>
      <PageHeader
        title="Events"
        subtitle="Stay Updated with Our Activities and Programs"
      />

      {/* Upcoming Events */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Join us for these exciting upcoming activities</p>
          </motion.div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No upcoming events at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Past Events</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">A look back at our previous activities</p>
          </motion.div>

          {/* Year Filter - Dynamically generated from event data */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* "All" filter button */}
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedYear === 'all'
                  ? 'bg-saffron-600 dark:bg-saffron-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              All
            </button>
            {/* Year filter buttons - dynamically generated from all years in data structure */}
            {allYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedYear === year
                    ? 'bg-saffron-600 dark:bg-saffron-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Events by Year - Filtered based on selectedYear */}
          <div className="space-y-12">
            {pastEvents
              .filter((group) => {
                // Show all years if "all" is selected, otherwise filter by selected year
                if (selectedYear === 'all') return true
                return group.year === selectedYear
              })
              .map((group) => {
                // Skip years with no events
                if (group.events.length === 0) return null

                return (
                  <motion.div
                    key={group.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{group.year}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {group.events.map((event, index) => (
                        <EventCard key={index} {...event} index={index} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  )
}

