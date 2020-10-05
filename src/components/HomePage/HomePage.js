import React, { Fragment } from "react"
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

import FAQ from "./FAQ"
import Team from "./Team"
import Main from "./Main"
import Gallery from "./Gallery"
import Speakers from "./Speakers"
import Schedule from "./Schedule"
import Location from "./Location"
// import Partners from "./Partners"
import Sponsors from "./Sponsors"
import Supporters from "./Supporters"
import Footer from "../common/Footer"
import EventDetails from "./EventDetails"

const HomePage = () => (
  <Fragment>
    <div className="wrapper" id="wrapper">
      <Main />
      <EventDetails />
      <Speakers /> 
      <Schedule />
      <Team />
      {/* <Sponsors /> */}
      <Supporters />
      {/* <Partners /> */}
      <Location />
      <FAQ />
      <Gallery />
      <Footer />
    </div>
  </Fragment>
)
export default HomePage
