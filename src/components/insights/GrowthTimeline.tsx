import React from 'react';

const GrowthTimeline = () => {
  // Define the stages with their status
  const stages = [
    { date: '01 May', label: 'Germination', complete: true },
    { date: '16 May', label: 'Vegetative Growth', complete: true },
    { date: '01 July', label: 'Reproductive Stage', complete: true },
    { date: '01 August', label: 'Harvest', complete: true },
    { date: '15 August', label: 'End of Harvest', complete: false, progress: 75 }
  ];

  return (
    <section className="flex flex-col pt-6 pb-8 px-6 w-full bg-white rounded-lg">
      <h2 className="text-xl font-bold text-green-700 mb-8">
        Sugar Beet Progress Timeline
      </h2>
      
      <div className="relative pb-8">
        {/* Dates row */}
        <div className="flex justify-between mb-2">
          {stages.map((stage, index) => (
            <div key={`date-${index}`} className="text-sm text-gray-600">
              {stage.date}
            </div>
          ))}
        </div>
        
        {/* Timeline with circles */}
        <div className="relative flex items-center h-10">
          {/* Background gray line - full width */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
          
          {/* Green progress line - stops at "Harvest" */}
          <div className="absolute top-1/2 left-0 w-[75%] h-1 bg-green-600 -translate-y-1/2"></div>
          
          {/* Stage circles */}
          <div className="absolute top-0 left-0 right-0 flex justify-between">
            {stages.map((stage, index) => (
              <div key={`circle-${index}`} className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10
                  ${stage.complete ? 'bg-green-600 border-green-600 text-white' : 
                    stage.current ? 'bg-white border-green-600' : 
                    'bg-white border-green-600'}`}
                >
                  {stage.complete ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : stage.progress ? (
                    <span className="text-green-600 font-bold">{stage.progress}%</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Labels row */}
        <div className="flex justify-between mt-2">
          {stages.map((stage, index) => (
            <div key={`label-${index}`} className="text-sm text-gray-800 text-center max-w-[100px]">
              {stage.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthTimeline;