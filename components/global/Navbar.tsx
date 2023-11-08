'use client'

import MobileSidebar from '@/components/global/MobileSidebar/MobileSidebar'
import { Button } from '@/components/ui/button'
import { Logo } from '@/constants/images'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex items-center">
      <MobileSidebar />
      <div className="flex gap-x-3 items-center ">
        <Image height={50} width={50} src={Logo} alt="" />
        <Link href="/" className="block text-white text-2xl font-bold">
          Sheefa
        </Link>
      </div>
      {/* <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button> */}
    </div>
  )
}

export default Navbar
