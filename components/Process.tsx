
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Process Mapping',
    description: 'We audit every system, app, and spreadsheet. We visualize your current manual tasks to see exactly where your team is burning daylight.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'ROI Audit',
    description: 'Not everything should be automated. We identify high-impact workflows where AI provides the highest return on investment for your specific business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Build & Test',
    description: 'Our engineers deploy a custom tech stack of Python, Zapier, Make, and Gemini. We build robust systems that handle edge cases seamlessly.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Iterate & Manage',
    description: 'We act as your Fractional Chief Automation Officer. As your business grows, we continuously refine and add new automated capabilities.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Strategic Methodology</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We don't just plug in tools. We engineer systematic shifts in how your business operates.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <div className="absolute top-6 right-0 text-6xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors pointer-events-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+1rem)] w-full h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
