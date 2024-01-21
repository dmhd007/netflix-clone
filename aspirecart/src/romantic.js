import React, { Component } from "react";
import "./Style.css";

class Romantic extends Component {
  Navigate() {
    window.location.href = "/Explore";
  }
  render() {
    return (
      <div>
        <div className="romantic">
          <div className="dramass1">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Titanic
                <h5>
                  Drama,Comedy | 4.4 rating
                  <br></br>
                  <h5 className="h5s">
                    299898 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹119</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
          </div>
          <div className="dramass2">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Song One
                <h5>
                  Drama | 4.0 rating
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

          <div className="dramass3">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Silver Linings
                <h5>
                  Trending | 4.8 rating
                  <br></br>
                  <h5 className="h5s">
                    6547665 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹69</h2>
                    </center>
                  </h5>
                </h5>
                <br></br>
                <center> </center>
              </h6>
            </div>
          </div>
          <div className="dramass4">
            <div onClick={() => this.Navigate()} className="dramass">
              <h6>
                Amature Love
                <h5>
                  Politics | 2.4 rating
                  <br></br>
                  <h5 className="h5s">
                    636620 views
                    <br></br>
                    <center>
                      <h2 className="buy">₹239</h2>
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

export default Romantic;
