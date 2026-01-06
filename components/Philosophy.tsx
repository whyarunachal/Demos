
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">AI is the Engine. <br/><span className="text-indigo-400">Automation is the Tracks.</span></h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Most companies treat AI like a standalone tool. They hire interns to write prompts, create 
                  manual bottlenecks, and wonder why they haven't seen "transformational" results.
                </p>
                <p>
                  <strong className="text-white">The Truth:</strong> AI is often just one step in a multi-stage process. 
                  If you have to manually copy-paste an AI's output into your CRM, you haven't automated—you've 
                  just changed the type of manual work.
                </p>
                <p>
                  Ronohills builds the tracks (Automation) so your engine (AI) can actually move cargo from A to B 
                  instantly, without human intervention. We handle the steps before, during, and after the AI's logic.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl border-indigo-500/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-sm font-bold italic">VS</span>
                  The Automation Gap
                </h3>
                
                <div className="space-y-8">
                  <div className="relative pl-6 border-l border-white/10">
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-2">The Manual Bottleneck</div>
                    <div className="text-gray-300">Prompt AI → Wait for Output → Review → <span className="text-red-400 underline decoration-red-400/30">Manual Copy/Paste</span> → Trigger Next Step</div>
                  </div>
                  <div className="relative pl-6 border-l-2 border-indigo-500">
                    <div className="text-sm uppercase tracking-widest text-indigo-400 mb-2">Ronohills Workflow</div>
                    <div className="text-gray-200">Trigger Event → AI Synthesis → Autonomous Validation → API Update → Instant Output</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
