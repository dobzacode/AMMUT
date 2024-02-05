import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ammut',
  description: 'Techno music producer group from France',
  metadataBase: new URL('https://ammut.fr'),
  openGraph: {
    title: 'Ammut',
    description: 'Techno music producer group from France',
    images: 'url/opengraph-image.jpg'
  },
  twitter: {

    title: 'Ammut',
    description: 'Techno music producer group from France',
    images: 'url/twitter-image.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
