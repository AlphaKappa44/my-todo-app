// src/molecules/TodoList.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "./TodoList";

// Mocking the setTasks function using Jest mock function
const mockSetTasks = jest.fn();
const mockTasks = ["Task 1", "Task 2", "Task 3"];

test("TodoList displays all tasks correctly", () => {
    render(<TodoList tasks={mockTasks} setTasks={mockSetTasks} />);

    // Test rendering of tasks
    mockTasks.forEach((task) => {
        const taskElement = screen.getByText(task);
        expect(taskElement).toBeInTheDocument();
    });
});

test("handleDeleteTask is called with the correct index on Delete button click for each task", () => {
    render(<TodoList tasks={mockTasks} setTasks={mockSetTasks} />);

    // Test calling handleDeleteTask for each task
    mockTasks.forEach((task, index) => {
        const deleteButton = screen.getByTestId(`delete-button-${index}`);
        fireEvent.click(deleteButton);

        // Ensure mockSetTasks is called with the correct updated tasks for each task
        const expectedUpdatedTasks = mockTasks.filter((_, i) => i !== index);
        expect(mockSetTasks).toHaveBeenCalledTimes(index + 1);
        expect(mockSetTasks).toHaveBeenLastCalledWith(expectedUpdatedTasks);

        // Log the HTML content after each click
        console.log(screen.getByTestId(`delete-button-${index}`).innerHTML);

    });
});