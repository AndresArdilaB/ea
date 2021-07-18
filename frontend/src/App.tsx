import React, { useState } from "react";
import "./App.css";
import TextField from "./components/textField";
import { Res } from "./models/imput";

function App() {
  const [result, setResult] = useState({} as Res);

  return (
    <div className="App">
      <header className="App-header">
        <p>Equilibrium Algorithm</p>
      </header>
      <p>This algorithm find the equilibrium point in an array of integers.</p>
      <br />

      <code>
        Time complexity: O(n)
        <br />
        Space complexity: O(1)
      </code>

      <br />
      <br />

      <TextField
        placeHolder="Type the sequence delimited by comma and press enter"
        onResult={setResult}
      />

      <br />
      <br />

      {result.index && (
        <div>
          <div>Index: {result.index}</div>
          <div>Value: {result.value}</div>
        </div>
      )}
    </div>
  );
}

export default App;
