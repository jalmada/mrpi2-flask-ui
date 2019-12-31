import React from "react";

const ServoInput = ({ type, id, value, placeholder, handleChange }) => (
    <input 
        className="form-control form-control-sm" 
        style={{textAlign: "center"}} 
        id={id} 
        type={type} 
        value={value} 
        placeholder={placeholder} 
        onChange={handleChange} 
        alt={placeholder} 
    />
);

export default ServoInput;

