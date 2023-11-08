'use client'

import { menus } from '@/constants/menu'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useReducer } from 'react'
import Navbar from '@/components/global/Navbar'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        {/* {session?.user?.name} <br /> */}
        <button className="text-white" onClick={() => signOut()}>
          Log out
        </button>
      </>
    )
  }
  return (
    <button className="text-white" onClick={() => signIn()}>
      Login
    </button>
  )
}

const Header = () => {
  const { data: session } = useSession()
  const router = usePathname()

  if (router !== '/') {
    return <></>
  }

  return (
    <header className="p-4 absolute left-0 top-0 w-full  bg-white/10 backdrop-blur-sm ">
      <div className="container mx-auto flex items-center justify-between">
        <Navbar />
        {/* Left side with the text logo */}

        {/* Right side with links */}
        <nav className="flex gap-x-3">
          {menus.map((sm, i) => {
            if (session && sm.protected) {
              return (
                <Link
                  key={sm?.id}
                  href={sm?.link}
                  className="block px-3 font-poppins py-3 text-white  transition-colors"
                >
                  {sm?.title}
                </Link>
              )
            } else if (!sm.protected) {
              return (
                <Link
                  key={sm?.id}
                  href={sm?.link}
                  className="block px-3 font-poppins py-3 text-white transition-colors"
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
