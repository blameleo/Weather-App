
const Display = (props) => {
  return (
    <div className="grid pl-10  h-screen col-span-2  text-white">
      <h1 className="mt-10 font-black">The Weather App</h1>

      <div className="flex sm:justify-around items-center   ">
        {props.degree ? <h1 className="text-8xl">{props.degree}°C</h1> : null}
        <div>
          <h1 className="text-4xl font-extrabold">{props.name}</h1>
          <p>{props.time}</p>
        </div>
        <div>
          <img src={props.icon} alt="" />
          <p>{props.condition}</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
