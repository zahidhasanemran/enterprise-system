/**
 * SubmitButton
 * @param
 *
 */
import React from 'react'

interface SubmitBtnProps {
  children: React.ReactNode
}

const SubmitButton = ({ children }: SubmitBtnProps) => {
  return <div className="button_wrapper">{children}</div>
}

export default SubmitButton
