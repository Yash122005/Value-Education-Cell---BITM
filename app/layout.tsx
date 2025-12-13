import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Value Education Cell (VEC) | BIT Mesra, Ranchi',
  description: 'Official website of Value Education Cell (VEC) and Vivekananda Study Circle (VSC) at BIT Mesra, Ranchi. Promoting holistic youth development through Swami Vivekananda\'s ideals.',
  keywords: 'VEC, Value Education Cell, VSC, Vivekananda Study Circle, BIT Mesra, Ranchi, Value Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

