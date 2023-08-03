import './Input.css';

import React from "react";

const Input = ({ value, onChange, onKeyDown, placeholder, inputRef }) => {
    return (
        <input
            className='input-field'
            type="text"
            defaultValue={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            ref={inputRef} // Assign the ref to the input element
        />
    );
};

export default Input;
