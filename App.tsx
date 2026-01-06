
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Process from './components/Process';
import Services from './components/Services';
import TechStack from './components/TechStack';
import WorkflowExamples from './components/WorkflowExamples';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export type View = 'home' | 'philosophy' | 'process' | 'services' | 'results' | 'consultation';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case 'philosophy':
        return (
          <div className="pt-20">
             <div className="container mx-auto px-6 pt-12">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back to Home
                </button>
             </div>
             <Philosophy />
             <div className="py-24 bg-gray-900/30">
               <div className="container mx-auto px-6 text-center">
                 <h3 className="text-3xl font-bold mb-8">Ready to build your tracks?</h3>
                 <button onClick={() => setCurrentView('consultation')} className="inline-block bg-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all">Schedule Consultation</button>
               </div>
             </div>
          </div>
        );
      case 'process':
        return (
          <div className="pt-20">
             <div className="container mx-auto px-6 pt-12">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back to Home
                </button>
             </div>
             <Process />
             <TechStack />
          </div>
        );
      case 'services':
        return (
          <div className="pt-20">
             <div className="container mx-auto px-6 pt-12">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back to Home
                </button>
             </div>
             <Services />
             <div className="bg-gray-900/50 py-24">
                <div className="container mx-auto px-6 text-center">
                  <h2 className="text-4xl font-bold mb-8">Custom Bespoke Solutions</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto mb-12">Don't see what you need? We specialize in custom Python and JavaScript integrations for highly complex, proprietary workflows.</p>
                  <button onClick={() => setCurrentView('consultation')} className="bg-white text-gray-950 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all">Discuss Custom Needs</button>
                </div>
             </div>
          </div>
        );
      case 'results':
        return (
          <div className="pt-20">
             <div className="container mx-auto px-6 pt-12">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back to Home
                </button>
             </div>
             <WorkflowExamples />
             <Testimonials />
          </div>
        );
      case 'consultation':
        return (
          <div className="pt-32 pb-24 min-h-screen flex flex-col items-center">
            <div className="container mx-auto px-6 text-center mb-12">
               <h1 className="text-5xl font-bold mb-4">Book Your <span className="gradient-text">Free Strategy Session</span></h1>
               <p className="text-gray-400 max-w-xl mx-auto">Take the first step towards an autonomous business. We'll identify your biggest bottlenecks and map out a solution.</p>
            </div>
            <ContactForm isStandalone={true} onBack={() => setCurrentView('home')} />
          </div>
        );
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Philosophy />
            <Process />
            <Services />
            <TechStack />
            <WorkflowExamples />
            <Testimonials />
            <section id="contact">
               <ContactForm />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Header scrolled={scrolled} onNavigate={handleNavigate} currentView={currentView} />
      <main className="animate-in fade-in duration-700">
        {renderView()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
