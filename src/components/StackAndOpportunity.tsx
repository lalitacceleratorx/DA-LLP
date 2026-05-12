import React from 'react';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const StackIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_stack_icon)">
      <path d="M6 4C8.48528 4 10.5 3.32843 10.5 2.5C10.5 1.67157 8.48528 1 6 1C3.51472 1 1.5 1.67157 1.5 2.5C1.5 3.32843 3.51472 4 6 4Z" stroke="url(#paint0_stack_grad)" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.5 2.5V9.5C1.5 9.89782 1.97411 10.2794 2.81802 10.5607C3.66193 10.842 4.80653 11 6 11C7.19347 11 8.33807 10.842 9.18198 10.5607C10.0259 10.2794 10.5 9.89782 10.5 9.5V2.5" stroke="url(#paint1_stack_grad)" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.5 6C1.5 6.39782 1.97411 6.77936 2.81802 7.06066C3.66193 7.34196 4.80653 7.5 6 7.5C7.19347 7.5 8.33807 7.34196 9.18198 7.06066C10.0259 6.77936 10.5 6.39782 10.5 6" stroke="url(#paint2_stack_grad)" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <linearGradient id="paint0_stack_grad" x1="5.97225" y1="1.75994" x2="5.97225" y2="3.39631" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4F0FF" />
        <stop offset="1" stopColor="#1B50FF" />
      </linearGradient>
      <linearGradient id="paint1_stack_grad" x1="5.97225" y1="4.65317" x2="5.97225" y2="9.28954" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4F0FF" />
        <stop offset="1" stopColor="#1B50FF" />
      </linearGradient>
      <linearGradient id="paint2_stack_grad" x1="5.97225" y1="6.37997" x2="5.97225" y2="7.19815" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4F0FF" />
        <stop offset="1" stopColor="#1B50FF" />
      </linearGradient>
      <clipPath id="clip0_stack_icon">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CertificateIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_cert_icon)">
      <path d="M3 4.5H2.25C1.91848 4.5 1.60054 4.3683 1.36612 4.13388C1.1317 3.89946 1 3.58152 1 3.25C1 2.91848 1.1317 2.60054 1.36612 2.36612C1.60054 2.1317 1.91848 2 2.25 2H3" stroke="url(#paint0_cert_grad)" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 4.5H9.75C10.0815 4.5 10.3995 4.3683 10.6339 4.13388C10.8683 3.89946 11 3.58152 11 3.25C11 2.91848 10.8683 2.60054 10.6339 2.36612C10.3995 2.1317 10.0815 2 9.75 2H9" stroke="url(#paint1_cert_grad)" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 11H10" stroke="url(#paint2_cert_grad)" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 7.33008V8.50008C5 8.77508 4.765 8.99008 4.515 9.10508C3.925 9.37508 3.5 10.1201 3.5 11.0001" stroke="url(#paint3_cert_grad)" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 7.33008V8.50008C7 8.77508 7.235 8.99008 7.485 9.10508C8.075 9.37508 8.5 10.1201 8.5 11.0001" stroke="url(#paint4_cert_grad)" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 1H3V4.5C3 5.29565 3.31607 6.05871 3.87868 6.62132C4.44129 7.18393 5.20435 7.5 6 7.5C6.79565 7.5 7.55871 7.18393 8.12132 6.62132C8.68393 6.05871 9 5.29565 9 4.5V1Z" stroke="url(#paint5_cert_grad)" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <linearGradient id="paint0_cert_grad" x1="1.99383" y1="2.63329" x2="1.99383" y2="3.99692" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4F0FF" />
        <stop offset="1" stopColor="#1B50FF" />
      </linearGradient>
      <linearGradient id="paint1_cert_grad" x1="9.99383" y1="2.63329" x2="9.99383" y2="3.99692" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4F0FF" />
        <stop offset="1" stopColor="#1B50FF" />
      </linearGradient>
      <linearGradient id="paint2_cert_grad" x1="5.97534" y1="11.2533" x2="5.97534" y2="11.7988" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4F0FF" />
        <stop offset="1" stopColor="#1B50FF" />
      </linearGradient>
      <linearGradient id="paint3_cert_grad" x1="4.24538" y1="8.25974" x2="4.24538" y2="10.2616" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4F0FF" />
        <stop offset="1" stopColor="#1B50FF" />
      </linearGradient>
      <linearGradient id="paint4_cert_grad" x1="7.74538" y1="8.25974" x2="7.74538" y2="10.2616" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4F0FF" />
        <stop offset="1" stopColor="#1B50FF" />
      </linearGradient>
      <linearGradient id="paint5_cert_grad" x1="5.9815" y1="2.64654" x2="5.9815" y2="6.192" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E4F0FF" />
        <stop offset="1" stopColor="#1B50FF" />
      </linearGradient>
      <clipPath id="clip0_cert_icon">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CertificateCard = () => (
  <div className="relative w-[446px] h-[608px] rounded-[8px] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 group shrink-0">
    <img
      src="/DA.png"
      alt="Certificate of Graduation"
      className="w-full h-full object-cover"
    />
    {/* Glossy Overlay */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-white to-transparent transition-opacity duration-500 pointer-events-none" />
  </div>
);

export const StackAndOpportunity: React.FC = () => {
  const row1 = [
    { name: "SQL", icon: "/tools/sql.png" },
    { name: "Python", icon: "/tools/python.png" },
    { name: "Power BI", icon: "/tools/power-bi.png" },
    { name: "ChatGPT", icon: "/tools/chatgpt.png" },
    { name: "Tableau", icon: "/tools/tableau.png" },
    { name: "Excel", icon: "/tools/excel.png" }
  ];
  const row2 = [
    { name: "MySQL", icon: "/tools/mysql.png" },
    { name: "Pandas", icon: "/tools/pandas.png" },
    { name: "Looker", icon: "/tools/looker.png" },
    { name: "Google Analytics", icon: "/tools/google-analytics.png" },
    { name: "Gemini", icon: "/tools/gemini.png" },
    { name: "Numpy", icon: "/tools/numpy.png" }
  ];

  return (
    <div className="bg-brand-bg">
      {/* Tools Stack */}
      <section className="w-full max-w-[1368px] mx-auto flex flex-col lg:flex-row items-center py-24 gap-10 px-6">

        {/* Left Column (Frame 51396) */}
        <div className="flex flex-col items-center text-center gap-[21px] w-full max-w-[331px] shrink-0">
          {/* Label (Frame 51395) */}
          <div className="flex items-center gap-2 h-[16.5px]">
            <StackIcon />
            <span className="text-[11px] font-normal tracking-[2.2px] uppercase font-dm bg-gradient-to-b from-[#E4F0FF] via-[#E4F0FF] to-[#1B50FF] bg-clip-text text-transparent leading-[16px] flex items-center">
              STACK
            </span>
          </div>

          <h2 className="w-full max-w-[331px] text-white font-sans font-normal text-[44.1px] leading-[48px] tracking-[-0.96px] text-center">
            Tools you'll actually work with.
          </h2>
        </div>

        {/* Right Column (Frame 51397) */}
        <div className="relative w-full max-w-[1037px] h-[498px] bg-[rgba(0,0,0,0.01)] border border-white/15 rounded-[16px] shadow-[inset_41px_4px_30px_#000000] overflow-hidden flex flex-col justify-center gap-[12.67px]">
          {/* Heavy mask on left/right edges as shown in example image */}
          <div className="absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none opacity-90" />
          <div className="absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none opacity-50" />

          {/* Row 1 */}
          <div className="flex w-full overflow-hidden group py-2">
            <motion.div
              className="flex gap-[11px] shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...row1, ...row1].map((tool, i) => (
                <div key={i} className="w-[193px] h-[192px] bg-[rgba(255,255,255,0.02)] border border-[#222639] rounded-[16px] flex flex-col items-center justify-center gap-6 shrink-0 hover:border-white/30 hover:bg-white/[0.04] transition-colors">
                  <img src={tool.icon} alt={tool.name} className="w-20 h-20 md:w-24 md:h-24 object-contain filter drop-shadow-lg" />
                  <span className="text-[17px] font-normal tracking-[-0.36px] text-white/80 font-sans">{tool.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex w-full overflow-hidden group py-2">
            <motion.div
              className="flex gap-[11px] shrink-0"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...row2, ...row2].map((tool, i) => (
                <div key={i} className="w-[193px] h-[192px] bg-[rgba(255,255,255,0.02)] border border-[#222639] rounded-[16px] flex flex-col items-center justify-center gap-6 shrink-0 hover:border-white/30 hover:bg-white/[0.04] transition-colors">
                  <img src={tool.icon} alt={tool.name} className="w-20 h-20 md:w-24 md:h-24 object-contain filter drop-shadow-lg" />
                  <span className="text-[17px] font-normal tracking-[-0.36px] text-white/80 font-sans">{tool.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="relative overflow-visible w-full py-24 flex flex-col items-center">
        {/* Radial Background Glow (Gradient+Blur from CSS) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[40px] opacity-40 pointer-events-none"
            style={{
              background: 'radial-gradient(70.71% 70.71% at 50% 50%, rgba(0, 112, 243, 0.35) 0%, rgba(0, 112, 243, 0) 60%)'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center">
          {/* Label (matches layout & gradients) */}
          <div className="flex items-center justify-center gap-2 h-[16.5px] mb-6">
            <CertificateIcon />
            <span className="text-[11px] font-normal tracking-[2.2px] uppercase font-dm bg-gradient-to-b from-[#E4F0FF] via-[#E4F0FF] to-[#1B50FF] bg-clip-text text-transparent leading-[16px] flex items-center">
              CERTIFICATION
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white font-sans font-normal text-[43.7px] leading-[48px] tracking-[-0.96px] text-center mb-8 max-w-[750px]">
            Globally-recognized certification,<br />by AcceleratorX &IBM
          </h2>

          {/* Separator Line (Frame 51398) */}
          <div
            className="w-full max-w-[1206px] h-[3px] mb-16"
            style={{
              background: 'linear-gradient(90deg, #C3C3C3 0%, #565656 100%)',
              transform: 'matrix(-1, 0, 0, 1, 0, 0)'
            }}
          />

          {/* Certificates Side-by-Side (matching visual from image) */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 justify-center items-center w-full relative">
            <CertificateCard />
            <div className="hidden md:block">
              <CertificateCard />
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity (The Opportunity) */}
      {/* Market Opportunity (The Opportunity) */}
      <section className="relative w-full max-w-[1216px] mx-auto mt-[140px] mb-[140px]" style={{ height: '432.59px' }}>
        {/* SVG Label Icon */}
        <div className="absolute top-[2.25px] left-0 w-[12px] h-[12px] flex items-center justify-center">
          <TrendingUp className="w-[12px] h-[12px] text-[#4B75FF]" />
        </div>

        {/* Label */}
        <div className="absolute top-0 left-[20px] h-[16.5px] flex items-center">
          <span
            className="font-dm font-normal text-[11px] leading-[16px] tracking-[2.2px] uppercase"
            style={{
              background: 'linear-gradient(180deg, #E4F0FF 25.33%, #1B50FF 79.88%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            The opportunity
          </span>
        </div>

        {/* Heading 2 */}
        <h2
          className="absolute top-[31.25px] left-0 font-sans font-normal text-[44.1px] leading-[48px] tracking-[-0.96px] text-white flex items-center"
          style={{
            width: '488.7px',
            height: '156px'
          }}
        >
          AI + data skills are <br />
          becoming core business <br />
          skills.
        </h2>

        {/* Divider Frame 51398 */}
        <div
          className="absolute top-[203.59px] left-0 w-[584px] h-[3px]"
          style={{
            background: 'linear-gradient(90deg, #C3C3C3 0%, #565656 100%)',
            transform: 'matrix(-1, 0, 0, 1, 0, 0)'
          }}
        />

        {/* Stat 1 */}
        <div
          className="absolute top-[231.25px] left-0 bg-[rgba(255,255,255,0.02)] border border-[#222639] rounded-[16px] group hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 overflow-hidden"
          style={{ width: '284px', height: '101.5px' }}
        >
          <div
            className="absolute left-[21px] top-[21px] h-[32px] font-sans font-normal text-[23.6px] leading-[32px] tracking-[-0.48px] flex items-center"
            style={{
              background: 'linear-gradient(180deg, #E4F0FF 0%, #4B75FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            73%
          </div>
          <div className="absolute left-[21px] top-[61px] h-[19.5px] font-dm font-normal text-[12px] leading-[20px] text-[rgba(255,255,255,0.55)] flex items-center">
            of hiring managers prioritize AI fluency
          </div>
        </div>

        {/* Stat 2 */}
        <div
          className="absolute top-[231.25px] left-[300px] bg-[rgba(255,255,255,0.02)] border border-[#222639] rounded-[16px] group hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 overflow-hidden"
          style={{ width: '284px', height: '101.5px' }}
        >
          <div
            className="absolute left-[21px] top-[21px] h-[32px] font-sans font-normal text-[22.3px] leading-[32px] tracking-[-0.48px] flex items-center"
            style={{
              background: 'linear-gradient(180deg, #E4F0FF 0%, #4B75FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ₹12-28 LPA
          </div>
          <div className="absolute left-[21px] top-[61px] h-[19.5px] font-dm font-normal text-[12px] leading-[20px] text-[rgba(255,255,255,0.55)] flex items-center">
            avg AI-analyst CTC range in India
          </div>
        </div>

        {/* Stat 3 */}
        <div
          className="absolute top-[348.75px] left-0 bg-[rgba(255,255,255,0.02)] border border-[#222639] rounded-[16px] group hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 overflow-hidden"
          style={{ width: '284px', height: '101.5px' }}
        >
          <div
            className="absolute left-[21px] top-[21px] h-[32px] font-sans font-normal text-[22.7px] leading-[32px] tracking-[-0.48px] flex items-center"
            style={{
              background: 'linear-gradient(180deg, #E4F0FF 0%, #4B75FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            2.4×
          </div>
          <div className="absolute left-[21px] top-[61px] h-[19.5px] font-dm font-normal text-[12px] leading-[20px] text-[rgba(255,255,255,0.55)] flex items-center">
            demand growth YoY for AI-native roles
          </div>
        </div>

        {/* Stat 4 */}
        <div
          className="absolute top-[348.75px] left-[300px] bg-[rgba(255,255,255,0.02)] border border-[#222639] rounded-[16px] group hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 overflow-hidden"
          style={{ width: '284px', height: '101.5px' }}
        >
          <div
            className="absolute left-[21px] top-[21px] h-[32px] font-sans font-normal text-[21.8px] leading-[32px] tracking-[-0.48px] flex items-center"
            style={{
              background: 'linear-gradient(180deg, #E4F0FF 0%, #4B75FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            #1
          </div>
          <div className="absolute left-[21px] top-[61px] h-[19.5px] font-dm font-normal text-[12px] leading-[20px] text-[rgba(255,255,255,0.55)] flex items-center">
            fastest-growing job category 2026
          </div>
        </div>

        {/* Right Column (AI PM Graph) */}
        <img 
          src="/AI PM Graph.png" 
          alt="AI PM Graph" 
          className="absolute left-[608px] top-[115.59px] rounded-[12px] object-cover"
          style={{
            width: '631px',
            height: '324px',
            filter: 'drop-shadow(0px 0px 20px rgba(91, 166, 255, 0.5))'
          }}
        />
      </section>
    </div>
  );
};
