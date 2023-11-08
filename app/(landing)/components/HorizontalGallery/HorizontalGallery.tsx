import { dm1, dm2 } from '@/constants/assets'

const HorizontalGallery = () => {
  return (
    <div className="w-full h-full">
      <div className="container h-full">
        <div className="!block marquee">
          <div className="dir-1 flex-col flex marquee-content marquee-content-1 overflow-hidden ">
            {dm1?.map(sm => (
              <div className="w-[20%] marquee-item" key={sm?.id}>
                <img src={sm?.img} alt="" />
              </div>
            ))}
          </div>
          <div className="dir-2 flex-col flex marquee-content marquee-content-2 overflow-hidden ">
            {dm2?.map(sm => (
              <div className="w-[20%] marquee-item" key={sm?.id}>
                <img src={sm?.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalGallery
