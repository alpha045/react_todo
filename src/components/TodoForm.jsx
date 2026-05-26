import { useState } from "react";

function TodoForm({ addTodo }) {

  const [input, setInput] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (input.trim() === "") return;

    addTodo(input);

    setInput("");
  }

  return (

    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Enter your task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">
        Add
      </button>

    </form>
  );
}

export default TodoForm;