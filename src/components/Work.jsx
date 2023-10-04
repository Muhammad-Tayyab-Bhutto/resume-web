import React from "react";
import data from "./projectData";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Projects = (props) => {
  const [heart, setHeart] = React.useState(false);
  const [count, setCount] = React.useState(props.likes);
  const toggle = () => {
    setHeart((prevState) => !prevState);
    heart ? setCount(prevCount => prevCount - 1) : setCount(prevCount => prevCount + 1)
  };
  return (
    <div className="relative cursor-pointer flex w-72 flex-col rounded-xl bg-gray-950  bg-clip-border text-rose-600 shadow-md overflow-hidden">
      <div className="relative mx-4 mt-4 h-52 overflow-hidden rounded-xl bg-gray-950 bg-clip-border text-gray-700">
        <img src={props.image} className="h-52 w-72 object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {props.name}
          </p>
          <button
            onClick={toggle}
            className="block font-sans text-white text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
          >
            {heart ? <><AiFillHeart /> {count}</>: <><AiOutlineHeart  />{count}</>}
          </button>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-600 antialiased opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </p>
      </div>
      
    </div>
  );
};

const Work = () => {
  const projects = data.map((item) => {
    return <Projects key={item.id} {...item} />;
  });
  return (
    <div className="gap-4 md:mx-6 flex flex-row flex-wrap justify-center rounded-lg bg-gray-900 text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-10 ">
      {projects}
    </div>
  );
};

export default Work;
