import React, { Component, useState } from "react";
import "./cart.css";
import filmimg from "./images/kadu.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import "./trending.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Women() {
  const [cartData, setCart] = useState([]);

  const Delete = (e) => {
    axios.delete("http://localhost:3000/cart/" + e.target.id);
  };
  const MyCart = () => {
    axios.get("http://localhost:3000/cart").then((Response) => {
      setCart(Response.data);
    });
  };
  const Order = () => {
    if (Total != 0) {
      window.location.href = "/Order";
      localStorage.setItem("price", Total);
    } else {
      const notify = () => toast.dark("No Item in Cart");
      notify();
    }
  };

  let Total = 0;
  cartData.forEach((items) => {
    Total = Total + items.filmPrice;
  });

  MyCart();

  const datas = cartData.map((cartDatas) => {
    return (
      <div className="design  cheight">
        <div className="img">
          <img className="cartimg" src={cartDatas.filmIng}></img>
          <div>
            <div className="bet">
              <h1 className="mre margint">{cartDatas.filmName}</h1>
              <AiOutlineDelete
                className="new"
                onClick={(e) => Delete(e)}
                size="30px"
                id={cartDatas.id}
              />
            </div>
            <h1 className="view">{cartDatas.filmView}</h1>
            <br></br>
            <h1 className="view pad">{cartDatas.filmrating}</h1>
            <h1 className="price">${cartDatas.filmPrice}</h1>
          </div>
        </div>
      </div>
    );
  });

  const cartBill = cartData.map((purchased) => {
    return (
      <div className="headPrice">
        <h1 className="heading colorc">{purchased.filmName}</h1>
        <h1 className="heading colorc">${purchased.filmPrice}</h1>
      </div>
    );
  });
  return (
    <div className="last">
      <div className="groo">{datas}</div>
      <div className="gorooo">
        <div className="headPrice">
          <h1 className="heading">Items</h1>
          <h1 className="heading ">Price</h1>
        </div>
        {cartBill}
        <div className="headPrice">
          <h1 className="heading total">Total</h1>
          <h1 className="heading total">${Total}</h1>
        </div>
        <div className="headPrice change">
          <label onClick={Order} className="placeorder">
            <center>
              <h4 className="text"> Place Order</h4>
            </center>
          </label>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Women;
