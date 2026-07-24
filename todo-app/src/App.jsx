import { useState } from "react";

function TodoApp() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    if (text.trim() === '') return;
    setTodos([...todos, text]);
    setText('');
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button type="submit">Add</button>
      </form>
      {todos.length === 0 && <p>Nothing yet!</p>}
      <ul>
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}

export default TodoApp;