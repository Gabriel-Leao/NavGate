import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NavGate',
  description: 'Criado por Gabriel Leão',
  icons: [{ type: 'link', rel: 'icon', url: '/logo.svg' }]
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <div className="bg-[#0e112c] pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
