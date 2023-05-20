import { useState } from "react";
import axios from "axios";

function App() {
  const apiKey = `6f8effcef36b38afb38fc70bbfd51996`;

  //https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}

  return (
    <>
      <div className="p-0 m-0 box-border font-poppins">
        <div>
          <div>
            <h1>Dallas</h1>
          </div>
          <div>
            <h1>60</h1>
          </div>
          <div>
            <p>Rainy</p>
          </div>
        </div>
        <div>
          <div>
            <p>65</p>
          </div>
          <div>
            <p>20%</p>
          </div>
          <div>
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
