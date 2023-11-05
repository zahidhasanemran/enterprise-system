/**
 * THIS IS A SERVER COMPONENT
 */

import Header from '@/app/components/global/Header'
import { poppins, raleway } from '@/app/ui/fonts'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/app/components/global/SessionProvider'
// import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={`${raleway.variable} ${poppins.variable}`}>
        <main>
          <SessionProvider session={session}>
            <Header />
            {children}
          </SessionProvider>
        </main>
      </body>
    </html>
    // </ClerkProvider>
  )
}
