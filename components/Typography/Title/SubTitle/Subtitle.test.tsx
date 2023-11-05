import { render, screen } from '@testing-library/react'
import Subtitle from './Subtitle'

describe('render Subtitle', () => {
  it('render with default props', () => {
    render(<Subtitle>Default Text</Subtitle>)

    expect(screen.getByText('Default Text')).toBeInTheDocument()
    expect(screen.getByText('Default Text')).toHaveClass('text-black')
  })

  it('render with Custom props', () => {
    render(<Subtitle color="text-red-500">Custom Text</Subtitle>)

    expect(screen.getByText('Custom Text')).toBeInTheDocument()
    expect(screen.getByText('Custom Text')).toHaveClass('text-red-500')
  })
})
