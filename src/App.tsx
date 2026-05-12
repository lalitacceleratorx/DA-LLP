import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ComparisonSection } from './components/ComparisonSection';
import { CurriculumSection } from './components/CurriculumSection';
import { MentorshipSection } from './components/MentorshipSection';
import { StackAndOpportunity } from './components/StackAndOpportunity';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import './App.css';

const logos = [
  { name: 'Infosys', width: 68.47, fontSize: 21 },
  { name: 'TCS', width: 42.04, fontSize: 21.6 },
  { name: 'Deloitte', width: 76.93, fontSize: 21.8 },
  { name: 'IBM', width: 39.9, fontSize: 22.5 },
  { name: 'Accenture', width: 103, fontSize: 21.9 },
  { name: 'Cognizant', width: 104.61, fontSize: 22.5 },
  { name: 'Wipro', width: 61.89, fontSize: 23.1 },
  { name: 'HCL', width: 45.4, fontSize: 22.7 },
  { name: 'KPMG', width: 66.11, fontSize: 23.1 },
  { name: 'EY', width: 26.84, fontSize: 21.6 }
];

const MarqueeContent = () => (
  <div className="marquee-content">
    {logos.map((logo, i) => (
      <span 
        key={i} 
        className="marquee-logo"
        style={{ 
          width: `${logo.width}px`, 
          fontSize: `${logo.fontSize}px`
        }}
      >
        {logo.name}
      </span>
    ))}
  </div>
);

const CompanyLogos = () => (
  <section className="max-w-[1216px] mx-auto border-t border-white/5 relative mt-[80px] pt-0" style={{ height: '369px' }}>
    {/* Heading Container */}
    <div className="w-full flex justify-center relative">
      <h2 
        className="flex items-center justify-center text-center font-normal text-[32px] leading-[40px] tracking-[-0.72px] text-white font-sans"
        style={{
          maxWidth: '648px',
          height: '85px'
        }}
      >
        Learners from fast-growing companies are upskilling with AcceleratorX
      </h2>
      {/* Gradient line divider */}
      <div 
        style={{
          position: 'absolute',
          width: '615px',
          height: '3px',
          left: '50%',
          transform: 'translateX(-50%) matrix(-1, 0, 0, 1, 0, 0)',
          top: '106px',
          background: 'linear-gradient(90deg, #C3C3C3 0%, #565656 100%)',
        }}
      />
    </div>

    {/* Mask Group (Marquee) - starts 131px from top of section */}
    <div className="marquee-container" style={{ marginTop: '46px', height: '32px' }}>
      <div className="marquee-track">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
    
    {/* Stats Container - starts 227px from top (131+32=163, 227-163=64px gap) */}
    <div 
      className="grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-[16px] bg-[#01030B] overflow-hidden mt-[64px] min-h-[142px]"
    >
      {/* Stat 1: Learners trained */}
      <div className="flex flex-col justify-center items-center text-center py-6 md:py-0 h-full border-white/15 border-b md:border-b-0 border-r relative">
        <div 
          className="text-[46.3px] font-normal leading-[48px] tracking-[-0.96px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(180deg, #E4F0FF 0%, #4B75FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          12,400+
        </div>
        <div className="text-[14px] font-normal leading-[20px] tracking-[2.52px] text-white/55 uppercase mt-[8px] font-dm">
          Learners trained
        </div>
      </div>

      {/* Stat 2: Projects completed */}
      <div className="flex flex-col justify-center items-center text-center py-6 md:py-0 h-full border-white/15 border-b md:border-b-0 md:border-r relative">
        <div 
          className="text-[48px] font-normal leading-[48px] tracking-[-0.96px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(180deg, #E4F0FF 0%, #4B75FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          38,000+
        </div>
        <div className="text-[14px] font-normal leading-[20px] tracking-[2.52px] text-white/55 uppercase mt-[8px] font-dm">
          Projects completed
        </div>
      </div>

      {/* Stat 3: Industry mentors */}
      <div className="flex flex-col justify-center items-center text-center py-6 md:py-0 h-full border-white/15 border-r relative">
        <div 
          className="text-[45.2px] font-normal leading-[48px] tracking-[-0.96px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(180deg, #E4F0FF 0%, #4B75FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          120+
        </div>
        <div className="text-[14px] font-normal leading-[20px] tracking-[2.52px] text-white/55 uppercase mt-[8px] font-dm">
          Industry mentors
        </div>
      </div>

      {/* Stat 4: AI tools covered */}
      <div className="flex flex-col justify-center items-center text-center py-6 md:py-0 h-full relative">
        <div 
          className="text-[47.3px] font-normal leading-[48px] tracking-[-0.96px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: 'linear-gradient(180deg, #E4F0FF 0%, #4B75FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          30+
        </div>
        <div className="text-[14px] font-normal leading-[20px] tracking-[2.52px] text-white/55 uppercase mt-[8px] font-dm">
          AI tools covered
        </div>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-[#080808] selection:bg-brand-blue/30 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        {/* Top Fold */}
        <Hero />
        
        {/* Social Proof & Stats */}
        <CompanyLogos />

        {/* The Shift: Old vs New */}
        <ComparisonSection />

        {/* Deep Dive into Syllabus */}
        <CurriculumSection />

        {/* Learning Ecosystem and Mentors list */}
        <MentorshipSection />

        {/* Tools & Certifications */}
        <StackAndOpportunity />

        {/* Final Pricing and Close */}
        <PricingSection />

        {/* Global Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
