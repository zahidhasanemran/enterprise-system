/**
 * Large Title component
 * @param children - text to show
 * @param color - tailwind color class
 *
 */

import React from 'react'

interface LargeTextProps {
  children: React.ReactNode
  color?: string
}

const LargeText = ({ children, color = 'text-black' }: LargeTextProps) => {
  return (
    <h1
      className={`font-jost ${color} font-bold text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl leading-[1.25] `}
    >
      {children}
    </h1>
  )
}

export default LargeText
