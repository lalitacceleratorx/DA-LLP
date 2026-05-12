import React from 'react';
import { X, Check, Zap } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const oldWorldList = [
    "Manual reporting", 
    "Repetitive dashboards", 
    "Static workflows", 
    "Hours of cleanup", 
    "Reactive insights"
  ];

  const newWorldList = [
    "Automated insights", 
    "AI workflows", 
    "Predictive intelligence", 
    "Decision systems", 
    "Real-time foresight"
  ];

  return (
    <section className="max-w-[1216px] mx-auto relative flex flex-col items-center mt-[140px]">
      {/* THE SHIFT HEADER GROUP */}
      <div className="flex flex-col items-center w-full relative">
        {/* Label + Icon */}
        <div className="flex items-center justify-center gap-[8px] h-[16.5px]">
          <Zap className="w-[12px] h-[12px] text-[#4B75FF] fill-[#4B75FF]" />
          <span 
            className="font-dm font-normal text-[11px] leading-[16px] uppercase tracking-[2.2px]"
            style={{
              background: 'linear-gradient(180deg, #E4F0FF 25.33%, #1B50FF 79.88%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            The shift
          </span>
        </div>

        {/* Main Heading */}
        <h2 
          className="font-sans font-normal text-[45px] leading-[48px] tracking-[-0.96px] text-white text-center mt-[20.75px]"
          style={{ height: '48px' }}
        >
          Data analytics has changed forever.
        </h2>

        {/* Description */}
        <p 
          className="font-dm font-normal text-[16px] leading-[24px] text-center text-white/60 max-w-[700px] mt-[17px]"
          style={{ height: '45px' }}
        >
          The analysts who thrive in 2026 aren't the ones writing more SQL — they're the ones orchestrating AI to deliver decisions.
        </p>

        {/* Underline Bar Frame 51398 */}
        <div 
          className="absolute w-[763px] h-[3px] top-[166px]"
          style={{
            background: 'linear-gradient(90deg, #C3C3C3 0%, #565656 100%)',
            transform: 'matrix(-1, 0, 0, 1, 0, 0)'
          }}
        />
      </div>

      {/* CARDS GRID - top 208px from section top. Subtext is 105+45=150. Wait, 208 - 150 = 58px gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] w-full mt-[58px]">
        
        {/* Old World Card */}
        <div 
          className="relative w-full border border-[#222639] rounded-[24px] bg-white/[0.016] overflow-hidden px-[41px] pt-[41px]"
          style={{ minHeight: '338.5px' }}
        >
          {/* Old World label */}
          <div className="font-dm font-normal text-[11px] leading-[16px] tracking-[2.2px] uppercase text-white/40">
            Old world
          </div>
          
          {/* Heading 3 */}
          <h3 className="font-sans font-normal text-[22.3px] leading-[32px] tracking-[-0.48px] text-white/70 mt-[16px] h-[32px] flex items-center">
            Traditional analytics
          </h3>

          {/* List */}
          <ul className="mt-[24px] space-y-[12px]">
            {oldWorldList.map((text, idx) => (
              <li key={idx} className="flex items-center h-[24px]">
                <div className="w-[24px] h-[24px] rounded-full bg-white/[0.04] border border-[#222639] flex items-center justify-center mr-[12px]">
                  <X className="w-[12px] h-[12px] text-white/55" strokeWidth={2.5} />
                </div>
                <span className="font-dm font-normal text-[15px] leading-[22px] text-white/55">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* New World Card */}
        <div 
          className="relative w-full border border-white/10 rounded-[24px] bg-[#030511] overflow-hidden px-[40px] pt-[40px]"
          style={{ 
            minHeight: '338.5px',
            boxShadow: '0px 0px 22.4px rgba(0, 112, 243, 0.3)'
          }}
        >
          {/* Inner layer bg */}
          <div className="absolute inset-[1px] bg-[#030511] rounded-[24px] -z-10"></div>
          
          {/* New World label */}
          <div className="font-dm font-normal text-[11px] leading-[16px] tracking-[2.2px] uppercase text-[#7AA6FF]">
            New world · AI-native
          </div>

          {/* Heading 3 */}
          <h3 
            className="font-sans font-normal text-[22.1px] leading-[32px] tracking-[-0.48px] mt-[16.5px] h-[32px] flex items-center"
            style={{
              background: 'linear-gradient(93.56deg, #FFFFFF 0%, #B6C8FF 50%, #B58CFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            AI-powered analytics
          </h3>

          {/* List */}
          <ul className="mt-[24px] space-y-[12px]">
            {newWorldList.map((text, idx) => (
              <li key={idx} className="flex items-center h-[24px]">
                <div 
                  className="w-[24px] h-[24px] rounded-full flex items-center justify-center mr-[12px]"
                  style={{ background: 'linear-gradient(135deg, #0070F3 0%, #7000FF 100%)' }}
                >
                  <Check className="w-[12px] h-[12px] text-white" strokeWidth={3} />
                </div>
                <span className="font-dm font-normal text-[15px] leading-[22px] text-white/90">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
