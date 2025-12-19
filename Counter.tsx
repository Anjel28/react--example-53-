import React, { useReducer } from "react";


type State = {
  count: number;
};


type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };


function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}


const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}> Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset</button>
    </div>
  );
};

export default Counter;
