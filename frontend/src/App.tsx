import React, { useState } from "react";
import "./App.css";
import TextField from "./components/textField";
import { Res } from "./models/imput";

function App() {
  const [result, setResult] = useState({} as Res);

  return (
    <div className="App">
      <header className="App-header">
        <h4>Equilibrium Algorithm</h4>
      </header>
      <p>This algorithm find the equilibrium point in an array of integers.</p>

      <h3>¿How i made this?</h3>

      <ol>
        <li>
          Defined a inital and a final index: <code> (leftIndex) </code> -
          <code> (rightIndex) </code>
        </li>
        <li>
          Define two variables to compare and sum the next value each iteration:
          <code> leftSum </code> and <code> rightSum </code>
        </li>
        <li>
          If <code> leftSum </code> is more than <code> rightSum </code> then
          <code> rightSum + nextValue </code> from the right and{" "}
          <code> rightIndex-1 </code>
        </li>
        <li>
          Same operation with <code> leftSum </code> but increasing the
          <code> leftIndex </code>
        </li>
        <li>
          Else <code> rightSum + nextValue </code> from the right and
          <code> rightIndex-1 </code>
        </li>
        <li>
          Important! in the first step of the loop y made this verification
          <code> if rightSum == leftSum and leftIndex == rightIndex: </code>
          if this is true i return the current index and value and the loop
          ends.
        </li>
      </ol>

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
