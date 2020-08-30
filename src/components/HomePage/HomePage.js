import React, { Fragment } from "react"
import Header from "../common/Header"
import Footer from "../common/Footer"
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

import hero from "../../assets/img/hero.png"
import shodipoayomide from "../../assets/img/speakers/shodipoayomide.JPG"
import unstacklocate from "../../assets/img/unstack-locate.svg"
import event1 from "../../assets/img/event1.jpg"
import event2 from "../../assets/img/event2.JPG"
import event3 from "../../assets/img/event3.JPG"
import event4 from "../../assets/img/event4.JPG"
import event5 from "../../assets/img/event5.JPG"
import event6 from "../../assets/img/event6.JPG"
import replace from "../../assets/img/event1.jpg"
import cloudinary from "../../assets/img/cloudinary_sponsor.png"
import codesandbox from "../../assets/img/csb.png"
import egghead from "../../assets/img/egghead.jpg"
import andela from "../../assets/img/andela_sponsor.jpg"
import amp from "../../assets/img/amp.png"
import fleek from "../../assets/img/fleek.png"
import vanhack from "../../assets/img/vanhack_sponsor.png"
import gatsby from "../../assets/img/gatsby.png"
import paystack from "../../assets/img/paystack_sponsor.png"
import thinkster from "../../assets/img/thinkster_sponsor.png"
import hashnode from "../../assets/img/hashnode_sponsor.svg"

