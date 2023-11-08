import Link from 'next/link'
import React from 'react'
import VerticalGallery from '@/app/(landing)/components/VerticalGallery/VerticalGallery'

const Hero = () => {
  return (
    <div className="px-4 pb-16 pt-[150px]">
      <div className=" ">
        <div className="container mx-auto bg-[#ffffff0b] rounded-xl ">
          <div className=" flex ">
            <div className="w-full py-[150px] lg:w-1/2 ">
              <h4 className="text-golden bg-goldshade rounded-[3px] inline-block px-3 py-2 ">
                Meet your advanced AI
              </h4>
              <h3 className="heading-1">
                Image generate with our ai instantly.
              </h3>
              <p className="text-[18px] leading-[1.5] font-[400] text-[#cbd5e1] mb-12 w-full xl:w-[60%] ">
                Get AI generated images from text straight from your browser
                very easily.
              </p>
              <Link className="link-1 " href="/">
                Generate Image
              </Link>
            </div>
            <div className="w-full min-h-full lg:w-1/2 overflow-hidden">
              <VerticalGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
