
import React, { useState } from 'react';

interface ContactFormProps {
  isStandalone?: boolean;
  onBack?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isStandalone, onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mvzgjjqr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.errors ? data.errors.map((e: any) => e.message).join(', ') : 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container mx-auto px-6 ${isStandalone ? 'py-0' : 'py-24'}`}>
      {isStandalone && onBack && (
        <div className="max-w-6xl mx-auto mb-6">
           <button 
             onClick={onBack}
             className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
             Return
           </button>
        </div>
      )}
      <div className="max-w-6xl mx-auto glass-card rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-indigo-500/10">
        <div className="lg:w-1/2 bg-indigo-600 p-12 lg:p-20 text-white flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Unearth your <br/>hidden ROI</h2>
          <p className="text-indigo-100 mb-10 text-lg leading-relaxed">
            Book a 20-minute consultation. No sales pitch—just a deep dive into 
            your current bottlenecks and a blueprint for your first automation.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span>Immediate Process Map Sketch</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span>Custom Tech Stack Suggestion</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span>Estimated Time & Cost Savings</span>
            </li>
          </ul>
        </div>
        
        <div className="lg:w-1/2 p-12 lg:p-20 bg-gray-900 flex flex-col justify-center">
          {submitted ? (
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Received</h3>
              <p className="text-gray-400">Our Chief Automation Officer will be in touch within 2 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-indigo-400 font-bold hover:underline">Send another inquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-all text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Work Email</label>
                  <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-all text-sm" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Main Bottleneck</label>
                <select name="bottleneck" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-all text-sm appearance-none cursor-pointer">
                  <option className="bg-gray-900">Manual Data Entry</option>
                  <option className="bg-gray-900">Slow Client Onboarding</option>
                  <option className="bg-gray-900">Customer Support Overload</option>
                  <option className="bg-gray-900">Reporting & Analytics silos</option>
                  <option className="bg-gray-900">Other / Not Sure</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message (Optional)</label>
                <textarea name="message" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-all text-sm h-32 resize-none" placeholder="Tell us about your manual process..."></textarea>
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl">
                  {error}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-gray-950 font-bold py-4 rounded-xl hover:bg-indigo-50 transition-all active:scale-[0.98] shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-gray-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Request Free Audit'}
              </button>
              
              <p className="text-[10px] text-gray-600 text-center">
                By submitting, you agree to our privacy policy. We never spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
