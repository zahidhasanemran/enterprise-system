import { getServerSession } from 'next-auth'
import Hero from '@/app/(landing)/Hero/Hero'

export default async function Home() {
  const session = await getServerSession()
  // console.log(session)

  return (
    <div className="body_overlay">
      <Hero />
    </div>
  )
}
