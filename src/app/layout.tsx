import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "It's Shad-CN",
  description:
    "This is a fan page to clarify the confusion arround @shadcn's name, a lot of people think his name is shad-CDN as in Content Delivery Network when in fact his actual name is Shad-CN (without the D)",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
