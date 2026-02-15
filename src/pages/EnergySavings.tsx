import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Zap, TrendingDown, Leaf, DollarSign, Award, Shield, FileCheck, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "전력비용 30~50% 절감",
    description: "인버터 적용으로 평균 35~40%의 전력 소비를 줄일 수 있습니다."
  },
  {
    icon: Leaf,
    title: "탄소배출 감소",
    description: "에너지 절감을 통해 기업의 ESG 경영과 탄소중립에 기여합니다."
  },
  {
    icon: Zap,
    title: "설비 수명 연장",
    description: "부드러운 기동과 정밀한 제어로 설비의 내구성을 높입니다."
  },
  {
    icon: DollarSign,
    title: "유지보수 비용 절감",
    description: "설비 고장률 감소로 유지보수 비용을 크게 줄일 수 있습니다."
  }
];

const certifications = [
  {
    icon: Award,
    title: "고효율 에너지기자재 인증",
    description: "산업통상자원부 고시 고효율에너지기자재 인증을 획득한 제품만 공급합니다.",
    benefits: [
      "전기요금 할인 혜택",
      "각종 세제 지원",
      "공공기관 우선 구매 대상"
    ]
  },
  {
    icon: Shield,
    title: "한국에너지공단 인증",
    description: "한국에너지공단의 엄격한 기준을 통과한 고효율 인버터를 사용합니다.",
    benefits: [
      "에너지 절감 보조금 지원",
      "성능 및 품질 보증",
      "A/S 및 기술 지원"
    ]
  },
  {
    icon: FileCheck,
    title: "에너지 소비효율 등급 인증",
    description: "1등급 고효율 인증 제품으로 최고 수준의 에너지 절감 성능을 제공합니다.",
    benefits: [
      "최대 50% 에너지 절감",
      "탄소배출권 거래 가능",
      "ESG 경영 지표 개선"
    ]
  }
];

export function EnergySavings() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl mb-6">
                에너지 절감 솔루션
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                INVERTER 사용으로 에너지절감, 탄소중립
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-4">
                인버터 적용의 주요 효과
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ONYX 인버터 솔루션으로 얻을 수 있는 다양한 혜택
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* High Efficiency Certification Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                <Award className="h-5 w-5" />
                <span>고효율 인증</span>
              </div>
              <h2 className="text-3xl lg:text-4xl mb-4">
                고효율 인증 제품으로 더 많은 혜택을
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ONYX는 정부 인증을 받은 고효율 인버터만을 공급하여 고객님께 최고의 품질과 다양한 지원 혜택을 제공합니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-br from-green-50 to-blue-50">
                    <div className="mx-auto mb-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      <cert.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-center text-xl">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-6 text-center">
                      {cert.description}
                    </p>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <strong className="text-green-700 block mb-2">주요 혜택:</strong>
                        <ul className="space-y-2">
                          {cert.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Certification Benefits */}
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl">고효율 인증 제품 추가 혜택</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl mb-2">🏆</div>
                    <h3 className="mb-2">고효율인증</h3>
                    <p className="text-sm text-gray-600">산업통상자원부 공식 인증</p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl mb-2">💵</div>
                    <h3 className="mb-2">보조금 지원</h3>
                    <p className="text-sm text-gray-600">지자체별 설치 보조금</p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl mb-2">⚡</div>
                    <h3 className="mb-2">전기요금 할인</h3>
                    <p className="text-sm text-gray-600">최대 10% 전기요금 절감</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl mb-2">🌱</div>
                    <h3 className="mb-2">탄소배출권</h3>
                    <p className="text-sm text-gray-600">탄소배출권 거래 가능</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visual Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-4">
                인버터 적용 전후 비교
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-700">인버터 미적용</CardTitle>
                  <CardDescription>기존 운영 방식</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>고정 속도 운전으로 부하 변동에 비효율적</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>높은 기동 전류로 피크전력 상승, 계약 단가 상승!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>기계적 충격으로 설비 수명 단축</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>높은 유지보수 비용 발생</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700">인버터 적용</CardTitle>
                  <CardDescription>ONYX 인버터 솔루션</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>부하에 따른 최적 속도 제어</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>전력 소비 30~50% 절감</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>부드러운 기동으로 설비 수명 연장</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>고장률 감소로 유지보수 비용 절감</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Images */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl mb-4">
                친환경 에너지 솔루션
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ONYX와 함께하는 지속가능한 미래
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659290541504-6db0bbd00d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVuZXJneSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc2Mzg5MDg2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="친환경 에너지"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615630859219-0459703c34e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2MzkxOTgyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="지속가능한 에너지"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761815139336-40b16b4cb8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBlZmZpY2llbmN5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM5OTkxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="에너지 효율 기술"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl mb-6">
              지금 시작하세요
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              전문가의 무료 현장 진단으로 귀사에 최적화된 에너지 절감 방안을 제안해 드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                무료 상담 신청
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="tel:010-7135-8901"
                className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors inline-block"
              >
                전화 상담: 010-7135-8901
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}