import React from 'react'
import LargeText from './Large'
import { render } from '@testing-library/react'

//TODO: Check if the component renders the text.
//TODO: Check if the default color class is applied.
//TODO: Check if the font class is applied.

describe('LargeText component', () => {
  it('renders with default props', () => {
    const { getByText, container } = render(<LargeText>Lorem Ipsum</LargeText>)

    expect(getByText('Lorem Ipsum')).toBeInTheDocument()

    expect(container.querySelector('.text-black ')).toBeInTheDocument()
  })

  it('render with custom props', () => {
    const { container, getByText } = render(
      <LargeText color="text-red-500">Custom text</LargeText>
    )

    expect(getByText('Custom text')).toBeInTheDocument()

    expect(container.querySelector('.text-red-500')).toBeInTheDocument()
  })
})
