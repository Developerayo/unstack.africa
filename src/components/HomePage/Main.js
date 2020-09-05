import React from "react"

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
              <img loading="lazy" src={hero} alt="" />
            </div>
          </li>
        </ul>
      </div>
      <Header />

      <div className="inner-hero fade-out">
        <div className="container hero-content">
          <div className="row">
            <div className="col-md-9 mx-auto text-center">
              <h1 className="large mb-10">unStack Africa</h1>
              <h4 className="hero-text mb-10">
                open-source based conference/meetups for every engineer/designer
                & technical talents focused on hands-on workshops and
                world-class talks from around the world.
              </h4>

              <p className="uppercase my-4">
                16<sup>th</sup> - 17<sup>th</sup> October 2020 - Lagos, Nigeria,
                unStack Africa Virtual Conference.{" "}
              </p>

              <a
                href="#register"
                className="but scroll"
                style={{ borderRadius: "5px" }}
              >
                {" "}
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
