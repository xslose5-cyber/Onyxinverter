import { Card, CardContent } from "./ui/card";
import { Users, Award, MapPin, Clock, Building2, Wrench, ClipboardList } from "lucide-react";
import imgKakaoTalk202511122135117991 from "figma:asset/99fbbf91b4daf56e49ce13087e77f6dc419972ae.png";

export function About() {
  const stats = [
    { icon: Users, number: "500+", label: "만족한 고객" },
    { icon: Award, number: "10+", label: "년 경력" },
    { icon: MapPin, number: "50+", label: "서비스 지역" },
    { icon: Clock, number: "24/7", label: "긴급 서비스" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 tracking-[0.2em] uppercase mb-3">
            About ONYX
          </p>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
            ONYX 소개
          </h2>
          <div className="w-12 h-[2px] bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              ONYX는 전국 어디든 모든 산업용 설비에 인버터 솔루션을 제공하는 신뢰받는 파트너입니다. 냉각탑, 공조기, 펌프, 배기팬 등 다양한 설비에 최적화된 인버터 설치, 교체, 유지보수, 점검 서비스를 제공하며, 에너지 절감과 설비 효율 향상을 통해 고객의 성공을 지원합니다.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              빌딩, 병원, 학교, 데이터센터, 마트, 백화점, 주차장, 발전소, 공장 등 모든 유형의 건축물에서 풍부한 경험을 보유한 우리의 전문 기술진은 신규 설치부터 긴급 출동까지 모든 프로젝트에 최고의 전문성을 제공합니다.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100">
                  <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={imgKakaoTalk202511122135117991}
              alt="전기 제어 패널"
              className="rounded-xl w-full h-auto max-w-2xl mx-auto"
            />
          </div>
        </div>

        {/* 대규모 설치 및 교체공사 섹션 */}
        <div className="mt-24 bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
          <div className="text-center mb-12">
            <p className="text-sm text-blue-600 tracking-[0.2em] uppercase mb-3">
              Large-Scale Projects
            </p>
            <h3 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              대규모 설치 및 교체공사
            </h3>
            <div className="w-12 h-[2px] bg-blue-600 mx-auto mb-5"></div>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              소규모부터 대규모 프로젝트까지, ONYX는 모든 규모의 인버터 공사를 전문적으로 수행합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Wrench, title: "전문 프로젝트 관리", desc: "대형 빌딩, 병원, 공장 등의 대규모 설치 및 교체 공사를 체계적으로 관리하며, 공사 기간 중 설비 운영에 최소한의 영향을 주도록 계획합니다." },
              { icon: Building2, title: "다수 설비 동시 시공", desc: "냉각탑, 공조기, 펌프, 배기팬 등 여러 설비에 대한 인버터를 동시에 설치 또는 교체하는 대규모 공사도 효율적으로 진행합니다." },
              { icon: Users, title: "숙련된 대규모 시공팀", desc: "10년 이상의 경험을 보유한 전문 기술진으로 구성된 팀이 대규모 프로젝트를 안전하고 신속하게 완수합니다." },
              { icon: Clock, title: "정확한 일정 준수", desc: "사전 계획과 체계적인 공정 관리를 통해 약속된 공사 기간을 철저히 준수하며, 고객의 운영 일정에 맞춰 진행합니다." },
            ].map((item) => (
              <Card key={item.title} className="bg-white border-slate-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center bg-white border border-slate-200 rounded-xl p-8">
            <div className="flex items-center justify-center mb-3">
              <ClipboardList className="h-5 w-5 text-blue-600 mr-2" />
              <p className="text-lg text-slate-900">대규모 프로젝트 문의 환영</p>
            </div>
            <p className="text-slate-500 mb-5">
              데이터센터, 대형 병원, 산업 단지 등 대규모 인버터 설치 및 교체 공사가 필요하신 경우, 언제든지 상담해 주세요.
            </p>
            <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
              대규모 공사 견적 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
