import React from "react";

const Form = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          onChange={event => props.handleChange(event)}
          value={props.formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={event => props.handleChange(event)}
          value={props.formData.lastName}
        />
      </form>
    </div>
  );
};

export default Form;
