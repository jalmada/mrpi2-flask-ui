import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Arrow = ({id, direction, handleMouseDown, handleMouseUp}) => {

    return (
        <span id={id} className="btn btn-light" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <FontAwesomeIcon icon={"arrow-" + direction} />
        </span>
    );
};

export default Arrow
