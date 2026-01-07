
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 relative overflow-hidden bg-cyber-navy/50">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">Our DNA</div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 font-heading uppercase tracking-tighter leading-none">
                AI is the Engine. <br/><span className="cyber-gradient-text">Automation is the Tracks.</span>
              </h2>
              <div className="space-y-8 text-gray-400 leading-relaxed text-lg font-medium">
                <p>
                  Most companies treat AI like a standalone toy. They hire interns to write prompts, create 
                  manual friction points, and wonder why the ROI is flat.
                </p>
                <div className="p-6 bg-white/5 border-l-4 border-cyan-400 rounded-r-2xl italic text-gray-300">
                  "AI without automation is just faster manual work. We bridge the gap."
                </div>
                <p>
                  Ronohills engineers the tracks (Automation) so your engine (AI) can move cargo at light speed,
                  without human intervention. We handle the steps before, during, and after the model's logic.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-10 rounded-[2.5rem] border-indigo-500/20 relative overflow-hidden shadow-2xl">
                {/* Circuit line decorative */}
                <div className="absolute top-0 right-10 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
                
                <h3 className="text-2xl font-black mb-8 flex items-center gap-4 font-heading uppercase tracking-wider">
                  <span className="w-10 h-10 rounded-xl bg-indigo-500/10 text-cyan-400 flex items-center justify-center text-sm font-black italic">VS</span>
                  The Automation Gap
                </h3>
                
                <div className="space-y-12">
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-3">The Manual Bottleneck</div>
                    <div className="text-gray-400 text-sm leading-loose">
                      Prompt AI → Wait → Review → <span className="text-red-500/80 font-bold underline decoration-red-500/20 underline-offset-4 tracking-wider">Manual Copy/Paste</span> → Trigger Next Step
                    </div>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-cyan-400">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-black text-cyan-400 mb-3">The Ronohills Standard</div>
                    <div className="text-white text-sm leading-loose font-bold tracking-wide">
                      Webhook Trigger → AI Synthesis → <span className="text-cyan-400 underline decoration-cyan-400/20 underline-offset-4">Autonomous Logic Validation</span> → API Persistence → Output Delivery
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements matching the mascot glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/10 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
