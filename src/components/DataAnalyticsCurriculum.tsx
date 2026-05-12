import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ibmModules, regularModules } from './DataAnalyticsv2Constants';
import { GradientLabel } from './DataAnalyticsTools';

export const DataAnalyticsCurriculum = () => {
    const [currMode, setCurrMode] = useState<"ibm" | "regular">("ibm");
    const [openModule, setOpenModule] = useState<number | null>(0);
    const currModules = currMode === "ibm" ? ibmModules : regularModules;

    return (
        <section id="programs" className="py-12 sm:py-20 lg:py-[120px] px-4 sm:px-6 bg-[#0A0A0A]">
            <div className="max-w-[1200px] mx-auto text-center">
                <GradientLabel text="PROGRAM CURRICULUM" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium mt-4 text-white mb-4 sm:mb-6">What You Will Learn In This AI Data Analytics Course</h2>
                <p className="text-[#CFCFCF] text-[14px] sm:text-[16px] max-w-[900px] mx-auto mb-10 leading-relaxed">This program covers everything from fundamentals to advanced AI analytics, dashboards, and automation systems.</p>

                <div className="inline-flex bg-[#111] p-1.5 rounded-full border border-white/[0.08] mb-12">
                    <button
                        onClick={() => setCurrMode("ibm")}
                        className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all ${currMode === "ibm" ? "bg-[#3B82F6] text-black" : "text-white hover:text-[#3B82F6]"}`}
                    >
                        IBM + AcceX
                    </button>
                    <button
                        onClick={() => setCurrMode("regular")}
                        className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all ${currMode === "regular" ? "bg-[#3B82F6] text-black" : "text-white hover:text-[#3B82F6]"}`}
                    >
                        Regular
                    </button>
                </div>

                <div className="flex flex-col gap-4 max-w-[1100px] mx-auto" style={{ overflowAnchor: 'none' }}>
                    {currModules.map((m: any, i: number) => (
                        <div
                            key={i}
                            id={`module-${i}`}
                            className={`group relative border transition-all duration-300 rounded-[20px] overflow-hidden scroll-mt-navbar ${openModule === i ? 'bg-[#111] border-[#3B82F6]/30' : 'bg-[#0D0D0D] border-white/5 hover:border-white/10'}`}
                        >
                            <div
                                onClick={() => setOpenModule(openModule === i ? null : i)}
                                className="p-6 sm:p-8 flex items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center gap-6 text-left">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-[18px] transition-all duration-300 ${openModule === i ? 'bg-[#3B82F6] text-black' : 'bg-white/5 text-[#3B82F6]'}`}>
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-white text-[18px] sm:text-[22px] font-bold tracking-tight leading-tight group-hover:text-[#3B82F6] transition-colors">
                                        {m.title}
                                    </h3>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${openModule === i ? 'border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6] rotate-180' : 'border-white/10 text-white/40'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </div>
                            <div className={`transition-all duration-500 ease-in-out ${openModule === i ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <div className="overflow-hidden">
                                    <div className="p-6 sm:p-8 pt-0 border-t border-white/5 text-left transition-opacity duration-500 delay-100">
                                        {/* Goal Section */}
                                        <div className="mb-8 p-4 rounded-xl bg-[#3B82F6]/5 border-l-4 border-[#3B82F6]">
                                            <span className="text-[#3B82F6] text-[11px] font-black tracking-widest uppercase block mb-1">Learning Goal</span>
                                            <p className="text-white text-[15px] sm:text-[16px] leading-relaxed font-medium">
                                                {m.goal}
                                            </p>
                                        </div>

                                        {/* Sessions List */}
                                        <div className="grid grid-cols-1 gap-6">
                                            {m.sessions.map((session: any, sIdx: number) => (
                                                <div key={sIdx} className="bg-white/[0.02] rounded-xl p-5 border border-white/5">
                                                    <h4 className="text-white text-[16px] sm:text-[18px] font-bold mb-4 flex items-center gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                                                        {session.title}
                                                    </h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pl-4">
                                                        {session.topics.map((topic: string, tIdx: number) => (
                                                            <li key={tIdx} className="text-[#94A3B8] text-[14px] leading-relaxed flex items-start gap-2">
                                                                <span className="mt-2 w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                                                                {topic}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* Practical Highlight */}
                                                    {(session.project || session.handsOn || session.skills || session.tools) && (
                                                        <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                                                            {session.project && (
                                                                <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[12px] font-medium italic">
                                                                    <span className="font-bold not-italic mr-2">Project:</span> {session.project}
                                                                </div>
                                                            )}
                                                            {session.skills && (
                                                                <div className="px-3 py-1.5 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-[12px] font-medium italic">
                                                                    <span className="font-bold not-italic mr-2">Skills:</span> {session.skills}
                                                                </div>
                                                            )}
                                                            {session.tools && (
                                                                <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[12px] font-medium italic">
                                                                    <span className="font-bold not-italic mr-2">Tools:</span> {session.tools}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
