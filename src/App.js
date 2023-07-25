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

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
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
      <div >
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
