// import { use, useState } from "react";
import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className=" h-screen duration-200 flex justify-center"
        style={{ background: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center bottom-12  h-16 bg-blue-500 m-4 px-1 items-center rounded  "
          style={{ background: "blue" }}
        >
          <button
            style={{ backgroundColor: "red" }}
            className=" px-3 py-1 rounded-sm  mx-1"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "black" }}
            className=" px-3 py-1 rounded-sm mx-1"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            style={{ backgroundColor: "brown" }}
            className=" px-3 py-1 rounded-sm mx-1"
            onClick={() => setColor("brown")}
          >
            Brown
          </button>
          <button
            style={{ backgroundColor: "green" }}
            className=" px-3 py-1 rounded-sm mx-1"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "pink" }}
            className=" text-black px-3 py-1 rounded-sm mx-1"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            className="text-amber-950 px-3 py-1 rounded-sm mx-1"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
