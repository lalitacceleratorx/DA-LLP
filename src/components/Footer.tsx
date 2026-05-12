import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#999] pt-20 pb-10 relative border-t border-white/[0.03]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#3E38E0]/50 to-transparent shadow-[0_0_50px_rgba(62,56,222,0.3)]"></div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[70px] xl:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
          <div className="lg:max-w-[340px] flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <a className="group inline-block transition-transform duration-300 hover:scale-105" href="/">
              <img src="/logo.png" alt="AcceleratorX" className="w-auto h-8 lg:h-8 object-contain" draggable="false" />
            </a>
            <p className="text-[14px] sm:text-[14px] leading-[1.6] text-[#A0A8B8] font-medium tracking-tight">
              Be a real AI version product <br /> by joining us.
            </p>
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/company/acceleratorxorg/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 transform" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.instagram.com/acceleratorxorg" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 transform" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/acceleratorxorg/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 transform" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            <div className="col-span-1">
              <h3 className="text-white font-bold text-[12px] sm:text-[13px] tracking-[0.25em] uppercase mb-8 flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-[#3E38E0]"></span>COMPANY
              </h3>
              <ul className="space-y-4">
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/">Home</a></li>
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/#products">Product</a></li>
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/blogs">Blogs</a></li>
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/#services">Services</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-white font-bold text-[12px] sm:text-[13px] tracking-[0.25em] uppercase mb-8 flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-[#3E38E0]"></span>HELP
              </h3>
              <ul className="space-y-4">
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/support">Customer Support</a></li>
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white font-bold text-[12px] sm:text-[13px] tracking-[0.25em] uppercase mb-8 flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-[#3E38E0]"></span>RESOURCES
              </h3>
              <ul className="space-y-4">
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/#ebooks">Free eBooks</a></li>
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/#tutorials">Development Tutorial</a></li>
                <li><a className="text-[#94A3B8] hover:text-[#3E38E0] transition-colors text-[14px] font-medium block relative w-fit after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#3E38E0] after:transition-all hover:after:w-full" href="/#playlist">Free course Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-medium text-[#64748B] text-center md:text-left">
            © 2026 AcceleratorX. All rights reserved. Registered trademark of A2M Technologies Pvt. Ltd.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-[#64748B]">
            <a className="hover:text-white transition-colors" href="/privacy-policy">Privacy</a>
            <span className="opacity-30">/</span>
            <a className="hover:text-white transition-colors" href="/terms-and-conditions">Terms</a>
            <span className="opacity-30">/</span>
            <span className="text-white/40 italic">Built for the future of AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
