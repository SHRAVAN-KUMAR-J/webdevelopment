/*useState hooks:
- useState is a hook in React that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state.
- You can use useState to manage any type of state, such as numbers, strings, arrays, or objects.
- When you call the state update function, React will re-render the component with the new state value.
components has state

syntax:
const [state, setState] = useState(initialValue);
*/
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);        
    return (
    <div>
      <h2>Count: {count}</h2>   
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}   