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
                    <h1 className="title"> Schedule</h1>
                    <small>Please note: All session times are in West African Time (WAT), GMT+1.</small>
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
                        <span>- 6th November 2020</span>
                      </li>
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
                        <span>- 7th November 2020</span>
                      </li>
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
                          <span>- 6th November 2020</span>
                        </div>
                        <div className="block-detail">
                          <span className="time">10:00 - 10:10</span>
                          <span className="topic">Welcome to unStack Africa</span>
                        
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/developerayo"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                 Shodipo Ayomide</a>
                            </span>
                          </div>
                        <div className="block-detail">
                          <span className="time">10:10 - 10:15</span>
                          <span className="topic">Commencement</span>
                        
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/AdoraNwodo"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                 Adora Nwodo</a>
                            </span>
                  
                        </div>
                        <div className="block-detail">
                          <span className="time">10:15 - 10:35</span>
                          <span className="topic">TBA <h6 style={{color: "#E49205", fontWeight:"bold"}}>Keynote</h6></span>
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/unicodeveloper"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                Prosper Otemuyiwa
                              </a>{" "}
                            </span>
                          </div>
                        <div className="block-detail">
                          <span className="time">10:35 - 11:10</span>
                          <span className="topic">
                          Declarative Data Fetching in React with GraphQL
                          </span>
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/Bolaji___"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                Bolaji Olajide
                              </a>{" "}
                            </span>
                          </div>
                        <div className="block-detail">
                          <span className="time">11:10 - 11:45</span>
                          <span className="topic">Handle Media Uploads with NextJs & Cloudinary</span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/domitriusclark"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                Domitrius Clark
                              </a>{" "}
                            </span>
                          </div>

                          <div className="block-detail">
                          <span className="time">11:45 - 12:20</span>
                          <span className="topic">A Practical Guide to Testing React Applications</span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/ph3bian"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                Chukwurah Phebian
                              </a>{" "}
                            </span>
                          </div>

                        <div className="block-detail">
                          <span className="time">12:20 - 12:55</span>
                          <span className="topic">
                          Gant Laborde
                          </span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/GantLaborde"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                Gant Laborde
                              </a>{" "}
                            </span>
                          </div>
        
                        <div className="block-detail">
                          <span className="time">12:55 - 1:30</span>
                          <span className="topic">
                          State Machines and State Charts
                          </span>
                         
                           
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/_ooade"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                Ademola Adegbuyi
                              </a>{" "}
                            </span>
                          </div>
                          <div className="block-detail">
                          <span className="time">1:30 - 1:50</span>
                          <span className="topic">TBA<h6 style={{color: "#E49205", fontWeight:"bold"}}>Keynote</h6></span>
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/aniediudo"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                Aniedi Udo-Ogbong
                              </a>{" "}
                            </span>
                          </div>
     
                        <div className="block-detail">
                          <span className="time">1:50 - 2:25</span>
                          <span className="topic">
                          Fast & Furious - Going headless with Nuxt.js
                          </span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                          <span className="time">2:25 - 3:00</span>
                          <span className="topic">
                          Quality over quantity in open-source
                          </span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                          <span>- 7th November 2020</span>
                        </div>
                        <div className="block-detail">
                        <span className="time">10:00 - 10:10</span>
                          <span className="topic">Welcome to unStack Africa</span>
                        
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/developerayo"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                 Shodipo Ayomide</a>
                            </span>
                          </div>
                        <div className="block-detail">
                          <span className="time">10:10 - 10:15</span>
                          <span className="topic">Commencement</span>
                        
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
                              <a
                                href="https://twitter.com/AdoraNwodo"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                 Adora Nwodo</a>
                            </span>
                  
                        </div>
                        <div className="block-detail">
                          <span className="time">10:15 - 10:35</span>
                          <span className="topic">TBA<h6 style={{color: "#E49205", fontWeight:"bold"}}>Keynote</h6></span>
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                          <span className="topic">
                          React Security Implications You Need to Consider
                          </span>
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                          <span className="time">11:05 - 11:40</span>
                          <span className="topic">Building design systems with React and Chakra UI</span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                          <span className="topic">React Hooks and Functional Components</span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                          <span className="topic">
                          Next.js on AWS
                          </span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                          <span className="topic">
                          Knut Melvaer
                          </span>
                         
                           
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                            Web Monetization in Africa
                          </span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                          <span className="time">2:00 - 2:35</span>
                          <span className="topic">
                            TBA
                          </span>
                         
                            <span className="speaker">
                              {" "}
                              <strong style={{ color: "grey" }}>
                                Speaker
                              </strong>{" "}
                              :{" "}
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
                        <div className="block-detail">
                          <span className="time">2:35</span>
                          <span className="topic">Screenshots :)</span>
                        </div>
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
