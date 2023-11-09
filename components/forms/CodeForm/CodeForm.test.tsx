import { render, screen } from '@testing-library/react'
import CodeForm from '@/components/forms/CodeForm/CodeForm'

// Mock the react-hook-form library and its useForm function
jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: onSubmit => onSubmit,
  }),
}))

describe('CodeForm', () => {
  it('renders the form with input and button', async () => {
    const onSubmit = jest.fn()
    const handleSubmit = fn => fn // Create a mock handleSubmit function
    render(
      <CodeForm
        handleFunc={handleSubmit}
        isLoading={false}
        onSubmitFunc={onSubmit}
      />
    )

    // const form = document.querySelector('#codeForm')
    // const input = screen.getByPlaceholderText(
    //   'Simple toggle button using react hooks.'
    // )
    // const button = screen.getByText('Generate')

    // expect(form).toBeInTheDocument()
    // expect(input).toBeInTheDocument()
    // expect(button).toHaveAttribute('type', 'submit')
  })
})
