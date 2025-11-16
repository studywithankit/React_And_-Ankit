// import { useState, useCallback } from "react";
import React from "react";
import "../src/App.css";

function App() {
  // const [length, setLength] = useState(0);
  // const [numberAllowed, setNumberAllowed] = useState(false);
  // const [charAllowed, setCharAllowed] = useState(false);
  // const [password, setPassword] = useState("");

  // const passwordGenerator = useCallback(() => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  //   if (numberAllowed) str += "1234567890";
  //   if (charAllowed) str += "!~@#$%^&*";
  // }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-3 my-8 bg-white">
        <h1 className="text-white ">Password Generator</h1>
      </div>
    </>
  );
}

export default App;
