import './Button.css';

import React from "react";

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
