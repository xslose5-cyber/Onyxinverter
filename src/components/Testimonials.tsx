import { Card, CardContent } from "./ui/card";
import { Star, Quote, MapPin, CheckCircle2, Zap, TrendingDown, Leaf, Shield } from "lucide-react";
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            고객 후기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            저희 말만 믿지 마세요. 전국 빌딩, 병원, 데이터센터, 백화점 등에서 저희 인버터 서비스에 대한 만족한 고객들의 후기를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3 Images Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={imgKakaoTalk20250708232134406}
              alt="전기 제어판넬 인버터 설치 작업"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={imgKakaoTalk20250708232551684}
              alt="LS 인버터 설치 현장"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={imgKakaoTalk20250708232723762}
              alt="인버터 배선 작업"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* HVAC 시스템에 인버터 적용은 필수 섹션 */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-12 w-12 text-blue-600 mr-3" />
              <h2 className="text-3xl lg:text-4xl text-gray-900">
                HVAC 시스템에 인버터 적용은 필수
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              현대 건축물에서 HVAC 시스템의 효율적 운영은 선택이 아닌 필수입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* 에너지 절감 */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <TrendingDown className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">에너지 절감</h3>
                <p className="text-gray-600">
                  전력 소비량을 최대 30-50% 절감하여 운영비를 대폭 감소시킵니다
                </p>
              </CardContent>
            </Card>

            {/* 탄소 배출 감소 */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">탄소 배출 감소</h3>
                <p className="text-gray-600">
                  에너지 효율 향상으로 탄소 배출을 줄여 환경 보호에 기여합니다
                </p>
              </CardContent>
            </Card>

            {/* 설비 수명 연장 */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">설비 수명 연장</h3>
                <p className="text-gray-600">
                  부드러운 기동과 정밀한 제어로 설비의 수명을 크게 연장시킵니다
                </p>
              </CardContent>
            </Card>

            {/* 운영 효율성 */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl text-gray-900 mb-3">운영 효율성</h3>
                <p className="text-gray-600">
                  실시간 부하에 맞춰 최적 운전으로 설비 효율을 극대화합니다
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 주요 적용 대상 */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl text-gray-900 mb-6 text-center">주요 적용 대상 HVAC 설비</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all border border-gray-200">
                <p className="text-gray-800">🌀 냉각탑</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all border border-gray-200">
                <p className="text-gray-800">❄️ 공조기</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all border border-gray-200">
                <p className="text-gray-800">💧 펌프</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all border border-gray-200">
                <p className="text-gray-800">💨 배기팬</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-6 shadow-lg">
            <p className="text-xl mb-3">⚡ 인버터 없이는 에너지 낭비입니다!</p>
            <p className="text-lg mb-4">
              현대 건축물 관리에서 HVAC 인버터 적용은 선택이 아닌 필수 사항입니다. 지금 바로 에너지 절감을 시작하세요.
            </p>
            <a href="#contact" className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full transition-colors shadow-lg">
              인버터 설치 상담하기
            </a>
          </div>
        </div>

        {/* 설비/시설관리팀 연락 메시지 */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 rounded-full px-8 py-4 shadow-lg">
            <p className="text-xl lg:text-2xl text-white">
              💼 설비, 시설관리팀 분들이 많이 연락 주시고 계십니다!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
