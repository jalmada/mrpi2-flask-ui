import React from "react";
import ServoAxisStepContainer from "./ServoAxisStepContainer.jsx";
import Arrow from "../presentational/Arrow.jsx";

function ServoControlsContainer({stepx, stepy, onmousedown, onmouseup, handleStepChange}) {

    return (
        <div className = "container no-gutters" style={{width: '190px', paddingLeft: '0px'}}>
            <div className="row no-gutters">
                <div className="col-sm" style={{textAlign: "center"}}><Arrow direction = 'up' handleMouseDown = {() => onmousedown(0,0,-1,5)} handleMouseUp = {() => onmouseup()} /></div>
            </div>
            <div className="row no-gutters">
                <div className="col-sm-1.5 my-auto" style={{textAlign: "right"}}>
                    <Arrow direction = 'left' handleMouseDown = {() => onmousedown(1,5,0,0)} handleMouseUp = {() => onmouseup()}/>
                </div>
                <div className="col-sm" style={{textAlign: "center"}}>
                    <ServoAxisStepContainer stepx={stepx} stepy={stepy} handleStepChange={handleStepChange} />
                </div>
                <div className="col-sm-1.5 my-auto" style={{textAlign: "left"}}>
                    <Arrow direction = 'right' handleMouseDown = {() => onmousedown(-1,5,0,0)} handleMouseUp = {() => onmouseup()}/>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-sm" style={{textAlign: "center"}}><Arrow direction = 'down' handleMouseDown = {() => onmousedown(0,0,1,5)} handleMouseUp = {() => onmouseup()}/></div>
            </div>
        </div>
    );
}

export default ServoControlsContainer
