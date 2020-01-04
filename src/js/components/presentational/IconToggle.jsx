import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconToggle = ({id, value, iconTrue, iconFalse , handleClick}) => {

    let icon = value ? iconTrue : iconFalse;
    return (
        <span id={id} onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
        </span>
    );
}

export default IconToggle;
