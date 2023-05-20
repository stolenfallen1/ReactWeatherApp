import { useState } from "react";
import axios from "axios";
import "./styles/Main.css";

function App() {
  const apiKey = `6f8effcef36b38afb38fc70bbfd51996`;

  //https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}

  return (
    <>
      <div className="Main p-0 m-0 box-border font-poppins">
        <div className="flex flex-col items-center space-y-60">
          <div className="mt-40">
            <h1 className="text-4xl">Dallas</h1>
            <h1 className="text-6xl font-bold">60</h1>
            <p className="text-2xl italic text-gray-700">Rainy</p>
          </div>
          <div className="flex justify-between items-center border-2 border-black p-12 rounded bg-slate-100">
            <div className="mx-5 text-center">
              <p className="text-3xl font-bold">65</p>
              <p className="text-2xl">Feels Like</p>
            </div>
            <div className="mx-5 text-center">
              <p className="text-3xl font-bold">12 MPH</p>
              <p className="text-2xl">Wind</p>
            </div>
            <div className="mx-5 text-center">
              <p className="text-3xl font-bold">20%</p>
              <p className="text-2xl">Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
