import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-[10px] w-[calc(100%-1rem)] sm:w-full left-1/2 -translate-x-1/2 z-[9999] max-w-7xl transition-all duration-300 ease-in-out transform">
      <div className="h-[56px] sm:h-[60px] rounded-[100px] backdrop-blur-[10px] bg-white/70 dark:bg-[#000000]/70 shadow-lg px-4 sm:px-6 md:px-8 w-full">
        <div className="flex items-center justify-between h-full">
          <div className="relative group transition-all duration-200 ease-in-out">
            <a className="flex items-center space-x-2 hover:opacity-90" href="/">
              <img src="/logo.png" alt="AcceleratorX company new logo - best product management courses" className="w-auto h-5 md:h-8 object-contain" draggable="false" />
            </a>
          </div>
          <div className="hidden min-[960px]:flex items-center space-x-4 xl:space-x-6">
            <div className="relative group">
              <button className="font-sans flex items-center gap-1 text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white text-[14px] font-medium py-2 transition-all duration-200 ease-in-out">
                Programs
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down transition-all duration-300 ease-in-out group-hover:rotate-180" style={{ transform: 'rotate(0deg)' }}>
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-64 transition-all duration-300 ease-in-out opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="dark:bg-black/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden bg-white/95">
                  <a className="font-sans block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 ease-in-out text-xs font-medium" href="/courses/product-management">AI Product Management</a>
                  <a className="font-sans block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 ease-in-out text-xs font-medium" href="/courses/ai-digital-marketing">AI Digital Marketing</a>
                  <a className="font-sans block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 ease-in-out text-xs font-medium" href="/courses/data-analytics">AI Data Analytics</a>
                  <a className="font-sans block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 ease-in-out text-xs font-medium" href="/courses/data-science">AI Data Science</a>
                  <a className="font-sans block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 ease-in-out text-xs font-medium" href="/courses/generative-ai">Generative AI</a>
                  <a className="font-sans block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 ease-in-out text-xs font-medium" href="/courses/advance-generative-ai">Advance Gen AI</a>
                </div>
              </div>
            </div>
            <a className="font-sans relative group transition-all duration-200 ease-in-out text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2 text-[14px] font-medium" href="/about-us">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a className="font-sans relative group transition-all duration-200 ease-in-out text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2 text-[14px] font-medium" href="/blogs">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a className="font-sans relative group transition-all duration-200 ease-in-out text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2 text-[14px] font-medium" href="/jobs">
              Jobs Portal
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <div className="relative group">
              <button className="font-sans flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-[14px] font-medium py-2 transition-all duration-200 ease-in-out">
                Our Platforms
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down transition-all duration-300 ease-in-out group-hover:rotate-180" style={{ transform: 'rotate(0deg)' }}>
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-48 transition-all duration-300 ease-in-out opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <div className="dark:bg-black/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden bg-white/95">
                  <a href="https://buildrx.org" target="_blank" rel="noopener noreferrer" className="font-sans block px-4 py-2.5 text-[#FFBB00] hover:bg-[#FFBB00]/10 transition-all duration-200 ease-in-out text-sm font-semibold border-b border-gray-100 dark:border-gray-800 last:border-0">BuildRX</a>
                  <a href="https://lms.acceleratorx.org" target="_blank" rel="noopener noreferrer" className="font-sans block px-4 py-2.5 text-[#FFBB00] hover:bg-[#FFBB00]/10 transition-all duration-200 ease-in-out text-sm font-semibold border-b border-gray-100 dark:border-gray-800 last:border-0">LMS</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <a className="font-sans text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-2 py-1.5 text-[14px] font-medium transition-all duration-200 ease-in-out" href="/sign-in">Log In</a>
              <a className="font-sans h-[36px] px-5 rounded-full border border-gray-900/20 dark:border-white/20 flex items-center gap-2 text-[14px] font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-gray-900 dark:text-white transition-all group" href="/sign-up">
                Sign Up
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <button className="min-[960px]:hidden text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

