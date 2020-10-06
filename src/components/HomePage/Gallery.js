import React from "react"

import event1 from "../../assets/img/event1.jpg"
import event2 from "../../assets/img/event2.JPG"
import event3 from "../../assets/img/event3.JPG"
import event4 from "../../assets/img/event4.JPG"
import event5 from "../../assets/img/event5.JPG"
import event6 from "../../assets/img/event6.JPG"

const photos = [
  event1,
  event2,
  event3,
  event4,
  event5,
  event6,
  "https://res.cloudinary.com/developerayo/image/upload/v1598955256/_MG_1992.jpg",
  "https://res.cloudinary.com/developerayo/image/upload/v1598955276/Copy_of_FRONSTACK-110_1.jpg",
  "https://res.cloudinary.com/developerayo/image/upload/v1598955286/_MG_9621.jpg",
  "https://res.cloudinary.com/developerayo/image/upload/v1598955343/_47A1765.jpg",
  "https://res.cloudinary.com/developerayo/image/upload/v1598955322/_47A1716_1.jpg",
  "https://res.cloudinary.com/developerayo/image/upload/v1598955473/_MG_6613_1.jpg",
]

const Gallery = () => {
  return (
    <section id="gallery" className="gallery pt-100">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-50">
            <h1 className="title mt-10 text-center"> Feel The Vibes </h1>
            <div className="center mt-10">From the African ecosystem</div>
          </div>
        </div>
      </div>
      <div className="wrap">
        {photos.map((photo, index) => {
          return (
            <div className="box" key={photo}>
              <div className="boxInner">
                <img loading="lazy" src={photo} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery
