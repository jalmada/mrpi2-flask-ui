import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Arrow = ({direction, handleClick}) => {

    return (
        <FontAwesomeIcon icon={"arrow-" + direction} />
    );
};

export default Arrow
