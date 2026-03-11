'use client'

export default function BackgroundGlow() {
  return (
    <>
      {/* Top-left glow */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-gradient-to-br from-navy-500/20 via-blue-400/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />

      {/* Bottom-right glow */}
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-navy-600/20 via-blue-500/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />

      {/* Center subtle glow */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/5 via-navy-400/5 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
    </>
  )
}
