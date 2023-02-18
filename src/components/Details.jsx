import React from "react";
import { useContext } from "react";
import {AppContext} from "../App"

export default function Details() {
  const {state} = useContext(AppContext)
  return (
    <div className="hidden sm:block mt-32 ">
      <h1 className="font-bold mb-10">Weather details</h1>

      <div className="flex justify-between py-5">
        <h1>cloudy</h1>
        <p className="font-black">{state.current?.cloud}%</p>
      </div>

      <div className="flex justify-between py-5">
        <h1>humidity</h1>
        <p className="font-black">{state.current?.humidity}%</p>
      </div>

      <div className="flex justify-between py-5">
        <h1>wind</h1>
        <p className="font-black">{state.current?.wind_mph}mph</p>
      </div>

      <div className="flex justify-between py-5">
        <h1>feels like</h1>
        <p className="font-black">{state.current?.feelslike_c}°C</p>
      </div>
    </div>
  );
}
