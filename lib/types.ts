import { formSchema } from '@/app/(dashboard)/(routes)/code/useCode'
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
  handleFunc: (event: React.BaseSyntheticEvent) => void
  isLoading: boolean
  onSubmitFunc: SubmitHandler<z.infer<typeof formSchema>> // Uses the SubmitHandler type
}
