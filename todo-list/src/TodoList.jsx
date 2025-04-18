import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  //to update list
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  //on change the text input
  let [newTodo, setNewTodo] = useState("");

  let onType = (event) => {
    setNewTodo(event.target.value);
  };

  let onAdd = () => {
    // to add unique id & task as an object in array
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo(""); //to remove the value from the text box
  };

  let deleteTodo = (id) => {
    //filter the specific value
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //update all todo
  let markAllAsDone = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <input
        className="textBox"
        type="text"
        placeholder="Enter a task"
        value={newTodo}
        onChange={onType}
      ></input>
      <button onClick={onAdd}>Add</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Todo list</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone
                  ? { textDecoration: "Line-through", color: "Red" }
                  : { color: "lightGreen" }
              }
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>&nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={markAllAsDone}>Mark all as Done</button>
    </>
  );
}

export default TodoList;
