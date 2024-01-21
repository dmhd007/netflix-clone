import React, { Component } from "react";
import { useState } from "react";

function Hanak() {
  const [val, setVal] = useState("dfghj");

  setVal("4567");
  return (
    <div>
      <h1>{val}</h1>
    </div>
  );
}

export default Hanak;
