import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/navbar'

const inter = Inter({
  subsets: ['latin'],
})

const meta: Metadata = {
  title: 'Posh Punk Digital Flea Market',
  description:
    'A space for digital artists, collectors, DIYers, and makers to sell their creations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn('relative h-full font-sans antialiased', inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">
            <main className="relative flex flex-col min-h-screen">
              <div className="flex-grow flex-1">{children}</div>
            </main>
          </div>
        </main>
      </body>
    </html>
  )
}
