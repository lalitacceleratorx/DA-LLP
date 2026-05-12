import React, { useState, useRef } from 'react';
import { FileText, MessageSquare, Users, Briefcase } from 'lucide-react';

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const MentorshipSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX > rect.width / 2) {
      setStartIndex(1);
    } else {
      setStartIndex(0);
    }
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = startX.current - currentX;

    if (diff > 50) {
      setStartIndex(1);
    } else if (diff < -50) {
      setStartIndex(0);
    }
    setIsDragging(false);
  };

  const mentorList = [
    { img: "/new-mentor-1.png", name: "Akash Maurya", role: "Data scientist", company: "Koantek" },
    { img: "/new-mentor-2.png", name: "Ravi Ahlawat", role: "Sr. Product Manager", company: "PayU" },
    { img: "/new-mentor-3.png", name: "Subhasis Chandra", role: "Sr. Product Manager", company: "Publicis Sapient" },
    { img: "/new-mentor-4.png", name: "Nitish Setty", role: "Managing director", company: "GrowSharp" },
    { img: "/new-mentor-5.png", name: "Sneha Reddy", role: "Software Engineer", company: "Microsoft" }
  ];

  return (
    <>
      {/* Tech Team Learning Section */}
      <section className="max-w-[1216px] mx-auto relative mt-[140px] px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-stretch w-full relative">
          {/* Left Content Column */}
          <div className="w-full lg:w-[600px] flex flex-col">
            {/* SVG Label */}
            <div className="flex items-center h-[16.5px] gap-[8px] mb-[14.75px]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_brain_icon)">
                  <path d="M5.99992 2.49954C6.0005 2.29955 5.9611 2.10147 5.88401 1.91694C5.80693 1.7324 5.69372 1.56515 5.55105 1.42501C5.40838 1.28487 5.23913 1.17467 5.05324 1.1009C4.86736 1.02713 4.6686 0.991275 4.46866 0.995443C4.26872 0.99961 4.07163 1.04372 3.88898 1.12517C3.70634 1.20662 3.54182 1.32378 3.40512 1.46974C3.26841 1.6157 3.16227 1.78753 3.09294 1.97511C3.02361 2.1627 2.99249 2.36225 3.00142 2.56204C2.70752 2.63761 2.43467 2.77906 2.20353 2.97569C1.9724 3.17232 1.78903 3.41897 1.66734 3.69696C1.54564 3.97495 1.48879 4.27698 1.50111 4.58019C1.51342 4.8834 1.59457 5.17983 1.73842 5.44704C1.48551 5.6525 1.28663 5.91665 1.15908 6.2165C1.03154 6.51636 0.979194 6.84283 1.0066 7.16753C1.034 7.49223 1.14032 7.80531 1.31632 8.07955C1.49231 8.35378 1.73265 8.58086 2.01642 8.74104C1.98137 9.01216 2.00229 9.28758 2.07786 9.5503C2.15343 9.81302 2.28206 10.0575 2.45581 10.2685C2.62955 10.4796 2.84472 10.6528 3.08802 10.7774C3.33133 10.9021 3.5976 10.9755 3.8704 10.9932C4.1432 11.0109 4.41674 10.9725 4.67411 10.8803C4.93148 10.7882 5.16723 10.6443 5.3668 10.4574C5.56636 10.2706 5.7255 10.0448 5.8344 9.79407C5.94329 9.54332 5.99962 9.27291 5.99992 8.99954V2.49954Z" stroke="url(#paint0_brain_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.00001 2.49954C5.99942 2.29955 6.03882 2.10147 6.11591 1.91694C6.19299 1.7324 6.3062 1.56515 6.44887 1.42501C6.59154 1.28487 6.7608 1.17467 6.94668 1.1009C7.13256 1.02713 7.33132 0.991275 7.53126 0.995443C7.7312 0.99961 7.92829 1.04372 8.11094 1.12517C8.29358 1.20662 8.4581 1.32378 8.59481 1.46974C8.73151 1.6157 8.83765 1.78753 8.90698 1.97511C8.97631 2.1627 9.00743 2.36225 8.99851 2.56204C9.29241 2.63761 9.56526 2.77906 9.79639 2.97569C10.0275 3.17232 10.2109 3.41897 10.3326 3.69696C10.4543 3.97495 10.5111 4.27698 10.4988 4.58019C10.4865 4.8834 10.4053 5.17983 10.2615 5.44704C10.5144 5.6525 10.7133 5.91665 10.8408 6.2165C10.9684 6.51636 11.0207 6.84283 10.9933 7.16753C10.9659 7.49223 10.8596 7.80531 10.6836 8.07955C10.5076 8.35378 10.2673 8.58086 9.98351 8.74104C10.0185 9.01216 9.99764 9.28758 9.92206 9.5503C9.84649 9.81302 9.71786 10.0575 9.54411 10.2685C9.37037 10.4796 9.1552 10.6528 8.9119 10.7774C8.66859 10.9021 8.40232 10.9755 8.12952 10.9932C7.85672 11.0109 7.58319 10.9725 7.32581 10.8803C7.06844 10.7882 6.83269 10.6443 6.63313 10.4574C6.43356 10.2706 6.27442 10.0448 6.16552 9.79407C6.05663 9.54332 6.0003 9.27291 6.00001 8.99954V2.49954Z" stroke="url(#paint1_brain_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.5 6.5C7.08022 6.35233 6.71366 6.0835 6.44666 5.7275C6.17967 5.37151 6.02423 4.94433 6 4.5C5.97577 4.94433 5.82033 5.37151 5.55334 5.7275C5.28634 6.0835 4.91978 6.35233 4.5 6.5" stroke="url(#paint2_brain_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.79956 3.25C8.92057 3.04029 8.98902 2.80441 8.99906 2.5625" stroke="url(#paint3_brain_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.00146 2.5625C3.01135 2.80437 3.07963 3.04025 3.20046 3.25" stroke="url(#paint4_brain_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1.73853 5.448C1.83 5.3735 1.92788 5.30724 2.03103 5.25" stroke="url(#paint5_brain_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.96899 5.25C10.0721 5.30724 10.17 5.3735 10.2615 5.448" stroke="url(#paint6_brain_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.0001 9.00019C2.65552 9.00035 2.31674 8.91148 2.0166 8.74219" stroke="url(#paint7_brain_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.9835 8.74219C9.68337 8.91148 9.34459 9.00035 9 9.00019" stroke="url(#paint8_brain_grad)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <linearGradient id="paint0_brain_grad" x1="3.4843" y1="3.52884" x2="3.4843" y2="8.98463" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4F0FF" />
                    <stop offset="1" stopColor="#1B50FF" />
                  </linearGradient>
                  <linearGradient id="paint1_brain_grad" x1="8.48479" y1="3.52884" x2="8.48479" y2="8.98463" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4F0FF" />
                    <stop offset="1" stopColor="#1B50FF" />
                  </linearGradient>
                  <linearGradient id="paint2_brain_grad" x1="5.99075" y1="5.00663" x2="5.99075" y2="6.09754" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4F0FF" />
                    <stop offset="1" stopColor="#1B50FF" />
                  </linearGradient>
                  <linearGradient id="paint3_brain_grad" x1="8.8987" y1="2.73665" x2="8.8987" y2="3.11165" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4F0FF" />
                    <stop offset="1" stopColor="#1B50FF" />
                  </linearGradient>
                  <linearGradient id="paint4_brain_grad" x1="3.10035" y1="2.73665" x2="3.10035" y2="3.11165" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4F0FF" />
                    <stop offset="1" stopColor="#1B50FF" />
                  </linearGradient>
                  <linearGradient id="paint5_brain_grad" x1="1.88387" y1="5.30016" x2="1.88387" y2="5.40816" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4F0FF" />
                    <stop offset="1" stopColor="#1B50FF" />
                  </linearGradient>
                  <linearGradient id="paint6_brain_grad" x1="10.1143" y1="5.30016" x2="10.1143" y2="5.40816" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4F0FF" />
                    <stop offset="1" stopColor="#1B50FF" />
                  </linearGradient>
                  <linearGradient id="paint7_brain_grad" x1="2.50532" y1="8.80754" x2="2.50532" y2="8.94827" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4F0FF" />
                    <stop offset="1" stopColor="#1B50FF" />
                  </linearGradient>
                  <linearGradient id="paint8_brain_grad" x1="9.48872" y1="8.80754" x2="9.48872" y2="8.94827" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E4F0FF" />
                    <stop offset="1" stopColor="#1B50FF" />
                  </linearGradient>
                  <clipPath id="clip0_brain_icon">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
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
                AI-native learning
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-sans font-normal text-[45px] leading-[48px] tracking-[-0.96px] text-white max-w-[555px] mb-[15px]">
              Learn like you're already inside a modern tech team.
            </h2>

            {/* SubHeading */}
            <p className="font-dm font-normal text-[16px] leading-[24px] text-white/60 max-w-[405px] mb-[16px]">
              No passive videos. You ship. You review. You ship again. Every week.
            </p>

            <div className="flex flex-col gap-[16px] mt-[30px]">
              {/* Feature Item 1 */}
              <div className="flex items-center p-[8px_12px] gap-[20px] rounded-[12px] bg-white/[0.05]">
                <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[12px] shrink-0" style={{ background: 'linear-gradient(100.85deg, #0070F3 0%, #5E00FF 100%)' }}>
                  <FileText className="w-[24px] h-[24px] text-[#A8C4FF]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-sans font-normal text-[16.6px] leading-[28px] text-white tracking-[-0.36px]">Resume optimization</h3>
                  <p className="font-dm font-normal text-[14px] leading-[20px] text-white/[0.55]">
                    Engineered for ATS and recruiter eyeballs alike.
                  </p>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div className="flex items-center p-[8px_12px] gap-[20px] rounded-[12px] bg-white/[0.05]">
                <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[12px] shrink-0" style={{ background: 'linear-gradient(100.85deg, #0070F3 0%, #5E00FF 100%)' }}>
                  <LinkedinIcon />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-sans font-normal text-[16.9px] leading-[28px] text-white tracking-[-0.36px]">LinkedIn branding</h3>
                  <p className="font-dm font-normal text-[14px] leading-[20px] text-white/[0.55]">
                    Profile audit, content cadence, recruiter inbound.
                  </p>
                </div>
              </div>

              {/* Feature Item 3 */}
              <div className="flex items-center p-[8px_12px] gap-[20px] rounded-[12px] bg-white/[0.05]">
                <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[12px] shrink-0" style={{ background: 'linear-gradient(100.85deg, #0070F3 0%, #5E00FF 100%)' }}>
                  <MessageSquare className="w-[24px] h-[24px] text-[#A8C4FF]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-sans font-normal text-[16.3px] leading-[28px] text-white tracking-[-0.36px]">Mock interviews</h3>
                  <p className="font-dm font-normal text-[14px] leading-[20px] text-white/[0.55]">
                    Live with senior analysts. Hard questions. Real feedback.
                  </p>
                </div>
              </div>

              {/* Feature Item 4 */}
              <div className="flex items-center p-[8px_12px] gap-[20px] rounded-[12px] bg-white/[0.05]">
                <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[12px] shrink-0" style={{ background: 'linear-gradient(100.85deg, #0070F3 0%, #5E00FF 100%)' }}>
                  <Users className="w-[24px] h-[24px] text-[#A8C4FF]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-sans font-normal text-[16.7px] leading-[28px] text-white tracking-[-0.36px]">Career mentorship</h3>
                  <p className="font-dm font-normal text-[14px] leading-[20px] text-white/[0.55]">
                    1:1 calls until you sign your offer.
                  </p>
                </div>
              </div>

              {/* Feature Item 5 */}
              <div className="flex items-center p-[8px_12px] gap-[20px] rounded-[12px] bg-white/[0.05]">
                <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[12px] shrink-0" style={{ background: 'linear-gradient(100.85deg, #0070F3 0%, #5E00FF 100%)' }}>
                  <Briefcase className="w-[24px] h-[24px] text-[#A8C4FF]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-sans font-normal text-[16.6px] leading-[28px] text-white tracking-[-0.36px]">Hiring readiness</h3>
                  <p className="font-dm font-normal text-[14px] leading-[20px] text-white/[0.55]">
                    Warm intros to our network of partner companies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column (Image from Figma) */}
          <div className="w-full lg:w-[584px] mt-[40px] lg:mt-0 flex flex-col">
            <div
              className="relative w-full lg:max-w-[584px] flex-1 min-h-[500px] rounded-[24px] overflow-hidden"
            >
              {/* Main Image Background */}
              <div
                className="absolute inset-x-0 top-0 h-[506px] bg-cover bg-center rounded-t-[24px]"
                style={{
                  backgroundImage: 'url(/analyst-team.png)',
                  boxShadow: 'inset 0px -26px 50px #000000'
                }}
              />

              {/* Glass Card Overlay */}
              <div
                className="absolute bottom-[32px] inset-x-[25px] h-[121px] px-[17px] py-[17px] flex flex-col bg-white/[0.1] border border-[#54586C] backdrop-blur-[7.5px] rounded-[12px]"
              >
                <div className="flex flex-col">
                  <div className="font-dm font-semibold text-[12px] leading-[15px] tracking-[2px] uppercase text-[#86ADFD]">
                    Live · Cohort 17
                  </div>
                  <div className="font-sans font-normal text-[16.7px] leading-[28px] tracking-[-0.36px] text-white mt-[4px]">
                    42 analysts shipping right now
                  </div>
                </div>

                {/* Avatars group */}
                <div className="flex items-center relative h-[28px] mt-[12px]">
                  {[
                    'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop)',
                    'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop)',
                    'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop)',
                    'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop)',
                    'url(https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop)'
                  ].map((img, idx) => (
                    <div
                      key={idx}
                      className="w-[28px] h-[28px] rounded-full border-[2px] border-white/70 absolute bg-cover bg-center"
                      style={{
                        backgroundImage: img,
                        left: `${idx * 20}px`,
                        zIndex: 10 + idx
                      }}
                    />
                  ))}
                  {/* Overflow marker */}
                  <div
                    className="w-[28px] h-[28px] rounded-full border-[2px] border-white/70 absolute bg-white/60 flex items-center justify-center left-[100px] z-[15]"
                  >
                    <span className="font-dm font-normal text-[10px] text-black">+37</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Practitioners Section */}
      <section className="max-w-[1440px] w-full mx-auto relative mt-[140px] pt-[32px] border-t border-white/[0.05] overflow-hidden">
        {/* Added wrapper with max-w-[1216px] for text content to stay aligned, while images flow edge-to-edge */}
        <div className="max-w-[1216px] mx-auto w-full px-4 xl:px-0 flex flex-col">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full relative mb-[30px]">
            <div className="flex flex-col w-full max-w-[600px]">
              {/* Mentors Badge */}
              <div className="flex items-center h-[16.5px] gap-[8px] mb-[14.75px]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7099 5.46118C10.7994 5.42169 10.8754 5.35681 10.9284 5.27458C10.9814 5.19235 11.0091 5.09637 11.0081 4.99855C11.0071 4.90072 10.9774 4.80534 10.9227 4.72422C10.868 4.6431 10.7907 4.57981 10.7004 4.54218L6.4149 2.59018C6.28462 2.53075 6.14309 2.5 5.9999 2.5C5.8567 2.5 5.71518 2.53075 5.5849 2.59018L1.2999 4.54018C1.21088 4.57916 1.13516 4.64325 1.08198 4.72459C1.02881 4.80593 1.00049 4.901 1.00049 4.99818C1.00049 5.09536 1.02881 5.19043 1.08198 5.27177C1.13516 5.35311 1.21088 5.41719 1.2999 5.45618L5.5849 7.41018C5.71518 7.4696 5.8567 7.50036 5.9999 7.50036C6.14309 7.50036 6.28462 7.4696 6.4149 7.41018L10.7099 5.46118Z" stroke="url(#paint0_mentors_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 5V8" stroke="url(#paint1_mentors_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6.25V8C3 8.39782 3.31607 8.77936 3.87868 9.06066C4.44129 9.34196 5.20435 9.5 6 9.5C6.79565 9.5 7.55871 9.34196 8.12132 9.06066C8.68393 8.77936 9 8.39782 9 8V6.25" stroke="url(#paint2_mentors_grad)" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="paint0_mentors_grad" x1="5.97344" y1="3.76666" x2="5.97344" y2="6.49413" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E4F0FF" />
                      <stop offset="1" stopColor="#1B50FF" />
                    </linearGradient>
                    <linearGradient id="paint1_mentors_grad" x1="11.4969" y1="5.75994" x2="11.4969" y2="7.39631" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E4F0FF" />
                      <stop offset="1" stopColor="#1B50FF" />
                    </linearGradient>
                    <linearGradient id="paint2_mentors_grad" x1="5.9815" y1="7.07327" x2="5.9815" y2="8.846" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E4F0FF" />
                      <stop offset="1" stopColor="#1B50FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="font-dm font-normal text-[11px] leading-[16px] tracking-[2.2px] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#E4F0FF] to-[#1B50FF]">
                  MENTORS
                </span>
              </div>

              <h2 className="font-sans font-normal text-[44.3px] leading-[48px] tracking-[-0.96px] text-white">
                Learn from industry<br />practitioners.
              </h2>
            </div>

            <p className="w-full md:w-[580px] font-dm font-normal text-[16px] leading-[24px] text-white/60 mt-[20px] md:mt-[62.25px]">
              Senior analysts and data scientists from companies actually building AI-native products today.
            </p>
          </div>

          {/* Horizontal Divider Frame 51398 */}
          <div className="w-full h-[3px] bg-gradient-to-r from-[#C3C3C3] to-[#565656] transform scale-x-[-1] mb-[23px]"></div>
        </div>

        {/* Interactive Mentor Slider */}
        <div className="w-full max-w-[1216px] mx-auto mt-[40px] mb-[40px] px-4 xl:px-0 relative">
          <div 
            className="overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="flex gap-[20px] transition-transform duration-500 ease-in-out w-full pointer-events-none"
              style={{ transform: startIndex === 0 ? 'translateX(0)' : 'translateX(calc(-25% - 5px))' }}
            >
              {mentorList.map((mentor, i) => (
                <div 
                  key={i} 
                  className="group relative w-[calc((100%-60px)/4)] h-[487px] rounded-[16px] overflow-hidden shrink-0 border border-[#222639] bg-white/[0.02] flex flex-col"
                >
                  <div className="absolute left-[1px] right-[1px] top-[1px] h-[358.75px] overflow-hidden rounded-t-[15px] pointer-events-none p-2 flex justify-center items-end">
                    <img
                      src={mentor.img}
                      alt={`Mentor ${i}`}
                      className="max-w-full max-h-full object-contain grayscale transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(0deg, #03050F 0%, rgba(5, 8, 22, 0) 50%, rgba(5, 8, 22, 0) 100%)' }}
                  ></div>
                  
                  <div className="absolute left-[21px] right-[21px] bottom-0 flex flex-col pointer-events-none">
                    <span className="font-sans font-normal text-[18px] leading-[24px] tracking-[-0.32px] text-white">
                      {mentor.name}
                    </span>
                    <span className="font-dm font-normal text-[14px] leading-[20px] text-white/55 mt-[2px]">
                      {mentor.role}
                    </span>
                    
                    <div className="w-full border-t border-[#222639] mt-[12px] h-[50px] flex justify-between items-center pointer-events-auto">
                      <span className="font-mono font-normal text-[12px] leading-[16px] text-white/65">
                        {mentor.company}
                      </span>
                      <a 
                        href="#" 
                        className="text-white/40 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        <LinkedinIcon />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Progress Bar */}
          <div
            className="w-full h-[4px] bg-[#FFFFFF] mt-[40px] relative cursor-pointer"
            onClick={handleSliderClick}
          >
            <div
              className="absolute top-0 h-[4px] w-[53.28%] transition-all duration-500 ease-in-out"
              style={{
                background: 'linear-gradient(90deg, #0070F3 0%, #5C82AF 100%)',
                left: startIndex === 0 ? '0%' : '46.72%'
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
