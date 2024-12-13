import React, { useState } from "react"; 

export default function Task2() {
const [color, setColor] = useState("");
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
        <p>өнгө солих</p>
        <buton
        className="border bg-red-800 py-4 px-6" onClick={() => {
            setColor("red");
        }}
        >
            Ulaan
            </buton>
            
            <buton
            className="border bg-blue-800 py-4 px-6" onClick={() => {
            setColor("blue");
        }}
        >
            Tsenher
            </buton>

            <buton
        className="border bg-green-800 py-4 px-6" onClick={() => {
            setColor("green");
        }}
        >
            Nogoon
            </buton>
    </div>
  );
};