const HomePage = (props) => (
  <Fragment>
    {/* remove preloader init fo now */}
    {/* <Preloader />  */}

    <div className="wrapper" id="wrapper">
      <section className="hero overlay">
        {/* <!--Main slider--> */}
        <div className="main-slider slider">
          <ul className="slides">
            <li>
              <div className="background-img">
                <img src={hero} alt="" />
              </div>
            </li>
          </ul>
        </div>
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
        <Header />

        <div className="inner-hero fade-out">
          <div className="container hero-content">
            <div className="row">
              <div className="col-md-9 mx-auto text-center">
                <h1 className="large mb-10">unStack Africa</h1>
                <h4 className="mb-10">
                  open-source based conference/meetups for every
                  engineer/designer & technical talents focused on hands-on
                  workshops and world-class talks from around the world.
                </h4>

                <p className="uppercase ">
                  26th September 2020 - Lagos, Nigeria, Virtual React Meetup.{" "}
                </p>
                <br />
                <br />
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

      <section id="about" className="about pt-100 pb-100 brd-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-50 text-center">
              {/* <div className="col-sm-8 col-sm-offset-2 mb-50 text-center"> */}
              <h1 className="title">Virtual React Meetup</h1>
              <p className="title-lead mt-20">
                The Virtual React Meetup hosted by unStack is focused towards
                empowering more developers throughout Africa in React, featuring
                world class speakers coming onboard to share their insight on
                things React.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 mt-20 mb-20">
              <div className="block-info-1">
                <svg
                  id="Capa_1"
                  enableBackground="new 0 0 512 512"
                  height="512"
                  viewBox="0 0 512 512"
                  width="512"
                  style={{ width: "50" }}
                >
                  <g>
                    <path
                      d="m144 249h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                      fill="#fff"
                    />
                    <path
                      d="m144 313h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                      fill="#fff"
                    />
                    <path
                      d="m144 377h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                      fill="#fff"
                    />
                    <path
                      d="m272 249h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                      fill="#fff"
                    />
                    <path
                      d="m272 313h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                      fill="#fff"
                    />
                    <path
                      d="m272 377h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                      fill="#fff"
                    />
                    <path
                      d="m400 249h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                      fill="#fff"
                    />
                    <path
                      d="m400 313h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                      fill="#fff"
                    />
                    <path
                      d="m400 377h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                      fill="#fff"
                    />
                    <path
                      d="m467 65h-36v-25c0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-130v-25c0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-130v-25c0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-36c-24.813 0-45 20.187-45 45v332c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45 0-9.682 0-323.575 0-332 0-24.813-20.187-45-45-45zm-437 45c0-8.271 6.729-15 15-15h36v25c0 8.284 6.716 15 15 15s15-6.716 15-15v-25h130v25c0 8.284 6.716 15 15 15s15-6.716 15-15v-25h130v25c0 8.284 6.716 15 15 15s15-6.716 15-15v-25h36c8.271 0 15 6.729 15 15v59h-452zm437 347h-422c-8.271 0-15-6.729-15-15v-243h452v243c0 8.271-6.729 15-15 15z"
                      fill="#fff"
                    />
                  </g>
                </svg>
                <p>
                  <strong>DATE</strong>
                  <span>26th September 2020</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mt-20 mb-20">
              <div className="block-info-1">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 511.998 511.998"
                  width="512"
                  height="512"
                  style={{ width: "50" }}
                >
                  <g transform="translate(0 -1)">
                    <g>
                      <g>
                        <path
                          d="M167.974,351.473c21.086,29.73,42.138,56.32,56.09,73.446c2.031,2.492,3.934,4.804,5.777,7.031h-42.103
				c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533H324.27c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533
				h-42.103c1.843-2.227,3.746-4.54,5.786-7.031c13.943-17.067,34.987-43.716,56.081-73.446
				c20.929-28.905,39.767-59.267,56.371-90.854c17.425-34.219,26.266-62.626,26.266-84.437
				c0.058-45.321-17.926-88.801-49.98-120.841c-2.141-2.22-5.313-3.112-8.297-2.333c-2.984,0.779-5.316,3.107-6.099,6.09
				c-0.783,2.983,0.104,6.156,2.321,8.3c28.852,28.844,45.039,67.985,44.988,108.783c0,19.098-8.209,44.902-24.405,76.689
				c-16.229,30.855-34.64,60.513-55.091,88.747c-20.804,29.346-41.6,55.637-55.381,72.533c-4.582,5.615-8.704,10.581-12.22,14.78
				c-1.641,1.874-4.011,2.948-6.502,2.948c-2.491,0-4.861-1.075-6.502-2.948c-3.516-4.198-7.637-9.165-12.22-14.78
				c-13.781-16.887-34.577-43.179-55.381-72.533c-20.451-28.234-38.862-57.892-55.091-88.747
				c-16.213-31.787-24.405-57.591-24.405-76.689c-0.005-61.809,36.959-117.627,93.867-141.747
				c38.238-16.034,81.314-16.034,119.552,0c2.808,1.19,6.037,0.793,8.472-1.044c2.435-1.836,3.705-4.832,3.332-7.859
				c-0.373-3.027-2.332-5.625-5.14-6.815c-86.898-36.652-187.056,4.062-223.735,90.948c-8.895,21.046-13.457,43.669-13.414,66.517
				c0,21.811,8.841,50.219,26.266,84.48C128.208,292.234,147.047,322.582,167.974,351.473z"
                          fill="#fff"
                        />
                        <path
                          d="M256.003,99.151c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533c-40.71-0.001-75.752,28.757-83.695,68.685
				c-7.943,39.928,13.426,79.906,51.037,95.486c37.611,15.58,80.99,2.421,103.608-31.428
				c22.618-33.849,18.175-78.962-10.611-107.749c-2.143-2.218-5.315-3.108-8.299-2.327c-2.983,0.781-5.313,3.111-6.094,6.094
				c-0.781,2.984,0.109,6.156,2.327,8.299c23.03,23.029,26.585,59.118,8.492,86.198c-18.093,27.08-52.796,37.608-82.885,25.146
				c-30.089-12.462-47.185-44.444-40.833-76.387S223.435,99.152,256.003,99.151z"
                          fill="#fff"
                        />
                        <path
                          d="M508.786,470.957l-52.48-93.867c-4.745-8.34-13.624-13.466-23.219-13.406H372.27c-4.713,0-8.533,3.82-8.533,8.533
				s3.82,8.533,8.533,8.533h60.817c3.416-0.066,6.603,1.715,8.337,4.659l52.463,93.867c1.429,2.442,1.399,5.471-0.077,7.885
				c-1.743,2.88-4.895,4.605-8.26,4.523H26.457c-3.362,0.08-6.51-1.646-8.252-4.523c-1.476-2.414-1.505-5.443-0.077-7.885
				l52.463-93.867c1.731-2.943,4.915-4.724,8.328-4.659h60.817c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H78.92
				c-9.6-0.063-18.486,5.063-23.236,13.406L3.212,470.957c-4.375,7.728-4.274,17.208,0.265,24.841
				c4.782,8.128,13.551,13.071,22.98,12.954H485.55c9.426,0.114,18.192-4.828,22.972-12.954
				C513.061,488.164,513.162,478.685,508.786,470.957z"
                          fill="#fff"
                        />
                        <path
                          d="M418.137,406.351h-34.133c-1.685,0.003-3.332,0.501-4.736,1.434l-25.6,17.067c-3.921,2.616-4.979,7.915-2.364,11.836
				c2.616,3.921,7.915,4.979,11.836,2.364l23.424-15.633h31.573c4.713,0,8.533-3.821,8.533-8.533
				C426.67,410.171,422.85,406.351,418.137,406.351z"
                          fill="#fff"
                        />
                        <path
                          d="M366.937,466.084c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H375.47
				C370.757,457.551,366.937,461.371,366.937,466.084z"
                          fill="#fff"
                        />
                        <path
                          d="M153.603,440.484c3.762,0.005,7.083-2.455,8.176-6.055c1.093-3.6-0.301-7.491-3.431-9.578l-25.6-17.067
				c-1.406-0.934-3.057-1.433-4.745-1.434H93.87c-4.713,0-8.533,3.821-8.533,8.533c0,4.713,3.821,8.533,8.533,8.533h31.573
				l23.45,15.633C150.288,439.981,151.927,440.48,153.603,440.484z"
                          fill="#fff"
                        />
                        <path
                          d="M68.27,457.551c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.82,8.533-8.533
				s-3.82-8.533-8.533-8.533H68.27z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <p>
                  <strong>LOCATION</strong>
                  <span>Zoom</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mt-20 mb-20">
              <div className="block-info-1">
                <svg
                  id="speaker"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                  style={{ width: "50" }}
                >
                  <g id="Group_2" data-name="Group 2">
                    <g id="Group_1" data-name="Group 1">
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M407.273,0C345.205,0,302.8,35.793,265.379,67.375c-31.162,26.275-58.042,48.989-90.833,48.989h-128C14.569,116.364,0,176.687,0,232.727S14.569,349.091,46.545,349.091h128c32.791,0,59.671,22.714,90.833,48.989,37.423,31.581,79.826,67.375,141.894,67.375C476.02,465.455,512,348.369,512,232.727S476.02,0,407.273,0Zm0,418.909c-19.759,0-58.182-65.722-58.182-186.182S387.514,46.545,407.273,46.545s58.182,65.722,58.182,186.182S427.031,418.909,407.273,418.909Z"
                        fill="#fff"
                      />
                    </g>
                  </g>
                  <g id="Group_4" data-name="Group 4">
                    <g id="Group_3" data-name="Group 3">
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M389.958,165.376a11.63,11.63,0,0,0-14.522,10.008,535.792,535.792,0,0,0-3.072,57.344,529.206,529.206,0,0,0,3.1,57.321,11.605,11.605,0,0,0,11.566,10.38,11.511,11.511,0,0,0,2.932-.372,69.528,69.528,0,0,0,0-134.681Z"
                        fill="#fff"
                      />
                    </g>
                  </g>
                  <g id="Group_6" data-name="Group 6">
                    <g id="Group_5" data-name="Group 5">
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        d="M217.321,430.545A15.366,15.366,0,0,1,202.706,420l-13.1-39.261c-1.4-4.189-6.447-7.4-10.822-8.029a33.205,33.205,0,0,0-4.236-.349h-79.8a11.646,11.646,0,0,0-11.194,14.824l26.019,91.043A46.757,46.757,0,0,0,154.321,512h63A38.735,38.735,0,0,0,256,473.321v-4.1A38.736,38.736,0,0,0,217.321,430.545Z"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>

                <p>
                  <strong>SPEAKERS</strong>
                  <span> 4 Rockstar Speakers </span>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mt-20 mb-20">
              <div className="block-info-1">
                <a
                  href="#tickets"
                  className="scroll but"
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

      {/* <!--Speakers section--> */}
      <section id="speakers" className="speakers pt-60 brd-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-50 text-center">
              <h1 className="title">Speakers</h1>
            </div>
          </div>
        </div>

        <div className="block-content row">
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://pbs.twimg.com/profile_images/1292888896938729473/tDmJ1K6m_400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Cassidy Williams</strong>
                    <span>
                      Principal Developer Experience Engineer, Netlify{" "}
                    </span>
                  </p>
                  <ul className="block-social">
                    <li>
                      <a
                        href="https://github.com/cassidoo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/cassidoo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/cassidoo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q.jpg"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Kent C. Dodds</strong>
                    <span>Technical Trainer</span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/kentcdodds/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/kentcdodds/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/kentcdodds"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://media.graphcms.com/output=format:jpg/resize=fit:crop,height:500,width:500/2jqu4t6TSlKDcqRFP6zT"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Max Stoiber</strong>
                    <span>Staff Software Engineer, Gatsby</span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/mxstbr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/mxstbr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mxstbr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://pbs.twimg.com/profile_images/1105185322084847623/EPx48HPQ_400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Christian Nwamba</strong>
                    <span>Senior Cloud Developer Advocate, Microsoft </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/christiannwamba"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/codebeast"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/christian-nwamba-032b04b2/?originalSubdomain=ng"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img src={shodipoayomide} alt="" />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Shodipo Ayomide</strong>
                    <span>
                      Founder, unStack Africa & Senior Developer Advocate{" "}
                    </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/developerayo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/developerayo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/shodipo-ayomide"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://avatars2.githubusercontent.com/u/26261917?s=400&u=6a307e226cd2aef7f38968644047a8e80e336a4f&v=4"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Kingdom Orjiewuru </strong>
                    <span>
                      Co-Founder unStack Africa & Software Engineer, Aula{" "}
                    </span>
                  </p>
                  <ul className="block-social">
                    <li>
                      <a
                        href="https://github.com/kingisaac95"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/kingisaac95?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/kingdomorjiewuru"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="schedule" className="schedule pt-60 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-50 text-center">
              <h1 className="title"> Schedule</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="sub-title-0  mb-25">
                <span className="gradient-text">Main Stage</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4 ">
              <ul className="block-tabs">
                <li className="active">
                  <svg
                    id="Layer_1"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 512 512"
                    width="512"
                    style={{ width: "30" }}
                  >
                    <g>
                      &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <path
                        d="m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <strong className="ml-3 ">Day 1</strong>{" "}
                  <span>- 23 july 2020</span>
                  {/*</li>
                 <li className="">
                  <svg
                    id="Layer_1"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 512 512"
                    width="512"
                    style={{ width: "30" }}
                  >
                    <g>
                      &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <path
                        d="m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <strong className="ml-3 ">Day 2</strong>{" "}
                  <span>- 24 july 2020</span> */}
                </li>
                {/* <li className="">
                  <i className="et-line-calendar"></i>
                  <strong>Day 3 if possible haha</strong> <span>- 10 july 2020</span>
                </li>
                <li className="">
                  <i className="et-line-calendar"></i>
                  <strong>Day 4 if possible haha</strong> <span>- 10 july 2020</span>
                </li> */}
              </ul>
            </div>
            <div className="col-sm-8 ">
              <ul className="block-tab">
                <li className="active ">
                  <div className="block-date">
                    <svg
                      id="Layer_1"
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      width="512"
                      style={{ width: "30" }}
                    >
                      <g>
                        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <path
                          d="m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <strong className="ml-3 ">Day 1</strong>{" "}
                    <span>- 10 july 2020</span>
                  </div>
                  <div className="block-detail">
                    <span className="time">10:00 - 10:10</span>
                    <span className="topic">Attendees OnBoarding</span>
                    <div className="block-text">
                      {/* <p>
                        for description
                      </p> */}
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="#wrapper"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          ZOOM :)
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">10:10 - 11:20</span>
                    <span className="topic">Overview</span>
                    <div className="block-text">
                      <p>
                        Hello, I am a human who landed in space to say hi to the
                        aliens who love here, when I got here I figured there
                        wasnt any aliens here and i ran out of fuel in my
                        rocket, now i'm stuck in space, help, Hahaha, thanks for
                        coming to my ted talk - Developerayo
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/developerayo"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Adora Nwodo
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">11:30 - 12:00</span>
                    <span className="topic">Second Speaker Topic Here</span>
                    <div className="block-text">
                      <p>
                        Hello, I am a human who landed in space to say hi to the
                        aliens who love here, when I got here I figured there
                        wasnt any aliens here and i ran out of fuel in my
                        rocket, now i'm stuck in space, help, Hahaha, thanks for
                        coming to my ted talk - Developerayo
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/developerayo"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Shodipo Ayomide
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">12:00 - 1:00</span>
                    <span className="topic">Time to Contribute</span>
                    <div className="block-text">
                      <p>
                        This session is all about contributions where everyone
                        contributes all they have worked on in a single hour and
                        comes back to the call in 1 hour.
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/developerayo"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Shodipo Ayomide
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">1:00 - 2:00</span>
                    <span className="topic">Time to Showcase your PR</span>
                    <div className="block-text">
                      <p>
                        PRs would be showcased directly on the website and you
                        would talk in 5 minutes how you fixed that issue.
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Moderator
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/adora"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Adora
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">2:00 - 2:20</span>
                    <span className="topic">Third Speaker Topic Here</span>
                    <div className="block-text">
                      <p>
                        Hello, I am a human who landed in space to say hi to the
                        aliens who love here, when I got here I figured there
                        wasnt any aliens here and i ran out of fuel in my
                        rocket, now i'm stuck in space, help, Hahaha, thanks for
                        coming to my ted talk - Developerayo
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/adora"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Adora
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">2:20 - 2:40</span>
                    <span className="topic">Forth Speaker Topic Here</span>
                    <div className="block-text">
                      <p>
                        Hello, I am a human who landed in space to say hi to the
                        aliens who love here, when I got here I figured there
                        wasnt any aliens here and i ran out of fuel in my
                        rocket, now i'm stuck in space, help, Hahaha, thanks for
                        coming to my ted talk - Developerayo
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/adora"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Adora
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">2:40 - 3:00</span>
                    <span className="topic">
                      Networking & Questions to all Speakers
                    </span>
                  </div>
                  <div className="block-detail">
                    <span className="time">3:00</span>
                    <span className="topic">Screenshots :)</span>
                  </div>
                </li>

                {/* <!--Day 2 Hehehe--> */}

                <li>
                  <div className="block-date">
                    <svg
                      id="Layer_1"
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      width="512"
                      style={{ width: "30" }}
                    >
                      <g>
                        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <path
                          d="m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <strong className="ml-3 ">Day 2</strong>{" "}
                    <span>- 11 july 2020</span>
                  </div>
                  <div className="block-detail">
                    <span className="time">10:00 - 10:30</span>
                    <span className="topic">Attendees OnBoarding</span>
                    <div className="block-text">
                      {/* <p>
                        for description
                      </p> */}
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="#wrapper"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          ZOOM :)
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">10:30 - 11:00</span>
                    <span className="topic">First Speaker Topic Here</span>
                    <div className="block-text">
                      <p>
                        Hello, I am a human who landed in space to say hi to the
                        aliens who love here, when I got here I figured there
                        wasnt any aliens here and i ran out of fuel in my
                        rocket, now i'm stuck in space, help, Hahaha, thanks for
                        coming to my ted talk - Developerayo
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/developerayo"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Shodipo Ayomide
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">11:30 - 12:00</span>
                    <span className="topic">Second Speaker Topic Here</span>
                    <div className="block-text">
                      <p>
                        Hello, I am a human who landed in space to say hi to the
                        aliens who love here, when I got here I figured there
                        wasnt any aliens here and i ran out of fuel in my
                        rocket, now i'm stuck in space, help, Hahaha, thanks for
                        coming to my ted talk - Developerayo
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/developerayo"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Shodipo Ayomide
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">12:00 - 1:00</span>
                    <span className="topic">Time to Contribute</span>
                    <div className="block-text">
                      <p>
                        This session is all about contributions where everyone
                        contributes all they have worked on in a single hour and
                        comes back to the call in 1 hour.
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/developerayo"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Shodipo Ayomide
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">1:00 - 2:00</span>
                    <span className="topic">Time to Showcase your PR</span>
                    <div className="block-text">
                      <p>
                        PRs would be showcased directly on the website and you
                        would talk in 5 minutes how you fixed that issue.
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Moderator
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/adora"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Adora
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">2:00 - 2:20</span>
                    <span className="topic">Third Speaker Topic Here</span>
                    <div className="block-text">
                      <p>
                        Hello, I am a human who landed in space to say hi to the
                        aliens who love here, when I got here I figured there
                        wasnt any aliens here and i ran out of fuel in my
                        rocket, now i'm stuck in space, help, Hahaha, thanks for
                        coming to my ted talk - Developerayo
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/adora"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Adora
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">2:20 - 2:40</span>
                    <span className="topic">Forth Speaker Topic Here</span>
                    <div className="block-text">
                      <p>
                        Hello, I am a human who landed in space to say hi to the
                        aliens who love here, when I got here I figured there
                        wasnt any aliens here and i ran out of fuel in my
                        rocket, now i'm stuck in space, help, Hahaha, thanks for
                        coming to my ted talk - Developerayo
                      </p>
                      <span className="speaker">
                        {" "}
                        <strong style={{ color: "grey" }}>
                          Speaker
                        </strong> :{" "}
                        <a
                          href="https://twitter.com/adora"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Adora
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="block-detail">
                    <span className="time">2:40 - 3:00</span>
                    <span className="topic">
                      Networking & Questions to all Speakers
                    </span>
                  </div>
                  <div className="block-detail">
                    <span className="time">3:00</span>
                    <span className="topic">Screenshots :)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="counter pt-50 pb-120 overlay parallax">
        <div className="timeLeft-bg"></div>

        <div className="container" style={{ marginTop: "30px" }}>
          <div className="row">
            <div className="col-sm-12  text-center  front-p">
              <h1 className="time-left-h1">
                Time left until the summit start{" "}
              </h1>
              <p className="time-left-p">
                10th July 2020, 10:00 AM (GMT +1) - Open-Source Virtual Summit
                Lagos, Nigeria{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Speakers section--> */}
      <section id="speakers" className="speakers pt-60 brd-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-50 text-center">
              <h1 className="title">The Team</h1>
            </div>
          </div>
        </div>

        <div className="block-content row">
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img src={shodipoayomide} alt="" />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Shodipo Ayomide</strong>
                    <span>
                      Founder, unStack Africa & Senior Developer Advocate{" "}
                    </span>
                  </p>
                  <ul className="block-social">
                    <li>
                      <a
                        href="https://github.com/developerayo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/developerayo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/shodipo-ayomide"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1573460393072/-F1dY-wHG.jpeg?auto=compress"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Adora Nwodo</strong>
                    <span>Co-Founder, Software Engineer, Microsoft</span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/AdoraNwodo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/AdoraNwodo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/adoranwodo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://avatars2.githubusercontent.com/u/26261917?s=400&u=6a307e226cd2aef7f38968644047a8e80e336a4f&v=4"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Kingdom Orjiewuru </strong>
                    <span>
                      Co-Founder unStack Africa & Software Engineer, Aula{" "}
                    </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/kingisaac95"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/kingisaac95?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/kingdomorjiewuru"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHdeW4urJG-oA/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=tndVQnfaNQhNXHUgSAYKRgdiS-oUuT69Ifp89F0NG7I"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Emmanuel Odianosen</strong>
                    <span>Co-Founder & Blockchain Software Engineer </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/emmaodia"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/iam_odiaa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/emmaodia"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://miro.medium.com/fit/c/210/210/2*FjRi6nGxz5ILWZ4_R2wobQ.jpeg"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Marvin Ogah</strong>
                    <span>Co-Founder & lead Designer </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://dribbble.com/dudesoamazing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/marvinographer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/marvinogah"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img src="https://kofo.dev/images/avatar.jpg" alt="" />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Kofo Okeshola</strong>
                    <span>Lead Go Organizer, Systems Engineer, Brankas</span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/kofoworola"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/yoruba_dev?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/kofo-okesola-ab3774128"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHdeW4urJG-oA/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=tndVQnfaNQhNXHUgSAYKRgdiS-oUuT69Ifp89F0NG7I"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Princess Oluebube</strong>
                    <span>
                      Co-Lead React Organizer & Software Engineer, Powertofly
                    </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/Princesso"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/PrincesOluebube"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/egbunaoluebubeprincess"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHdeW4urJG-oA/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=tndVQnfaNQhNXHUgSAYKRgdiS-oUuT69Ifp89F0NG7I"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Ademola Adebuyi</strong>
                    <span>
                      Co-Lead React Organizer & Software Engineer, Paystack{" "}
                    </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/ooade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/_ooade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/ooade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHdeW4urJG-oA/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=tndVQnfaNQhNXHUgSAYKRgdiS-oUuT69Ifp89F0NG7I"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Shodipo Michael</strong>
                    <span>Co-Lead Design & Product Designer</span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/CodeMania123"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/design_spree"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/michael-shodipo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHdeW4urJG-oA/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=tndVQnfaNQhNXHUgSAYKRgdiS-oUuT69Ifp89F0NG7I"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Olumide Okedusi</strong>
                    <span>Community Manger & Software Engineer, Sidmach </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/lumie31"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/lumie31"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/olumideokedusi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHdeW4urJG-oA/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=tndVQnfaNQhNXHUgSAYKRgdiS-oUuT69Ifp89F0NG7I"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Chiamaka Okenwa</strong>
                    <span>
                      Community Manager & Software Developer, 3Line Card
                      Management Limited{" "}
                    </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/amakachii_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/chiamakaokenwa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pd-0">
            <div className="block-speaker">
              <div className="block-img overlay soft">
                <div className="background-img">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHdeW4urJG-oA/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=tndVQnfaNQhNXHUgSAYKRgdiS-oUuT69Ifp89F0NG7I"
                    alt=""
                  />
                </div>
                <div className="block-info-2">
                  <p>
                    <strong>Ayomide Oso</strong>
                    <span>
                      Community Manager & Front-end Developer, ELTA Solutions{" "}
                    </span>
                  </p>
                  <ul className="block-social ">
                    <li>
                      <a
                        href="https://github.com/#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/susanspecs
