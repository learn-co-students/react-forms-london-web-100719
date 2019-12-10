import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const ParentComponent = () => {
  let [form, setForm] = useState({
    firstName: "",
    lastName: ""
  });

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  return (
    <React.Fragment>
      <Form formData={form} handleChange={handleChange} />
      <DisplayData formData={form} />
    </React.Fragment>
  );
};

export default ParentComponent;
