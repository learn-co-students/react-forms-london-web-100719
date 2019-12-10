import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const ParentComponent = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  const handleClick = event => {
    if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    } else if (event.target.name === "lastName") {
      setLastName(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleChange={handleClick}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </React.Fragment>
  );
};

export default ParentComponent;
