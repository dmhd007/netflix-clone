import React, { Component } from "react";
import "./contact.css";
import "./Style.css";

import Footer from "./footer";
import axios from "axios";
function Contact() {
  return (
    <div className="llll">
      <div className="sub">
        <p className="getin">Get In Touch</p>
        <br></br>
        <p className="writeus">Feel Free To Write Us</p>
        <p className="dummy">
          Eu fames cum magnis primis sollicitudin sapien Commodo at tempus
          vestibulum magnis porta neque cras velit hac orci, porttitor
          pellentesque rutrum. Tellus vel eleifend ultricies dictum platea erat
          malesuada viverra a ornare elementum, cubilia. Proin. Molestie lectus
          elementum venenatis. Nec lacinia suscipit aenean auctor risus morbi
          tempus mus in per class ultricies massa cras. Faucibus, rutrum, proin
          aptent in, euismod Lectus. Mollis integer semper vivamus amet inceptos
          tortor class egestas felis potenti sapien senectus nam placerat
          dignissim suscipit vulputate sodales varius imperdiet consectetuer
          potenti rutrum est. Leo Nunc Ante quis porttitor per lobortis sem
          bibendum lobortis a ridiculus. Cubilia non.
        </p>
      </div>
      <div className="sub1">
        <div>
          <p className="getin">Get In Touch</p>
        </div>
        <div>
          <input type="email" placeholder="Email" className="inputs"></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Message"
            className="inputs inputss1"
          ></input>
        </div>
        <labek className="signinbut">Send</labek>
      </div>
    </div>
  );
}

export default Contact;
