import { FiEdit } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";
import { SiThealgorithms } from "react-icons/si";
import data from "./data.js";
import Card from "./Card.jsx";

const About = () => {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        imageSrc={item.imageSrc}
        name={item.name}
        message={item.message}
        designation={item.designation}
      />
    );
  });
  return (
    <div className="flex flex-col mr-12 ml-12 rounded-md bg-gray-900 text-white p-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className="flex lg:flex-row xl:flex-row md:flex-col md:justify-center md:items-center flex-col md:space-y-5  justify-center items-center space-y-8 mb-12">
        <img
          src="../../images/profile.jpg"
          alt="Muhammad Tayyyab Bhutto"
          className="w-56 rounded-lg md:justify-center md:items-center justify-center items-center "
        />
        <div className="flex flex-col flex-start lg:space-x-9 space-y-3">
          <li className="lg:ml-10 list-none text-rose-600  cursor-pointer">
            <a href="">Visit My Portfolio & Hire Me.</a>
          </li>
          <h1 className="text-2xl text-white">About</h1>
          <h1 className="text-gray-700">
            Self Taught Full Stack Developer. Let Me Help You To Build Your
            Dream Project.
          </h1>
          <h1 className="text-gray-700">
            &#10004; Full Stack Web Developer.
          </h1>
          <h1 className="text-gray-700">&#10004; Support 24/7.</h1>
          <h1 className="text-gray-700">
            &#10004; Unlimited Revision
          </h1>
          <button className="text-rose-600 bg-[#06070d] p-4 rounded-lg shadow-[rgba(0,_0,_0,_0.7)_0px_30px_90px] hover:text-white hover:bg-rose-600">
            Download CV
          </button>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center space-y-10 items-center text-white text-2xl">
          What I am Doing?
        </h1>
        <div className="flex xl:flex-row lg:flex-row md:flex-col md:justify-center md:items-center flex-col space-y-5 md:space-y-5  lg:space-x-12 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-3 rounded-lg bg-gray-950 text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-10">
            <FiEdit className="text-rose-600 text-6xl mb-3" />
            <h1>Full Stack Web Development</h1>
            <h1 className="text-center text-sm text-gray-700 mt-3 ">
              Full Stack Web Development: HTML, <br /> CSS, JavaScript, React,
              Node.js, Express.
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg bg-gray-950 space-y-4 text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-10">
            <BsGraphUpArrow className="text-rose-600 text-6xl mb-3" />
            <h1>Data Science</h1>
            <h1 className="text-center text-sm text-gray-700 mt-3 ">
              Full Stack Web Development: HTML, <br /> CSS, JavaScript, React,
              Node.js, Express.
            </h1>
          </div>
          <div className="flex flex-col space-y-6  justify-center items-center rounded-lg bg-gray-950 text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-10">
            <SiThealgorithms className="text-rose-600 text-6xl" />
            <h1>Artificial Intelligence</h1>
            <h1 className="text-center text-sm text-gray-700 ">
              Machine Learning, Deep Learning, Keras, <br /> TensorFlow
            </h1>
          </div>
        </div>
        <h1 className="flex justify-center space-y-10 mt-5 items-center text-white text-2xl">
          Our Globally Trusted Clients
        </h1>
        <div className="flex xl:flex-row lg:flex-row space-x-10 md:flex-col md:justify-center md:items-center flex-col space-y-5 md:space-y-5 justify-center items-center">
          {cards}
        </div>
      </div>
    </div>
  );
};

export default About;
