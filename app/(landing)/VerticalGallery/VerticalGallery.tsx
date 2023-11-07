import React from 'react'

const dm1 = [
  {
    id: 1,
    img: 'https://i.ibb.co/bLcfK8b/digital-painting-plant-with-leaves-words-word-it-1340-38270.jpg',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/s2Mx0P6/60b820e6bebfef164a20e2e6e51289eb.jpg',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/j8MnGgZ/296b3735cca91bb09c588d94b6450729.jpg',
  },
  { id: 4, img: 'https://coderthemes.com/webai/assets/images/ai/img-13.jpg' },
  {
    id: 5,
    img: 'https://i.ibb.co/rFvcmN6/9773e3b648e1ad9299ef83f022150033.jpg',
  },
]
const dm2 = [
  {
    id: 1,
    img: 'https://i.ibb.co/ww3LJ2N/colorful-bird-sits-branch-forest-188544-8871.jpg',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/7SKLM7V/5c15cdd646344c323df9bb5743b93c24.jpg',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/rFvcmN6/9773e3b648e1ad9299ef83f022150033.jpg',
  },
  {
    id: 4,
    img: 'https://i.ibb.co/s2Mx0P6/60b820e6bebfef164a20e2e6e51289eb.jpg',
  },
  {
    id: 5,
    img: 'https://i.ibb.co/bLcfK8b/digital-painting-plant-with-leaves-words-word-it-1340-38270.jpg',
  },
  {
    id: 6,
    img: 'https://i.ibb.co/s2Mx0P6/60b820e6bebfef164a20e2e6e51289eb.jpg',
  },
]

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
