import React, { useState, useEffect } from "react";
import Icon from "../presentational/Icon.jsx";
import IconInput from "../presentational/IconInput.jsx";
import IconToggle from "../presentational/IconToggle.jsx";
import ServoControlsContainer from "./ServoControlsContainer.jsx";
import TestImage from '../../../test.jpg';



import Lights from '../../controllers/lights';
import Servo from '../../controllers/servo';
import StreamingCamera from '../../controllers/streamingCamera';



function FormContainer () {

  let host = 'http://192.168.1.103';
  let port = '3000';
  let url = `${host}:${port}`;

  let streamingCamera = new StreamingCamera();
  let lights = new Lights();
  let videoInput = `${url}/stream.mjpg`

  const [gain, setGain] = useState('');
  const [dim, setDim] = useState('');
  const [darkOn, setDarkOn] = useState(false);
  const [lightOn, setLightOn] = useState(false);

  let states = {
    gain: {state: gain, setter :setGain},
    dim: {state: dim, setter :setDim},
    darkOn: {state: darkOn, setter :setDarkOn},
    lightOn: {state: lightOn, setter :setLightOn}
  }
  //Icons
  let gainIcon = "chess-board";
  let dimIcon = "sun";
  let darkOnTrue = ['far', 'moon'];
  let darkOnFalse = ['fas', 'moon'];
  let lightOnTrue = ['far', 'lightbulb'];
  let lightOnFalse = ['fas', 'lightbulb'];
  let photo = "camera"

  let handleToggleClick = (e) => states[e.currentTarget.id].setter(!states[e.currentTarget.id].state);

  useEffect(() => {
    streamingCamera.getGain().then(x => setGain(x));
    streamingCamera.getDim().then(x => setDim(x));
    lights.getDarkModeStatus().then(x => setDarkOn(x));
    lights.getLightModeStatus().then(x => setLightOn(x));

  },[]);

  let handlePhotoClick = async (e) => {
    await streamingCamera.takePicture(); 
  }


  let handleDimChange = async (e) => {
    let dim = e.target.value;
    if(dim){
    setDim(dim);
      await streamingCamera.setDim(null, e.target.value); 
    }
  }

  let handleGainChange = async (e) => {
    let gain = e.target.value;
    if(gain){
    setGain(gain);
      await streamingCamera.setGain(null, e.target.value); 
    }
  }

  let handleLightsToggle = async (e) => {
    states[e.currentTarget.id].setter(!states[e.currentTarget.id].state)
    await lights.toggleLightMode();
  }

  let handleDarkToggle = async (e) => {
    states[e.currentTarget.id].setter(!states[e.currentTarget.id].state)
    await lights.toggleDarkMode();
  }
 

  return (
    <div className="container-fluid">
      <div className="row justify-content-end" style={{padding: '5px'}}>
        <div className="col-2" style={{paddingRight:'0px'}}>
          <div className="btn-group float-right">
            <IconToggle id = 'darkOn' iconTrue = {darkOnTrue} iconFalse = {darkOnFalse} value = {darkOn} handleClick = {handleDarkToggle}  />
            <IconToggle id = 'lightOn' iconTrue = {lightOnTrue} iconFalse = {lightOnFalse} value = {lightOn} handleClick = {handleLightsToggle}  />
            <Icon id='photo' icon={photo} handleClick= {handlePhotoClick} />
          </div>
        </div>
      </div>
      <div className="row" style={{height:"345px"}}>
        <img src={videoInput} alt="Probando 1..2..3" style={{position:'absolute', top:'0px', left:'0px', zIndex:-10}} />
      </div>
      <div className="row align-items-end" style={{padding: '5px'}}>
        <div style={{display:'table', width:'100%', height:'100%'}}>
          <div style={{display:'table-cell', verticalAlign:'bottom'}}>
            <ServoControlsContainer />
          </div>
          <div style={{display:'table-cell', verticalAlign:'bottom'}}>
            <div className="container-fluid">
              <div className="row align-items-end">
                <div className="col-3">
                  <IconInput id='dim' type = "number" placeholder='Dim' icon={dimIcon} value = {dim} handleChange = {handleDimChange} min = "0" max = "50"/>
                </div>
                <div className="col-3">
                  <IconInput id='gain' type = "number" placeholder='Gain' icon={gainIcon} value = {gain} handleChange = {handleGainChange} min = "0" max = "15" />
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
export default FormContainer;