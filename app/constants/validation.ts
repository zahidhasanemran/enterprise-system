import * as Yup from 'yup'
import { z } from 'zod'

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter your password'),

  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
})

export const LoginFields = {
  email: '',
  password: '',
}

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 5 characters long')
    .required('Please enter your username'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter your password'),

  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
})

export const RegisterFields = {
  username: '',
  email: '',
  password: '',
}
