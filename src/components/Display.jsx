// import { useState } from "react";

const Display = (props) => {

  return (
    <div className=" grid pl-10  sm:h-screen col-span-2  text-white">
      <h1 className="mb-10 sm:mb-0 mt-10 font-black">The Weather App</h1>

    <div className="sm:flex sm:justify-around items-center   ">
        {props.degree ? <h1 className="text-8xl">{props.degree}°C</h1> : null}
        <div className="py-10 sm:py-0">
          <h1 className="text-4xl font-extrabold">{props.name}</h1>
          <p>{props.time}</p>
        </div>
        <div className="mb-5 sm:mb-0">
          <img src={props.icon} alt="" />
          <p>{props.condition}</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
