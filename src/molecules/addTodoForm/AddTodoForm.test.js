import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddTodoForm from "./AddTodoForm";

test("Adds a new task when input and button are used", () => {
    const mockSetTasks = jest.fn();

    render(<AddTodoForm tasks={[]} setTasks={mockSetTasks} />);

    // Find the input element and the add button
    const inputElement = screen.getByPlaceholderText("Enter a new task...");
    const addButton = screen.getByRole("button", { name: "Add Task" });

    // Type a new task in the input
    const newTask = "Test new task";
    fireEvent.change(inputElement, { target: { value: newTask } });

    // Click the add button
    fireEvent.click(addButton);

    // Check if the new task is added to the list
    const taskElement = screen.getByPlaceholderText("Enter a new task...");
    expect(taskElement).toBeInTheDocument();
});
