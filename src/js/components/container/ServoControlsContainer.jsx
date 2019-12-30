import React, { useState } from "react";
import Input from "../presentational/Input.jsx";
import SmallInput from "../presentational/SmallInput.jsx";

function ServoControlsContainer() {
    const [state, setState] = useState({
        posX: 0,
        posY: 0,
        step: 5
    });

    let handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    }

    return (
        <div  className="container">
            <SmallInput type="text" id="posX" value={state.posX.toString()} placeholder="X" handleChange={handleChange}/>
            <SmallInput type="text" id="posY" value={state.posY.toString()} placeholder="Y" handleChange={handleChange}/>
            <SmallInput type="text" id="step" value={state.step.toString()} placeholder="Step" handleChange={handleChange}/>
        </div>
    );
}

export default ServoControlsContainer
