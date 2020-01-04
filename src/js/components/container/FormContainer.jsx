import React, { Component } from "react";
import Icon from "../presentational/Icon.jsx";
import IconInput from "../presentational/IconInput.jsx";
import IconToggle from "../presentational/IconToggle.jsx";
import ServoControlsContainer from "./ServoControlsContainer.jsx";

class FormContainer extends Component {
  constructor() {
    super();

    this.gainIcon = "chess-board";
    this.dimIcon = "sun";
    this.darkOnTrue = ['far', 'moon'];
    this.darkOnFalse = ['fas', 'moon'];
    this.lightOnTrue = ['far', 'lightbulb'];
    this.lightOnFalse = ['fas', 'lightbulb'];
    this.photo = "camera"

    this.state = {
      gain: 0,
      dim: 0,
      toggle: {
        darkOn: false,
        lightOn: false
      }
    }; 

    this.onClick = {
      photo: () => {
        alert('takePhoto');
      }
    }

    this.handleInputChange = (e) => this.setState({...this.state, [e.currentTarget.id]:e.target.value});
    this.handleToggleClick = (e) => this.setState({...this.state, toggle: {...this.state.toggle, [e.currentTarget.id]: !this.state.toggle[e.currentTarget.id]}});
    this.handleClick = ((e) => this.onClick[e.currentTarget.id]()).bind(this);
  }

  render() {
    return (
      <form id="camera-form">
        <IconInput id='dim' type = "number" placeholder='Dim' icon={this.dimIcon} value = {this.state.dim} handleChange = {this.handleInputChange} />
        <IconInput id='gain' type = "number" placeholder='Gain' icon={this.gainIcon} value = {this.state.gain} handleChange = {this.handleInputChange} />
        <div className="btn-group">
          <IconToggle id = 'darkOn' iconTrue = {this.darkOnTrue} iconFalse = {this.darkOnFalse} value = {this.state.toggle.darkOn} handleClick = {this.handleToggleClick}  />
          <IconToggle id = 'lightOn' iconTrue = {this.lightOnTrue} iconFalse = {this.lightOnFalse} value = {this.state.toggle.lightOn} handleClick = {this.handleToggleClick}  />
          <Icon id='photo' icon={this.photo} handleClick= {this.handleClick} />
        </div>
        <ServoControlsContainer />
        <audio controls>
          <source src="audio" type="audio/x-wav;codec=pcm" />
          Your browser does not support the audio element.
        </audio>
      </form>
    );
  }
}
export default FormContainer;