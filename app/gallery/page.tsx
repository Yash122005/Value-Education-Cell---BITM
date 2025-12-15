'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'

// Placeholder images - replace with actual event images
const galleryImages = [
  {
    id: 1,
    src: '/images/IYD.jpg',
    alt: 'Yoga Session',
    category: 'Yoga Satra',
  },
  {
    id: 2,
    src: '/images/NYD.jpg',
    alt: 'Group Discussion',
    category: 'Swadhya Varg',
  },
  {
    id: 3,
    src: '/images/Group.jpg',
    alt: 'Workshop',
    category: 'Workshop',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    alt: 'Event Celebration',
    category: 'Event',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    alt: 'Meditation Session',
    category: 'Meditation',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800',
    alt: 'Competition',
    category: 'Competition',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    alt: 'Lecture',
    category: 'Lecture',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    alt: 'Team Meeting',
    category: 'Team',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?w=800',
    alt: 'Cultural Program',
    category: 'Cultural',
  },
]

const categories = ['All', 'Yoga Satra', 'Swadhya Varg', 'Workshop', 'Event', 'Meditation', 'Competition', 'Lecture', 'Team', 'Cultural']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="Capturing Moments from Our Activities and Events"
      />

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-saffron-600 dark:bg-saffron-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-md dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900 transition-shadow group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-medium">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

