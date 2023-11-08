'use client'

import { getServerSession } from 'next-auth'
import Hero from '@/app/(landing)/components/Hero/Hero'
import Features from '@/app/(landing)/components/Features/Features'
import CodeFeature from '@/app/(landing)/components/CodeFeature/CodeFeature'
import ChatFeature from '@/app/(landing)/components/ChatFeature/ChatFeature'
import HorizontalGallery from '@/app/(landing)/components/HorizontalGallery/HorizontalGallery'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
  useEffect(() => {
    document.body.classList.add('body_bg')
    return () => document.body.classList.remove('body_bg')
  }, [])

  const [scrollTop, setScrollTop] = useState(0)
  useEffect(() => {
    const handleScroll = (event: any) => {
      // setScrollTop(window.scrollY)
      // document.body.style.backgroundPositionY = `${window.scrollY / 8}%`
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      // document.body.style.backgroundPositionY = '0'
    }
  }, [])

  return (
    <div className="body_overlay">
      <Hero />
      <Features />
      <CodeFeature />
      <ChatFeature />
      {/* <HorizontalGallery /> */}
    </div>
  )
}
