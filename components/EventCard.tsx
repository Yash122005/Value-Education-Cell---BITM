import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface EventCardProps {
  title: string
  date: string
  location?: string
  description: string
  image?: string
  link?: string
  index?: number
}

export default function EventCard({
  title,
  date,
  location,
  description,
  image,
  link,
  index = 0,
}: EventCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900 transition-all duration-300 group"
    >
      <div className="relative h-48 bg-gradient-to-br from-saffron-100 dark:from-saffron-900/30 to-saffron-200 dark:to-saffron-800/30">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Calendar className="w-16 h-16 text-saffron-400 dark:text-saffron-500" />
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <Calendar className="w-4 h-4 mr-2 text-saffron-600 dark:text-saffron-400" />
          <span>{date}</span>
        </div>
        {location && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
            <MapPin className="w-4 h-4 mr-2 text-saffron-600 dark:text-saffron-400" />
            <span>{location}</span>
          </div>
        )}
        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{description}</p>
      </div>
    </motion.div>
  )

  if (link) {
    return <Link href={link}>{content}</Link>
  }

  return content
}

