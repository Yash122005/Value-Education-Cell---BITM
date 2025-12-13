'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import TeamCard from '@/components/TeamCard'
import { useState } from 'react'

const facultyCoordinator = {
  name: 'Dr. [Faculty Name]',
  role: 'Faculty Co-Convener',
  designation: 'Professor, Department of [Department]',
  image: undefined,
}

const coreTeam2024 = [
  {
    name: 'Anish Anand',
    role: 'President',
    branch: 'EEE',
    year: '2024',
  },
  {
    name: 'Priyesh Jaiswal',
    role: 'Vice-President',
    branch: 'CSE',
    year: '2024',
  },
  {
    name: 'Devendra Pandey',
    role: 'Gen. Secretary',
    branch: 'ECE',
    year: '2024',
  },
  {
    name: 'Sumit Kashyap',
    role: 'Treasurer',
    branch: 'PIE',
    year: '2024',
  },
]

const eventsTeam = []

const contentMediaTeam = [
  {
    name: 'Atul Arya',
    role: 'Content Head',
    branch: 'ECE',
    year: '2024',
  },
  {
    name: 'Annika Singh',
    role: 'Content Writer',
    branch: 'ECE',
    year: '2024',
  },
  {
    name: 'Gourav Kumar Ghosh',
    role: 'Content Writer',
    branch: 'ECE',
    year: '2024',
  },
]

const designTeam = [
  {
    name: 'Tanya Pahan',
    role: 'Design Coordinator',
    branch: 'EEE',
    year: '2024',
  },
  {
    name: 'Abhay M',
    role: 'Design Co-coordinator',
    branch: 'Physics',
    year: '2024',
  },
  {
    name: 'Shuvam Kundan',
    role: 'Design Co-Coordinator',
    branch: 'Physics',
    year: '2024',
  },
]

const webDesignTeam = [
  {
    name: 'Amish Kumar Dubey',
    role: 'Web Design Coordinator',
    branch: 'ECE',
    year: '2024',
  },
  {
    name: 'Yash Gupta',
    role: 'Web Design Co-Coordinator',
    branch: 'ECE',
    year: '2024',
  },
]

const outreachTeam = [
  {
    name: 'Vivan Saxena',
    role: 'Outreach Coordinator',
    branch: 'Civil',
    year: '2024',
  },
  {
    name: 'Raushan Kumar',
    role: 'Outreach Co-Coordinator',
    branch: 'ECE',
    year: '2024',
  },
]

const allTeams = {
  '2024': {
    core: coreTeam2024,
    events: eventsTeam,
    content: contentMediaTeam,
    design: designTeam,
    webDesign: webDesignTeam,
    outreach: outreachTeam,
  },
  '2023': {
    core: [
      {
        name: 'Alumni Name 1',
        role: 'Coordinator',
        branch: 'Computer Science',
        year: '2023',
      },
      {
        name: 'Alumni Name 2',
        role: 'Vice Coordinator',
        branch: 'Electronics',
        year: '2023',
      },
    ],
    events: [],
    content: [],
    design: [],
    webDesign: [],
    outreach: [],
  },
}

export default function Team() {
  const [selectedYear, setSelectedYear] = useState<string>('2024')

  const currentTeam = allTeams[selectedYear as keyof typeof allTeams] || allTeams['2024']

  return (
    <div>
      <PageHeader
        title="Our Team"
        subtitle="Dedicated Individuals Working for Holistic Development"
      />

      {/* Faculty Coordinator */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Faculty Coordinator</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Guiding and supporting our initiatives</p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <TeamCard {...facultyCoordinator} index={0} />
            <p className="text-center text-gray-600 dark:text-gray-400 mt-4 text-sm">
              Faculty structure active since January 2023
            </p>
          </div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(allTeams)
              .sort()
              .reverse()
              .map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    selectedYear === year
                      ? 'bg-saffron-600 dark:bg-saffron-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  Academic Year {year}
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Leadership team for Academic Year {selectedYear}</p>
          </motion.div>

          {currentTeam.core.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentTeam.core.map((member, index) => (
                <TeamCard key={index} {...member} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">Core team information for {selectedYear} will be updated soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Events Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Events Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Organizing and managing our events</p>
          </motion.div>

          {currentTeam.events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTeam.events.map((member, index) => (
                <TeamCard key={index} {...member} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">Events team information for {selectedYear} will be updated soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Content & Media Team */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Content & Media Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Creating and managing our digital presence</p>
          </motion.div>

          {currentTeam.content.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTeam.content.map((member, index) => (
                <TeamCard key={index} {...member} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                Content & Media team information for {selectedYear} will be updated soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Design Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Design Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Creating visual designs and graphics</p>
          </motion.div>

          {currentTeam.design && currentTeam.design.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTeam.design.map((member, index) => (
                <TeamCard key={index} {...member} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                Design team information for {selectedYear} will be updated soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Web Design Team */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Web Design Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Designing and maintaining our web presence</p>
          </motion.div>

          {currentTeam.webDesign && currentTeam.webDesign.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTeam.webDesign.map((member, index) => (
                <TeamCard key={index} {...member} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                Web Design team information for {selectedYear} will be updated soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Outreach Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Outreach Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Connecting with the community and expanding our reach</p>
          </motion.div>

          {currentTeam.outreach && currentTeam.outreach.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTeam.outreach.map((member, index) => (
                <TeamCard key={index} {...member} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                Outreach team information for {selectedYear} will be updated soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Volunteers</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Dedicated volunteers who make our activities possible
            </p>
          </motion.div>

          <div className="text-center py-12">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Our volunteers are the backbone of VEC/VSC. They actively participate in organizing 
              events, managing activities, and supporting the community.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              If you're interested in volunteering, please visit our{' '}
              <a href="/join" className="text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-500 font-semibold">
                Join page
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

