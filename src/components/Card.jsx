import { LiaStarSolid } from 'react-icons/lia'

const Card = ({ imageSrc, country, name, message }) => {
  return (
    // flex xl:flex-row lg:flex-row md:flex-col md:justify-center md:items-center flex-col space-y-5 md:space-y-5  lg:space-x-12 justify-center items-center
    <div className="flex flex-col justify-center flex-flow  items-center rounded-lg bg-gray-950 text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-10">
      <img
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        src={imageSrc}
        alt="Bonnie image"
      />
      <h5 className="text-xl mb-3 font-medium text-gray-900 dark:text-white">
        {name}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {country}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {message}
      </span>
      <h1 className='flex flex-row justify-center items-center' >5.0 <LiaStarSolid className="text-yellow-500 " /> </h1>

      
    </div>
  );
};

export default Card;