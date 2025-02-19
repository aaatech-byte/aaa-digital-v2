import { TfiWrite } from "react-icons/tfi";
import { FaHandshake } from "react-icons/fa";
import { TbSettingsSearch } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";

const WorkingProcess = () => {
  const processData = [
    {
      stepNumber: 1,
      title: "Choose A Service",
      description:
        "In a free hour, when our power of choice is untrammeled and...",
      icon: <TbSettingsSearch className="text-emerald-500 text-2xl" />,
    },
    {
      stepNumber: 2,
      title: "Define Requirements",
      description:
        "The wise man therefore always holds in these matters to this principle of selection.",
      icon: <TfiWrite className="text-emerald-500 text-2xl" />,
    },
    {
      stepNumber: 3,
      title: "Discuss Your Project",
      description:
        "We are not only the creators of our own destiny but also the architects of our own future.",
      icon: <VscServerProcess className="text-emerald-500 text-2xl" />,
    },
    {
      stepNumber: 4,
      title: "Final Solution",
      description:
        "We ensure that our clients are satisfied with the results and provide ongoing support.",
      icon: <FaHandshake className="text-emerald-500 text-2xl" />,
    },
  ];

  return (
    <section className="work-process"
     style={{
        background: 'linear-gradient(356deg, #0bbf8b3b, transparent)'
      }}
      >
    <div className="container mx-auto p-8 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our <span className="text-emerald-500">Working Process</span>
      </h1>
      <div className="relative ">
        <div className=" bg-[url('https://jthemes.net/themes/html/growim/assets/images/shapes/work-process-two-border.png')] bg-center bg-no-repeat h-[43vh]"></div>
        <div className="absolute top-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pt-12">
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

const ProcessStep = ({ stepNumber, title, description, icon }) => {
  const isReversed = stepNumber === 2 || stepNumber === 4;

  return (
    <>
      <div className="md:flex hidden flex-col items-center "
      
      >
        {isReversed ? (
          <>
            <div className="text-center mb-5">
              <h3 className="font-bold text-gray-700 text-xl mt-4">{title}</h3>
              <p className="text-gray-400 text-semibold text-sm mt-2 text-center">
                {description}
              </p>
            </div>
            <div className="bg-gray-100 rounded-full p-7 relative">
              <div className="absolute text-center top-0 left-0 p-1 rounded-full h-7 w-7 bg-emerald-500">
                <span className="text-gray-50 font-bold text-base">
                  {stepNumber}
                </span>
              </div>
              {icon}
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-100 rounded-full p-7 relative">
              <div className="absolute text-center top-0 left-0 p-1 rounded-full h-7 w-7 bg-emerald-500">
                <span className="text-gray-50 font-bold text-base">
                  {stepNumber}
                </span>
              </div>
              {icon}
            </div>
            <div className="text-center mt-5">
              <h3 className="font-bold text-gray-700 text-xl mt-4">{title}</h3>
              <p className="text-gray-400 text-semibold text-sm mt-2 text-center">
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
