/**
 * Title  component
 * @param children - text to show
 * @param color - tailwind color class
 *
 */

import React from 'react'

interface TitleProps {
  children: React.ReactNode
  color?: string
}

const Title = ({ children, color = 'text-black' }: TitleProps) => {
  return (
    <h3
      className={`${color} font-jost font-bold text-lg md:text-xl xl:text-2xl 2xl:text-exl leading-[1.25] `}
    >
      {children}
    </h3>
  )
}

export default Title
