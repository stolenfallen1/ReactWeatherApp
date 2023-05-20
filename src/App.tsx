import { useState } from "react";
import axios from "axios";
import "./styles/Main.css";

interface WeatherData {
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
        <div className="text-center pt-10">
          <h1 className="tracking-tighter pb-3 text-5xl font-bold text-white">
            WEATHER APP
          </h1>
          <input
            className="px-3 py-1 rounded text-xl bg-transparent border-2 text-white"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={getLocation}
            type="text"
            placeholder="Search here...."
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="py-40 flex justify-center items-center">
            <div>
              <h1 className="text-5xl text-white tracking-tighter px-5">
                {data?.name}
              </h1>

              {/* Temperature data */}
              {data?.main ? (
                <h1 className="text-6xl font-bold text-white px-5">
                  {data.main.temp.toFixed()}&#176;
                </h1>
              ) : null}
            </div>

            {/* Weather data (rain, cloudy, sunny, etc.) */}
            {data?.weather ? (
              <p className="text-2xl italic text-slate-400 px-5 underline">
                {data.weather[0]?.main}
              </p>
            ) : null}
          </div>

          {data?.name !== undefined && (
            <div className="flex justify-between items-center p-10 rounded bg-gray-200">
              <div className="mx-5 text-center">
                {data?.main ? (
                  <p className="text-3xl font-bold">
                    {data.main.feels_like.toFixed()}&#176;
                  </p>
                ) : null}
                <p className="text-2xl tracking-tighter">Feels Like</p>
              </div>

              <div className="mx-5 text-center">
                {data?.wind ? (
                  <p className="text-3xl font-bold">{data.wind.speed} MPH</p>
                ) : null}
                <p className="text-2xl tracking-tighter">Wind</p>
              </div>

              <div className="mx-5 text-center">
                {data?.main ? (
                  <p className="text-3xl font-bold">{data.main.humidity}%</p>
                ) : null}
                <p className="text-2xl tracking-tighter">Humidity</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
