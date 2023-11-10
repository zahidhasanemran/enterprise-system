import { render, screen, waitFor } from '@testing-library/react'
import ConversationForm from './ConversationForm'
import { useForm } from 'react-hook-form'
import userEvent from '@testing-library/user-event'

describe('ConversationForm', () => {
  it('render form and button', async () => {
    const mockOnSubmit = jest.fn()
    const TestComponent = () => {
      const result = useForm()
      return (
        <ConversationForm
          form={result}
          onSubmit={mockOnSubmit}
          isLoading={false}
        />
      )
    }
    render(<TestComponent />)
    const Input = screen.getByPlaceholderText(
      'How do I calculate the radius of a circle?'
    )
    const Button = screen.getByText('Generate')
    userEvent.type(Input, 'Hi there')
    userEvent.click(Button)

    expect(Button).toHaveAttribute('type', 'submit')

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled()
    })
  })
})
