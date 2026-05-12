
import InfiniteScrollTools from './InfiniteScrollTools';
import { TOOLS_LIST } from './DataAnalyticsv2Constants';

export const GradientLabel = ({ text, highlight }: { text: string, highlight?: string }) => (
    <div className="flex justify-center mb-4">
        <div
            className={`font-['Open_Sans',sans-serif] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase bg-clip-text text-transparent flex ${highlight ? 'gap-1' : 'gap-0'}`}
            style={{ backgroundImage: "linear-gradient(90deg, #3B82F6 0%, #2DD4BF 33%, #22D3EE 66%, #06B6D4 100%)" }}
        >
            {highlight ? (
                <>
                    <span>{text.split(highlight)[0].trim()}</span>
                    <span className="text-[#3B82F6]">{highlight}</span>
                    <span>{text.split(highlight)[1].trim()}</span>
                </>
            ) : (
                text
            )}
        </div>
    </div>
);

export const DataAnalyticsTools = () => {
    return (
        <section className="py-16 sm:py-24 bg-[#0A0A0A] flex flex-col items-center overflow-hidden border-t border-white/5">
            <div className="max-w-[1285px] w-full flex flex-col items-center relative px-4 sm:px-6 md:px-0">
                <GradientLabel text="TOOLS" />
                <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-white mb-4 sm:mb-6 text-center">Tools You Will Work With</h2>

                <InfiniteScrollTools tools={TOOLS_LIST} accentColor="#3B82F6" speed={40} />
            </div>

            <div className="w-full h-[1px] bg-white/10 mt-8 sm:mt-12" />
        </section>
    );
};
