// src/molecules/TodoList.js
import React from "react";
import Button from "../../atoms/button/Button";
import "./TodoList.css"


const TodoList = ({ tasks, setTasks }) => {

    // Reverse the tasks array to display the last todo on top
    // const reversedTasks = [...tasks].reverse();

    function handleDeleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li className="task-item"
                    key={index}>
                    {task}{" "}

                    <button
                        dataTestId={`delete-button-${index}`}
                        className="delete-button"
                        onClick={() => handleDeleteTask(index)}
                    >
                        <img className="delete-button" src="/noun-delete.png" alt="Delete Icon" />
                    </button>

                    <Button
                        dataTestId={`delete-button-${index}`}
                        className="delete-button"
                        onClick={() => handleDeleteTask(index)}
                    >
                        Delete
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
