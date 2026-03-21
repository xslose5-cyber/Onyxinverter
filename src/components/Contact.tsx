import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 tracking-[0.2em] uppercase mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
            연락하기
          </h2>
          <div className="w-12 h-[2px] bg-blue-600 mx-auto mb-5"></div>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            에너지 절감과 설비 효율 향상을 원하시나요? 무료 상담 및 견적을 위해 연락주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          <Card className="bg-white border-slate-100 rounded-xl hover:border-blue-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-slate-900">
                전화번호
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:010-7135-8901" className="text-2xl text-blue-600 hover:text-blue-700 transition-colors">
                010-7135-8901
              </a>
              <p className="text-sm text-slate-400 mt-2">24시간 현장작업 가능</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-100 rounded-xl hover:border-blue-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-slate-900">
                이메일
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:onyx3378@naver.com" className="text-lg text-blue-600 hover:text-blue-700 transition-colors break-all">
                onyx3378@naver.com
              </a>
              <p className="text-sm text-slate-400 mt-2">24시간 내 답변드립니다</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-100 rounded-xl hover:border-blue-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-slate-900">
                서비스 지역
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-slate-900">전국</p>
              <p className="text-sm text-slate-400 mt-2">전국 어디든 출장 가능</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-100 rounded-xl hover:border-blue-100 hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-slate-900">
                상담 시간
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-slate-700">
                <p>상담: 오전 09시 ~ 오후 6시</p>
                <p>현장작업: 24시간 가능</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 빠른 연락 버튼 */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <a href="tel:010-7135-8901" className="flex-1">
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              <Phone className="h-5 w-5 mr-2" />
              전화 상담하기
            </Button>
          </a>
          <a href="mailto:onyx3378@naver.com" className="flex-1">
            <Button size="lg" variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 text-lg py-6">
              <Mail className="h-5 w-5 mr-2" />
              이메일 보내기
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
