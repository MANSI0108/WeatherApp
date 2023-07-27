import "./App.css";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./component/TopButton";
import Input from "./component/Input";
import TimeAndLocation from "./component/TimeAndLocation";
import TempratureAndDetails from "./component/TempratureAndDetails";
import Forecast from "./component/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units])

const  formatBackground =() =>{
    if (!weather) return 'from-cyan-700 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700";
    return "from-orange-700 to-blue-700";
    // return "from-yellow-700 to-orange-700";
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-4 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButton setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempratureAndDetails weather={weather} />
          <Forecast title="Hourly Forecast" items={weather.hourly} />
          <Forecast title="Daily Forecast" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
