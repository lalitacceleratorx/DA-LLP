import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const modules = [
    {
      id: "01",
      title: "SQL Foundations & Advanced Querying",
      tags: ["MySQL", "PostgreSQL"],
      content: ["Joins, CTEs, window functions", "Performance & query tuning", "Real-world e-commerce schema project"]
    },
    {
      id: "02",
      title: "Power BI & Dashboard Storytelling",
      tags: ["Power BI", "DAX"],
      content: ["DAX deep-dive", "Storytelling for stakeholders", "Live executive dashboard build"]
    },
    {
      id: "03",
      title: "Python for Analytics",
      tags: ["Pandas", "Numpy"],
      content: ["Data cleaning and exploration using Pandas", "Numerical computing"]
    },
    {
      id: "04",
      title: "AI Analytics with LLMs",
      tags: ["ChatGPT", "Claude", "Gemini"],
      content: ["AI copilots for analysis", "Prompt engineering for data", "Building AI-augmented dashboards"]
    },
    {
      id: "05",
      title: "Business Intelligence Strategy",
      tags: ["Tableau", "Looker"],
      content: ["Translating complex metrics to high-level narrative", "Stakeholder mapping"]
    },
    {
      id: "06",
      title: "Capstone: AI Reporting System",
      tags: ["End-to-end stack"],
      content: ["Building a fully automated agent-driven analytics pipeline"]
    }
  ];

  return (
    <section className="max-w-[1216px] mx-auto relative mt-[140px] pt-[80px] border-t border-white/5">
      {/* Section Header */}
      <div className="w-full flex flex-col md:flex-row justify-between relative mb-[48px]">
        {/* Title & Label */}
        <div className="flex flex-col">
          <div className="flex items-center h-[16.5px] mb-[14.75px] gap-[8px]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 8L11 6L9 4" stroke="url(#paint0_curriculum_grad)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 4L1 6L3 8" stroke="url(#paint1_curriculum_grad)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.25 2L4.75 10" stroke="url(#paint2_curriculum_grad)" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="paint0_curriculum_grad" x1="9.99383" y1="5.01326" x2="9.99383" y2="7.19508" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E4F0FF" />
                  <stop offset="1" stopColor="#1B50FF" />
                </linearGradient>
                <linearGradient id="paint1_curriculum_grad" x1="1.99383" y1="5.01326" x2="1.99383" y2="7.19508" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E4F0FF" />
                  <stop offset="1" stopColor="#1B50FF" />
                </linearGradient>
                <linearGradient id="paint2_curriculum_grad" x1="5.99229" y1="4.02652" x2="5.99229" y2="8.39015" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E4F0FF" />
                  <stop offset="1" stopColor="#1B50FF" />
                </linearGradient>
              </defs>
            </svg>
            <span
              className="font-dm font-normal text-[11px] leading-[16px] tracking-[2.2px] uppercase"
              style={{
                background: 'linear-gradient(180deg, #E4F0FF 25.33%, #1B50FF 79.88%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Curriculum
            </span>
          </div>

          <h2
            className="font-sans font-normal text-[46.1px] leading-[48px] tracking-[-0.96px] text-white max-w-[600px]"
          >
            What you'll learn module by module.
          </h2>
        </div>

        {/* Description Text positioned side by side vertically adjusted */}
        <div className="mt-[32px] md:mt-[32px] flex items-center md:max-w-[436px]">
          <p className="font-dm font-normal text-[16px] leading-[24px] text-white/60">
            A 6-module, project-led curriculum updated every quarter to reflect what hiring managers ask for today.
          </p>
        </div>

        {/* Horizontal Frame divider 155.25px down */}
        <div
          className="absolute w-full h-[3px] bottom-[-20px]"
          style={{
            background: 'linear-gradient(90deg, #C3C3C3 0%, #565656 100%)',
            transform: 'matrix(-1, 0, 0, 1, 0, 0)'
          }}
        />
      </div>

      {/* Accordion Container */}
      <div className="mt-[48px] border border-[#222639] rounded-[24px] bg-white/[0.016] overflow-hidden divide-y divide-[#222639]">
        {modules.map((module, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={module.id} className={`w-full group transition-all duration-300 ${isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.008]'}`}>
              {/* Accordion Header Button */}
              <button
                className="w-full px-[32px] h-[76px] flex items-center cursor-pointer text-left outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {/* Module Number */}
                <span className={`font-['JetBrains_Mono'] font-medium text-[12px] tracking-[1.2px] min-w-[40px] transition-colors duration-300 ${isOpen ? 'text-[#4B75FF]' : 'text-white/40'}`}>
                  {module.id}
                </span>

                {/* Title */}
                <span className="font-sans font-medium text-[18.9px] leading-[28px] tracking-[-0.4px] text-white flex-grow ml-[1px]">
                  {module.title}
                </span>

                {/* Tags Group */}
                <div className="hidden md:flex gap-[8px] mr-[24px]">
                  {module.tags.map(tag => (
                    <div
                      key={tag}
                      className={`h-[26px] px-[11px] flex items-center justify-center border rounded-[12px] transition-all duration-300 ${isOpen ? 'border-white/20 bg-white/[0.06]' : 'border-white/10 bg-white/[0.03]'}`}
                    >
                      <span className={`font-['JetBrains_Mono'] font-bold text-[10px] leading-[20px] transition-colors duration-300 ${isOpen ? 'text-white/90' : 'text-white/60'}`}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chevron SVG */}
                <div className={`transition-all duration-300 ${isOpen ? 'rotate-180 text-[#4B75FF]' : 'rotate-0 text-[#A6A6A6]'}`}>
                  <ChevronDown className="w-[16px] h-[16px]" strokeWidth={1.33333} />
                </div>
              </button>

              {/* Expanded Region */}
              {isOpen && (
                <div className="px-[32px] pb-[24px]">
                  <div className="pl-[41px]"> {/* Aligned perfectly to line up past number */}
                    <ul className="flex flex-col gap-[10px]">
                      {module.content.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-center gap-[12px] h-[20px]">
                          <div className="w-[6px] h-[6px] rounded-full bg-[#0070F3] flex-shrink-0" />
                          <span className="font-dm font-normal text-[14px] leading-[20px] text-white/65">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
