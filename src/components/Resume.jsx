import aboutData from "./aboutData";
import SkillsCard from "./SkillsCard";

const Card = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 space-y-4 text-white">
      <span className="text-rose-600">{props.date}</span>
      <h1 className="text-3xl">{props.about}</h1>
      <div className="flex flex-col justify-start rounded-lg bg-gray-950 text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-10">
        <div className="flex flex-col">
          <div className="flex lg:flex-row items-center">
            <h1 className="lg:text-3xl md:text-base ">{props.title}</h1>
            <span className="text-rose-600 bg-[#06070d] p-4 rounded-lg shadow-[rgba(0,_0,_0,_0.7)_0px_30px_90px]">
              4:30/5
            </span>
          </div>
          <p className="text-sm text-justify text-gray-700">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
const Resume = () => {
  const card = aboutData.map((item, index) => {
    return (
      <Card
        key={index+item}
        {...item}
      />
    );
  });
  return (
    <div className="bg-gray-900 p-8 mr-12 ml-12 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className="flex flex-col sm:space-y-0 sm:flex-row sm:space-x-5 m-5 ">
        {card}
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-5 m-5">
        <SkillsCard
          title={"Full Stack Web Development"}
          skills1={"HTML"}
          skills2={"CSS"}
          skills3={"JavaScript"}
          skills4={"Python"}
          progress1={90}
          progress2={82}
          progress3={85}
          progress4={86}
        />
        <SkillsCard
          title={"Machine Learning"}
          skills1={"Python"}
          skills2={"Tensorflow"}
          skills3={"Scikit Learn"}
          skills4={"PyTorch"}
          progress1={86}
          progress2={73}
          progress3={65}
          progress4={55}
        />
      </div>
    </div>
  );
};

export default Resume;
