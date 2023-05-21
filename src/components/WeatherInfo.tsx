import { WeatherData } from "../App";

interface WeatherInfoProps {
  data: WeatherData | null;
}

const WeatherInfo = ({ data }: WeatherInfoProps) => {
  return (
    <>
      <div>
        <h1 className="text-5xl text-white tracking-tighter px-5">
          {data?.name}
        </h1>

        {data?.main ? (
          <h1 className="text-6xl font-bold text-white px-5">
            {data.main.temp.toFixed()}&#176;
          </h1>
        ) : null}
      </div>

      {data?.weather ? (
        <p className="text-2xl italic text-slate-400 px-5 underline">
          {data.weather[0]?.main}
        </p>
      ) : null}
    </>
  );
};

export default WeatherInfo;
