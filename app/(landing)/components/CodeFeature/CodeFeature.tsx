import { CodeFeatureImg } from '@/constants/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CodeFeature = () => {
  return (
    <div className="px-4 pt-16">
      <div className=" ">
        <div className="container mx-auto ">
          <div className=" flex ">
            <div className="w-full min-h-full lg:w-1/2">
              <div className="relative w-full h-full">
                <Image
                  src={
                    'https://i.ibb.co/8XxZ4yF/ai-artificial-intelligence-891197-25-removebg-preview.png'
                  }
                  className="codeAnimation"
                  // src={'https://i.ibb.co/x52dYg2/khaki.png'}
                  // className="object-cover object-center flex items-center justify-center rounded-xl"
                  alt="code"
                  fill
                />
              </div>
            </div>
            <div className="w-full py-[150px] lg:w-1/2 text-right">
              <h4 className="text-golden bg-goldshade rounded-[3px] inline-block px-3 py-2 ">
                Meet your advanced AI
              </h4>
              <h3 className="heading-1">
                Write Software with ai and less developer effectively.
              </h3>
              <p className="text-[18px] leading-[1.5] font-[400] text-[#cbd5e1] mb-12 w-full xl:w-[60%] ml-auto ">
                Get AI generated code from text straight from your browser very
                easily.
              </p>
              <Link className="link-1 " href="/">
                Generate Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeFeature
