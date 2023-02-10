import React from "react";

export default function Details(props) {
  return (
    <div className="mt-64">
      <h1 className="font-bold mb-10">Weather details</h1>

      <div className="flex justify-between py-5">
        <h1>cloudy</h1>
        <p className="font-black">{props.cloudy}%</p>
      </div>

      <div className="flex justify-between py-5">
        <h1>humidity</h1>
        <p className="font-black">{props.humidity}%</p>
      </div>

      <div className="flex justify-between py-5">
        <h1>wind</h1>
        <p className="font-black">{props.wind}mph</p>
      </div>

      <div className="flex justify-between py-5">
        <h1>feels like</h1>
        <p className="font-black">{props.feels}°C</p>
      </div>
    </div>
  );
}
