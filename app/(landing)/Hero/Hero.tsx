import Link from 'next/link'
import React from 'react'
import VerticalGallery from '../VerticalGallery/VerticalGallery'

const Hero = () => {
  return (
    <div className="px-4 py-16">
      <div className=" ">
        <div className="container mx-auto bg-[#ffffff0b] rounded-xl ">
          <div className=" flex ">
            <div className="w-full py-28 lg:w-1/2 ">
              <h4 className="text-white">Meet your advanced AI</h4>
              <h3 className="font-jost font-bold text-white text-base xl:text-[48px] leading-[1.3] my-6 ">
                Image generate with our ai instantly.
              </h3>
              <p className="text-[18px] leading-[1.5] font-[400] text-[#cbd5e1] mb-12 w-full xl:w-[60%] ">
                Get AI generated images from text straight from your browser
                very easily.
              </p>
              <Link
                className="inline-block text-[15px] leading-[1.3] text-white "
                href="/"
              >
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
