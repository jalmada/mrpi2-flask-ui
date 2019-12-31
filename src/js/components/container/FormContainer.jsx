import React, { Component } from "react";
import Input from "../presentational/Input.jsx";
import ServoControlsContainer from "./ServoControlsContainer.jsx";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <ServoControlsContainer />
      </form>
    );
  }
}
export default FormContainer;