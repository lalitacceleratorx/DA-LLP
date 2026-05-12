import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Bot, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { DashboardIllustration } from './DashboardIllustration';

export const Hero: React.FC = () => {
  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.5 }
    })
  };

  return (
    <section className="relative w-full h-[800px] overflow-hidden pt-[30px]">
      {/* Hidden global SVG for defining icon gradients referenced by ID */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#AEC3FF" />
            <stop offset="100%" stopColor="#0070F3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-brand-blue/10 to-transparent rounded-full blur-[120px] -z-10"></div>

      {/* Rigid Edge-to-Edge Fluid container with Zero Autospacing gutters */}
      <div className="w-full max-w-[1440px] mx-auto h-full relative">

        {/* Left Content Column: Absolute Figma Positioning */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[134px] left-[92px] w-[600px] h-[600px]"
        >
          {/* Status Badge: Precise Figma Implementation */}
          <div
            className="absolute top-0 left-0 flex items-center justify-center gap-2.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-[4px] select-none"
            style={{ width: '322px', height: '31px' }}
          >
            <div className="w-2 h-2 rounded-full bg-[#0070F3] shadow-[0_0_6px_rgba(0,112,243,0.6)] flex-shrink-0"></div>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70 leading-none">
              Cohort Starting - 20 Intakes Only
            </span>
          </div>

          {/* Main Headline: Rigid Figma Layout & Typography */}
          <h1
            className="absolute top-[27px] left-0 flex flex-col justify-center text-white select-none"
            style={{
              width: '505px',
              height: '186px'
            }}
          >
            <span className="font-medium text-[32px] leading-[50px] tracking-[-1.44px]">Become an</span>
            <span
              className="font-semibold text-[42px] leading-[50px] tracking-[-1.44px] bg-gradient-to-r from-white to-[#0070F3] bg-clip-text text-transparent pb-2"
            >
              AI- powered Data Analyst
            </span>
          </h1>

          {/* Description text: Precise Figma Positioning & Typography */}
          <p
            className="absolute top-[219.5px] left-0 flex flex-col justify-center text-white/65 font-dm font-normal select-none"
            style={{
              width: '542.7px',
              height: '80px',
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '0%'
            }}
          >
            Master SQL, Power BI, Python, AI Analytics & Business Intelligence through live mentorship, real-world projects, and execution-first learning.
          </p>

          {/* Feature Micro-Chips: Precise Figma Layout Box */}
          <div
            className="absolute top-[355px] left-0 flex flex-row flex-wrap content-start gap-[10px]"
            style={{
              width: '322px',
              height: '74px'
            }}
          >
            {[
              { icon: <Bot />, text: "AI-first curriculum", width: '146.61px' },
              { icon: <GraduationCap />, text: "Industry mentorship", width: '157.67px' },
              { icon: <Calendar />, text: "Live cohort learning", width: '154.39px' },
              { icon: <Briefcase />, text: "Real-world projects", width: '154.16px' },
            ].map((feat, i) => (
              <motion.div
                custom={i}
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                key={i}
                className="relative h-[32px] bg-white/[0.024] border border-white/10 rounded-full flex items-center select-none"
                style={{ width: feat.width }}
              >
                <div className="absolute left-[13px] top-[calc(50%-6.5px)] w-[13px] h-[13px] flex items-center justify-center">
                  {React.cloneElement(feat.icon as React.ReactElement<any>, {
                    style: { stroke: 'url(#iconGradient)', width: '13px', height: '13px' }
                  })}
                </div>
                <span className="absolute left-[32px] top-[calc(50%-8px)] h-[16px] flex items-center font-dm font-normal text-[12px] leading-[18px] text-white/75">
                  {feat.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons: Adjusted absolute position to match frame layout */}
          <div className="absolute top-[453.5px] left-0 flex items-center gap-[12px]">
            <button
              className="relative flex items-center justify-center gap-3 text-white font-dm transition-all duration-300 hover:scale-[1.02] select-none active:scale-[0.98]"
              style={{
                width: '294.84px',
                height: '56.5px',
                borderRadius: '9999px',
                background: 'linear-gradient(100.85deg, #0070F3 0%, #5E00FF 100%)',
                boxShadow: '0px 10px 40px -10px rgba(0, 112, 243, 0.7), 0px 0px 60px -10px rgba(112, 0, 255, 0.55), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.08)'
              }}
            >
              <span className="font-semibold text-[15px] leading-[22px] flex items-center text-center">
                Book Free Career Consultation
              </span>
              <ArrowRight className="w-[18px] h-[18px] flex-shrink-0" />
            </button>

            <button
              className="bg-white/[0.03] border border-blue-500 backdrop-blur-[4px] rounded-full transition-all duration-300 hover:bg-white/[0.06] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center select-none"
              style={{
                width: '206.02px',
                height: '56.5px'
              }}
            >
              <span className="font-dm font-semibold text-[15px] text-white text-center flex items-center leading-[22px] whitespace-nowrap">
                Download Curriculum
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right Dashboard Column: Absolute Figma Positioning (Top 202.88 - 92 = 110.88px, Left 732px) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[110.88px] left-[732px]"
        >
          <div className="relative">
            <DashboardIllustration />

            {/* Floating Stat Badge Top (Precise Figma Build derived relative to dashboard) */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute -top-[29px] left-[355.56px] p-[1px] rounded-[16px] overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-xl"
              style={{
                width: '156.44px',
                height: '58px',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #A4A4A4 35%, #676767 70%, #3A3A3A 100%)'
              }}
            >
              <div className="w-full h-full rounded-[15px] bg-[#080A12] flex items-center px-3 gap-2">
                {/* Green Glowing Indicator */}
                <div className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-40"></span>
                  <div className="relative w-3 h-3 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]"></div>
                </div>

                <div className="flex flex-col justify-center leading-tight">
                  <span className="text-[13px] font-bold text-white tracking-tight">12 hires this week</span>
                  <span className="text-[11px] text-[#8A93A6] font-medium">live placement feed</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Stat Badge Bottom: Recalculated precise Figma Corner placement */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="absolute bg-white/[0.01] border border-white/[0.12] rounded-[16px] shadow-2xl backdrop-blur-[1.5px] z-20 select-none overflow-hidden"
              style={{
                top: '528.12px',
                left: '-58px',
                width: '140.63px',
                height: '62px'
              }}
            >
              {/* Inner gradient icon circle */}
              <div
                className="absolute w-[36px] h-[36px] left-[17px] top-[calc(50%-18px)] rounded-full flex items-center justify-center shadow-[0_0_12px_-2px_rgba(0,112,243,0.5)]"
                style={{ background: 'linear-gradient(135deg, #0070F3 0%, #7000FF 100%)' }}
              >
                <TrendingUp className="w-[16px] h-[16px] text-white" strokeWidth={2.5} />
              </div>

              {/* Label: AVG CTC */}
              <div className="absolute left-[65px] top-[calc(50%-17.5px)] h-[15px] font-dm font-normal text-[10px] tracking-[2px] uppercase text-white/40 flex items-center">
                AVG CTC
              </div>

              {/* Value: ₹14.2 LPA */}
              <div className="absolute left-[65px] top-[calc(50%-2.5px)] h-[20px] font-sans font-normal text-[13.3px] leading-[20px] tracking-[-0.28px] text-white flex items-center whitespace-nowrap">
                ₹14.2 LPA
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
