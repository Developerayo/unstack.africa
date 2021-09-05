import React from "react"
// import {Link} from "react-router-dom"

import Header from "../common/Header"
import hero from "../../assets/img/hero.png"

const Main = () => {
  return (
    <section className="hero overlay">
      {/* <!--Main slider--> */}
      <div className="main-slider slider">
        <ul className="slides">
          <li>
            <div className="background-img">
              <img loading="eager" src={hero} alt="" />
            </div>
          </li>
        </ul>
      </div>
      <Header />

      <div id="content" className="inner-hero fade-out">
        <div className="container hero-content">
          <div className="row">
            <div className="col-md-9 mx-auto text-center">
              <h1 className="large mb-10">unStack Africa</h1>
              <p className="hero-text text-bold text-upper mb-10">
                open-source based conference/meetups for every technical talents
                in Africa & around the globe, focused on hands-on workshops and
                world-class talks from around the world.
              </p>

              <p className="uppercase my-4">
                6<sup>th</sup> November 2021 - In-Person & Virtual
                <br />
                Venue: The Ikeja City Mall, Lagos, Nigeria{" "}
              </p>
              <a
                className="but scroll"
                style={{
                  borderRadius: "5px",
                }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
