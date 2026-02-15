import { Button } from "./ui/button";
import { Shield, Clock, Wrench, Mail } from "lucide-react";
import heroBackground from "figma:asset/9e11a6f6645defb694a4d02d70a244c67f617f2b.png";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative py-32 lg:py-40 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* 백그라운드 INVERTER 텍스트 - 우측 */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
        <h2 
          className="flex flex-col items-center gap-4"
          style={{ 
            height: '600px',
          }}
        >
          <div className="flex-1 w-[4px] bg-red-600"></div>
          <span 
            className="text-2xl text-red-600 tracking-widest px-2"
            style={{ 
              fontFamily: 'Arial Black, sans-serif',
              writingMode: 'vertical-rl',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            INVERTER
          </span>
          <div className="flex-1 w-[4px] bg-red-600"></div>
        </h2>
      </div>
      
      {/* 인버터 상담 받기 - 중앙 상단 */}
      <div className="relative z-10 flex justify-center pt-8 pb-4">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full px-8 py-4 shadow-2xl transform hover:scale-105 transition-transform">
          <div className="flex items-center gap-3">
            <Mail className="h-8 w-8 text-white" />
            <div className="text-center">
              <p className="text-2xl lg:text-3xl text-white mb-1">인버터 상담 받기</p>
              <a href="mailto:onyx3378@naver.com" className="text-xl lg:text-2xl text-yellow-300 hover:text-yellow-200 transition-colors">
                onyx3378@naver.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl text-white mb-6 text-[48px] px-[-4px] py-[0px] text-left">
              <span className="block">전국 방문</span>
              <span className="block text-blue-400">인버터 설치</span>
              <span className="block text-blue-400">유지보수</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              냉각탑, 공조기, 펌프, 배기팬 등 다양한 설비에 최적화된 인버터 솔루션을 제공합니다. 빌딩, 병원, 학교, 데이터센터 등 전국 어디든 신뢰하는 전문업체 ONYX입니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 w-full">
                  서비스 예약하기
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 w-full">
                  긴급 서비스
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-center">
                <Shield className="h-10 w-10 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-white">전문 기술력</p>
              </div>
              <div className="text-center">
                <Clock className="h-10 w-10 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-white">24시간 출장</p>
              </div>
              <div className="text-center">
                <Wrench className="h-10 w-10 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-white">신속한 대응</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}