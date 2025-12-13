import Link from 'next/link'
import { Mail, MapPin, Facebook, Instagram, Linkedin, GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-6 h-6 text-saffron-500" />
              <h3 className="text-lg font-bold text-white">VEC BIT Mesra</h3>
            </div>
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Value Education Cell, BIT Mesra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

