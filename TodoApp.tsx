import React, { useReducer } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "REMOVE"; payload: number };

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD", payload: "Learn useReducer" })}>
        Add Todo
      </button>
      {todos.map(todo => (
        <div key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
