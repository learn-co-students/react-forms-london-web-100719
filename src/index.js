import React from "react";
import ReactDOM from "react-dom";
// import Form from "./components/Form";
import ParentComponent from "./components/ParentComponent.js";

ReactDOM.render(
  <div>
    <ParentComponent
      doesntMatter={event => {
        event.preventDefault();
        console.log("anything");
      }}
    />
  </div>,
  document.getElementById("root")
);
