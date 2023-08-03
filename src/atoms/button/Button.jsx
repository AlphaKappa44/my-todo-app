import React from "react";
import './Button.css';

const Button = ({ onClick, children, dataTestId }) => {
    return (
        <button
            onClick={onClick}
            data-testid={dataTestId}
        >
            {children}
        </button>)
};

export default Button;
