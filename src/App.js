import React, { useState } from "react";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div style={{ marginTop: "20px", textAlign: "left" }}>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
