import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./molecules/header/Header";
import TodoList from "./molecules/todoList/TodoList"
import AddTodoForm from "./molecules/addTodoForm/AddTodoForm";

const App = () => {

    // This function is a lazy initializer for the state, 
    // it will only be called once when the component is initially rendered.
    const [tasks, setTasks] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("tasks");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    // Save tasks to localStorage whenever tasks state changes
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="App">

            <div className="list-container">
                <Header/>
                <AddTodoForm tasks={tasks} setTasks={setTasks} />

            </div>
            <div >
                <TodoList tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    );
};

export default App;
