import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconInput = ({type, id, value, icon, placeholder, handleChange, handleEnterClick }) => {
  
  let handleEnterClickWrapper = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if(handleEnterClick){
        handleEnterClick(null, value);
      }
    }
  }
  return (
    <div className="input-group input-group-sm addon">
      <span className="btn btn-light input-group-addon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <input
        className="form-control" 
        style={{textAlign: "center", marginBottom: '0px'}} 
        type={type}
        id={id}
        value={value}
        alt={placeholder} 
        placeholder={placeholder} 
        onChange={handleChange}
        onKeyUp={handleEnterClickWrapper}
      />
    </div>    
  )
};

export default IconInput;
