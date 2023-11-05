'use client'

import SubmitButton from '@/components/Buttons/SubmitButton/SubmitButton'
import Input from '@/components/Inputs/Input'
import Title from '@/components/Typography/Title/Title'
import { LoginFields, LoginSchema } from '@/constants/validation'
import { useFormik } from 'formik'

const Login = () => {
  const formik = useFormik({
    initialValues: LoginFields,
    validationSchema: LoginSchema,
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
    <div className="bg-slate-200 h-screen ">
      <div className="container mx-auto h-full">
        <div className="flex justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="w-[500px] mt-24 max-w-full rounded-lg bg-white py-12 px-8 "
          >
            <Title>Login to your account</Title>
            {/*
             * Email
             */}
            <div className="mt-12">
              <label htmlFor="email" className="mb-2 text-lg block">
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            {/*
             * Password
             */}
            <div className="mt-5 mb-8">
              <label htmlFor="password" className="mb-2 text-lg block">
                Password
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
            {/*
             * Submit Button
             */}
            <div className="mt-5 mb-8">
              <SubmitButton>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={formik.isSubmitting}
                >
                  Login
                </button>
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
