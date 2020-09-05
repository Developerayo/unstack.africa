import React, { Fragment } from "react"
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

import FAQ from "./FAQ"
import Team from "./Team"
import Main from "./Main"
import Gallery from "./Gallery"
import Speakers from "./Speakers"
import Schedule from "./Schedule"
import Location from "./Location"
import Footer from "../common/Footer"
import EventDetails from "./EventDetails"

// import replace from "../../assets/img/event1.jpg"
// import cloudinary from "../../assets/img/cloudinary_sponsor.png"
// import codesandbox from "../../assets/img/csb.png"
// import egghead from "../../assets/img/egghead.jpg"
// import andela from "../../assets/img/andela_sponsor.jpg"
// import amp from "../../assets/img/amp.png"
// import fleek from "../../assets/img/fleek.png"
// import vanhack from "../../assets/img/vanhack_sponsor.png"
// import gatsby from "../../assets/img/gatsby.png"
// import paystack from "../../assets/img/paystack_sponsor.png"
// import thinkster from "../../assets/img/thinkster_sponsor.png"
// import hashnode from "../../assets/img/hashnode_sponsor.svg"

const HomePage = (props) => (
  <Fragment>
    <div className="wrapper" id="wrapper">
      <Main />
      <EventDetails />
      <Speakers />
      <Schedule />
      <Team />
      {/* <!--Sponsors-->
      <section className="sponser pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-50 text-center ">
              <h1 className="title">Proud Sponsors</h1>
              <p className="title-lead mt-10 mb-20">
                Our event is possible from generous support from these great
                companies!
              </p>
            </div>
          </div>
          <div className="sponsors-header" style={{ display: "flex" }}>
            <svg
              style={{ color: "#e49205" }}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="grip-lines-vertical"
              className="svg-inline--fa fa-grip-lines-vertical fa-w-8"
              width="20px"
              role="img"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M96 496V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16zm128 0V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16z"
              />
            </svg>
            <h2
              style={{
                alignSelf: "center",
                marginLeft: "10px",
                fontSize: "2em",
                fontFamily: "sans-serif",
              }}
            >
              Platinum
            </h2>
          </div>

          <div className="row mt-30 mb-30 sponsors">
            <div className="sponsor-blk col-md-4 col-sm-4">
              <a
                href="https://cloudinary.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy" src={cloudinary} alt="" className="move-right" />
              </a>
            </div>
          </div>

          <div className="sponsors-header" style={{ display: "flex" }}>
            <svg
              style={{ color: "#e49205" }}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="grip-lines-vertical"
              className="svg-inline--fa fa-grip-lines-vertical fa-w-8"
              width="20px"
              role="img"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M96 496V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16zm128 0V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16z"
              />
            </svg>
            <h2
              style={{
                alignSelf: "center",
                marginLeft: "10px",
                fontSize: "2em",
                fontFamily: "sans-serif",
              }}
            >
              Silver
            </h2>
          </div>
          <div className="sponsors row mt-30 mb-30">
            <div className="sponsor-blk col-xs-1 col-sm-2 mt-2">
              <a
                href="https://codesandbox.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy"
                  src={fleek}
                  alt=""
                  className="move-right"
                  style={{ width: "150px" }}
                />
              </a>
            </div>
            <div className="sponsor-blk col-xs-1 col-sm-2 mt-2">
              <a
                href="https://fleek.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy"
                  src={codesandbox}
                  alt=""
                  className="move-right"
                  style={{ width: "200px" }}
                />
              </a>
            </div>
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://egghead.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy"
                  src={amp}
                  alt=""
                  className="move-right"
                  style={{ width: "130px" }}
                />
              </a>
            </div>
          </div>

          <div className="sponsors-header" style={{ display: "flex" }}>
            <svg
              style={{ color: "#e49205" }}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="grip-lines-vertical"
              className="svg-inline--fa fa-grip-lines-vertical fa-w-8"
              width="20px"
              role="img"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M96 496V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16zm128 0V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16z"
              />
            </svg>
            <h2
              style={{
                alignSelf: "center",
                marginLeft: "10px",
                fontSize: "2em",
                fontFamily: "sans-serif",
              }}
            >
              Bronze
            </h2>
          </div>

          <div className="sponsors row mt-30">
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://paystack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy" src={paystack} alt="" className="move-right" />
              </a>
            </div>
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://hashnode.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy" src={hashnode} alt="" className="move-right" />
              </a>
            </div>
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://gatsby.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy"
                  src={gatsby}
                  alt=""
                  className="move-right"
                  style={{ width: "125px" }}
                />
              </a>
            </div>
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://andela.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy"
                  src={andela}
                  alt=""
                  className="move-right"
                  style={{ width: "110px" }}
                />
              </a>
            </div>
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://egghead.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy"
                  src={egghead}
                  alt=""
                  className="move-right"
                  style={{ width: "110px" }}
                />
              </a>
            </div>
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://vanhack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy"
                  src={vanhack}
                  alt=""
                  className="move-right"
                  style={{ width: "80px" }}
                />
              </a>
            </div>
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://thinkster.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy"
                  src={thinkster}
                  alt=""
                  className="move-right"
                  style={{ width: "120px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!--sponser end--> */}

      {/* <section className="sponser pt-50 pb-100">
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
                  <img loading="lazy" src={logo3} alt="" />
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="block-sponsor">
                  <img loading="lazy" src={logo1} alt="" />
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="block-sponsor">
                  <img loading="lazy" src={logo4} alt="" />
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="block-sponsor">
                  <img loading="lazy" src={logo2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Location />
      <FAQ />
      <Gallery />
      <Footer />
    </div>
  </Fragment>
)
export default HomePage
