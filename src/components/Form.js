import React, { Component } from 'react';

import './formStyle.css';

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      feedback: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleFeedbackChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    alert(`The form has been submitted with the following data:\nname: ${this.state.name}\nemail: ${this.state.email}\ntext: ${this.state.feedback}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={this.state.email} onChange={this.handleEmailChange} required />
        </div>
        <div>
          <label>Feedback</label>
          <textarea value={this.state.feedback} onChange={this.handleFeedbackChange} required></textarea>
        </div>
        <button className="submitButton" type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;
