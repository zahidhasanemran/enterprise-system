import { getServerSession } from 'next-auth'
import React from 'react'
import WhoAmIButton from './WhoAmIButton'
import { redirect } from 'next/navigation'
import withServerAuth from '@/HOC/withServerAuth'

const ServerAction = async (props: any) => {
  /**
   * Server action is a function that the server is going to expose to the client and Importantly the function must be called from a client side component
   */

  const whoAmI = async () => {
    'use server'
    return props.session?.user?.name || 'Not logged In'
  }

  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  )
}

export default withServerAuth(ServerAction)
