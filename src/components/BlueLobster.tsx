'use client'

export default function BlueLobster() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="100" cy="120" rx="45" ry="55" fill="#5677d4" />
      
      {/* Head */}
      <circle cx="100" cy="55" r="35" fill="#3d4fc8" />
      
      {/* Eyes */}
      <circle cx="85" cy="45" r="8" fill="#ffffff" />
      <circle cx="115" cy="45" r="8" fill="#ffffff" />
      <circle cx="86" cy="46" r="4" fill="#000000" />
      <circle cx="116" cy="46" r="4" fill="#000000" />
      
      {/* Antennae */}
      <path d="M 90 20 Q 80 5 75 -5" stroke="#3d4fc8" strokeWidth="3" strokeLinecap="round" />
      <path d="M 110 20 Q 120 5 125 -5" stroke="#3d4fc8" strokeWidth="3" strokeLinecap="round" />
      
      {/* Left Claw */}
      <g transform="translate(60, 90)">
        <path d="M 0 0 Q -30 -10 -40 -20" stroke="#5677d4" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M -38 -22 L -50 -35" stroke="#5677d4" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M -38 -22 L -45 -15" stroke="#5677d4" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
      
      {/* Right Claw */}
      <g transform="translate(140, 90)">
        <path d="M 0 0 Q 30 -10 40 -20" stroke="#5677d4" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M 38 -22 L 50 -35" stroke="#5677d4" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M 38 -22 L 45 -15" stroke="#5677d4" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
      
      {/* Left Leg */}
      <path d="M 75 165 L 60 185" stroke="#5677d4" strokeWidth="6" strokeLinecap="round" />
      
      {/* Right Leg */}
      <path d="M 125 165 L 140 185" stroke="#5677d4" strokeWidth="6" strokeLinecap="round" />
      
      {/* Tail */}
      <ellipse cx="100" cy="180" rx="25" ry="15" fill="#3d4fc8" />
    </svg>
  )
}
