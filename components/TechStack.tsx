
import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Built on a <span className="text-indigo-400">Foundation of Scale</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We don't believe in proprietary "black boxes." We build on the world's most 
              flexible tools, ensuring you own your logic, your data, and your scale.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <span className="text-white font-mono text-sm">AI</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">State-of-the-art Models</h4>
                  <p className="text-xs text-gray-500">Native integration with OpenAI ChatGPT, Google Gemini, and Anthropic Claude for reasoning and synthesis.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <span className="text-white font-mono text-sm">WF</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Workflow Engines</h4>
                  <p className="text-xs text-gray-500">Expert-level Zapier and Make.com implementation for complex, multi-branch conditional automation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <span className="text-white font-mono text-sm">{`</>`}</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Custom Development</h4>
                  <p className="text-xs text-gray-500">Bespoke Python and JavaScript for complex data handling that standard tools can't touch.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {['OpenAI', 'Google Gemini', 'Zapier', 'Make.com', 'Python', 'JavaScript', 'AWS', 'Webhooks', 'REST APIs'].map((tech, i) => (
              <div key={i} className="glass-card h-24 flex items-center justify-center rounded-2xl text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white hover:border-indigo-500/50 transition-all cursor-default text-center px-4">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
