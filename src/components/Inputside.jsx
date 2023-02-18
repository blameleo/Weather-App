import Details from "./Details";
import { useState } from "react";

const Inputside = (props) => {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    let { value } = e.target;
    setInputText(value);
  }

  const [state,setState] = useState(false)

  // const [state,setState] = useState()

  // setCities(inputText)

  //   useEffect(()=>{

  // },[inputText])

  return (
    <div className=" mb-0 text-white px-12  h-screen  backdrop-blur-xl bg-white/30">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.click(inputText);
          setState(true)
          setInputText("");
          
        }}
        className=" py-10"
      >
        <div>
          <input
            value={inputText}
            onChange={handleChange}
            type="text"
            placeholder="enter city"
            className="focus:outline-none bg-white/0 border-b placeholder:text-white/50 border-black py-3 w-72 mr-5"
          />
          <button className="bg-white/30 p-3 hover:bg-white/100 hover:text-black">
            search
          </button>
        </div>
      </form>

{  state &&     <Details  />
}    </div>
  );
};

export default Inputside;
