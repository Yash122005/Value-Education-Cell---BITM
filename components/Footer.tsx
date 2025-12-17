import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">VEC BIT Mesra</h3>
            <p className="text-sm text-gray-400">
              Value Education Cell (VEC) and Vivekananda Study Circle (VSC) at BIT Mesra, Ranchi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-saffron-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/vsc" className="hover:text-saffron-400 transition-colors">
                  Vivekananda Study Circle
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-saffron-400 transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-saffron-400 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team" className="hover:text-saffron-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-saffron-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-saffron-400 transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-saffron-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-saffron-400 flex-shrink-0" />
                <a
                  href="mailto:vec@bitmesra.ac.in"
                  className="hover:text-saffron-400 transition-colors"
                >
                  vec@bitmesra.ac.in
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-saffron-400 flex-shrink-0" />
                <span>
                  BIT Mesra, Ranchi<br />
                  Jharkhand, India
                </span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://in.linkedin.com/company/value-education-cell-bit-mesra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-saffron-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://in.linkedin.com/company/value-education-cell-bit-mesra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-saffron-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Logos and Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logos Side by Side */}
            <div className="flex items-center justify-center gap-6 md:gap-8">
              {/* VEC Logo */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/vec-logo.png"
                  alt="Value Education Cell, BIT Mesra logo"
                  fill
                  className="object-contain brightness-110 rounded-full"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </div>
              
              {/* Divider */}
              <div className="h-12 md:h-16 w-px bg-gray-700"></div>
              
              {/* BIT Mesra Logo */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-105 opacity-90 hover:opacity-100">
                <Image
                  src="/images/bit-mesra-logo.png"
                  alt="BIT Mesra official logo"
                  fill
                  className="object-contain rounded-full brightness-110 "
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </div>
            </div>
            
            {/* Copyright Text */}
            <div className="text-center md:text-right text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Value Education Cell, BIT Mesra</p>
              <p className="mt-1">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

