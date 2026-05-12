import React from 'react';
import { TrendingUp, Activity, Brain, Sparkles } from 'lucide-react';

export const DashboardIllustration: React.FC = () => {
  // Cohort performance bars data extracted from user spec heights
  const cohortBarHeights = [28.8, 44.63, 34.55, 56.16, 39.59, 64.8, 50.39, 60.47, 68.39, 51.83, 63.36, 72];

  return (
    <div 
      className="relative rounded-[16px] overflow-hidden border border-[#222639] shadow-[0_0_120px_-30px_rgba(0,112,243,0.45)] font-sans select-none"
      style={{ 
        width: '576px', 
        height: '569.25px',
        background: 'linear-gradient(135deg, #0A0F24 0%, #050918 16.35%, #020511 56.73%)'
      }}
    >
      {/* 1. Header Bar Overlay+HorizontalBorder */}
      <div className="absolute h-[36px] left-[1px] right-[1px] top-[1px] bg-white/[0.02] flex items-center">
        {/* Window Controls (Red, Yellow, Green) */}
        <div className="absolute w-[10px] h-[10px] left-[16px] top-[12.5px] bg-[#FF5F57] rounded-full"></div>
        <div className="absolute w-[10px] h-[10px] left-[32px] top-[12.5px] bg-[#FEBC2E] rounded-full"></div>
        <div className="absolute w-[10px] h-[10px] left-[48px] top-[12.5px] bg-[#28C840] rounded-full"></div>
        
        {/* acceleratorX label */}
        <div className="absolute w-[83px] h-[15px] left-[242.5px] top-[10px] flex items-center text-center justify-center font-['JetBrains_Mono'] text-[10px] font-normal tracking-[1px] text-white/40 uppercase">
          acceleratorX
        </div>

        {/* ● live */}
        <div className="absolute w-[36.31px] h-[15px] left-[522px] top-[10px] flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-[#7AA6FF]">
          <div className="w-[5px] h-[5px] rounded-full bg-[#7AA6FF]"></div>
          live
        </div>
      </div>

      {/* 2. Metric Cards Top Row (Top 53px) */}
      
      {/* Card 1: Revenue */}
      <div className="absolute h-[88px] left-[17px] w-[172.66px] top-[53px] bg-white/[0.024] border border-[rgba(116,116,116,0.25)] rounded-[12px]">
        <div className="absolute h-[14px] left-[15px] top-[15.5px] flex items-center">
          <TrendingUp className="w-[14px] h-[14px] text-blue-400" />
        </div>
        <div className="absolute h-[15px] left-[35px] top-[15px] font-sans text-[10px] text-white/46 uppercase tracking-[1.8px] flex items-center">Revenue</div>
        <div className="absolute h-[18px] left-[15px] top-[36px] font-sans text-[17.7px] text-white tracking-[-0.36px] flex items-center">₹4.82Cr</div>
        <div className="absolute h-[15px] left-[15px] top-[58px] font-dm text-[10px] text-[#6EE7B7]/80 flex items-center">+18.4%</div>
      </div>

      {/* Card 2: Active users */}
      <div className="absolute h-[88px] left-[201.66px] w-[172.67px] top-[53px] bg-white/[0.024] border border-[rgba(116,116,116,0.25)] rounded-[12px]">
        <div className="absolute h-[14px] left-[15px] top-[15.5px] flex items-center">
          <Activity className="w-[14px] h-[14px] text-blue-400" />
        </div>
        <div className="absolute h-[15px] left-[35px] top-[15px] font-sans text-[10px] text-white/46 uppercase tracking-[1.8px] flex items-center">Active users</div>
        <div className="absolute h-[18px] left-[15px] top-[36px] font-sans text-[17px] text-white tracking-[-0.36px] flex items-center">248K</div>
        <div className="absolute h-[15px] left-[15px] top-[58px] font-dm text-[10px] text-[#6EE7B7]/80 flex items-center">+9.2%</div>
      </div>

      {/* Card 3: AI insights */}
      <div className="absolute h-[88px] left-[386.33px] right-[17px] top-[53px] bg-white/[0.024] border border-[rgba(116,116,116,0.25)] rounded-[12px]">
        <div className="absolute h-[14px] left-[15px] top-[15.5px] flex items-center">
          <Brain className="w-[14px] h-[14px] text-blue-400" />
        </div>
        <div className="absolute h-[15px] left-[35px] top-[15px] font-sans text-[10px] text-white/46 uppercase tracking-[1.8px] flex items-center">AI insights</div>
        <div className="absolute h-[18px] left-[15px] top-[36px] font-sans text-[17px] text-white tracking-[-0.36px] flex items-center">1,204</div>
        <div className="absolute h-[15px] left-[15px] top-[58px] font-dm text-[10px] text-[#6EE7B7]/80 flex items-center">auto</div>
      </div>

      {/* 3. Middle Row (Top 153px) */}

      {/* Card 4: Forecast Q4 (Left, wider) */}
      <div className="absolute h-[236.25px] left-[17px] w-[357.33px] top-[153px] bg-white/[0.024] border border-[rgba(116,116,116,0.25)] rounded-[12px] overflow-hidden">
        <div className="absolute h-[15px] left-[17px] top-[17px] font-sans text-[10px] text-white/46 uppercase tracking-[2px] flex items-center">Forecast · Q4</div>
        <div className="absolute h-[24px] left-[17px] top-[34px] font-sans text-[14.6px] text-white/90 tracking-[-0.32px] flex items-center">Predictive revenue model</div>
        
        {/* Tag Pill AI-powered */}
        <div className="absolute h-[25px] right-[17px] top-[25px] px-3 border border-[rgba(0,112,243,0.3)] bg-[rgba(0,112,243,0.15)] rounded-full flex items-center justify-center">
          <span className="font-['JetBrains_Mono'] text-[10px] text-[#7AA6FF]">AI-powered</span>
        </div>

        {/* Embedded Graph View */}
        <div className="absolute h-[110px] left-[17px] right-[17px] top-[70px]">
          <svg className="w-full h-full" viewBox="0 0 323 110" preserveAspectRatio="none" fill="none">
            {/* Horizontal subtle grid lines extracted from spec */}
            <line x1="0" y1="27" x2="323" y2="27" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
            <line x1="0" y1="47" x2="323" y2="47" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
            <line x1="0" y1="67" x2="323" y2="67" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
            <line x1="0" y1="87" x2="323" y2="87" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
            
            {/* Fill Gradient path */}
            <path d="M0 85 C 80 85, 100 75, 160 60 C 220 45, 260 38, 323 35 V 110 H 0 Z" fill="url(#forecastFill)" />
            
            {/* Core Trend Line */}
            <path d="M0 85 C 80 85, 100 75, 160 60 C 220 45, 260 38, 323 35" stroke="#0070F3" strokeWidth="2" />
            
            {/* Dashed Forecast Projective Line */}
            <path d="M0 95 C 80 95, 100 90, 160 82 C 220 75, 260 70, 323 65" stroke="rgba(122, 166, 255, 0.45)" strokeWidth="1.2" strokeDasharray="4 4" />
            
            {/* Active Pointer Node */}
            <circle cx="260" cy="42" r="6" fill="rgba(0, 112, 243, 0.3)" />
            <circle cx="260" cy="42" r="3" fill="#FFFFFF" />

            <defs>
              <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(0, 112, 243, 0.45)" />
                <stop offset="100%" stopColor="rgba(0, 112, 243, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Card 5: AI Copilot Module (Right side) */}
      <div 
        className="absolute h-[236.25px] left-[386.33px] right-[17px] top-[153px] border border-[rgba(116,116,116,0.25)] rounded-[12px]"
        style={{ background: 'linear-gradient(135deg, rgba(0, 112, 243, 0.1) 0%, rgba(94, 0, 255, 0.1) 100%)' }}
      >
        {/* Header Header Pill */}
        <div className="absolute h-[28px] left-[17px] right-[17px] top-[18.5px] flex items-center gap-2.5">
          <div className="w-[28px] h-[28px] bg-gradient-to-br from-[#0070F3] to-[#7000FF] rounded-full flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-[14px] h-[14px] text-white" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="h-[16px] font-dm font-semibold text-[12px] text-white flex items-center">AI copilot</div>
            <div className="h-[15px] font-sans text-[10px] text-white/46 flex items-center">analyst-mode</div>
          </div>
        </div>

        {/* Content Bubble 1 */}
        <div className="absolute h-[93.5px] left-[17px] right-[17px] top-[60px] bg-black/[0.04] border border-[#222639] rounded-[14px] p-[11px]">
          <div className="font-dm text-[11px] leading-[18px] text-white/75">
            Mumbai region driving 38% growth. Recommend reallocation.
          </div>
        </div>

        {/* Content Bubble 2 (Generated) */}
        <div className="absolute h-[57.75px] left-[17px] right-[17px] top-[161.5px] border border-[rgba(0, 112, 243, 0.25)] rounded-[14px] px-[11px] flex items-center gap-1.5">
          <span className="font-['JetBrains_Mono'] text-[10px] text-[#7AA6FF] mt-[-8px]">›</span>
          <div className="flex flex-col font-dm text-[11px] leading-[18px] text-white/85">
            <span>Generated 3</span>
            <span>dashboards</span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Row (Top 401.25px) */}

      {/* Left Bottom: Cohort performance */}
      <div className="absolute h-[151px] left-[17px] right-[247.84px] top-[401.25px] bg-white/[0.024] border border-[rgba(116,116,116,0.25)] rounded-[12px]">
        <div className="absolute h-[16px] left-[17px] top-[17px] font-dm font-semibold text-[12px] text-white/60 flex items-center">Cohort performance</div>
        <div className="absolute h-[15px] right-[26px] top-[17.5px] font-sans text-[10px] text-white/46 flex items-center">last 30d</div>
        
        {/* Vertical Bars Layout */}
        <div className="absolute bottom-[17px] left-[17px] right-[17px] h-[80px] flex items-end gap-[4.5px]">
          {cohortBarHeights.map((barHeight, index) => (
            <div 
              key={index} 
              className="flex-1 rounded-[10px]" 
              style={{ 
                height: `${barHeight}px`,
                background: 'linear-gradient(180deg, #2C8DFE 0%, #4D00FF 100%)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Bottom: Tools Active */}
      <div className="absolute h-[151px] left-[340.16px] right-[17px] top-[401.25px] bg-white/[0.024] border border-[rgba(116,116,116,0.25)] rounded-[12px]">
        <div className="absolute h-[16px] left-[17px] top-[17px] font-dm font-semibold text-[12px] text-white/60 flex items-center">Tools active</div>
        
        {/* Row 1: Taller for Power BI (height 48px) */}
        {/* SQL */}
        <div className="absolute h-[48px] left-[17px] right-[145.56px] top-[45px] bg-white/[0.03] border border-[#222639] rounded-[12px] flex items-center justify-center text-center">
          <span className="font-sans font-medium text-[10px] text-white/70">SQL</span>
        </div>
        {/* Python */}
        <div className="absolute h-[48px] left-[81.28px] right-[81.28px] top-[45px] bg-white/[0.03] border border-[#222639] rounded-[12px] flex items-center justify-center text-center">
          <span className="font-sans font-medium text-[10px] text-white/70">Python</span>
        </div>
        {/* Power BI (Two Line wrapped layout) */}
        <div className="absolute h-[48px] left-[145.56px] right-[17px] top-[45px] bg-white/[0.03] border border-[#222639] rounded-[12px] flex flex-col items-center justify-center text-center leading-[12px]">
          <span className="font-sans font-medium text-[10px] text-white/70">Power</span>
          <span className="font-sans font-medium text-[10px] text-white/70">BI</span>
        </div>

        {/* Row 2: Normal Height (height 33px) */}
        {/* ChatGPT */}
        <div className="absolute h-[33px] left-[17px] right-[145.56px] top-[101px] bg-white/[0.03] border border-[#222639] rounded-[12px] flex items-center justify-center text-center">
          <span className="font-sans font-medium text-[10px] text-white/70">ChatGPT</span>
        </div>
        {/* Tableau */}
        <div className="absolute h-[33px] left-[81.28px] right-[81.28px] top-[101px] bg-white/[0.03] border border-[#222639] rounded-[12px] flex items-center justify-center text-center">
          <span className="font-sans font-medium text-[10px] text-white/70">Tableau</span>
        </div>
        {/* MySQL */}
        <div className="absolute h-[33px] left-[145.56px] right-[17px] top-[101px] bg-white/[0.03] border border-[#222639] rounded-[12px] flex items-center justify-center text-center">
          <span className="font-sans font-medium text-[10px] text-white/70">MySQL</span>
        </div>
      </div>
    </div>
  );
};
