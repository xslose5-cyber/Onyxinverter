import { useEffect, useRef } from "react";

const manufacturers = [
  { name: "LS ELECTRIC", subName: "LS산전", color: "#E4002B" },
  { name: "ABB", subName: "", color: "#FF000F" },
  { name: "Danfoss", subName: "댄포스", color: "#E2000F" },
  { name: "SAMSUNG", subName: "삼성", color: "#1428A0" },
  { name: "Schneider Electric", subName: "슈나이더", color: "#3DCD58" },
  { name: "YASKAWA", subName: "야스카와", color: "#005BAC" },
  { name: "MITSUBISHI ELECTRIC", subName: "미쯔비시", color: "#E60012" },
  { name: "HYUNDAI ELECTRIC", subName: "현대", color: "#002C5F" },
  { name: "ADT", subName: "", color: "#0033A0" },
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

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const duplicatedManufacturers = [...manufacturers, ...manufacturers];

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 타이틀 */}
        <div className="text-center pt-6 pb-2">
          <span className="text-sm sm:text-base text-blue-400 tracking-[0.2em] uppercase">
            Global Inverter Partners
          </span>
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
              className="group flex-shrink-0 flex flex-col items-center justify-center cursor-default px-6 sm:px-8 py-4 rounded-lg border border-transparent hover:border-gray-600 hover:bg-white/5 transition-all duration-300"
            >
              <span
                className="text-2xl sm:text-3xl text-white whitespace-nowrap transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                style={{
                  fontFamily: "'Arial', 'Helvetica', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                {manufacturer.name}
              </span>
              {manufacturer.subName && (
                <span className="text-sm text-gray-300 group-hover:text-white mt-1 transition-colors">
                  {manufacturer.subName}
                </span>
              )}
              <div
                className="w-8 h-0.5 mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: manufacturer.color }}
              />
            </div>
          ))}
        </div>

        {/* 하단 안내 */}
        <div className="text-center pb-5">
          <span className="text-xs text-gray-400">
            그 외 다양한 제조사 인버터 취급 가능
          </span>
        </div>
      </div>
    </section>
  );
}