import React, { Component } from "react";
import "./order.css";
import { useState, useRef } from "react";
import axios from "axios";
import carts from "./db.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Order() {
  const [state, setState] = useState(true);

  const inputCap = useRef(null);

  const ChangeScreen = () => {
    setState(false);
  };
  const ChangeScreen1 = () => {
    setState(true);
  };

  var random = Math.floor(Math.random() * 1000);

  const FormSwitch = () => {
    if (state === true) {
      return (
        <div>
          <center>
            <div className="details">
              <div className="banner">
                <div onClick={ChangeScreen1} className="address">
                  <h1 className="texta" onClick={ChangeScreen1}>
                    Add Address
                  </h1>
                </div>
                <div onClick={ChangeScreen} className="payment">
                  <h1 className="texta colorc">Payement</h1>
                </div>
              </div>
              <div>
                <input placeholder="House/Flat" className="house"></input>

                <div className="display">
                  <input
                    placeholder="Street"
                    className="house inchange"
                  ></input>
                  <input
                    placeholder="District   "
                    className="house inchange   "
                  ></input>
                </div>
                <input placeholder="Landmark" className="house"></input>
                <div className="display">
                  <input
                    placeholder="Zipcode"
                    className="house inchange"
                  ></input>
                  <input
                    placeholder="State   "
                    className="house inchange   "
                  ></input>
                </div>
                <div className="mar">
                  <label onClick={ChangeScreen} className="next">
                    Next
                  </label>
                </div>
              </div>
            </div>
          </center>
        </div>
      );
    } else if (state == false) {
      return (
        <div>
          <center>
            <div className="details">
              <div className="banner">
                <div onClick={ChangeScreen1} className="address colorccc">
                  <h1 className="texta colorc">Add Address</h1>
                </div>
                <div onClick={ChangeScreen} className="payment colorcc">
                  <h1 className="texta ">Payement</h1>
                </div>
              </div>
              <div>
                <input placeholder="Name On Card" className="house"></input>
                <input
                  minLength={16}
                  type="password"
                  placeholder="Card Number"
                  className="house"
                  maxLength={16}
                ></input>
                <div className="display">
                  <input
                    placeholder=" Expiry  MM/YY"
                    className="house inchange"
                    maxLength={5}
                  ></input>
                  <input
                    maxLength={3}
                    minLength={3}
                    type="password"
                    placeholder="CVV "
                    className="house inchange   "
                  ></input>
                </div>
                <div className="captchaa">
                  <h1 className="captcha">{random}</h1>
                  <input
                    ref={inputCap}
                    className="house inchange changee"
                    placeholder="Enter the captcha"
                    ></input>
                </div>
                <div className="mar">
                  <label onClick={PlaceOder} className="next">
                    $ {localStorage.getItem("price")} Place Order
                  </label>
                </div>
              </div>
            </div>
          </center>
        </div>
      );
    }
  };

  const PlaceOder = () => {
    var captcha = inputCap.current.value;
    if (captcha == random) {
      var count = 1;
      carts.cart.forEach((Items) => {
        axios.delete("http://localhost:3000/cart/" + count);
        count = count + 1;
      });
      const notify = () => toast.dark("Order placed Successfully");
      notify();
      window.location.href = "/Explore";
    } else {
      const notify = () => toast.dark("Oops Incorrect Captcha");
      notify();
    }
  };

  return (
    <div>
      <FormSwitch />
      <ToastContainer />
    </div>
  );
}

export default Order;
