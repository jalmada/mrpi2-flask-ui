import React, { useState } from "react";
import ServoInput from "../presentational/ServoInput.jsx";

function ServoAxisStepContainer({stepx, stepy, handleStepChange}) {
    const [state, setState] = useState({
    });

    let handleChange = (e) => {
        alert(e.target.value);
        setState({...state, [e.target.id]: e.target.value});
    }

    return (
        <div  className="container no-gutters" style={{padding: 0}}>
            <div className="row no-gutters">
                <div className="col-sm">
                    <ServoInput type="text" id="posX" value={state.posX? state.posX.toString() : ''} placeholder="X" handleChange={handleChange}/>
                </div>
                <div className="col-sm">
                    <ServoInput type="text" id="posY" value={state.posY? state.posY.toString() : ''} placeholder="Y" handleChange={handleChange}/>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-sm">
                    <ServoInput type="text" id="step" value={state.step? state.step.toString() : ''} placeholder="Step" handleChange={handleChange} handleEnterClick={handleStepChange} value= {stepx}/>
                </div>
            </div>

        </div>
    );
}

export default ServoAxisStepContainer
