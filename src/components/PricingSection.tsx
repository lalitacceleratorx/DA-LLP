import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const SocialIcons = {
  Instagram: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  Linkedin: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
  Facebook: () => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
};

export const PricingSection: React.FC = () => {
  return (
    <>
      <section
        className="relative w-full max-w-[1024px] mx-auto mt-[140px] mb-[140px]"
        style={{ height: '740.18px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
      >
        {/* Mask Group Grid Background */}
        <div
          className="absolute pointer-events-none"
          style={{ left: '236px', right: '233px', top: '0px', bottom: '0px', zIndex: 0 }}
        >
          <div
            className="absolute inset-x-0 top-0 bottom-[0.5px]"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 1.79%, rgba(255, 255, 255, 0) 1.79%), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1.79%, rgba(255, 255, 255, 0) 1.79%)',
              backgroundSize: '56px 56px',
              opacity: 0.5,
              WebkitMaskImage: 'radial-gradient(80% 60% at 50% 30%, #000000 40%, rgba(0, 0, 0, 0) 80%)',
              maskImage: 'radial-gradient(80% 60% at 50% 30%, #000000 40%, rgba(0, 0, 0, 0) 80%)'
            }}
          />
        </div>
        {/* SVG Label Icon */}
        <div
          className="absolute h-[12px] flex items-center justify-center text-brand-blue"
          style={{ left: '473.34px', top: '2.25px', width: '12px' }}
        >
          <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
            <path d="M6 1L7.2 4.8H11L8 7L9.2 10.8L6 8.6L2.8 10.8L4 7L1 4.8H4.8L6 1Z" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Pricing Label */}
        <div
          className="absolute h-[16.5px] flex items-center"
          style={{ left: '493.34px', top: '0px' }}
        >
          <span
            className="font-dm font-normal text-[11px] leading-[16px] text-center tracking-[2.2px] uppercase"
            style={{
              background: 'linear-gradient(180deg, #E4F0FF 25.33%, #1B50FF 79.88%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Pricing
          </span>
        </div>

        {/* Heading 2 */}
        <h2
          className="absolute h-[48px] font-sans font-normal text-[45.2px] leading-[48px] tracking-[-0.96px] text-white flex items-center justify-center text-center"
          style={{ left: '236.09px', right: '235.9px', top: '37.25px' }}
        >
          Choose your learning path.
        </h2>

        {/* Subheading */}
        <p
          className="absolute h-[24px] font-dm font-normal text-[16px] leading-[24px] text-[rgba(255,255,255,0.55)] flex items-center justify-center text-center"
          style={{ left: '231.27px', right: '230.97px', top: '101.25px' }}
        >
          Flexible plans, no-cost EMI, and a 7-day refund window on cohort programs.
        </p>

        {/* Frame 51398 (Separator) */}
        <div
          className="absolute h-[3px]"
          style={{
            left: '1px',
            top: '142.18px',
            width: '1022px',
            background: 'linear-gradient(90deg, #C3C3C3 0%, #565656 100%)',
            transform: 'matrix(-1, 0, 0, 1, 0, 0)'
          }}
        />

        {/* CARD 1: Self-paced */}
        <div
          className="absolute h-[496px] border border-[#222639] rounded-[24px] overflow-hidden"
          style={{ left: '0px', top: '173.25px', width: '502px' }}
        >
          {/* Overlay background */}
          <div className="absolute inset-[1px] bg-[rgba(255,255,255,0.02)] rounded-[24px]"></div>

          {/* Contents */}
          <div className="absolute top-[40px] left-[40px] h-[28px] font-sans font-normal text-[18.3px] leading-[28px] tracking-[-0.4px] text-white flex items-center">
            Self-paced
          </div>

          <div className="absolute top-[88px] left-[40px] h-[48px] font-sans font-normal text-[46.1px] leading-[48px] tracking-[-0.96px] text-white flex items-center">
            ₹49,999
          </div>

          <div className="absolute top-[115px] left-[223.55px] h-[20px] font-dm font-normal text-[14px] leading-[20px] text-[rgba(255,255,255,0.4)] flex items-center">
            incl. taxes
          </div>

          <div className="absolute top-[140px] left-[40px] h-[18px] font-mono font-normal text-[12px] leading-[18px] text-[#7AA6FF] flex items-center">
            EMI from ₹4,166/mo
          </div>

          {/* Button */}
          <button
            className="absolute top-[186px] left-[40px] right-[40px] h-[48px] bg-white rounded-[9999px] flex items-center justify-center transition-all active:scale-[0.98]"
          >
            <span className="font-dm font-semibold text-[15px] leading-[22px] text-[#050816] flex items-center justify-center gap-2">
              Start self-paced <ArrowRight className="w-[16px] h-[16px] stroke-[#050816]" />
            </span>
          </button>

          {/* Features List */}
          <div className="absolute top-[262px] left-[40px] right-[40px] h-[158px] flex flex-col">
            {[
              "Full curriculum (lifetime access)",
              "Recorded sessions + AI labs",
              "Community access",
              "Capstone project review",
              "Certificate of completion"
            ].map((feature, i) => (
              <div key={i} className="relative h-[22px] w-full mb-[12px]" style={{ top: `${i * 34}px`, position: 'absolute' }}>
                <div className="absolute top-[2px] left-0 w-[20px] h-[20px] rounded-full bg-[rgba(0,112,243,0.15)] border border-[rgba(0,112,243,0.3)] flex items-center justify-center">
                  <Check className="w-[11px] h-[11px] text-[#7AA6FF]" strokeWidth={2.5} />
                </div>
                <div className="absolute top-[1px] left-[32px] h-[18px] font-dm font-normal text-[14px] leading-[20px] text-[rgba(255,255,255,0.75)] flex items-center">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CARD 2: Live Cohort Pro */}
        <div
          className="absolute h-[496px] border border-[#222639] rounded-[24px]"
          style={{ left: '522px', top: '173.25px', width: '502px', background: '#030511' }}
        >
          {/* Popular Badge */}
          <div
            className="absolute h-[23px] bg-gradient-to-r from-[#0070F3] to-[#7000FF] rounded-[9999px] flex items-center justify-center"
            style={{ width: '137.63px', left: '182.19px', top: '-12px', zIndex: 10 }}
          >
            <span className="font-dm font-semibold text-[10px] tracking-[1.8px] text-white uppercase flex items-center gap-[4px]">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 1L7.2 4.8H11L8 7L9.2 10.8L6 8.6L2.8 10.8L4 7L1 4.8H4.8L6 1Z" stroke="currentColor" strokeWidth="1" fill="none" /></svg>
              Most popular
            </span>
          </div>

          {/* Inner Content Container */}
          <div className="absolute inset-0 rounded-[24px] overflow-hidden">
            <div className="absolute top-[40px] left-[40px] h-[28px] font-sans font-normal text-[18.6px] leading-[28px] tracking-[-0.4px] text-white flex items-center">
              Live Cohort Pro
            </div>

            <div className="absolute top-[88px] left-[40px] h-[48px] font-sans font-normal text-[46.5px] leading-[48px] tracking-[-0.96px] text-white flex items-center">
              ₹89,999
            </div>

            <div className="absolute top-[115px] left-[223.88px] h-[20px] font-dm font-normal text-[14px] leading-[20px] text-[rgba(255,255,255,0.4)] flex items-center">
              incl. taxes
            </div>

            <div className="absolute top-[140px] left-[40px] h-[18px] font-mono font-normal text-[12px] leading-[18px] text-[#7AA6FF] flex items-center">
              No-cost EMI · ₹7,500/mo · 12 mo
            </div>

            {/* Button */}
            <button
              className="absolute top-[186px] left-[40px] right-[40px] h-[48px] rounded-[9999px] flex items-center justify-center transition-all active:scale-[0.98]"
              style={{
                background: 'linear-gradient(96.52deg, #0070F3 0%, #7000FF 100%)',
                boxShadow: '0px 10px 40px -10px rgba(0, 112, 243, 0.7), 0px 0px 60px -10px rgba(112, 0, 255, 0.55)'
              }}
            >
              <span className="font-dm font-semibold text-[15px] leading-[22px] text-white flex items-center justify-center gap-2">
                Apply for Cohort 17 <ArrowRight className="w-[16px] h-[16px] stroke-white" />
              </span>
            </button>

            {/* Features List */}
            <div className="absolute top-[262px] left-[40px] right-[40px] h-[192px] flex flex-col">
              {[
                "Everything in Self-paced",
                "Live weekend cohort sessions",
                "1:1 mentor calls (8 sessions)",
                "Mock interviews + resume reviews",
                "Hiring partner referrals",
                "7-day refund window"
              ].map((feature, i) => (
                <div key={i} className="relative h-[22px] w-full mb-[12px]" style={{ top: `${i * 34}px`, position: 'absolute' }}>
                  <div className="absolute top-[2px] left-0 w-[20px] h-[20px] rounded-full bg-[rgba(0,112,243,0.15)] border border-[rgba(0,112,243,0.3)] flex items-center justify-center">
                    <Check className="w-[11px] h-[11px] text-[#7AA6FF]" strokeWidth={2.5} />
                  </div>
                  <div className="absolute top-[1px] left-[32px] h-[18px] font-dm font-normal text-[14px] leading-[20px] text-[rgba(255,255,255,0.75)] flex items-center">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Trust Badges */}
        {/* 7-day refund */}
        <div
          className="absolute h-[30px] bg-[rgba(255,255,255,0.02)] border border-[#222639] rounded-[9999px] flex items-center px-[13px] gap-[8px]"
          style={{ left: '322.39px', top: '709.25px', width: '119.63px' }}
        >
          <span className="flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2719_3258)">
                <path d="M6.49992 11.9163C9.49146 11.9163 11.9166 9.49122 11.9166 6.49967C11.9166 3.50813 9.49146 1.08301 6.49992 1.08301C3.50838 1.08301 1.08325 3.50813 1.08325 6.49967C1.08325 9.49122 3.50838 11.9163 6.49992 11.9163Z" stroke="white" strokeOpacity="0.5" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 3.25V6.5L8.66667 7.58333" stroke="white" strokeOpacity="0.5" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_2719_3258">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="font-dm font-normal text-[12px] leading-[16px] text-[rgba(255,255,255,0.5)] flex items-center whitespace-nowrap">7-day refund</span>
        </div>

        {/* No-cost EMI */}
        <div
          className="absolute h-[30px] bg-[rgba(255,255,255,0.02)] border border-[#222639] rounded-[9999px] flex items-center px-[13px] gap-[8px]"
          style={{ left: '454.02px', top: '709.25px', width: '116.22px' }}
        >
          <span className="flex items-center justify-center text-[13px] leading-[13px]">💳</span>
          <span className="font-dm font-normal text-[12px] leading-[16px] text-[rgba(255,255,255,0.5)] flex items-center whitespace-nowrap">No-cost EMI</span>
        </div>

        {/* ISO-certified */}
        <div
          className="absolute h-[30px] bg-[rgba(255,255,255,0.02)] border border-[#222639] rounded-[9999px] flex items-center px-[13px] gap-[8px]"
          style={{ left: '582.23px', top: '709.25px', width: '119.36px' }}
        >
          <span className="flex items-center justify-center text-[13px] leading-[13px]">🏅</span>
          <span className="font-dm font-normal text-[12px] leading-[16px] text-[rgba(255,255,255,0.5)] flex items-center whitespace-nowrap">ISO-certified</span>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section
        className="relative w-full max-w-[1440px] mx-auto overflow-hidden bg-[#050505]"
        style={{ height: '627px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
      >
        {/* Radial Gradient */}
        <div
          className="absolute inset-x-0 top-[0.07px] bottom-[0.43px]"
          style={{ background: 'radial-gradient(70.71% 70.71% at 50% 50%, rgba(0, 112, 243, 0.18) 0%, rgba(0, 112, 243, 0) 60%)' }}
        />

        {/* Mask Group Grid Background */}
        <div
          className="absolute pointer-events-none"
          style={{ left: '236px', right: '233px', top: '0px', bottom: '0px', zIndex: 0 }}
        >
          <div
            className="absolute inset-x-0 top-0 bottom-[0.5px]"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 1.79%, rgba(255, 255, 255, 0) 1.79%), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1.79%, rgba(255, 255, 255, 0) 1.79%)',
              backgroundSize: '56px 56px',
              opacity: 0.5,
              WebkitMaskImage: 'radial-gradient(80% 60% at 50% 30%, #000000 40%, rgba(0, 0, 0, 0) 80%)',
              maskImage: 'radial-gradient(80% 60% at 50% 30%, #000000 40%, rgba(0, 0, 0, 0) 80%)'
            }}
          />
        </div>

        {/* SVG Icon (Quote representation) */}
        <div
          className="absolute flex items-center justify-center"
          style={{ left: '711px', right: '711px', top: '128.07px', height: '32px' }}
        >
          <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-[3.5px]">
            <path d="M16.6668 4C16.1143 4 15.5844 4.28095 15.1937 4.78105C14.803 5.28115 14.5835 5.95942 14.5835 6.66667V14.6667C14.5835 15.3739 14.803 16.0522 15.1937 16.5523C15.5844 17.0524 16.1143 17.3333 16.6668 17.3333C16.9431 17.3333 17.208 17.4738 17.4034 17.7239C17.5988 17.9739 17.7085 18.313 17.7085 18.6667V20C17.7085 20.7072 17.489 21.3855 17.0983 21.8856C16.7076 22.3857 16.1777 22.6667 15.6252 22.6667C15.3489 22.6667 15.0839 22.8071 14.8886 23.0572C14.6932 23.3072 14.5835 23.6464 14.5835 24V26.6667C14.5835 27.0203 14.6932 27.3594 14.8886 27.6095C15.0839 27.8595 15.3489 28 15.6252 28C17.2828 28 18.8725 27.1571 20.0446 25.6569C21.2167 24.1566 21.8752 22.1217 21.8752 20V6.66667C21.8752 5.95942 21.6557 5.28115 21.265 4.78105C20.8743 4.28095 20.3444 4 19.7918 4H16.6668Z" stroke="white" strokeOpacity="0.2" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.20833 4C4.6558 4 4.12589 4.28095 3.73519 4.78105C3.34449 5.28115 3.125 5.95942 3.125 6.66667V14.6667C3.125 15.3739 3.34449 16.0522 3.73519 16.5523C4.12589 17.0524 4.6558 17.3333 5.20833 17.3333C5.4846 17.3333 5.74955 17.4738 5.9449 17.7239C6.14025 17.9739 6.25 18.313 6.25 18.6667V20C6.25 20.7072 6.03051 21.3855 5.63981 21.8856C5.24911 22.3857 4.7192 22.6667 4.16667 22.6667C3.8904 22.6667 3.62545 22.8071 3.4301 23.0572C3.23475 23.3072 3.125 23.6464 3.125 24V26.6667C3.125 27.0203 3.23475 27.3594 3.4301 27.6095C3.62545 27.8595 3.8904 28 4.16667 28C5.82427 28 7.41398 27.1571 8.58608 25.6569C9.75819 24.1566 10.4167 22.1217 10.4167 20V6.66667C10.4167 5.95942 10.1972 5.28115 9.80647 4.78105C9.41577 4.28095 8.88587 4 8.33333 4H5.20833Z" stroke="white" strokeOpacity="0.2" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Heading 2 */}
        <h2
          className="absolute font-sans font-normal text-[66.9px] leading-[72px] tracking-[-1.44px] text-white flex flex-col items-center justify-center text-center"
          style={{ left: '0px', right: '0px', top: '184.07px', height: '144px' }}
        >
          <span>Start building your <span style={{ color: '#5158FF' }}>AI analytics</span></span>
          <span><span style={{ color: '#A5B4FF' }}>career</span> today.</span>
        </h2>

        {/* Subtitle */}
        <p
          className="absolute font-dm font-normal text-[18px] leading-[28px] text-[rgba(255,255,255,0.65)] flex items-center justify-center text-center whitespace-nowrap"
          style={{ left: '0px', right: '0px', top: '358px', height: '28px' }}
        >
          One free call. Real clarity on whether AcceleratorX fits your career goal.
        </p>

        {/* Button */}
        <button
          className="absolute rounded-[9999px] flex items-center justify-center transition-all active:scale-[0.98] z-10 cursor-pointer"
          style={{
            left: '581px', right: '581px', top: '410px', height: '55px',
            background: 'linear-gradient(100.2deg, #0070F3 0%, #7000FF 100%)',
            boxShadow: '0px 10px 40px -10px rgba(0, 112, 243, 0.7), 0px 0px 60px -10px rgba(112, 0, 255, 0.55), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.08)'
          }}
        >
          <span className="font-dm font-semibold text-[15px] leading-[22px] text-white flex items-center justify-center gap-[12px]">
            Book Free Career Consultation <ArrowRight className="w-[18px] h-[18px] stroke-white" strokeWidth={1.5} />
          </span>
        </button>
      </section>

      {/* Site Footer */}
    </>
  );
};
