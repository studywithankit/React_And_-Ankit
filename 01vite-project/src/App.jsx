import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  // let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    } else {
      const massageOut = (document.querySelector("#massage").innerHTML =
        "You reached its limit");
      setTimeout(massageOut, 2000);
    }
    // console.log("Value Added: ", counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    } else {
      const massageOut = (document.querySelector("#massage").innerHTML =
        "You reached its limit");
      setTimeout(massageOut, 2000);
    }
    // console.log("Value subtracted", counter);
  };

  return (
    <>
      <h1>The First Project on React</h1>
      <p>I Started this project with the help of Chai Aur Code</p>
      <h2 id="counter">Counter Value: {counter} </h2>
      <p className="massage" id="massage"></p>
      <button className="button" onClick={addValue}>
        Add Value: {counter}
      </button>
      <button className="button" onClick={removeValue}>
        Remove Value: {counter}
      </button>
    </>
  );
}

export default App;
