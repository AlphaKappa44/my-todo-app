// src/molecules/TodoList.js
import React, { useEffect, useRef } from "react";
import Button from "../../atoms/button/Button";
import "./TodoList.css"


const TodoList = ({ tasks, setTasks }) => {
    const listRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom when the tasks list changes
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [tasks]);

    function handleDeleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    // Reverse the tasks array to display the last todo on top
    const reversedTasks = [...tasks].reverse();

    return (
        <ul className="task-list" ref={listRef}>
            {tasks.map((task, index) => (
                <li className="task-item"
                    key={index}>
                    {task}{" "}

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
