import React from "react"
import unstacklocate from "../../assets/img/unstack-locate.svg"

const Location = () => {
  return (
    <section id="location" className="location bg-dark">
      <div className="container">
        <div className="row locate">
          <div className="col-sm-12 col-md-6">
            <img
              loading="lazy"
              src={unstacklocate}
              alt="unstack"
              style={{ width: "320px" }}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <h1 className="title mt-40">
              Reach out to the developer community{" "}
            </h1>

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
  )
}

export default Location
