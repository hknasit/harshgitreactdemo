import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Harsh Kishor Nasit</h3>
      <h3>C0894125</h3>

      <div className="card">
      <button style={{backgroundColor:"#A0CCF0"}} onClick={() => setCount((oldCount) => oldCount +1)}>Increment</button>
        <button  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button style={{backgroundColor:"#A0CCF0"}} onClick={() => setCount((oldCount) => oldCount -1)}>Decrement</button>
      </div>
    </>
  );
}

export default App;
