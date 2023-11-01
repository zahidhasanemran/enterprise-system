import { render, screen } from '@testing-library/react'
import Title from './Title'

describe('render Title', () => {
  it('render with default props', () => {
    render(<Title font="">Default Text</Title>)

    expect(screen.getByText('Default Text')).toBeInTheDocument()
    expect(screen.getByText('Default Text')).toHaveClass('text-black')
  })

  it('render with Custom props', () => {
    render(
      <Title color="text-red-500" font="font-banera">
        Custom Text
      </Title>
    )

    expect(screen.getByText('Custom Text')).toBeInTheDocument()
    expect(screen.getByText('Custom Text')).toHaveClass('text-red-500')
    expect(screen.getByText('Custom Text')).toHaveClass('font-banera')
  })
})
