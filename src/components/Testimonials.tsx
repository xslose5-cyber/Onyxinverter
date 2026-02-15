import { Card, CardContent } from "./ui/card";
import { Star, Quote, TrendingDown, Leaf, Shield, Zap } from "lucide-react";
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

export function Testimonials() {
  return (
    <>
      {/* 고객 후기 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-sm text-blue-600 font-semibold tracking-wider uppercase mb-3">TESTIMONIALS</span>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              고객 후기
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              전국 빌딩, 병원, 데이터센터, 백화점에서 저희 인버터 서비스에 만족한 고객들의 후기
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-8 w-8 text-blue-100" />
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{testimonial.name}</span>
                    <span className="text-sm text-gray-500">{testimonial.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 현장 사진 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {[
              { src: imgKakaoTalk20250708232134406, alt: "전기 제어판넬 인버터 설치 작업" },
              { src: imgKakaoTalk20250708232551684, alt: "LS 인버터 설치 현장" },
              { src: imgKakaoTalk20250708232723762, alt: "인버터 배선 작업" },
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <img src={img.src} alt={img.alt} className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>

          {/* 설비/시설관리팀 안내 */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-6 py-3 border border-blue-100">
              <span className="font-medium">설비·시설관리팀 분들이 많이 연락 주시고 계십니다</span>
            </div>
          </div>
        </div>
      </section>

      {/* HVAC 인버터 필수 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-sm text-blue-600 font-semibold tracking-wider uppercase mb-3">WHY INVERTER</span>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              HVAC 시스템에 인버터 적용은 필수
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              현대 건축물에서 HVAC 시스템의 효율적 운영은 선택이 아닌 필수입니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: TrendingDown, title: "에너지 절감", desc: "전력 소비량을 최대 30~50% 절감하여 운영비를 대폭 감소", color: "text-yellow-500", bg: "bg-yellow-50" },
              { icon: Leaf, title: "탄소 배출 감소", desc: "에너지 효율 향상으로 탄소 배출을 줄여 환경 보호에 기여", color: "text-green-600", bg: "bg-green-50" },
              { icon: Shield, title: "설비 수명 연장", desc: "부드러운 기동과 정밀한 제어로 설비의 수명을 크게 연장", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Zap, title: "운영 효율성", desc: "실시간 부하에 맞춘 최적 운전으로 설비 효율 극대화", color: "text-orange-500", bg: "bg-orange-50" },
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-md transition-all border-gray-200">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${item.bg} rounded-2xl mx-auto mb-4`}>
                    <item.icon className={`h-7 w-7 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 적용 대상 설비 */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-5 text-center">주요 적용 대상 HVAC 설비</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["냉각탑", "공조기", "펌프", "배기팬"].map((name, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors border border-gray-100">
                  <p className="text-gray-800 font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-lg">
            <p className="text-xl font-semibold mb-2">인버터 없이는 에너지 낭비입니다</p>
            <p className="text-blue-100 mb-6">
              현대 건축물 관리에서 HVAC 인버터 적용은 선택이 아닌 필수 사항입니다
            </p>
            <a href="#contact" className="inline-block bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg transition-colors font-medium shadow-sm">
              인버터 설치 상담하기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
