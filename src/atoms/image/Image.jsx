import React from "react";
import './Image.css';

const Image = ( {dataTestId} ) => {
    return (
        <div>
            <img 
                className="todo-image-img" 
                src="/noun-todo-favicon.svg" 
                alt="Todo Icon" 
                data-testid={dataTestId}
                />
        </div>
    )
};

export default Image;