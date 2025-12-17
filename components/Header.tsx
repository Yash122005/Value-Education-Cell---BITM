'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/vsc', label: 'VSC' },
  { href: '/activities', label: 'Activities' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/join', label: 'Join' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* VEC Logo - Left Side */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105 mr-10">
              <Image
                src="/images/vec-logo.png"
                alt="Value Education Cell, BIT Mesra logo"
                fill
                className="object-cover dark:brightness-110 rounded-full"
                priority
                sizes="(max-width: 768px) 48px, 56px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-saffron-600 dark:text-saffron-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-saffron-600 dark:hover:text-saffron-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron-600 dark:bg-saffron-500"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            {/* BIT Mesra Logo - Right Side (Desktop) */}
            <div className="flex items-center ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <div className="relative w-10 h-10 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/bit-mesra-logo.png"
                  alt="BIT Mesra official logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {/* BIT Mesra Logo - Mobile Menu */}
              <div className="flex justify-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="relative w-10 h-10 opacity-90">
                  <Image
                    src="/images/bit-mesra-logo.png"
                    alt="BIT Mesra official logo"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-saffron-50 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

