/**
 * Dashboard Layout
 */

interface DashLayoutProps {
  children: React.ReactNode
}

import React from 'react'
import Sidebar from '@/app/components/global/Sidebar/Sidebar'

const DashboardLayout = ({ children }: DashLayoutProps) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 ">
        <Sidebar />
      </div>
      <div className="md:pl-72">{children}</div>
    </div>
  )
}

export default DashboardLayout
