import { z } from 'zod'
import { SubmitHandler } from 'react-hook-form'

export interface FormikError {
  formErrors: {
    username?: string
    email?: string
    password?: string
    // Add more fields as needed
  }
}

export interface FormPropType {
  form: (event: React.BaseSyntheticEvent) => void
  onSubmit: () => {}
  isLoading: boolean
}
