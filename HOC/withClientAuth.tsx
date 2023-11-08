import { LoginUrl } from '@/configs'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const withClientAuth = (WrapperComponent: React.ComponentType<any>) => {
  const Authenticated = (props: any) => {
    const session = useSession()

    if (!session || !session?.user) {
      redirect(LoginUrl)
    }
    return <WrapperComponent {...props} session={session} />
  }

  return Authenticated
}

export default withClientAuth
