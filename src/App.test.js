import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Todo App", () => {
  beforeEach(() => {
    // Reset the local storage and render the App component before each test
    // To avoid the delete test  from finding elements with the same name
    localStorage.clear();
  });

  test("Renders the Todo App component", () => {
    render(<App />);
    const appHeading = screen.getByRole("heading", { level: 1, name: /Todo App/i });
    expect(appHeading).toBeInTheDocument();
  });

  test("Adds a new task when input and button are used", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Enter a new task...");
    const addButton = screen.getByRole("button", { name: "Add Task" });

    const newTask = "Test new task";
    fireEvent.change(inputElement, { target: { value: newTask } });
    fireEvent.click(addButton);

    const taskElement = screen.getByText(newTask);
    expect(taskElement).toBeInTheDocument();
  });

  test("Deletes a task when the Delete button is clicked", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Enter a new task...");
    const addButton = screen.getByRole("button", { name: "Add Task" });

    // Add a new task
    const newTask = "Test new task";
    fireEvent.change(inputElement, { target: { value: newTask } });
    fireEvent.click(addButton);

    // Find the added task and Delete button
    const taskElement = screen.getByText(newTask);
    const deleteButton = screen.getByRole("button", { name: /Delete/i });

    // Click the Delete button and verify the task is removed
    fireEvent.click(deleteButton);
    expect(taskElement).not.toBeInTheDocument();
  });
});
