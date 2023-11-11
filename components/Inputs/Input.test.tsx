import { fireEvent, render, RenderResult } from '@testing-library/react'
import Input from './Input'
import React from 'react'

describe('Input Component', () => {
  it('render input with text type', () => {
    const { container }: RenderResult = render(<Input id="" type="text" />)
    const inputElement = container.querySelector('input')

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('render input with email type', () => {
    const { container } = render(<Input id="" type="email" />)
    const inputElement = container.querySelector('input')

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'email')
  })

  it('forwards ref properly', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input id="" type="email" ref={ref} />)
    const inputElement = ref.current

    expect(inputElement).not.toBeNull()
    expect(inputElement).toHaveAttribute('type', 'email')
  })

  it('handle onchange event', () => {
    const ref = React.createRef<HTMLInputElement>()
    const handleChange = jest.fn() // Mock the onChange handler
    const { container } = render(
      <Input id="" type="text" ref={ref} onChange={handleChange} />
    )
    const inputElement: HTMLInputElement | null =
      container.querySelector('input')
    if (inputElement) {
      fireEvent.change(inputElement, { target: { value: 'New value' } })

      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(expect.anything())
    } else {
      return
    }
  })
})
