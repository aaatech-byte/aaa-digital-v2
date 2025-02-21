// import React from 'react';

// interface TimelineStep {
//   title: string;
//   description: string;
// }

// interface ProcessTimelineProps {
//   steps: TimelineStep[];
// }

// export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our <span className='text-primary'>Process</span></h2>
//           <p className="text-xl text-gray-600">How we bring your vision to life</p>
//         </div>
        
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute hidden w-1 h-full transform -translate-x-1/2 md:block left-1/2 bg-primary"></div>
          
//           <div className="space-y-12">
//             {steps.map((step, index) => (
//               <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                 <div className="flex-1 md:w-1/2"></div>
//                 <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 rounded-full left-1/2 bg-primary">
//                   <span className="font-bold text-white">{index + 1}</span>
//                 </div>
//                 <div className="flex-1 p-6 md:w-1/2 ">
//                   <div className="p-6 duration-500 bg-white shadow-lg hover:cursor-pointer hover:shadow-xl rounded-xl">
//                     <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















import React from 'react';

interface TimelineStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section className="py-10 bg-gradient-primary">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] font-orbitron md:text-4xl">Our <span className='text-yellow '>Process</span></h2>
          <p className="max-w-xl mx-auto text-base text-[#FFFFFF]">Discover how we take your vision and turn it into a powerful, fully-realized solution—combining creativity, innovation, and expertise to deliver seamless, impactful experiences at every stage of the journey.</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute hidden w-1 h-full transform -translate-x-1/2 md:block left-1/2 bg-primary"></div>
          
          <div className="space-y-12 ">
            {steps.map((step, index) => (
              <div key={index} className={`relative  flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 md:w-1/2"></div>
                <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 rounded-full bg-primary left-1/2">
                  <span className="font-bold text-white">{index + 1}</span>
                </div>
                <div className={`flex-1 md:w-1/2 p-6  ${index === 1 || index === 3 ? 'mr-2' : ''} ${index === 0 || index === 2 || index === 4 ? 'ml-2' : ''}`}>
                  <div className="p-6 duration-300 shadow-md bg-primary hover:cursor-pointer hover:shadow-lg rounded-xl">
                    <h3 className="mb-2 text-xl font-semibold font-orbitron text-yellow ">{step.title}</h3>
                    <p className="text-[#FFFFFF]">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
