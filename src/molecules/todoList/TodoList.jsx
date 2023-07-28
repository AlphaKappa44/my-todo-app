// src/molecules/TodoList.js
import React from "react";
import Button from "../../atoms/button/Button";


const TodoList = ( { tasks, setTasks }) => {

    function handleDeleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    return (
        <ul>
        {tasks.map((task, index) => (
            <li key={index}>
                {task}{" "}
                <Button onClick={() => handleDeleteTask(index)}>
                    Delete
                </Button>
            </li>
        ))}
    </ul>
    );
};

export default TodoList;
