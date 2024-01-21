import React, { Component } from "react";
import "./Style.css";

class Action extends Component {
  Navigate() {
    window.location.href = "/Explore";
  }
  render() {
    return (
      <div>
        <div className="romantic">
          <div className="dramas imgbb">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Rambo
                <h5>
                  drama,comedy | 4.4 rating
                  <br></br>
                  <h5 className="h5s">
                    299898 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹599</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
          </div>
          <div className="dramas1 imgbb1">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Sector 7
                <h5>
                  drama | 4.0 rating
                  <br></br>
                  <h5 className="h5s">
                    4989 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹99</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
          </div>

          <div className="dramas2 imgbb2">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Akira
                <h5>
                  trending | 4.8 rating
                  <br></br>
                  <h5 className="h5s">
                    6547665 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹199</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
          </div>
          <div className="dramas3 imgbb3">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Kaduva
                <h5>
                  politics | 2.4 rating
                  <br></br>
                  <h5 className="h5s">
                    636620 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹100</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
            <div className="buybutton"></div>
          </div>
        </div>

        <div className="divline"></div>
      </div>
    );
  }
}

export default Action;
