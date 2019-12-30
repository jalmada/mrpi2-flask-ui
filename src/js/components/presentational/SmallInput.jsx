import React from "react";

const SmallInput = ({ type, id, value, placeholder, handleChange }) => (
    <input className="form-control form-control-sm" id={id} type={type} value={value} placeholder={placeholder} onChange={handleChange} />
);

export default SmallInput;

