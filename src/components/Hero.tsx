import { Button } from "./ui/button";
import { Shield, Clock, Wrench, PhoneCall, Award, MapPin, Mail } from "lucide-react";
import heroBackground from "figma:asset/9e11a6f6645defb694a4d02d70a244c67f617f2b.png";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative py-32 lg:py-44 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-slate-900/60"></div>
      
      {/* 백그라운드 INVERTER 텍스트 - 우측 */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
        <h2 className="flex flex-col items-center gap-4 h-[600px]">
          <div className="flex-1 w-[3px] bg-blue-500/40"></div>
          <span 
            className="text-xl text-blue-400/50 tracking-widest px-2"
            style={{ 
              writingMode: 'vertical-rl',
              fontFamily: "'Arial', 'Helvetica', sans-serif",
              fontWeight: 700,
            }}
          >
            INVERTER
          </span>
          <div className="flex-1 w-[3px] bg-blue-500/40"></div>
        </h2>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* 슬로건 배지 */}
          <div className="inline-block border border-white/20 rounded-full px-5 py-2 mb-10 backdrop-blur-sm">
            <p className="text-blue-200 tracking-wide text-sm sm:text-base">INVERTER 사용으로 에너지절감, 탄소중립</p>
          </div>

          <h1 className="text-4xl lg:text-6xl text-white mb-6 text-left leading-tight">
            <span className="block text-blue-400 text-lg sm:text-xl lg:text-2xl tracking-widest uppercase mb-3" style={{ fontFamily: "'Arial', 'Helvetica', sans-serif" }}>
              ONYX
            </span>
            <span className="block text-white text-4xl sm:text-5xl lg:text-7xl">
              인버터 제어반
            </span>
            <span className="block text-blue-300 text-4xl sm:text-5xl lg:text-7xl mt-1">
              전문 기업
            </span>
            <span className="block text-slate-400 text-base sm:text-lg lg:text-xl mt-4">
              전국 방문 상담 · 설치 · 유지보수
            </span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">
            냉각탑, 공조기, 펌프, 배기팬 등 다양한 설비에 최적화된 인버터 솔루션을 제공합니다. 빌딩, 병원, 학교, 데이터센터 등 전국 어디든 신뢰하는 전문업체 ONYX입니다.
          </p>
            
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a href="#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6 w-full shadow-lg shadow-blue-600/20">
                견적 요청하기
              </Button>
            </a>
            <a href="mailto:onyx3378@naver.com" className="flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span className="text-white text-lg">onyx3378@naver.com</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <Shield className="h-6 w-6 text-blue-400 flex-shrink-0" />
              <span className="text-sm text-slate-300">전문 기술력</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <Clock className="h-6 w-6 text-blue-400 flex-shrink-0" />
              <span className="text-sm text-slate-300">24시간 출장</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <Award className="h-6 w-6 text-blue-400 flex-shrink-0" />
              <span className="text-sm text-slate-300">10년+ 경력</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <MapPin className="h-6 w-6 text-blue-400 flex-shrink-0" />
              <span className="text-sm text-slate-300">전국 서비스</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}