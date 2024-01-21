// import "./Style.css";
// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";

// import axios from "axios";

// function Login() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [userData, setuserData] = useState([]);

//   const Navigate = useNavigate();

//   const errors = {
//     email: "invalid email",
//     password: "invalid password",
//   };

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/user")
//       .then((response) => response.data)
//       .then((result) => {
//         setuserData(result);
//       })
//       .catch((error) => {
//         setuserData(null);
//       });
//   });
//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { email, password } = document.forms[0];

//     // Find user login info
//     const userData = user.find((user) => user.email === email.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== password.value) {
//         // Invalid password
//         setErrorMessages({ name: "password", message: errors.password });
//       } else {
//         setIsSubmitted(true);
//         alert("User is successfully logged in");
//         Navigate("/Home");
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "email", message: errors.email });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label className="label-container">Email </label>

//           <input type="text" name="email" required />
//           {renderErrorMessage("email")}
//         </div>
//         <div>
//           <label>Password </label>
//           <input type="password" name="password" required />
//           {renderErrorMessage("password")}
//         </div>
//         <label>
//           Don't have an account?
//           <Link to="registration" style={{ color: "darkblue" }}>
//             Register Here
//           </Link>{" "}
//         </label>
//         <div>
//           <input type="submit" value="Submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div>
//       <div>
//         <div className="cov">
//           <center>Sign In</center>
//           {isSubmitted ? "" : renderForm}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
