import './Input.css';

import React from "react";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      defaultValue={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
