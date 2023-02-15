import React from "react";
import Display from "./components/Display";
import Inputside from "./components/Inputside";
import { useState } from "react";
import axios from "axios";

//create state for input and sotre it
//create state in top level app and pass as props
//state should be a simple string
//whe i click the search console log current state

export default function App() {
  const [state, setState] = useState("");

  function handleSearch(inputText) {
    // setState(inputText);
    const url = `http://api.weatherapi.com/v1/current.json?key=ea75c4ec67f449458ec120109230902&q=${inputText}`;
    axios.get(url).then((res) => {
      setState(res.data);
    });
  }

  return (
    <div className="sm:grid grid-cols-3 h-screen back ">
      <Display
        icon={state.current?.condition.icon}
        condition={state.current?.condition.text}
        degree={state.current?.temp_c}
        name={state.location?.name}
        time={state.location?.localtime}
      />
      <Inputside
        click={handleSearch}
        cloudy={state.current?.cloud}
        humidity={state.current?.humidity}
        wind={state.current?.wind_mph}
        feels={state.current?.feelslike_c}
      />
    </div>
  );
}
