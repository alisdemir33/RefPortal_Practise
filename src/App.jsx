import React, { useReducer } from "react";  
export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {count : state.count + 1};
    case "DECREMENT":
      return {count:state.count - 1};
    case "RESET":
      return {count:0};
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function App() {
    const [counter, dispatch] = useReducer(counterReducer, {count:0});
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </p>
      <p id="counter">Count: {counter.count}</p>
    </div>
  );
}

export default App;


