import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="flex items-center flex-row -translate-y-16 mx-12 justify-start mf:flex-col rounded-lg bg-gray-900 text-white p-3 flex-wrap shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] space-x-20 mf:space-x-0">
      <img
        className="-translate-y-24 xl:h-48 lg:h-40 rounded-lg border-4 border-gray-900"
        src="../../images/profile.png"
      />  
      <div>
        <h1 className="text-white text-2xl">
          Muhammad Tayyab
        </h1>
        <h1 className="text-sm">Full Stack Developer</h1>
        <div className="flex flex-row mt-10">
          <a
            href="https://www.linkedin.com/in/muhammad-tayyab-bhutto"
            className="cursor-pointer "
          >
            <FaLinkedin className=" text-gray-600 text-2xl hover:text-gray-500 " />
          </a>
          <a
            href="https://github.com/Muhammad-Tayyab-Bhutto"
            className="cursor-pointer"
          >
            <FaGithubSquare className="ml-3 text-gray-600 text-2xl hover:text-gray-500" />
          </a>
        </div>
      </div>
      <div className="xl:border-2 lg:border-2 border-gray-800 h-48 "></div>
      <div>
        <h1>EMAIL</h1>
        <h1 className="text-sm text-gray-500">
          muhammadtayyab.bscsf21@iba-suk.edu.pk
        </h1>
        <h1 className="mt-8">PHONE</h1>
        <h1 className="text-sm text-gray-500">+92-309-3416858</h1>
      </div>
      <div>
        <h1>NO OF PROJECTS</h1>
        <h1 className="text-sm text-gray-500">24</h1>
        <h1 className="mt-10">LOCATION</h1>
        <h1 className="text-sm text-gray-500">Pano Akil, Sukkur SINDH.</h1>
      </div>
    </div>
  );
};

export default Hero;
