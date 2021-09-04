import React from "react"

// import cloudinary from "../../assets/img/cloudinary_sponsor.png"
// import github from "../../assets/img/github.png"
// import storyblok from "../../assets/img/story.jpg"
import cloudinary from "../../assets/img/cloudinary.png"

// import camunda from "../../assets/img/camunda.jpg"
// import pluralsight from "../../assets/img/pluralsight.png"

// import airmeet from "../../assets/img/airmeet.jpeg"
import apollo from "../../assets/img/apollo.png"
// import guidetoreact from "../../assets/img/guidetoreact.png"
// import slack from "../../assets/img/slack-logo.png"
// import webdevforeveryone from "../../assets/img/webdevforeveryone.jpg"
// import egghead from "../../assets/img/egghead.jpg"
// import andela from "../../assets/img/andela_sponsor.jpg"
// import amp from "../../assets/img/amp.png"
// import fleek from "../../assets/img/fleek.png"
// import vanhack from "../../assets/img/vanhack_sponsor.png"
// import gatsby from "../../assets/img/gatsby.png"
// import paystack from "../../assets/img/paystack_sponsor.png"
// import thinkster from "../../assets/img/thinkster_sponsor.png"
// import hashnode from "../../assets/img/hashnode_sponsor.svg"


const sponsors = [
  {
    logo: apollo,
    logoAlt: "apollo",
    url: "https://www.apollographql.com",
    width: "200px",
    height: "60px",
  },
  {
    logo: cloudinary,
    logoAlt: "cloudinary",
    url: "https://cloudinary.com/",
    width: "190px",
    height: "55px",
  },
  // {
  //   logo: storyblok,
  //   logoAlt: "storyblok",
  //   url: "https://www.storyblok.com/",
  //   width: "60px",
  //   height: "60px",
  // },
  // {
  //   logo: guidetoreact,
  //   logoAlt: "opinionatedreact",
  //   url: "https://opinionatedreact.com/",
  //   width: "80px",
  //   height: "80px",
  // },
  // {
  //   logo: webdevforeveryone,
  //   logoAlt: "webdevforeveryone",
  //   url: "https://webdevelopmentforeveryone.com/",
  //   width: "80px",
  //   height: "40px",
  // },
  // {
  //   logo: airmeet,
  //   logoAlt: "airmeet",
  //   url: "https://www.airmeet.com/",
  //   width: "60px",
  //   height: "60px",
  // },
]

// const sponsorsList = {

//   platinum: [
//     {
//       logo: camunda,
//       logoAlt: "Camunda",
//       url: "https://camunda.com/",
//       width: "150px",
//       // height: "80px",
//     },
//   ],
//   gold: [
//     {
//       logo: github,
//       logoAlt: "github",
//       url: "https://github.com/",
//       width: "150px",
//       height: "",
//     },
//     // {
//     //   logo: fleek,
//     //   logoAlt: "fleek",
//     // },
//     // {
//     //   logo: codesandbox,
//     //   logoAlt: "codeSandBox",
//     // },
//     // {
//     //   logo: amp,
//     //   logoAlt: "AMP",
//     // },
//   ],
//   bronze: [
//     {
//       logo: slack,
//       logoAlt: "slack",
//       url: "https://slack.com/",
//       width: "150px",
//       height: "",
//     },
//     {
//       logo: storyblok,
//       logoAlt: "storyblok",
//       url: "https://www.storyblok.com/",
//       width: "50px",
//       height: "50px",
//     },
//     {
//       logo: guidetoreact,
//       logoAlt: "opinionatedreact",
//       url: "https://opinionatedreact.com/",
//       width: "50px",
//       height: "50px",
//     },
//     {
//       logo: webdevforeveryone,
//       logoAlt: "webdevforeveryone",
//       url: "https://webdevelopmentforeveryone.com/",
//       width: "100px",
//       height: "50px",
//     },
//     {
//       logo: airmeet,
//       logoAlt: "airmeet",
//       url: "https://www.airmeet.com/",
//       width: "50px",
//       height: "50px",
//     },
//   ],
// }


const Sponsors = () => {
   const keys = sponsors.map(spon => spon.logo)
  return (
    <section className="sponser pt-100 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-50 text-center ">
            <h1 className="title">Our Sponsors</h1>
            {/* <p className="title-lead mt-10 mb-20">
              Our event is possible from generous support from these great
              companies!
            </p> */}
          </div>
        </div>
            <div
              key={`${keys}-body`}
              className="sponsors row mt-30 mb-30 divvv"
            >
              {sponsors.map(({ logo, logoAlt, url, width, height }) => {
                return (
                  <div key={logoAlt} className="sponsor-blk mr-4 mt-2">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        src={logo}
                        alt={logoAlt}
                        className="move-right"
                        style={{ width: `${width}`, height: `${height}` }}
                      />
                    </a>
                  </div>
                )
              })}
            </div>
      </div>
    </section>
  )
}

export default Sponsors
