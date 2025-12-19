import React, { useReducer } from "react";

type State = {
  username: string;
  password: string;
};

type Action =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "RESET" };

const initialState: State = {
  username: "",
  password: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        value={state.username}
        onChange={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })}
        placeholder="Username"
      />
      <input
        type="password"
        value={state.password}
        onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
        placeholder="Password"
      />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
