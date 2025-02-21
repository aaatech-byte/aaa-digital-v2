import { TfiWrite } from "react-icons/tfi";
import { FaHandshake } from "react-icons/fa";
import { TbSettingsSearch } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const WorkingProcess = () => {
  const processData = [
    {
      stepNumber: 1,
      title: "Discovery & Consultation",
      description:
        " We start by understanding your business needs, goals, and challenges through in-depth discussions and analysis.",
      icon: <TbSettingsSearch className="text-2xl text-primary" />,
    },
    {
      stepNumber: 2,
      title: "Strategic Planning",
      description:
        "Our team crafts a detailed roadmap, outlining the scope, timeline, and resources required.",
      icon: <TfiWrite className="text-2xl text-primary" />,
    },
    {
      stepNumber: 3,
      title: "Design & Development ",
      description:
        "Bringing ideas to life, we design intuitive interfaces and develop robust, scalable solutions using the latest technologies.",
      icon: <VscServerProcess className="text-2xl text-primary" />,
    },
    {
      stepNumber: 4,
      title: "Deployment & Launch",
      description:
        "We smoothly deploy the solution, minimizing downtime and ensuring a seamless transition.",
      icon: <FaHandshake className="text-2xl text-primary" />,
    },
  ];

  return (
    <section className="work-process bg-gradient-primary"
    >
      <div className="container max-w-6xl p-8 mx-auto">
        <h1 className=" text-2xl md:text-5xl font-orbitron text-center font-semibold text-white mb-4">
          Our <span className="text-yellow">Working Process</span>
        </h1>
        <p className="text-[#FFFFFF] text-center text-[18px]">At our core, we believe in a seamless and collaborative approach to delivering IT solutions. <br /> Here's what working with us looks like:</p>
        <div className="relative ">
          <div className=" bg-[url('https://jthemes.net/themes/html/growim/assets/images/shapes/work-process-two-border.png')] bg-center bg-no-repeat h-[43vh]"></div>
          <div className="absolute top-0">
            <div className="grid grid-cols-1 gap-16 pt-12 md:grid-cols-4">
              {processData.map((step) => (
                <ProcessStep
                  key={step.stepNumber}
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, title, description, icon }) => {
  const isReversed = stepNumber === 2 || stepNumber === 4;

  return (
    <>
      <div className="flex-col items-center hidden md:flex py-12">
        {isReversed ? (
          <>
            <div className="mb-5 text-center">
              <h3 className="mt-4 text-xl font-semibold font-orbitron text-yellow">{title}</h3>
              <p className="mt-2 text-sm text-center text-white">
                {description}
              </p>
            </div>
            <div className="relative bg-gray-100 rounded-full p-7">
              <div className="absolute top-0 left-0 p-1 text-center rounded-full h-7 w-7 bg-[#FFFFFF]">
                <span className="text-base font-bold bg-[#FFFFFF] text-primary">
                  {stepNumber}
                </span>
              </div>
              <div className="text-primary">
                {icon}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative bg-gray-100 rounded-full p-7">
              <div className="absolute top-0 left-0 p-1 text-center rounded-full h-7 w-7 bg-[#FFFFFF]">
                <span className="text-base font-bold text-primary">
                  {stepNumber}
                </span>
              </div>
              <div className="text-primary">
                <i className="text-primary">{icon}</i>
              </div>
            </div>
            <div className="mt-5 text-center">
              <h3 className="mt-4 text-xl font-orbitron font-semibold text-yellow">{title}</h3>
              <p className="mt-2 text-sm text-center text-[#FFFFFF] text-semibold">
                {description}
              </p>
            </div>
          </>
        )}
      </div>


    </>
  );
};

export default WorkingProcess;