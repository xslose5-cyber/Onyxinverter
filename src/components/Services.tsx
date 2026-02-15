import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Settings, 
  RefreshCw, 
  Wrench, 
  CheckCircle, 
  Zap,
  Package
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "신규 설치",
    description: "냉각탑, 공조기, 펌프, 배기팬 등 다양한 설비에 인버터 신규 설치를 제공합니다.",
    features: ["설비 현장 조사", "최적 인버터 선정", "전문 설치 시공", "시운전 및 테스트"],
    accent: "bg-blue-50 text-blue-600"
  },
  {
    icon: RefreshCw,
    title: "교체 서비스",
    description: "노후화된 인버터를 최신 고효율 제품으로 교체하여 에너지 절감을 실현합니다.",
    features: ["기존 설비 점검", "교체 설계", "신속한 교체 작업", "성능 검증"],
    accent: "bg-green-50 text-green-600"
  },
  {
    icon: Settings,
    title: "유지보수",
    description: "정기적인 유지보수로 인버터 시스템의 최적 성능을 유지합니다.",
    features: ["정기 점검", "부품 교체", "성능 최적화", "예방 정비"],
    accent: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Wrench,
    title: "점검 서비스",
    description: "전문 기술진의 정밀 점검으로 고장을 사전에 예방합니다.",
    features: ["정밀 진단", "성능 측정", "문제점 파악", "개선 방안 제시"],
    accent: "bg-amber-50 text-amber-600"
  },
  {
    icon: Zap,
    title: "긴급 출동",
    description: "24시간 긴급 출동으로 설비 가동 중단을 최소화합니다.",
    features: ["24시간 대기", "신속한 출동", "즉시 조치", "긴급 수리"],
    accent: "bg-red-50 text-red-600"
  },
  {
    icon: CheckCircle,
    title: "적용 설비",
    description: "냉각탑, 공조기, 펌프, 배기팬 등 모든 설비에 적용 가능합니다.",
    features: ["냉각탑", "공조기", "펌프", "배기팬"],
    accent: "bg-teal-50 text-teal-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-blue-600 font-semibold tracking-wider uppercase mb-3">SERVICES</span>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            인버터 전문 서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            신규 설치부터 유지보수까지, 전국 어디든 빌딩·병원·학교·데이터센터 등 다양한 건축물을 위한 종합 인버터 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-200">
              <CardHeader className="pb-3">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.accent} mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  상담 문의
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
