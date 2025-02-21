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
<<<<<<< HEAD
        " We start by understanding your business needs, goals, and challenges through in-depth discussions and analysis.",
=======
        "In a free hour, when our power of choice is untrammeled and...",
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
      icon: <TbSettingsSearch className="text-2xl text-primary" />,
    },
    {
      stepNumber: 2,
      title: "Strategic Planning",
      description:
<<<<<<< HEAD
        "Our team crafts a detailed roadmap, outlining the scope, timeline, and resources required.",
=======
        "The wise man therefore always holds in these matters to this principle of selection.",
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
      icon: <TfiWrite className="text-2xl text-primary" />,
    },
    {
      stepNumber: 3,
      title: "Design & Development ",
      description:
<<<<<<< HEAD
        "Bringing ideas to life, we design intuitive interfaces and develop robust, scalable solutions using the latest technologies.",
=======
        "We are not only the creators of our own destiny but also the architects of our own future.",
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
      icon: <VscServerProcess className="text-2xl text-primary" />,
    },
    {
      stepNumber: 4,
      title: "Deployment & Launch",
      description:
<<<<<<< HEAD
        "We smoothly deploy the solution, minimizing downtime and ensuring a seamless transition.",
=======
        "We ensure that our clients are satisfied with the results and provide ongoing support.",
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
      icon: <FaHandshake className="text-2xl text-primary" />,
    },
  ];

  return (
    <section className="work-process bg-gradient-primary"
<<<<<<< HEAD
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
=======
     style={{
        // background: 'linear-gradient(356deg, #0bbf8b3b, transparent)'
      }}
      >
    <div className="container max-w-6xl p-8 mx-auto">
      <h1 className="mb-8 text-4xl font-orbitron font-bold text-[#FFFFFF] text-center">
        Our <span className="text-yellow">Working Process</span>
      </h1>
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
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
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
<<<<<<< HEAD
      <div className="flex-col items-center hidden md:flex py-12">
        {isReversed ? (
          <>
            <div className="mb-5 text-center">
              <h3 className="mt-4 text-xl font-semibold font-orbitron text-yellow">{title}</h3>
              <p className="mt-2 text-sm text-center text-white">
=======
      <div className="flex-col items-center hidden md:flex "
      
      >
        {isReversed ? (
          <>
            <div className="mb-5 text-center">
              <h3 className="mt-4 text-xl font-semibold text-yellow">{title}</h3>
              <p className="mt-2 text-sm text-center text-[#FFFFFF] text-semibold">
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
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
<<<<<<< HEAD
                {icon}
=======
              {icon}
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
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
<<<<<<< HEAD
                <i className="text-primary">{icon}</i>
              </div>
            </div>
            <div className="mt-5 text-center">
              <h3 className="mt-4 text-xl font-orbitron font-semibold text-yellow">{title}</h3>
=======
              <i className="text-primary">{icon}</i>
              </div>
            </div>
            <div className="mt-5 text-center">
              <h3 className="mt-4 text-xl font-semibold text-yellow">{title}</h3>
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
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