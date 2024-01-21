import React, { Component } from "react";
import "./trending.css";
import proData from "./products.json";
import ReactPlayer from "react-player";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { json } from "react-router-dom";
class Men extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      count: null,
    };
  }
  Trailer(e) {
    window.scroll(0, 0);
    document.getElementById("pop").style.display = "block";
    this.setState({
      link: e.target.id,
    });
  }

  AddtoCart(filmData) {
    if (localStorage.getItem("car") === "Guest") {
      alert("please Signin/SignUp");
      window.location.href = "/";
    } else {
      axios({
        method: "post",
        url: "http://localhost:3000/cart",
        data: {
          filmName: filmData.title,
          filmIng: filmData.img,
          filmPrice: filmData.price,
          filmrating: filmData.rating,
          filmView: filmData.views,
        },
      });
    }

    const notify = () => toast.dark("Item Added to Cart");
    notify();
  }

  render() {
    const filmData = proData.products.map((filmData) => {
      return (
        <div className="design left">
          <div className="img">
            <img className="imageClass" src={filmData.img}></img>
            <div>
              <h1 className="mre">{filmData.title}</h1>
              <h1 className="view">{filmData.views}</h1>
              <br></br>
              <h1 className="view pad">{filmData.rating}</h1>
              <h1 className="price">${filmData.price}</h1>
              <label
                onClick={(e) => this.Trailer(e)}
                className="trailer"
                id={filmData.link}
              >
                Watch Trailer
              </label>
              <br></br>
              <div className="arrange">
                <label
                  onClick={() => this.AddtoCart(filmData)}
                  className="addtocart"
                >
                  Add to Cart
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="explore">
          <cenetr>
            <h1>Explore</h1>
          </cenetr>
        </div>
        <center>
          <div className="popup" id="pop">
            <ReactPlayer
              url={this.state.link}
              height="450px"
              width="800px"
              controls
              playing
            ></ReactPlayer>
          </div>
        </center>
        {filmData}
        <ToastContainer />
      </div>
    );
  }
}

export default Men;
