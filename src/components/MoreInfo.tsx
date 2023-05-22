import { WeatherData } from "../App";

interface MoreInfoProps {
  data: WeatherData | null;
}

const MoreInfo = ({ data }: MoreInfoProps) => {
  return (
    <>
      <div className="mx-5 text-center">
        {data?.main ? (
          <p className="text-3xl font-bold custom-600:text-2xl custom-500:text-xl">
            {data.main.feels_like.toFixed()}&#176;
          </p>
        ) : null}
        <p className="text-2xl tracking-tighter custom-600:text-xl custom-500:text-lg">
          Feels Like
        </p>
      </div>

      <div className="mx-5 text-center">
        {data?.wind ? (
          <p className="text-3xl font-bold custom-600:text-2xl custom-500:text-xl">
            {data.wind.speed} MPH
          </p>
        ) : null}
        <p className="text-2xl tracking-tighter custom-600:text-xl custom-500:text-lg">
          Wind
        </p>
      </div>

      <div className="mx-5 text-center">
        {data?.main ? (
          <p className="text-3xl font-bold custom-600:text-2xl custom-500:text-xl">
            {data.main.humidity}%
          </p>
        ) : null}
        <p className="text-2xl tracking-tighter custom-600:text-xl custom-500:text-lg">
          Humidity
        </p>
      </div>
    </>
  );
};

export default MoreInfo;
