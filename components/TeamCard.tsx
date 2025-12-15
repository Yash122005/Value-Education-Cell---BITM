import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Image from 'next/image'

interface TeamCardProps {
  name: string
  role: string
  branch?: string
  year?: string
  image?: string
  index?: number
}

export default function TeamCard({ name, role, branch, year, image, index = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900 transition-shadow"
    >
      <div className="relative h-64 bg-gradient-to-br from-saffron-100 dark:from-saffron-900/30 to-saffron-200 dark:to-saffron-800/30 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-fill"
          />
        ) : (
          <User className="w-24 h-24 text-saffron-400 dark:text-saffron-500" />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{name}</h3>
        <p className="text-saffron-600 dark:text-saffron-400 font-medium text-sm mt-1">{role}</p>
        {branch && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{branch}</p>
        )}
        {year && (
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Batch: {year}</p>
        )}
      </div>
    </motion.div>
  )
}

