import './Input.css';

import React from "react";

const Input = ({ value, onChange, onKeyDown, placeholder }) => {
    return (
        <input
            className='input-field'
            type="text"
            defaultValue={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
        />
    );
};

export default Input;
