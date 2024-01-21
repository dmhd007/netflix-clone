import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DummyPost() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);
  const [data, setData] = useState([]);

  const handleInput = (event) => {
    setName(event.target.value);
  };
  const handleInput1 = (event) => {
    setAge(event.target.value);
  };
  const handleInput2 = (event) => {
    setEmail(event.target.value);
  };
  const Submit = () => {
    axios.delete("http://localhost:8080/api/v1/student/4");
  };

  return (
    <div>
      <input onChange={handleInput} placeholder="name"></input>
      <input onChange={handleInput1} placeholder="age" type="number"></input>
      <input onChange={handleInput2} placeholder="email" type="email"></input>
      <button onClick={Submit}>Submit</button>
      <ToastContainer />
    </div>
  );
}

export default DummyPost;
