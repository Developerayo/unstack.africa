import React from "react"

const FAQ = () => {
  return (
    <section id="faq" className="faq pt-120 pb-120 brd-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-50 text-center ">
            <h1 className="title">Frequently asked questions </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-8 mx-auto">
            <div className="block-faq mb-50">
              <h4 className="mb-10">What is unStack?</h4>
              <p>
                unStack is an open-source based conference/meetups for every
                engineer/designer & technical talents focused on hands-on
                workshops and world-class talks from around the world, we
                currently have a community in 7 African countries since our
                launch in 2019 and our most rencent one which is outside Africa
                is "unStack-Dubai"
              </p>
            </div>
            <div className="block-faq mb-50">
              <h4 className="mb-10">What kind of events do unStack have?</h4>
              <p>
                unStack dosen't just host conferences, we also host small
                meetups across all our communities in Nairobi, Mombasa, Rwanda,
                Ghana, and others.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mt-50">
            <h2 className="sub-title-1">
              Didn’t find what your are looking for ?
            </h2>
            <p>
              <b>Send a mail to:</b>&nbsp;
              <a href="mailto:unstackdev@gmail.com" style={{ color: "white" }}>
                unstackdev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
