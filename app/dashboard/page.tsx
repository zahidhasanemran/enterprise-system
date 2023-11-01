import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard = async () => {
  const session = await getServerSession()
  if (!session || !session.user) {
    redirect('/api/auth/signin')
  }
  return <div>This is a protected session</div>
}

export default Dashboard
