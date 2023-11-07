import { features } from '@/constants/assets'
import React from 'react'

const Features = () => {
  return (
    <div className="pb-16">
      <div className="container mx-auto">
        <h2 className="heading-2 text-center w-full xl:w-7/12 mx-auto">
          The AI Generator That Helps You Create Amazing Image Taster.
        </h2>
        <div className="flex justify-between gap-8 mt-16">
          {features.map(sm => (
            <div
              className="text-center px-5 py-8 bg-[#ffffff10] backdrop-blur-md rounded-xl "
              key={sm?.id}
            >
              <div className="">
                <sm.icon className="mx-auto" size={40} color="#FFD700" />
              </div>
              <h3 className="mb-6 mt-6 heading-3 ">{sm?.title}</h3>
              <p className="paragraph-1">{sm?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
