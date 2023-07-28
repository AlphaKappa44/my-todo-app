// src/molecules/AddTodoForm.js
import React, { useState } from "react";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";

const AddTodoForm = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    // Removes white spaces from task 
    // Prevents from adding empty New Tasks
    if (newTask.trim() !== "") {
        setTasks([...tasks, newTask]);
        setNewTask("");
    }
};

  return (
    <div>
      <Input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task..."
      />
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

export default AddTodoForm;
