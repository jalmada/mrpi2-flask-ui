import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Arrow = ({id, direction, handleClick}) => {

    return (
        <span id={id} className="btn btn-light" onClick={handleClick}>
            <FontAwesomeIcon icon={"arrow-" + direction} />
        </span>
    );
};

export default Arrow
