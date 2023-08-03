import React from "react";
import './Input.css';

const Input = ({ value, onChange, placeholder }) => {
    return (
        <input
            className='input-field'
            type="text"
            defaultValue={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
