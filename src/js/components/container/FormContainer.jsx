import React, { useState, useEffect } from "react";
import Icon from "../presentational/Icon.jsx";
import IconToggle from "../presentational/IconToggle.jsx";
import ServoControlsContainer from "./ServoControlsContainer.jsx";

import Servo from '../../controllers/servo';
import StreamingCamera from '../../controllers/streamingCamera';



function FormContainer () {

  let host = 'http://192.168.1.103';
  let port = '3000';
  let url = `${host}:${port}`;

  let streamingCamera = new StreamingCamera();
  let servo = new Servo();
  let videoInput = `${url}/stream.mjpg`
  let audioInput = `${url}/audio`

  let photo = "camera"

  let handlePhotoClick = async (e) => {
    await streamingCamera.takePicture(); 
  } 

  return (
    <div className="container-fluid">
      <div className="row justify-content-end" style={{padding: '5px'}}>
        <div className="col-2" style={{paddingRight:'0px'}}>
          <div className="btn-group float-right">
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
            <ServoControlsContainer onmousedown={servo.moveServo.bind(servo)} onmouseup={servo.stopServo.bind(servo)} />
          </div>
          <div style={{display:'table-cell', verticalAlign:'bottom'}}>
            <div className="container-fluid">
              <div className="row align-items-end">
                <div className="col-6">
                </div>
                <div className="col" style={{height:'54px', paddingRight:'0px'}}>
                  <audio controls className="float-right" style={{width:'150px'}}>
                    <source src={audioInput} type="audio/x-wav;codec=pcm" />
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