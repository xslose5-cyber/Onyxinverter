import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            연락하기
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            에너지 절감과 설비 효율 향상을 원하시나요? 오늘 무료 상담 및 견적을 위해 연락주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl text-white">
                <Phone className="h-7 w-7 text-blue-400 mr-3" />
                전화번호
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-white text-lg">010-7135-8901</p>
              <p className="text-sm text-gray-400 mt-2">24시간 현장작업 가능</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl text-white">
                <Mail className="h-7 w-7 text-blue-400 mr-3" />
                이메일
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-white text-lg">onyx3378@naver.com</p>
              <p className="text-sm text-gray-400 mt-2">24시간 내 답변드립니다</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl text-white">
                <MapPin className="h-7 w-7 text-blue-400 mr-3" />
                서비스 지역
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-white text-lg">전국</p>
              <p className="text-sm text-gray-400 mt-2">전국 어디든 출장 가능</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl text-white">
                <Clock className="h-7 w-7 text-blue-400 mr-3" />
                상담 시간
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-1 text-white text-lg">
                <p>상담: 오전 09시 ~ 오후 6시</p>
                <p>현장작업: 24시간 가능</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}