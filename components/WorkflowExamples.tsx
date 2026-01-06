
import React from 'react';

const workflows = [
  {
    name: "Autonomous Onboarding",
    trigger: "New Client Payment (Stripe)",
    steps: ["Auto-create Slack channel", "Send Intake form", "Generate project folder", "Notify PM team"],
    impact: "95% Reduction in Admin Time"
  },
  {
    name: "Ads ROI Synthesis",
    trigger: "Daily 12:00 AM Sync",
    steps: ["Scrape Facebook/Google data", "AI synthesizes winning creative", "Update KPI Dashboard", "Send SMS summary to CEO"],
    impact: "Instant Strategic Insights"
  },
  {
    name: "proposal.ai",
    trigger: "Lead Stage: 'Qualified'",
    steps: ["Pull CRM Notes", "AI drafts custom scope of work", "Apply pricing logic", "Send Docusign link"],
    impact: "Close deals 4x faster"
  }
];

const WorkflowExamples: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-indigo-600/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 italic">Practical Examples</h2>
          <p className="text-gray-400">See the "Tracks and Engine" in action across common business bottlenecks.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workflows.map((wf, idx) => (
            <div key={idx} className="bg-gray-950 border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full"></div>
              
              <div className="text-indigo-400 font-bold mb-4 flex items-center justify-between">
                <span>{wf.name}</span>
                <span className="text-[10px] bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">LIVE</span>
              </div>
              
              <div className="mb-6">
                <div className="text-[10px] uppercase text-gray-500 mb-1 tracking-tighter">Trigger</div>
                <div className="text-sm text-gray-200">{wf.trigger}</div>
              </div>
              
              <div className="space-y-4 mb-8">
                {wf.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    {step}
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-white/5 mt-auto">
                <div className="text-xs font-bold text-white uppercase tracking-widest">{wf.impact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowExamples;
