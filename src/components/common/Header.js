import React from "react";
import logo from "../../assets/img/logo.png";

const Header = (props) => (
  <header className="header">
    <div className="container ">
      <div className="row">
        <div className="col-md-2">
          <a className="scroll logo" href="#wrapper">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="col-md-10 text-right">
          <nav className="main-nav">
            <div className="toggle-mobile-but">
              <a href="#hello" onClick={(ev) => ev.preventDefault()} className="mobile-but">
                <div className="lines"></div>
              </a>
            </div>
            <ul>
              <li>
                <a className="scroll" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="scroll" href="#about">
                  Event
                </a>
              </li>
              <li>
                <a className="scroll" href="https://unstack.africa/communities" target="_blank">
                  Communities
                </a>
              </li>
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
                <a className="scroll" href="https://blog.unstack.africa" target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <a className="scroll" href="#gallery">
                  Pictures
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
