import { useEffect, useRef } from "react";

const manufacturers = [
  { name: "LS ELECTRIC", subName: "LS산전" },
  { name: "ABB", subName: "" },
  { name: "Danfoss", subName: "댄포스" },
  { name: "Schneider Electric", subName: "슈나이더" },
  { name: "YASKAWA", subName: "야스카와" },
  { name: "MITSUBISHI ELECTRIC", subName: "미쯔비시" },
  { name: "HYUNDAI ELECTRIC", subName: "현대" },
  { name: "ADT", subName: "" },
];

export function ManufacturerLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollContainer.scrollWidth / 2 <= scrollPosition) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const duplicatedManufacturers = [...manufacturers, ...manufacturers];

  return (
    <section className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 타이틀 */}
        <div className="text-center pt-5 pb-1">
          <span className="text-xs sm:text-sm text-slate-400 tracking-[0.25em] uppercase">
            Global Inverter Partners
          </span>
          <p className="text-sm sm:text-base text-slate-300 mt-1">인버터 제어반 전문 기업</p>
        </div>

        {/* 자동 스크롤 로고 영역 */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden gap-6 sm:gap-10 py-5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicatedManufacturers.map((manufacturer, index) => (
            <div
              key={`scroll-${index}`}
              className="group flex-shrink-0 flex flex-col items-center justify-center cursor-default px-6 sm:px-8 py-3 rounded-lg transition-all duration-300"
            >
              <span
                className="text-xl sm:text-2xl text-slate-300 group-hover:text-white whitespace-nowrap transition-colors duration-300"
                style={{
                  fontFamily: "'Arial', 'Helvetica', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                {manufacturer.name}
              </span>
              {manufacturer.subName && (
                <span className="text-xs text-slate-500 group-hover:text-slate-400 mt-1 transition-colors">
                  {manufacturer.subName}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 하단 안내 */}
        <div className="text-center pb-4">
          <span className="text-xs text-slate-500">
            그 외 다양한 제조사 인버터 취급 가능
          </span>
        </div>
      </div>
    </section>
  );
}