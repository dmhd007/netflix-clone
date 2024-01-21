import React, { Component } from "react";
import axios from "axios";
import userData from "./db.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      pass: null,
    };
  }
  handleInput(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handleInput1(event) {
    this.setState({
      pass: event.target.value,
    });
  }

  validation = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (this.state.email != null && this.state.pass != null) {
      const email = this.state.email;
      const pass = this.state.pass;
      const user = userData.userDetails.find((item) => item.email === email);

      if (reg.test(email)) {
        if (user) {
          if (user.password == pass) {
            localStorage.setItem("cartt", "0");
            localStorage.setItem("car", user.name);
            window.location.href = "Home/Drama  ";
          } else {
            console.log(user.password);
            const notify3 = () => toast.dark("Incorrect Password");
            notify3();
          }
        } else {
          const notify1 = () => toast.dark("No User exist");
          notify1();
        }
      } else {
        const notify2 = () => toast.dark("Please Enter a Valid Mail");
        notify2();
      }
    } else {
      const notify = () => toast.dark("Please Enter Complete Data");
      notify();
    }
  };

  render() {
    return (
      <div>
        <div className="top">
          <div className="hololo">
            <div className="signUp">
              <div className="logopng"></div>
              <div className="signnew">
                <h3 className="signinn">Sign In</h3>
              </div>

              <form>
                <input
                  onChange={(event) => this.handleInput(event)}
                  type="email"
                  className="inputs1 newone"
                  placeholder="email"
                ></input>

                <input
                  onChange={(event) => this.handleInput1(event)}
                  type="password"
                  className="inputs1"
                  placeholder="password"
                ></input>
              </form>

              <div>
                <label
                  onClick={() => this.validation()}
                  className="signinbut padding"
                >
                  Sign In
                </label>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Main;
