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
    features: ["설비 현장 조사", "최적 인버터 선정", "전문 설치 시공", "시운전 및 테스트"]
  },
  {
    icon: RefreshCw,
    title: "교체 서비스",
    description: "노후화된 인버터를 최신 고효율 제품으로 교체하여 에너지 절감을 실현합니다.",
    features: ["기존 설비 점검", "교체 설계", "신속한 교체 작업", "성능 검증"]
  },
  {
    icon: Settings,
    title: "유지보수",
    description: "정기적인 유지보수로 인버터 시스템의 최적 성능을 유지합니다.",
    features: ["정기 점검", "부품 교체", "성능 최적화", "예방 정비"]
  },
  {
    icon: Wrench,
    title: "점검 서비스",
    description: "전문 기술진의 정밀 점검으로 고장을 사전에 예방합니다.",
    features: ["정밀 진단", "성능 측정", "문제점 파악", "개선 방안 제시"]
  },
  {
    icon: Zap,
    title: "긴급 출동",
    description: "24시간 긴급 출동으로 설비 가동 중단을 최소화합니다.",
    features: ["24시간 대기", "신속한 출동", "즉시 조치", "긴급 수리"]
  },
  {
    icon: CheckCircle,
    title: "적용 설비",
    description: "냉각탑, 공조기, 펌프, 배기팬 등 모든 설비에 적용 가능합니다.",
    features: ["냉각탑", "공조기", "펌프", "배기팬"]
  }
];

export function Services() {
  return (
    <section 
      id="services" 
      className="py-20 relative bg-cover bg-center"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1632733711679-529326f6db12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwbWFpbnRlbmFuY2UlMjByZXBhaXJ8ZW58MXx8fHwxNzYzOTgyNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
    >
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            우리의 INVERTER 서비스
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            신규 설치부터 유지보수까지, 전국 어디든 빌딩, 병원, 학교, 데이터센터 등 다양한 건축물을 위한 종합적인 인버터 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  자세히 보기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}