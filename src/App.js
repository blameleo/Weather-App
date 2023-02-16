import React from "react";
import Display from "./components/Display";
import Inputside from "./components/Inputside";
import { useState } from "react";
// import axios from "axios";

//create state for input and sotre it
//create state in top level app and pass as props
//state should be a simple string
//whe i click the search console log current state

export default function App() {
  const [state, setState] = useState("");
  const [err, setErr] = useState(null);
  const [isloading, setIsLoading] = useState(null);

  function handleSearch(inputText) {
    // setState(inputText);
    setIsLoading(true);
    const url = `https://api.weatherapi.com/v1/current.json?key=ea75c4ec67f449458ec120109230902&q=${inputText}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("city not found");
        }
        return res.json();
      })
      .then((data) => {
        setState(data);
        setIsLoading(false);
        setErr(false)
      })
      .catch((err) => {

        setErr(err.message);
        setIsLoading(false);

      });
  }

  return (
    <div>
      {err && (
        <p className="text-center bg-red-500 text-white">
          please enter a valid city or country
        </p>
      )}

      {isloading && <p className="text-center bg-red-500 text-white">loading</p>}
      <div className="sm:grid grid-cols-3 h-screen back ">
        <Display
          icon={state.current?.condition.icon}
          condition={state.current?.condition.text}
          degree={state.current?.temp_c}
          name={state.location?.name}
          time={state.location?.localtime}
        ></Display>
        <Inputside
          click={handleSearch}
          cloudy={state.current?.cloud}
          humidity={state.current?.humidity}
          wind={state.current?.wind_mph}
          feels={state.current?.feelslike_c}
        />
      </div>
    </div>
  );
}
