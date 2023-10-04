import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2  w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm black-glassmorphism"
    />
  );
};

const Contact = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div className="flex mx-12 md:flex-col lg:flex-row justify-center items-center bg-gray-900 rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className="flex mx-12 flex-col gap-5 lg:flex-row item-start flex-between justify-between md:p-20 px-4 py-12">
        <div className="flex space-y-3 rounded-xl bg-slate-950 p-2 flex-col items-start justify-center w-72 ">
          <div className="relative mx-2 mt-2 h-52 overflow-hidden rounded-xl bg-gray-950 bg-clip-border text-gray-700">
            <img
              src="../../images/team-3.jpg"
              className="h-52 w-72 object-cover"
            />
          </div>
          <h1 className="mx-4 text-2xl text-white">Navine Acotanza</h1>
          <h1 className="mx-4 text-gray-600">Chief Operating Officer</h1>
          <p className="mx-4 block text-start text-base font-medium leading-relaxed text-gray-600 antialiased">
            I am available for freelancing work.
            Connect with via linkedin or contact form.
          </p>
          <h1 className="mx-4 text-gray-600">Phone: +92 309 3416858</h1>
          <span className="text-rose-600 bg-[#06070d] p-4 rounded-lg shadow-[rgba(0,_0,_0,_0.7)_0px_30px_90px]">
              Find Me
          </span>
          <div className="flex flex-row mx-2">
          <a
            href="https://www.linkedin.com/in/muhammad-tayyab-bhutto"
            className="cursor-pointer "
          >
            <FaLinkedin className=" text-blue-700 text-2xl hover:text-rose-600 " />
          </a>
          <a
            href="https://github.com/Muhammad-Tayyab-Bhutto"
            className="cursor-pointer"
          >
            <FaGithubSquare className="ml-3 text-gray-500 text-2xl hover:text-rose-600" />
          </a>
        </div>
        </div>

        <div className="flex flex-col flex-1 justify-start items-center w-full md:mt-0 mt-10">
          <div className="p-5 sm:w-96 rounded-lg w-full flex flex-col justify-start items-center bg-gray-950">
            <Input
              placeholder="Your Name"
              name="name"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Phone Number"
              name="phone"
              type="phone"
              handleChange={handleChange}
            />
            <Input
              placeholder="Email"
              name="email"
              type="email"
              handleChange={handleChange}
            />
            <Input
              placeholder="Subject"
              name="subject"
              type="text"
              handleChange={handleChange}
            />
           <textarea name="textarea" id="" cols="30" rows="10" className="my-2  w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm black-glassmorphism"></textarea>
            <div className="h-[1px] w-full bg-gray-950 my-2" />

            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#181b24] rounded-full cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



