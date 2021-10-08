import React from "react"
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

import FAQ from "./FAQ"
import Team from "./Team"
import Main from "./Main"
import Gallery from "./Gallery"
import Speakers from "./Speakers"
import Schedule from "./Schedule"
import Location from "./Location"
import Partners from "./Partners"
import Sponsors from "./Sponsors"
// import Supporters from "./Supporters"
import Footer from "../common/Footer"
import EventDetails from "./EventDetails"

const HomePage = () => (
  <div className="wrapper" id="wrapper">
    <a href="#content" data-skip-content> Skip to content </a>
    <Main />
    <EventDetails />
    <Speakers />
    {/* <Schedule /> */}
    {/* <Sponsors /> */}
    <Team />
    {/* <Supporters /> */}
    <Partners />
    <Location />
    <FAQ />
    <Gallery />
    <Footer />
  </div>
)
export default HomePage
