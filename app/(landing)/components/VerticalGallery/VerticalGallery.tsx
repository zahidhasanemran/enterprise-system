import { dm1, dm2 } from '@/constants/assets'
import React from 'react'

const VerticalGallery = () => {
  return (
    <div className="marquee">
      <div className="dir-1 marquee-content marquee-content-1">
        <div className="new">
          {dm1?.map(sm => (
            <div className="marquee-item" key={sm?.id}>
              <img src={sm?.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="dir-2 marquee-content marquee-content-2">
        <div className="new">
          {dm2?.map(sm => (
            <div className="marquee-item" key={sm?.id}>
              <img src={sm?.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VerticalGallery
