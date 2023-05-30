import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center", padding: 15 }}>
      <div style={{ padding: 10 }}>
        {todo.id.length > 1 ? todo.id[2] : todo.id}
      </div>
      <div>
        {editable ? (
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        ) : (
          <div>
            <h3>{todo.name}</h3>
          </div>
        )}
      </div>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          dispatch(
            updateTodo({
              ...todo,
              name: name,
            })
          );
          if (editable) {
            setName(todo.name);
          }
          setEditable(!editable);
        }}
      >
        {editable ? "Update" : "Edit"}
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
