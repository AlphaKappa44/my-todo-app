import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
    // This function is a lazy initializer for the state, 
    // it will only be called once when the component is initially rendered.
    const [tasks, setTasks] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("tasks");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      });
    const [newTask, setNewTask] = useState("");

    // Save tasks to localStorage whenever tasks state changes
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    function handleDeleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

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
