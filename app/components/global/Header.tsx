'use client'

import { menus } from '@/app/constants/menu'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Navbar from '@/app/components/global/Navbar'

function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        {/* {session?.user?.name} <br /> */}
        <button onClick={() => signOut()}>Log out</button>
      </>
    )
  }
  return <button onClick={() => signIn()}>Login</button>
}

const Header = () => {
  const { data: session } = useSession()

  return (
    <header className="bg-green-500 p-4 filter backdrop-blur-sm ">
      <div className="container mx-auto flex items-center justify-between">
        <Navbar />
        {/* Left side with the text logo */}
        <Link href="/" className="block text-xl font-bold">
          Logo
        </Link>

        {/* Right side with links */}
        <nav className="flex gap-x-3">
          {menus.map((sm, i) => {
            if (session && sm.protected) {
              return (
                <Link
                  key={sm?.id}
                  href={sm?.link}
                  className="block px-3 font-poppins py-3 text-gray-800 hover:text-black transition-colors"
                >
                  {sm?.title}
                </Link>
              )
            } else if (!sm.protected) {
              return (
                <Link
                  key={sm?.id}
                  href={sm?.link}
                  className="block px-3 font-poppins py-3 text-gray-800 hover:text-black transition-colors"
                >
                  {sm?.title}
                </Link>
              )
            }
          })}
          <AuthButton />
        </nav>
      </div>
    </header>
  )
}

export default Header
