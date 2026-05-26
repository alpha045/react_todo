import React, { useState } from "react";

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingTask, setEditingTask] =
    useState(null);

  // Add OR Update Todo
  const addTodo = () => {

    if (input.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setInput("");

    setEditingTask(null);
  };

  // Delete / Line-through
  const deleteTodo = (index) => {

    const updatedTodos = [...todos];

    updatedTodos[index].completed =
      !updatedTodos[index].completed;

    setTodos(updatedTodos);
  };

  // Edit Todo
  const editTodo = (index) => {

    let updatedTodos = [...todos];

    // Return previous editing task
    if (editingTask !== null) {
      updatedTodos.push(editingTask);
    }

    // Selected task
    const selectedTask = todos[index];

    // Remove selected task
    updatedTodos = updatedTodos.filter(
      (todo) => todo !== selectedTask
    );

    // Store editing task
    setEditingTask(selectedTask);

    // Put task text into input
    setInput(selectedTask.text);

    // Update todos
    setTodos(updatedTodos);
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0 0 10px gray",
        borderRadius: "10px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Todo App
      </h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
          }}
        />

        <button
          onClick={addTodo}
          style={{
            padding: "10px",
            backgroundColor:
              editingTask !== null
                ? "orange"
                : "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {editingTask !== null
            ? "Update"
            : "Add"}
        </button>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
        }}
      >
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              background: "#eee",
              marginBottom: "10px",
              padding: "10px",
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <span
              style={{
                textDecoration:
                  todo.completed
                    ? "line-through"
                    : "none",
              }}
            >
              {todo.text}
            </span>

            <div
              style={{
                display: "flex",
                gap: "5px",
              }}
            >
              <button
                onClick={() =>
                  editTodo(index)
                }
                style={{
                  backgroundColor:
                    "orange",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteTodo(index)
                }
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;