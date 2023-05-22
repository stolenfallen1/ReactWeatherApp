import { WeatherData } from "../App";

interface MoreInfoProps {
  data: WeatherData | null;
}

const MoreInfo = ({ data }: MoreInfoProps) => {
  return (
    <>
      <div className="mx-5 text-center">
        {data?.main ? (
          <p className="text-3xl font-bold ">
            {data.main.feels_like.toFixed()}&#176;
          </p>
        ) : null}
        <p className="text-2xl tracking-tighter ">Feels Like</p>
      </div>

      <div className="mx-5 text-center">
        {data?.wind ? (
          <p className="text-3xl font-bold ">{data.wind.speed} MPH</p>
        ) : null}
        <p className="text-2xl tracking-tighter">Wind</p>
      </div>

      <div className="mx-5 text-center">
        {data?.main ? (
          <p className="text-3xl font-bold">{data.main.humidity}%</p>
        ) : null}
        <p className="text-2xl tracking-tighter">Humidity</p>
      </div>
    </>
  );
};

export default MoreInfo;
