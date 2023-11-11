import { render, screen, waitFor } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import userEvent from '@testing-library/user-event'
import ImageForm from './ImageForm'

describe('ImageForm', () => {
  const amountOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // Add more options as needed
  ]

  const resolutionOptions = [
    { label: 'Option A', value: 'optionA' },
    { label: 'Option B', value: 'optionB' },
    // Add more options as needed
  ]
  it('render form and button', async () => {
    const mockOnSubmit = jest.fn()
    const TestComponent = () => {
      const result = useForm()
      return (
        <ImageForm
          form={result}
          onSubmit={mockOnSubmit}
          isLoading={false}
          amountOptions={amountOptions}
          resolutionOptions={resolutionOptions}
        />
      )
    }
    render(<TestComponent />)
    // Fill in the form fields
    userEvent.type(
      screen.getByPlaceholderText('A picture of a horse in Swiss alps'),
      'Test Prompt'
    )
    // userEvent.selectOptions(
    //   screen.getByRole('combobox'),
    //   { name: 'amount' },
    //   'option1'
    // )
    // userEvent.selectOptions(
    //   screen.getByRole('combobox2', { name: 'Resolution' }),
    //   'optionA'
    // )

    // Submit the form
    userEvent.click(screen.getByText('Generate'))

    // Wait for form submission
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled()
      // Add assertions for form values
      // expect(mockOnSubmit).toHaveBeenCalledWith({
      //   prompt: 'Test Prompt',
      //   amount: 'option1',
      //   resolution: 'optionA',
      // })
    })
  })
})
// })
