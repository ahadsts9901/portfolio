import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Provider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Muhammad Ahad | Full Stack Developer & Tech Leader',
  description: 'Full-stack developer with 3+ years of experience. Built 8+ products, trained 50+ students. Expert in MERN, Next.js, DevOps, and startup leadership.',
  keywords: ['Full Stack Developer', 'Next.js', 'React', 'Node.js', 'DevOps', 'Pakistan'],
  creator: 'Muhammad Ahad',
  metadataBase: new URL('https://muhammadahad.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadahad.dev',
    title: 'Muhammad Ahad | Full Stack Developer',
    description: 'Full-stack developer with 3+ years of experience building scalable web applications',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Ahad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Ahad | Full Stack Developer',
    description: 'Building scalable web applications with modern technology',
    creator: '@ahadsts9901',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="font-sans antialiased">
        <Provider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Provider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
