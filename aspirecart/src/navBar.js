import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdPower } from "react-icons/io";
import cartItems from "./db.json";
import axios from "axios";
import carts from "./db.json";
class Nav extends Component {
  logout() {
    if (document.getElementById("11").style.display == "block") {
      document.getElementById("11").style.display = "none";
    } else {
      document.getElementById("11").style.display = "block";
    }
  }
  logoff() {
    localStorage.setItem("car", "Guest");
    var count = 1;
    carts.cart.forEach((Items) => {
      axios.delete("http://localhost:3000/cart/" + count);
      count = count + 1;
    });
    window.location.href = "/";
  }

  render() {
    let cart = 0;
    cartItems.cart.forEach((items) => {
      cart = cart + 1;
    });
    return (
      <div className="test">
        <header>
          <nav>
            <Link to="Home/Drama">
              <div className="logo"></div>
            </Link>
            <input placeholder="    Search"></input>

            <Link to={"Explore"}>
              <button>Explore</button>
            </Link>
            <Link to={"OurTeam"}>
              <button>Our Team</button>
            </Link>
            <Link to={"dummy"}>
              <button>Contact Us</button>
            </Link>
            <Link to={"Women"}>
              <button>My Cart {cart} </button>
            </Link>
            <div className="adjust">
              <div className="adj" onClick={() => this.logout()}>
                {<MdOutlineAccountCircle color="white" size={35} />}
                <div onClick={() => this.logoff()} className="logout" id="11">
                  <h5 className="adjust1 min"> ❌ {"   "}Logout</h5>
                </div>
              </div>
              <h5 className="adjust1">{localStorage.getItem("car")}</h5>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
