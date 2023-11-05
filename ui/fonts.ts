import { Poppins, Raleway } from 'next/font/google'

export const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})
