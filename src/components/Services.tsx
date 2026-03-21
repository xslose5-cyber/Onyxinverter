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
      className="py-20 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 tracking-[0.2em] uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
            인버터 서비스
          </h2>
          <div className="w-12 h-[2px] bg-blue-600 mx-auto mb-5"></div>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            신규 설치부터 유지보수까지, 전국 어디든 빌딩, 병원, 학교, 데이터센터 등 다양한 건축물을 위한 종합적인 인버터 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-white border-slate-100 rounded-xl hover:shadow-lg hover:border-blue-100 transition-all duration-300 overflow-hidden group">
              <div className="h-1 bg-slate-100 group-hover:bg-blue-600 transition-colors duration-300"></div>
              <CardHeader className="pt-6">
                <div className="w-12 h-12 bg-slate-50 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-slate-500">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-500">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  문의하기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
