import { LoginUrl } from '@/configs'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const withServerAuth = (WrappedComponent: React.ComponentType<any>) => {
  const AuthComponent = async (props: any) => {
    const session = await getServerSession()

    if (!session || !session.user) {
      redirect(LoginUrl)
    }
    return <WrappedComponent {...props} session={session} />
  }

  return AuthComponent
}

export default withServerAuth
