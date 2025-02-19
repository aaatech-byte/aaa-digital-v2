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
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className='text-primary'>Process</span></h2>
//           <p className="text-xl text-gray-600">How we bring your vision to life</p>
//         </div>
        
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          
//           <div className="space-y-12">
//             {steps.map((step, index) => (
//               <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                 <div className="flex-1 md:w-1/2"></div>
//                 <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary">
//                   <span className="text-white font-bold">{index + 1}</span>
//                 </div>
//                 <div className="flex-1 md:w-1/2 p-6 ">
//                   <div className="bg-white p-6 hover:cursor-pointer hover:shadow-xl  duration-500  rounded-xl shadow-lg">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
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
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className='text-primary'>Process</span></h2>
          <p className="text-base max-w-xl mx-auto text-gray-500">Discover how we take your vision and turn it into a powerful, fully-realized solution—combining creativity, innovation, and expertise to deliver seamless, impactful experiences at every stage of the journey.</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 md:w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div className={`flex-1 md:w-1/2 p-6 ${index === 1 || index === 3 ? 'mr-2' : ''} ${index === 0 || index === 2 || index === 4 ? 'ml-2' : ''}`}>
                  <div className="bg-white p-6 hover:cursor-pointer hover:shadow-lg duration-300  rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
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
