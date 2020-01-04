import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconInput = ({type, id, value, icon, placeholder, handleChange }) => (
  <div className="input-group input-group-sm addon mb-3">
    <span className="btn btn-light input-group-addon">
      <FontAwesomeIcon icon={icon} />
    </span>
    <input
      className="form-control" 
      style={{textAlign: "center"}} 
      type={type}
      id={id}
      value={value}
      alt={placeholder} 
      placeholder={placeholder} 
      onChange={handleChange}
    />
  </div>    
);

export default IconInput;
