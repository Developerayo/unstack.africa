import React, { Fragment } from "react"
import Header from "../common/Header"
import Footer from "../common/Footer"

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share"

const Tickets = () => {
  return (
    <Fragment>
      <div className="ticket-body">
        <Header />
        <section className="ticket-hero mt-70"></section>
        <div className="container">
          <div className="row parent-desc">
            <div className="col-md-8 desc">
              <div className="mt-30 mb-30 desc-card">
                <div className="card">
                  <div className="card-body">
                    <h1>Description</h1>
                    <br />
                    <p>
                      The unStack Africa Conference is the Conf which is a
                      must-attend conference for anyone building apps for the
                      next billion users and anyone looking to level up their
                      engineering skills with an amazing set of speakers lined
                      up.
                    </p>
                    <br />
                    <p>
                      This year unStack Conference is a virtual 2-day event
                      where everyone in the African developer community and
                      ecosystem comes together to learn, connect, and create the
                      future of software.{" "}
                    </p>
                    <br />
                    <h1>Date</h1>
                    <p>6th - 7th November 2020</p>
                    <br />
                    <h1>Time</h1>
                    <p>10 AM - 2 PM, Daily</p>
                    <br />
                    <h1>Location</h1>
                    <p>Zoom Webinar (Online)</p>
                    <br />
                    <h1>Share Event</h1>
                    <div>
                      <FacebookShareButton />
                      <TwitterShareButton />
                      <LinkedinShareButton />
                      <WhatsappShareButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 pricing">
              <div className="mt-30 mb-30">
                <div className="card">
                  <div className="card-header">
                    <div className="amount">
                      <p>Price</p>
                      <p>₦2000 / $5</p>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="https://t.co/3cmzMQWMDa?amp=1"
                      className="btn btn-primary btn-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Tickets
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Tickets
