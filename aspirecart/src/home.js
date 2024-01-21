import React, { Component } from "react";

import "./Style.css";
import { Link } from "react-router-dom";
import Action from "./action";
import Kids from "./kids";
import Drama from "./drama";
import Romantic from "./romantic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Options from "./options";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Home extends Component {
  Route() {
    window.location.href = "/Explore";
  }
  Reload() {
    const notify = () => toast.dark(" Notification subscription added ");
    notify();
  }

  render() {
    return (
      <body>
        <div className="carousel">
          <div className="content">
            <div className="welcome">
              {" "}
              <h1></h1>
            </div>
            <p>
              Unlimited Movie,
              <br />
              TV Shows, & More{" "}
            </p>

            <div className="info">
              <div className="infobut">
                <span>4K</span>
                <label onClick={() => this.Route()} className="ll">
                  Explore Now
                </label>
                <label className="ll">Try Premium</label>
              </div>
            </div>
          </div>
          <div className="hed">
            <h1>Watch By Categories</h1>

            <br></br>
          </div>
          <Options />
          <div className="divline"></div>
          <Outlet />
          <div id="getHere" className="adban">
            <div className="backimg">
              <h3>
                Buy Movies & TV Shows For,<br></br> Friends & Family
              </h3>
              <div className="res"></div>
              <input
                className="enqury"
                placeholder="Get notified Through Email"
              ></input>
              <label onClick={() => this.Reload()} className="flabel submit">
                Submit
              </label>
            </div>
            <div className="adcontent"></div>
          </div>
          <div className="divline"></div>
          <ToastContainer />
        </div>
      </body>
    );
  }
}

export default Home;
