import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({id, icon, handleClick}) => {

    return (
        <span id={id} onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
        </span>
    );
}

export default Icon;
