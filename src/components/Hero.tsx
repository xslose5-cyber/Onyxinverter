import { Button } from "./ui/button";
import { Shield, Clock, Wrench, Phone } from "lucide-react";
import heroBackground from "figma:asset/9e11a6f6645defb694a4d02d70a244c67f617f2b.png";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative py-28 lg:py-36 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
      
      {/* 우측 세로 라인 데코 */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-0 hidden xl:flex flex-col items-center gap-3 h-[400px]">
        <div className="flex-1 w-[3px] bg-blue-500/60 rounded-full"></div>
        <span 
          className="text-xl text-blue-400/80 tracking-[0.3em] font-bold"
          style={{ writingMode: 'vertical-rl' }}
        >
          INVERTER
        </span>
        <div className="flex-1 w-[3px] bg-blue-500/60 rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* 뱃지 */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-blue-200">24시간 긴급 출동 가능</span>
          </div>

          <h1 className="text-4xl lg:text-6xl text-white mb-6 leading-tight">
            <span className="block">전국 방문</span>
            <span className="block text-blue-400 mt-1">인버터 설치</span>
            <span className="block text-blue-400">유지보수</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            냉각탑, 공조기, 펌프, 배기팬 등 다양한 설비에 최적화된 인버터 솔루션을 제공합니다. 
            빌딩, 병원, 학교, 데이터센터 등 전국 어디든 — 신뢰하는 전문업체 ONYX.
          </p>
          
          {/* CTA 버튼 — 차별화 */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a href="#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 w-full sm:w-auto shadow-lg shadow-blue-600/25">
                무료 견적 요청
              </Button>
            </a>
            <a href="tel:010-7135-8901">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 w-full sm:w-auto backdrop-blur-sm">
                <Phone className="h-5 w-5 mr-2" />
                긴급 상담
              </Button>
            </a>
          </div>

          {/* 하단 통계 */}
          <div className="grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
            <div className="text-center">
              <Shield className="h-8 w-8 text-blue-400 mx-auto mb-1.5" />
              <p className="text-sm text-gray-200 font-medium">전문 기술력</p>
            </div>
            <div className="text-center border-x border-white/10">
              <Clock className="h-8 w-8 text-blue-400 mx-auto mb-1.5" />
              <p className="text-sm text-gray-200 font-medium">24시간 출장</p>
            </div>
            <div className="text-center">
              <Wrench className="h-8 w-8 text-blue-400 mx-auto mb-1.5" />
              <p className="text-sm text-gray-200 font-medium">신속한 대응</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
