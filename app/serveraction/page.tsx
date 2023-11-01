import { getServerSession } from 'next-auth'
import React from 'react'
import WhoAmIButton from './WhoAmIButton'

const ServerAction = async () => {
  /**
   * Server action is a function that the server is going to expose to the client and Importantly the function must be called from a client side component
   */

  const whoAmI = async () => {
    'use server'
    const session = await getServerSession()
    return session?.user?.name || 'Not logged In'
  }

  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  )
}

export default ServerAction
