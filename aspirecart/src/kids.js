import React, { Component } from "react";
import "./Style.css";

class Kids extends Component {
  Navigate() {
    window.location.href = "/Explore";
  }
  render() {
    return (
      <div>
        <div className="romantic">
          <div className="dramas imgb">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Frozen
                <h5>
                  drama,comedy | 4.4 rating
                  <br></br>
                  <h5 className="h5s">
                    299898 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹79</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
          </div>
          <div className="dramas1 imgb1">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Igor
                <h5>
                  drama | 4.0 rating
                  <br></br>
                  <h5 className="h5s">
                    4989 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹59</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
          </div>

          <div className="dramas2 imgb2">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Fairy Tale
                <h5>
                  trending | 4.8 rating
                  <br></br>
                  <h5 className="h5s">
                    6547665 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹799</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
          </div>
          <div className="dramas3 imgb3">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Lorax
                <h5>
                  politics | 2.4 rating
                  <br></br>
                  <h5 className="h5s">
                    636620 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹129</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
          </div>
        </div>
        <div className="divline"></div>
      </div>
    );
  }
}

export default Kids;
