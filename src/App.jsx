import React, { useState } from "react";

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add OR Update Todo
  const addTodo = () => {

    if (input.trim() === "") {
      alert("Please enter a task");
      return;
    }

    // Update Todo
    if (editIndex !== null) {

      const updatedTodos = [...todos];

      updatedTodos[editIndex].text = input;

      setTodos(updatedTodos);

      setEditIndex(null);

    } else {

      // Add Todo
      const newTodo = {
        text: input,
        completed: false,
      };

      setTodos([...todos, newTodo]);
    }

    setInput("");
  };

  // Line-through Todo
  const deleteTodo = (index) => {

    const updatedTodos = [...todos];

    updatedTodos[index].completed =
      !updatedTodos[index].completed;

    setTodos(updatedTodos);
  };

  // Edit Todo
  const editTodo = (index) => {

    setInput(todos[index].text);

    setEditIndex(index);
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
      <h1 style={{ textAlign: "center" }}>
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
              editIndex !== null
                ? "orange"
                : "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {editIndex !== null
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
              justifyContent: "space-between",
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
                  backgroundColor: "orange",
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