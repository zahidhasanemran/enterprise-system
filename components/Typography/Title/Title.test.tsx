import { render, screen } from '@testing-library/react'
import Title from './Title'

describe('render Title', () => {
  it('render with default props', () => {
    render(<Title>Default Text</Title>)

    expect(screen.getByText('Default Text')).toBeInTheDocument()
    expect(screen.getByText('Default Text')).toHaveClass('text-black')
  })

  it('render with Custom props', () => {
    render(<Title color="text-red-500">Custom Text</Title>)

    expect(screen.getByText('Custom Text')).toBeInTheDocument()
    expect(screen.getByText('Custom Text')).toHaveClass('text-red-500')
  })
})
