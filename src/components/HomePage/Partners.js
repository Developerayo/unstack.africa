import React from "react"

import devcareers from "../../assets/img/partners/devcareers-black-background.png"
import shecodeafrica from "../../assets/img/partners/shecodeafrica.jpg"

const partnersList = [
  {
    logo: devcareers,
    logoAlt: "devcareerslogo"
  },
  {
    logo: shecodeafrica,
    logoAlt: "shecodeafricalogo"
  }
]

const Partners = () => {
  return (
    <section className="sponser pt-50 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-50 text-center ">
            <h1 className="title">Our Partners</h1>
            <p className="title-lead mt-10 mb-20">
              Thank you for partnering with us!
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sponsors row mt-30 mb-30">
          {/* <div className="col-md-12"> */}
            {partnersList.map(({ logo, logoAlt }, index) => {
              return (
                <div className="sponsor-blk col-xs-1 col-sm-2 mt-2" key={index}>
                  <div className="">
                    <img loading="lazy" src={logo} alt={logoAlt} />
                  </div>
                </div>
              )
            })}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Partners
