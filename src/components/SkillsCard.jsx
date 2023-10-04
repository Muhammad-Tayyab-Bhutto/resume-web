const SkillsAndProgress = ({ skill, progress }) => {
  const progressBarStyle = { width: `${progress}%` };

  return (
    <>
      <span className="text-gray-700 mt-4 text-xs">{skill}</span>
      <span
        className={`text-gray-700 text-xs text-end`}
        style={progressBarStyle}
      >
        {Math.floor(progress)}%
      </span>
      <div className="rounded-lg bg-gray-900 w-full">
        <div
          className="h-1.5 rounded-lg bg-gradient-to-br from-orange-400 to-rose-600"
          style={progressBarStyle}
        ></div>
      </div>
    </>
  );
};

const SkillsCard = ({
  title,
  skills1,
  skills2,
  skills3,
  skills4,
  progress1,
  progress2,
  progress3,
  progress4,
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row justify-start mt-8 rounded-lg bg-gray-950 text-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-10">
      <div className="flex flex-col w-full">
        <span className="text-rose-600">Features</span>
        <h1 className="text-3xl">{title}</h1>
        <SkillsAndProgress skill={skills1} progress={progress1} />
        <SkillsAndProgress skill={skills2} progress={progress2} />
        <SkillsAndProgress skill={skills3} progress={progress3} />
        <SkillsAndProgress skill={skills4} progress={progress4} />
      </div>
    </div>
  );
};

export default SkillsCard;
