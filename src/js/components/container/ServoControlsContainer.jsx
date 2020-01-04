import React from "react";
import ServoAxisStepContainer from "./ServoAxisStepContainer.jsx";
import Arrow from "../presentational/Arrow.jsx";

function ServoControlsContainer() {

    return (
        <div className = "container no-gutters" style={{width: '190px'}}>
            <div className="row no-gutters">
                <div className="col-sm" style={{textAlign: "center"}}><Arrow direction = 'up' /></div>
            </div>
            <div className="row no-gutters">
                <div className="col-sm-1.5 my-auto" style={{textAlign: "right"}}>
                    <Arrow direction = 'left'/>
                </div>
                <div className="col-sm" style={{textAlign: "center"}}>
                    <ServoAxisStepContainer />
                </div>
                <div className="col-sm-1.5 my-auto" style={{textAlign: "left"}}>
                    <Arrow direction = 'right'/>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-sm" style={{textAlign: "center"}}><Arrow direction = 'down' /></div>
            </div>
        </div>
    );
}

export default ServoControlsContainer
