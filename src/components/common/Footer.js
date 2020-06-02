import React from "react";

const Footer = (props) => (
  <footer className="pt-120  bg-dark">
    <section className="subsribe text-center ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12  mb-30">
            <h5 className="">
              Subscribe for conference email and <br /> weekly emails from us every Monday
            </h5>
          </div>
          <div id="subscription_area">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="subscribe_now">
                    <form className="subscribe_form" action="">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Enter your email"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button">
                            subscribe
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <section className="top-footer pb-120">
      <div className="container ">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-2">
            <h2 className="sub-title-3 mb-30">About unStack</h2>
            <p className="">
              unStack is an open-source based conference/meetups for every engineer/designer &
              technical talents focused on hands-on workshops and world-class talks from around the
              world.
            </p>
            <ul className="block-social mt-20">
              <li>
                <a href="https://web.facebook.com/groups/unstackafrica/" target="_blank">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/unstackafrica" target="_blank">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCt_RhSqO7_lTAdeXBt4X2pg" target="_blank">
                  <i className="icon-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/unstackofficial" target="_blank">
                  <i className="icon-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div className="bottom-footer bg-black pt-50 pb-50">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <p> &copy; 2019 - 2020 unStack Africa.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
