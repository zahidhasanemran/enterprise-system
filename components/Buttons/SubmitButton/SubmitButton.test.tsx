import React from 'react'
import { render } from '@testing-library/react'
import SubmitButton from './SubmitButton'

describe('SubmitButton component', () => {
  it('renders button with correct text', () => {
    // Arrange
    const buttonText = 'Submit'

    // Act
    const { getByText } = render(
      <SubmitButton>
        <button>{buttonText}</button>
      </SubmitButton>
    )

    // Assert
    const buttonElement = getByText(buttonText)
    const buttonWrapper = buttonElement.parentElement

    // Check if the rendered element is a button
    expect(buttonElement.tagName).toBe('BUTTON')

    // Check if the button has the expected text
    expect(buttonElement.textContent).toBe(buttonText)

    // Check if the parent element has the expected class name
    expect(buttonWrapper).toHaveClass('button_wrapper')
  })
})
