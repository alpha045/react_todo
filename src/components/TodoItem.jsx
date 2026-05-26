function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
}) {

  return (

    <div className="todo-item">

      <div
        className={
          todo.completed
            ? "todo-text completed"
            : "todo-text"
        }
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default TodoItem;