import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName,
      lastname: this.state.lastname}
      let dataArray = this.state.submittedData.concat(formData)
      this.setState({submittedData: dataArray})
  }

  render() {
   
    return (
      <div>
      {console.log(this.state.firstName)}
      {console.log(this.state.lastName)}
      {console.log(this.state.submittedData)}
      <form onSubmit={this.submitHandler}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
      </div>
  
    )
  }
}

export default Form;