"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ng.linkedin.com/in/ayomide-oso-385a29167"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Sponsors--> */}
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
                <img src={cloudinary} alt="" className="move-right" />
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
                <img
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
                <img
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
                <img
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
                <img src={paystack} alt="" className="move-right" />
              </a>
            </div>
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://hashnode.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={hashnode} alt="" className="move-right" />
              </a>
            </div>
            <div className="sponsor-blk col-sm-2 mt-2">
              <a
                href="https://gatsby.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
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
                <img
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
                <img
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
                <img
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
                <img
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
                  {/* <img src={logo3} alt="" /> */}
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="block-sponsor">
                  {/* <img src={logo1} alt="" /> */}
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="block-sponsor">
                  {/* <img src={logo4} alt="" /> */}
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="block-sponsor">
                  {/* <img src={logo2} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="location pt-200 pb-200 bg-dark">
        <div className="block-map ">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img src={unstacklocate} alt="unstack" />
        </div>

        <div className="container block-contact">
          <div className="row">
            <div className="col-md-5 col-md-offset-7 col-sm-5 col-sm-offset-7">
              <h1 className="title">Reach out to the developer community </h1>
            </div>
            <div className="col-md-5 col-md-offset-7 col-sm-5 col-sm-offset-7">
              <div className="block-info-3">
                <p>
                  Africa | Lagos, Nigeria = HQ
                  <br />
                  <br />
                  <i className="icon-twitter"></i>{" "}
                  <a
                    href="https://twitter.com/unstackafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    Twitter
                  </a>{" "}
                  <br />
                  <i className="icon-slack"></i>
                  <a
                    href="https://join.slack.com/t/unstackdev/shared_invite/zt-9bowaas5-jhDbuts0FEJVKOaNz~1C4g"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    Slack
                  </a>{" "}
                  <br />
                  Email :{" "}
                  <a
                    href="mailto:unstackdev@gmail.com"
                    style={{ color: "white" }}
                  >
                    unstackdev@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  currently have a community in 7 african countries since our
                  launch in 2019 and our most rencent one which is outised
                  africa is "unStack-Dubai"
                </p>
              </div>
              <div className="block-faq mb-50">
                <h4 className="mb-10">What kind of events do unStack have?</h4>
                <p>
                  unStack dosen't just host conferences, we also host small
                  meetups across all our communitires in Nairobi, Ghana, dubai
                  and so on.
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
                <a
                  href="mailto:unstackdev@gmail.com"
                  style={{ color: "white" }}
                >
                  unstackdev@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery pt-100">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-50 ">
              <h1 className="title mt-10 text-center"> Feel The Vibes </h1>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="box">
            <div className="boxInner">
              <img src={event1} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={event2} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={event3} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={event4} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={event5} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={event6} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={replace} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={replace} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={replace} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={replace} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={replace} alt="gallery" />
            </div>
          </div>
          <div className="box">
            <div className="boxInner">
              <img src={replace} alt="gallery" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </Fragment>
)
export default HomePage
