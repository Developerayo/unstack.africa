import React from "react"
import logo from "../../assets/img/logo.png"

const Header = (props) => (
  <header className="header">
    <div className="container">
      <div className="mobile-but">
        <div className="lines"></div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <a className="scroll logo" href="#wrapper">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="col-md-9 nav-container text-right">
          <nav className="main-nav">
            <ul>
              <li>
                <a className="scroll mt-5" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="scroll" href="#about">
                  Event
                </a>
              </li>
              {/* <li>
                <a
                  className="scroll"
                  href="https://unstack.africa/communities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Communities
                </a>
              </li> */}
              <li>
                <a className="scroll" href="#speakers">
                  Speakers
                </a>
              </li>
              <li>
                <a className="scroll" href="#schedule">
                  Schedule
                </a>
              </li>
              <li>
                <a
                  className="scroll"
                  href="https://blog.unstack.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a className="scroll" href="#gallery">
                  Pictures
                </a>
              </li>
              <li>
                <a
                  className="but scroll"
                  style={{
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                  href="https://t.co/3cmzMQWMDa?amp=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Tickets
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
export default Header
