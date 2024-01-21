import "./main.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Test1 from "./test1";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sign() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);

  const navigate = useNavigate();

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleInput1 = (event) => {
    setEmail(event.target.value);
  };
  const handleInput2 = (event) => {
    setPass(event.target.value);
  };

  const locate = () => {
    window.location.href = "/Home/Drama";
    localStorage.setItem("car", "Guest");
  };

  const storeUserData = () => {
    const regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const regname = /^[a-zA-Z\-]{4,20}$/;
    const regpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (name != null && email != null && pass != null) {
      if (regname.test(name)) {
        if (regemail.test(email)) {
          if (regpass.test(pass)) {
            axios({
              method: "post",
              url: "http://localhost:3000/userDetails",
              data: {
                name: name,
                email: email,
                password: pass,
                id: parseInt++,
              },
            }).catch((error) => {
              alert("Something went Wrong Loging in you as guest");
            });

            navigate("/SignUp");
          } else {
            const notify3 = () =>
              toast.dark(
                "Password should contain minimum 8 characters, with alphabets and numbers "
              );
            notify3();
          }
        } else {
          const notify2 = () => toast.dark("Please Enter a Valid Email");
          notify2();
        }
      } else {
        const notify1 = () => toast.dark("Please Enter Valid Name");
        notify1();
      }
    } else {
      const notify = () => toast.dark("Please Enter Complete Data");
      notify();
    }
  };

  return (
    <div>
      <div className="top">
        <div className="hololo">
          <div className="newsign">
            <div className="cov">
              <div className="logopng"></div>
              <h1 onClick={locate} className="guest">
                Sign In as guest
              </h1>
            </div>
            <div className="signnew">
              <h3 className="signinn"> Sign Up</h3>
            </div>
            <div>
              <input
                onChange={handleInput}
                className="inputs"
                placeholder="Name"
              ></input>
            </div>
            <div>
              <input
                onChange={handleInput1}
                type="text"
                className="inputs"
                placeholder="Email"
              ></input>
            </div>
            <div>
              <input
                onChange={handleInput2}
                type="password"
                className="inputs1"
                placeholder="Password"
              ></input>
            </div>
            <div>
              <label onClick={storeUserData} className="signinbut">
                {" "}
                Sign Up
              </label>
            </div>
            <center>
              <div>
                <Link to="SignUp" className="non">
                  <label>
                    <h4>Already Have an account? Sign In</h4>
                  </label>
                </Link>
              </div>
            </center>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Sign;
