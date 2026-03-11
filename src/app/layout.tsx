import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'STMX - AI Agents for Every Team',
  description: 'Deploy AI agents built on OpenClaw. Automate coding, design, and customer support. Start in minutes.',
  icons: {
    icon: [
      { url: '/logos/stmx-logo-main.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/logos/stmx-logo-main.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/stmx-logo-main.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logos/stmx-logo-main.png" />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
