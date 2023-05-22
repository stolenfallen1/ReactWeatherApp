import { useState } from "react";
import axios from "axios";
import "./styles/Main.css";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import MoreInfo from "./components/MoreInfo";

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: string;
  };
  wind: {
    speed: number;
  };
  weather?: Array<{ main: string }>;
}

function App() {
  const apiKey = `6f8effcef36b38afb38fc70bbfd51996`;
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const getLocation = (event: any) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <div className="Main p-0 m-0 box-border font-poppins">
        <Header
          location={location}
          setLocation={setLocation}
          getLocation={getLocation}
        />
        <div className="flex flex-col items-center">
          <div className="py-40 flex justify-center items-center">
            <WeatherInfo data={data} />
          </div>

          {data?.name !== undefined && (
            <div className="flex justify-between items-center p-10 rounded bg-gray-200">
              <MoreInfo data={data} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
