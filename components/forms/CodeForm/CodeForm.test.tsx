import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { useForm } from 'react-hook-form'
import CodeForm from '@/components/forms/CodeForm/CodeForm'

describe('CodeForm', () => {
  const TestComponent = () => {
    const result = useForm()
    const mockOnSubmit = jest.fn()
    return <CodeForm form={result} onSubmit={mockOnSubmit} isLoading={false} />
  }

  it('renders CodeForm component', () => {
    render(<TestComponent />)
    const Input = screen.getByPlaceholderText(
      'Simple toggle button using react hooks.'
    )
    expect(Input).toBeInTheDocument()
    expect(screen.getByText('Generate')).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', async () => {
    const mockOnSubmit = jest.fn()
    const TestComponent = () => {
      const result = useForm({
        defaultValues: {
          prompt: '',
        },
      })
      return (
        <CodeForm form={result} onSubmit={mockOnSubmit} isLoading={false} />
      )
    }
    render(<TestComponent />)

    const Input = screen.getByPlaceholderText(
      'Simple toggle button using react hooks.'
    )
    const submitButton = screen.getByText('Generate')

    userEvent.type(Input, 'Type Something')

    userEvent.click(submitButton)

    await waitFor(() => {
      expect(submitButton).toHaveAttribute('type', 'submit')
      expect(mockOnSubmit).toHaveBeenCalled()
    })
  })
})
