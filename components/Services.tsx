
import React from 'react';

const services = [
  {
    title: "Sales & Marketing",
    description: "Automate lead routing, content synthesis, CRM management, and dynamic contract generation.",
    features: ["Instant Lead Response", "Auto-Personalized Outreach", "Marketing ROI Tracking"],
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Data Recognition",
    description: "AI-powered analysis of images, voice, and video to trigger actions based on sentiment or keywords.",
    features: ["Visual Inspection AI", "Audio Sentiment Analysis", "Automated Video Tagging"],
    color: "from-purple-500/20 to-fuchsia-500/20"
  },
  {
    title: "Predictive Analytics",
    description: "Custom models for risk assessment, inventory forecasting, and churn prediction.",
    features: ["Stock Level Forecasting", "Credit Risk Modeling", "Dynamic Pricing Engines"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Conversational AI",
    description: "Advanced prompt engineering for customer service chatbots that actually resolve issues.",
    features: ["L2 Support Automation", "Booking/Scheduling Bots", "Voice AI Receptionists"],
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    title: "Operations & PM",
    description: "Connecting manual steps from onboarding and admin to invoicing and accounting.",
    features: ["Client Onboarding Flow", "Automated Billing/Reminders", "Task Auto-Delegation"],
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    title: "Data Consolidation",
    description: "Eliminating silos by automating data entry, collection, and cleansing across 1,000+ apps.",
    features: ["Sheet-to-CRM Sync", "Auto-Data Cleansing", "Unified KPI Dashboards"],
    color: "from-indigo-500/20 to-cyan-500/20"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise-Grade <span className="gradient-text">Modules</span></h2>
            <p className="text-gray-400">Battle-tested solutions designed to handle the core pillars of your business growth.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`glass-card p-8 rounded-3xl group hover-glass transition-all duration-300 flex flex-col`}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-6 flex items-center justify-center`}>
                <div className="w-3 h-3 rounded-full bg-white opacity-40 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
