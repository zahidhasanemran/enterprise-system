/**
 * Subtitle  component
 * @param children - text to show
 * @param color - tailwind color class
 *
 */

import React from 'react'

interface SubtitleProps {
  children: React.ReactNode
  color?: string
}

const Subtitle = ({ children, color = 'text-black' }: SubtitleProps) => {
  return (
    <h2
      className={`${color} font-raleway font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl leading-[1.25] `}
    >
      {children}
    </h2>
  )
}

export default Subtitle
