import Image from 'next/image'
import Link from 'next/link'

const ChatFeature = () => {
  return (
    <div className="px-4 py-16">
      <div className=" ">
        <div className="container mx-auto ">
          <div className=" flex ">
            <div className="w-full py-[150px] lg:w-1/2 ">
              <h4 className="text-golden bg-goldshade rounded-[3px] inline-block px-3 py-2 ">
                Meet your advanced AI
              </h4>
              <h3 className="heading-1">
                Talk to our genious and explore world together
              </h3>
              <p className="text-[18px] leading-[1.5] font-[400] text-[#cbd5e1] mb-12 w-full xl:w-[60%] ">
                Get AI generated code from text straight from your browser very
                easily.
              </p>
              <Link className="link-1 " href="/conversation">
                Let's Chat
              </Link>
            </div>
            <div className="w-full min-h-full lg:w-1/2">
              <div className="relative w-full h-full transform scale-75">
                <Image
                  src={'https://i.ibb.co/Vv50sHJ/khali2.png'}
                  className="object-cover object-center flex items-center justify-center rounded-xl codeAnimation"
                  alt="code"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatFeature
