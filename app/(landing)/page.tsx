import { getServerSession } from 'next-auth'
import Hero from '@/app/(landing)/components/Hero/Hero'
import Features from '@/app/(landing)/components/Features/Features'
import CodeFeature from '@/app/(landing)/components/CodeFeature/CodeFeature'
import ChatFeature from '@/app/(landing)/components/ChatFeature/ChatFeature'
import HorizontalGallery from '@/app/(landing)/components/HorizontalGallery/HorizontalGallery'

export default async function Home() {
  const session = await getServerSession()
  // console.log(session)

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
