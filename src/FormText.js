// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function FormText(porp) {
  const change_text = (event) => {
    // console.log(event.target);
    settext(event.target.value);
  };

  const changeToUpper = () => {
    settext(text.toUpperCase());
  };

  const [text, settext] = useState("enter text here");
  return (
    <div className="container">
      <div className="mb-3">
        <h1>{porp.heading}</h1>

        <textarea
          value={text}
          onChange={change_text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="9"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={changeToUpper}>
        UpperCase
      </button>
    </div>
  );
}

export default FormText;
