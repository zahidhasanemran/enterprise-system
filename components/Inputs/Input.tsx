/**
 * Input component
 * @param type 'text' | 'email' | 'password'
 *
 */

import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  id: string
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, onChange, id } = props
  return (
    <input
      id={id}
      name={id}
      ref={ref}
      type={type}
      onChange={onChange}
      className="input-component "
    />
  )
})

export default Input
