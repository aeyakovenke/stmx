import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'STMX - OpenClaw Agent Platform',
  description: 'Deploy AI agents for any business type. Coding, Design, Assistant agents ready to work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
