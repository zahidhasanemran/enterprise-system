import { Jost, Poppins } from 'next/font/google'

export const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const jost = Jost({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})
