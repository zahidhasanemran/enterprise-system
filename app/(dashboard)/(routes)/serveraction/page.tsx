import { getServerSession } from 'next-auth'
import React from 'react'
import WhoAmIButton from './WhoAmIButton'
import { redirect } from 'next/navigation'

const ServerAction = async () => {
  /**
   * Server action is a function that the server is going to expose to the client and Importantly the function must be called from a client side component
   */

  const session = await getServerSession()

  // const whoAmI = async () => {
  //   'use server'
  //   return session?.user?.name || 'Not logged In'
  // }

  // if (!session || !session.user) {
  //   redirect('/api/auth/signin')
  // }

  return <div>{/* <WhoAmIButton whoAmIAction={whoAmI} /> */}</div>
}

export default ServerAction
