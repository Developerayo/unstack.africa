import React from "react"

const Supporters = () => {
  return (
    <section className="sponser pt-50 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-50 text-center ">
            <h1 className="title">Supporters</h1>
            <p className="title-lead mt-10 mb-20">
              Our event is possible from generous donations from these great
              people!
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12  col-sm-push-2 text-center">
            <div className="col-md-2 col-sm-2 ">
              <div className="block-sponsor">
                {/* <img loading="lazy" src={logo3} alt="" /> */}
              </div>
            </div>
            <div className="col-md-2 col-sm-2">
              <div className="block-sponsor">
                {/* <img loading="lazy" src={logo1} alt="" /> */}
              </div>
            </div>
            <div className="col-md-2 col-sm-2">
              <div className="block-sponsor">
                {/* <img loading="lazy" src={logo4} alt="" /> */}
              </div>
            </div>
            <div className="col-md-2 col-sm-2">
              <div className="block-sponsor">
                {/* <img loading="lazy" src={logo2} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Supporters
