// src/molecules/AddTodoForm.js
import React, { useRef, useState } from "react";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import "./AddTodoForm.css";

const AddTodoForm = ({ tasks, setTasks }) => {
    const [newTask, setNewTask] = useState("");
    const inputRef = useRef(null); // Creating a ref for the input element


    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        // Removes white spaces from task 
        // Prevents from adding empty New Tasks
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
            inputRef.current.value = ""; // Clear the input using ref
        }
    };

    // Add a todo on pressing the "Enter" key
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          handleAddTask();
        }
      };


    return (
        <div className="add-todo-form">
            <Input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} // Handle Enter key press
                placeholder="Enter a new task..."
                inputRef={inputRef} // Assign the ref to the input element
            />
            <Button onClick={handleAddTask}>Add Task</Button>
        </div>
    );
};

export default AddTodoForm;