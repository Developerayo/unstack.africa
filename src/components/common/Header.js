import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"

const Header = (props) => (
  <header className="header">
    <div className="container">
      <div className="mobile-but">
        <div className="lines"></div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Link className="scroll logo" to="/">
            <img src={logo} alt="Unstack" />
          </Link>
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
                <a className="scroll" href="/#about">
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
                <a className="scroll" href="/#speakers">
                  Speakers
                </a>
              </li>
              <li>
                <a className="scroll" href="/#schedule">
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
                <a className="scroll" href="/#gallery">
                  Pictures
                </a>
              </li>
                <li>
                  <Link
                    className="but scroll"
                    style={{
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                    to="/ticket"
                  >
                    Get Tickets
                  </Link>
                </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

// const Header = (props) => (
//   <Router>
//     <header className="header">
//       <div className="container">
//         <div className="mobile-but">
//           <div className="lines"></div>
//         </div>
//         <div className="row">
//           <div className="col-md-3">
//             <a className="scroll logo" href="#wrapper">
//               <img src={logo} alt="" />
//             </a>
//           </div>
//           <div className="col-md-9 nav-container text-right">
//             <nav className="main-nav">
//               <ul>
//                 <li>
//                   <Link className="scroll mt-5" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="scroll" to="#about">
//                     Event
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="scroll" to="#speakers">
//                     Speakers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="scroll" to="#schedule">
//                     Schedule
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="scroll"
//                     to="https://blog.unstack.africa"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="scroll" to="#gallery">
//                     Pictures
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="but scroll"
//                     style={{
//                       borderRadius: "5px",
//                       padding: "10px",
//                     }}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     to="/tickets"
//                   >
//                     Get Tickets
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//         </div>
//       </header>

//       {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//       <Switch>
//         <Route path="/tickets">
//           <Tickets />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//       </Switch>
//   </Router>
// )

export default Header
