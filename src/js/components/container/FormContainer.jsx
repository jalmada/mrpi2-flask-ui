import React, { Component } from "react";
import Icon from "../presentational/Icon.jsx";
import IconInput from "../presentational/IconInput.jsx";
import IconToggle from "../presentational/IconToggle.jsx";
import ServoControlsContainer from "./ServoControlsContainer.jsx";
import TestImage from '../../../test.jpg';

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
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-2" style={{paddingRight:'0px'}}>
            <div className="btn-group float-right">
              <IconToggle id = 'darkOn' iconTrue = {this.darkOnTrue} iconFalse = {this.darkOnFalse} value = {this.state.toggle.darkOn} handleClick = {this.handleToggleClick}  />
              <IconToggle id = 'lightOn' iconTrue = {this.lightOnTrue} iconFalse = {this.lightOnFalse} value = {this.state.toggle.lightOn} handleClick = {this.handleToggleClick}  />
              <Icon id='photo' icon={this.photo} handleClick= {this.handleClick} />
            </div>
          </div>
        </div>
        <div className="row" style={{height:"304px"}}>
          <img src={TestImage} alt="Probando 1..2..3" style={{position:'absolute', top:'0px', left:'0px', zIndex:-10}} />
        </div>
        <div className="row align-items-end">
          <div style={{display:'table', width:'100%', height:'100%'}}>
            <div style={{display:'table-cell', verticalAlign:'bottom'}}>
              <ServoControlsContainer />
            </div>
            <div style={{display:'table-cell', verticalAlign:'bottom'}}>
              <div className="container-fluid">
                <div className="row align-items-end">
                  <div className="col-3">
                    <IconInput id='dim' type = "number" placeholder='Dim' icon={this.dimIcon} value = {this.state.dim} handleChange = {this.handleInputChange} />
                  </div>
                  <div className="col-3">
                    <IconInput id='gain' type = "number" placeholder='Gain' icon={this.gainIcon} value = {this.state.gain} handleChange = {this.handleInputChange} />
                  </div>
                  <div className="col" style={{height:'54px', paddingRight:'0px'}}>
                    <audio controls className="float-right" style={{width:'150px'}}>
                      <source src="audio" type="audio/x-wav;codec=pcm" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormContainer;