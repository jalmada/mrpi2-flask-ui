import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconInput = ({type, id, value, icon, handleChange }) => (
  <div>
    <FontAwesomeIcon icon={icon} />
    <input
      type={type}
      id={id}
      value={value}
      onChange={handleChange}
    />
  </div>
);

export default IconInput;