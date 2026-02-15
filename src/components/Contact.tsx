import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm text-blue-400 font-semibold tracking-wider uppercase mb-3">CONTACT</span>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            연락하기
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            에너지 절감과 설비 효율 향상을 원하시나요? 지금 무료 상담 및 견적을 위해 연락주세요.
          </p>
        </div>

        {/* 빠른 연락 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:010-7135-8901"
            className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-colors text-lg font-medium shadow-lg shadow-blue-600/20"
          >
            <Phone className="h-6 w-6" />
            전화 상담하기
          </a>
          <a
            href="mailto:onyx3378@naver.com"
            className="inline-flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl transition-colors text-lg font-medium border border-gray-600"
          >
            <Mail className="h-6 w-6" />
            이메일 보내기
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base text-gray-300">
                <Phone className="h-5 w-5 text-blue-400 mr-2.5" />
                전화번호
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <a href="tel:010-7135-8901" className="text-white text-lg font-medium hover:text-blue-400 transition-colors">
                010-7135-8901
              </a>
              <p className="text-sm text-gray-500 mt-1.5">24시간 현장작업 가능</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base text-gray-300">
                <Mail className="h-5 w-5 text-blue-400 mr-2.5" />
                이메일
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <a href="mailto:onyx3378@naver.com" className="text-white text-lg font-medium hover:text-blue-400 transition-colors break-all">
                onyx3378@naver.com
              </a>
              <p className="text-sm text-gray-500 mt-1.5">24시간 내 답변</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400 mr-2.5" />
                서비스 지역
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-white text-lg font-medium">전국</p>
              <p className="text-sm text-gray-500 mt-1.5">전국 어디든 출장 가능</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-base text-gray-300">
                <Clock className="h-5 w-5 text-blue-400 mr-2.5" />
                상담 시간
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-white font-medium">상담: 09시 ~ 18시</p>
              <p className="text-sm text-gray-500 mt-1.5">현장작업: 24시간</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
