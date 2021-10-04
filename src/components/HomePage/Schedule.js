import React from "react"

const Schedule = () => {
  return (
    <section id="schedule" className="schedule pt-60 pb-40">
      <div className="container">
        <div className="row">
          <section id="schedule" className="schedule pt-60 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 mb-50 text-center">
                  <h1 className="title"> Schedule </h1><br />
                  <small>
                    Please note: All session times are in West African Time
                    (WAT), GMT+1.
                  </small>
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
                      <span>- 6th November 2021</span>
                    </li>
                    {/* <li className="">
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
                      <span>- 7th November 2020</span>
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
                              fill="#fff"/>
                          </g>
                        </svg>
                        <strong className="ml-3 ">Day 1</strong>{" "}
                        <span>- 6th November 2021</span>
                      </div>


                      <div className="block-detail">
                        <span className="time">10:00 - 10:15</span>
                        <span className="topic">Welcome to The unStack Africa Conference 3.0</span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            WELCOME 
                          </h6>
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
                          </a>
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">10:15 - 10:20</span>
                        <span className="topic">Commencement</span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            OVERVIEW
                          </h6>

                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/AdoraNwodo"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Adora Nwodo
                          </a>
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">10:20 - 10:45</span>
                        <span className="topic">
                          How culture changes everything in Engineering Teams{" "}
                          <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            Keynote
                          </h6>
                        </span>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/matvelloso"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Mat Velloso
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">10:45 - 11:15</span>
                        <span className="topic">
                         Code Search with Laravel & SourceGraph
                        </span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            LARAVEL
                          </h6>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/unicodeveloper"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Prosper Otemyuywa
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">11:15 - 11:45</span>
                        <span className="topic">
                          The Mechanics of Trading Engines/Automated Markets.
                        </span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            TRADING ENGINES
                          </h6>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/bigbrutha_"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Jude Dike
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">11:45 - 12:15</span>
                        <span className="topic">
                          Strategies for Creating Reusable Components with VueJS
                        </span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            VUEJS
                          </h6>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/SamuelSnopko"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Samuel Snopko
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">12:15 - 12:45</span>
                        <span className="topic">TBD</span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            GITHUB ACTIONS
                          </h6>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Pricila Heller
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">12:45 - 1:10</span>
                        <span className="topic">
                          TBD
                        </span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            OPEN SOURCE
                          </h6>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/Samson_Goddy"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Samson Goddy
                          </a>{" "}
                        </span>
                      </div>
                      
                      <div className="block-detail">
                        <span className="time">1:10 - 1:20</span>
                        <span className="topic">Networking & Coffee Break</span>
                      </div> 


                      <div className="block-detail">
                        <span className="time">1:20 - 1:35</span>
                        <span className="topic">
                          Sponsors Session 
                        </span>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/AdoraNwodo"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Adora Nwodo
                          </a>{" "}
                        </span>
                      </div>

                      

                      <div className="block-detail">
                        <span className="time">1:35 - 2:05</span>
                        <span className="topic">
                          TBD
                        </span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            GRAPHQL
                          </h6>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/kingisaac95"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Kingdom Orjiewuru
                          </a>{" "}
                        </span>
                        </div>

                      <div className="block-detail"> 
                        <span className="time">2:05 - 2:35</span>
                        <span className="topic">
                          Making HTTP Calls in a Vue App Using Axios
                        </span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            VUEJS
                          </h6>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/ifeoma__N"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Ifeoma Nwosu
                          </a>{" "}
                        </span>
                      </div>

                        <div className="block-detail">
                        <span className="time">2:35 - 3:00</span>
                        <span className="topic">
                          The CaaS Model: Why Collaboration is a Win-Win For All
                        </span>
                        <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            Keynote
                          </h6>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/aniediudo"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Aniedi Udo-Obong
                          </a>{" "}
                        </span>
                      </div>
                      
                      <div className="block-detail">
                        <span className="time">3:00 - 3:30</span>
                        <span className="topic">End & Pictures</span>
                      </div>
                    

                    {/* <li>
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
                        <span>- 7th November 2020</span>
                      </div>
                      <div className="block-detail">
                        <span className="time">10:00 - 10:10</span>
                        <span className="topic">Welcome to unStack Africa</span>

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
                          </a>
                        </span>
                      </div>
                      <div className="block-detail">
                        <span className="time">10:10 - 10:15</span>
                        <span className="topic">Commencement</span>

                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/AdoraNwodo"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Adora Nwodo
                          </a>
                        </span>
                      </div>
                      <div className="block-detail">
                        <span className="time">10:15 - 10:35</span>
                        <span className="topic">
                        Evolving the Open Source Ecosystem
                          <h6 style={{ color: "#E49205", fontWeight: "bold" }}>
                            Keynote
                          </h6>
                        </span>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/amcasari"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Amanda Casari
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">10:35 - 11:05</span>
                        <span className="topic">Building Confidence & Shipping faster with Automated CI/CD</span>

                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/kingisaac95"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Kingdom Orjiewuru
                          </a>{" "}
                        </span>
                      </div>
                      <div className="block-detail">
                        <span className="time">11:05 - 11:40</span>
                        <span className="topic">
                          Building design systems with React and Chakra UI
                        </span>

                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/thesegunadebayo"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Segun Adebayo
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">11:40 - 12:15</span>
                        <span className="topic">
                          React Hooks and Functional Components
                        </span>

                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/tomisinlalude"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Oluwatomisin Lalude
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">12:15 - 12:50</span>
                        <span className="topic">Next.js on AWS</span>

                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/dabit3"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Nader Dabit
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">12:50 - 1:25</span>
                        <span className="topic">Get Started with Sanity.io and Next.js</span>

                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/kmelve"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Knut Melvaer
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">1:25 - 2:00</span>
                        <span className="topic">
                          React Security Implications You Need to Consider
                        </span>
                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/jamesqquick"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            James Q Quick
                          </a>{" "}
                        </span>
                      </div>

                      <div className="block-detail">
                        <span className="time">2:00 - 2:10</span>
                        <span className="topic">
                          Web Monetization in Africa
                        </span>

                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/hacksultan"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Akintunde Sultan
                          </a>{" "}
                        </span>
                      </div>
                      <div className="block-detail">
                        <span className="time">2:40 - 3:30</span>
                        <span className="topic">
                        Segun Adebayo // Chakra UI v1.0 Online Announcement & Demo 
                        </span>

                        <span className="speaker">
                          {" "}
                          <strong style={{ color: "grey" }}>
                            Speaker
                          </strong> :{" "}
                          <a
                            href="https://twitter.com/thesegunadebayo"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Segun Adebayo & Mark Chandler
                          </a>{" "}
                        </span>
                      </div>
                      
                      <div className="block-detail">
                        <span className="time">4:00</span>
                        <span className="topic">End & Screenshots</span>
                      </div> */}
                    </li> 
                  </ul> 
                </div>
              </div> 
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Schedule
