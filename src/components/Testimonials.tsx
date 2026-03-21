import { Card, CardContent } from "./ui/card";
import { Star, Quote, Zap, TrendingDown, Leaf, Shield, Wind, Droplets, Fan, Thermometer, Briefcase } from "lucide-react";
import imgKakaoTalk20250708232134406 from "figma:asset/b25bbcfdf8255fed7c9d3440c1d30bc41f7106ed.png";
import imgKakaoTalk20250708232551684 from "figma:asset/c34778fd53c97e5cbd75b94e0b09f2a9552dc99c.png";
import imgKakaoTalk20250708232723762 from "figma:asset/3b9bff3479ef9945b1a401f04fad1ec128fe1298.png";

const testimonials = [
  {
    name: "김민수",
    location: "서울 소재 대형빌딩",
    rating: 5,
    text: "ONYX가 저희 빌딩 냉각탑에 인버터를 설치했습니다. 전력 소비량이 30% 이상 감소했고, 팀은 전문적이고 시간을 잘 지켰습니다. 완벽한 설치 작업이었습니다!"
  },
  {
    name: "이지현",
    location: "부산 소재 종합병원",
    rating: 5,
    text: "병원 공조기 인버터가 고장 났는데, ONYX가 몇 시간 만에 긴급 출동해서 해결했습니다. 환자 안전을 최우선으로 생각하는 신속한 대응에 감사드립니다."
  },
  {
    name: "박철수",
    location: "여의도 소재 빌딩",
    rating: 5,
    text: "금융가 빌딩에 펌프와 공조기에 설치된 인버터를 매번 유지보수를 맡긴다. 전문성이 뛰어나고 경험이 많아 우리 관리직원의 수고를 덜어준다."
  },
  {
    name: "최영희",
    location: "서울 소재 대형 백화점",
    rating: 5,
    text: "백화점 펌프와 배기팬 인버터를 모두 교체했는데, 기술진들은 예의 바르고 모든 작업을 상세히 설명해 주었습니다. 에너지 비용 절감 효과가 눈에 띕니다!"
  }
];

const hvacEquipment = [
  { icon: Wind, label: "냉각탑" },
  { icon: Thermometer, label: "공조기" },
  { icon: Droplets, label: "펌프" },
  { icon: Fan, label: "배기팬" },
];

export function Testimonials() {
  return (
    <>
      {/* 고객 후기 섹션 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 tracking-[0.2em] uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              고객 후기
            </h2>
            <div className="w-12 h-[2px] bg-blue-600 mx-auto mb-5"></div>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              전국 빌딩, 병원, 데이터센터, 백화점 등에서 저희 인버터 서비스에 만족한 고객들의 후기입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white border-slate-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 rounded-xl">
                <CardContent className="p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <Quote className="h-5 w-5 text-blue-600" />
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                      <span className="text-sm text-blue-600">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-400">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 3 Images Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            <div className="overflow-hidden rounded-xl group">
              <img
                src={imgKakaoTalk20250708232134406}
                alt="전기 제어판넬 인버터 설치 작업"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-xl group">
              <img
                src={imgKakaoTalk20250708232551684}
                alt="LS 인버터 설치 현장"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-xl group">
              <img
                src={imgKakaoTalk20250708232723762}
                alt="인버터 배선 작업"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 설비/시설관리팀 연락 메시지 */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-slate-900 rounded-lg px-8 py-4">
              <Briefcase className="h-5 w-5 text-blue-400" />
              <p className="text-lg text-white">
                설비·시설관리팀 분들이 많이 연락 주시고 계십니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HVAC 시스템에 인버터 적용은 필수 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
            <div className="text-center mb-12">
              <p className="text-sm text-blue-600 tracking-[0.2em] uppercase mb-3">
                HVAC Inverter Solution
              </p>
              <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
                HVAC 시스템에 인버터 적용은 필수
              </h2>
              <div className="w-12 h-[2px] bg-blue-600 mx-auto mb-5"></div>
              <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                현대 건축물에서 HVAC 시스템의 효율적 운영은 선택이 아닌 필수입니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {[
                { icon: TrendingDown, title: "에너지 절감", desc: "전력 소비량을 최대 30-50% 절감하여 운영비를 대폭 감소시킵니다" },
                { icon: Leaf, title: "탄소 배출 감소", desc: "에너지 효율 향상으로 탄소 배출을 줄여 환경 보호에 기여합니다" },
                { icon: Shield, title: "설비 수명 연장", desc: "부드러운 기동과 정밀한 제어로 설비의 수명을 크게 연장시킵니다" },
                { icon: Zap, title: "운영 효율성", desc: "실시간 부하에 맞춰 최적 운전으로 설비 효율을 극대화합니다" },
              ].map((item) => (
                <Card key={item.title} className="bg-white border-slate-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 rounded-xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 주요 적용 대상 */}
            <div className="bg-white rounded-xl p-8 border border-slate-100">
              <h3 className="text-xl text-slate-900 mb-6 text-center">주요 적용 대상 HVAC 설비</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hvacEquipment.map((item) => (
                  <div key={item.label} className="bg-slate-50 rounded-lg p-5 text-center hover:bg-blue-50 transition-colors border border-slate-100">
                    <item.icon className="h-7 w-7 text-blue-600 mx-auto mb-2" />
                    <p className="text-slate-700">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center bg-slate-900 text-white rounded-xl p-8">
              <p className="text-xl mb-3">인버터 없이는 에너지 낭비입니다</p>
              <p className="text-slate-400 mb-6">
                현대 건축물 관리에서 HVAC 인버터 적용은 선택이 아닌 필수 사항입니다. 지금 바로 에너지 절감을 시작하세요.
              </p>
              <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
                인버터 설치 상담하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
