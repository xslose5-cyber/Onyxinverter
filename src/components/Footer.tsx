import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { useState } from "react";

export function Footer() {
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/portfolio';
  const isEnergySavingsPage = location.pathname === '/energy-savings';
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Logo className="h-16 w-auto text-white" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">(주)오닉스엔지니어링</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              전국 어디든 신뢰받는 인버터 전문 파트너입니다. 냉각탑, 공조기, 펌프, 배기팬 등 다양한 설비에 최적화된 인버터 솔루션으로 에너지 절감과 고객 만족을 실현합니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span>010-7135-8901</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>onyx3378@naver.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>서비스 지역: 전국</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="ml-7">사업자등록번호: 610-87-03367</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">서비스</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">신규 설치</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">교체</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">유지보수</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">점검</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">긴급 출동</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">바로가기</h3>
            <ul className="space-y-2 text-gray-300">
              {isPortfolioPage || isEnergySavingsPage ? (
                <>
                  <li><Link to="/" className="hover:text-blue-400 transition-colors">홈</Link></li>
                  <li><Link to="/energy-savings" className="hover:text-blue-400 transition-colors">에너지절감</Link></li>
                  <li><Link to="/#contact" className="hover:text-blue-400 transition-colors">연락처</Link></li>
                </>
              ) : (
                <>
                  <li><a href="#home" className="hover:text-blue-400 transition-colors">홈</a></li>
                  <li><a href="#about" className="hover:text-blue-400 transition-colors">회사소개</a></li>
                  <li><a href="#services" className="hover:text-blue-400 transition-colors">서비스</a></li>
                  <li><Link to="/energy-savings" className="hover:text-blue-400 transition-colors">에너지절감</Link></li>
                  <li><a href="#contact" className="hover:text-blue-400 transition-colors">연락처</a></li>
                </>
              )}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 ONYX. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
            <button 
              onClick={() => setShowPrivacyModal(true)} 
              className="hover:text-blue-400 transition-colors"
            >
              개인정보 보호정책
            </button>
            <button 
              onClick={() => setShowTermsModal(true)} 
              className="hover:text-blue-400 transition-colors"
            >
              이용약관
            </button>
          </div>
        </div>
      </div>

      {/* 개인정보 보호정책 모달 */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl text-gray-900">개인정보 보호정책</h2>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 text-gray-800 space-y-4">
              <section>
                <h3 className="text-lg mb-2">1. 개인정보의 수집 및 이용 목적</h3>
                <p className="text-sm text-gray-700">
                  (주)오닉스엔지니어링(이하 "회사")은 고객의 견적 요청 및 상담 서비스 제공을 위해 최소한의 개인정보를 수집합니다.
                </p>
              </section>

              <section>
                <h3 className="text-lg mb-2">2. 수집하는 개인정보 항목</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>필수항목: 이름, 이메일 주소, 전화번호, 문의 내용</li>
                  <li>선택항목: 서비스 유형</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg mb-2">3. 개인정보의 보유 및 이용 기간</h3>
                <p className="text-sm text-gray-700">
                  회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령에 의해 보존할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안 보관합니다.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                  <li>견적 요청 정보: 3년 보관 후 파기</li>
                  <li>상담 내용: 상담 완료 후 1년 보관 후 파기</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg mb-2">4. 개인정보의 제3자 제공</h3>
                <p className="text-sm text-gray-700">
                  회사는 고객의 개인정보를 "2. 수집하는 개인정보 항목"에서 고지한 범위 내에서 사용하며, 고객의 사전 동의 없이 동 범위를 초과하여 이용하거나 제3자에게 제공하지 않습니다.
                </p>
              </section>

              <section>
                <h3 className="text-lg mb-2">5. 개인정보 처리의 위탁</h3>
                <p className="text-sm text-gray-700">
                  회사는 서비스 향상을 위해 개인정보 처리 업무를 외부 전문업체에 위탁할 수 있으며, 위탁 시 관계 법령에 따라 안전하게 관리됩니다.
                </p>
              </section>

              <section>
                <h3 className="text-lg mb-2">6. 정보주체의 권리·의무</h3>
                <p className="text-sm text-gray-700">
                  고객은 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 수집·이용에 대한 동의를 철회할 수 있습니다. 개인정보 조회, 수정 또는 동의 철회를 원하시는 경우 고객센터(010-7135-8901)로 연락 주시면 즉시 조치하겠습니다.
                </p>
              </section>

              <section>
                <h3 className="text-lg mb-2">7. 개인정보 보호책임자</h3>
                <p className="text-sm text-gray-700">
                  회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                  <li>개인정보 보호책임자: (주)오닉스엔지니어링 대표</li>
                  <li>연락처: 010-7135-8901</li>
                  <li>이메일: onyx3378@naver.com</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg mb-2">8. 개인정보 처리방침의 변경</h3>
                <p className="text-sm text-gray-700">
                  이 개인정보 처리방침은 2025년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* 이용약관 모달 */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl text-gray-900">이용약관</h2>
              <button 
                onClick={() => setShowTermsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 text-gray-800 space-y-4">
              <section>
                <h3 className="text-lg mb-2">제1조 (목적)</h3>
                <p className="text-sm text-gray-700">
                  본 약관은 (주)오닉스엔지니어링(이하 "회사")가 제공하는 인버터 관련 서비스(신규 설치, 교체, 유지보수, 점검, 긴급 출동 등)의 이용과 관련하여 회사와 고객 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
              </section>

              <section>
                <h3 className="text-lg mb-2">제2조 (용어의 정의)</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>"서비스"라 함은 회사가 제공하는 인버터 설치, 교체, 유지보수, 점검 및 관련 상담 서비스를 의미합니다.</li>
                  <li>"고객"이라 함은 회사의 서비스를 이용하는 개인 또는 법인을 의미합니다.</li>
                  <li>"견적"이라 함은 고객의 요청에 따라 회사가 제공하는 서비스 비용 산정서를 의미합니다.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg mb-2">제3조 (약관의 효력 및 변경)</h3>
                <p className="text-sm text-gray-700">
                  본 약관은 서비스 화면에 게시하거나 기타의 방법으로 고객에게 공지함으로써 효력이 발생합니다. 회사는 합리적인 사유가 발생할 경우 본 약관을 변경할 수 있으며, 약관이 변경되는 경우 변경사항을 시행일자 7일 전부터 공지합니다.
                </p>
              </section>

              <section>
                <h3 className="text-lg mb-2">제4조 (서비스의 제공)</h3>
                <p className="text-sm text-gray-700">
                  회사는 다음과 같은 서비스를 제공합니다:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                  <li>인버터 신규 설치</li>
                  <li>인버터 교체</li>
                  <li>정기/비정기 유지보수</li>
                  <li>점검 서비스</li>
                  <li>긴급 출동 서비스</li>
                  <li>기술 상담 및 컨설팅</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg mb-2">제5조 (견적 및 계약)</h3>
                <p className="text-sm text-gray-700">
                  고객이 웹사이트를 통해 견적을 요청하면, 회사는 신속하게 견적서를 제공합니다. 고객이 견적서를 승인하고 계약을 체결한 경우, 회사는 약정된 일정에 따라 서비스를 제공합니다.
                </p>
              </section>

              <section>
                <h3 className="text-lg mb-2">제6조 (서비스 이용료 및 결제)</h3>
                <p className="text-sm text-gray-700">
                  서비스 이용료는 견적서에 명시된 금액을 기준으로 하며, 고객은 계약서에 명시된 결제 방법 및 기한에 따라 대금을 지급합니다.
                </p>
              </section>

              <section>
                <h3 className="text-lg mb-2">제7조 (회사의 의무)</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>회사는 안전하고 전문적인 서비스를 제공하기 위해 최선을 다합니다.</li>
                  <li>회사는 고객의 개인정보를 관련 법령에 따라 보호합니다.</li>
                  <li>회사는 서비스 제공 중 발생한 문제에 대해 신속하게 대응합니다.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg mb-2">제8조 (고객의 의무)</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>고객은 정확한 정보를 제공해야 하며, 허위 정보 제공으로 인한 책임은 고객에게 있습니다.</li>
                  <li>고객은 서비스 이용료를 약정된 기한 내에 지급해야 합니다.</li>
                  <li>고객은 회사 직원의 안전한 작업 환경을 보장해야 합니다.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg mb-2">제9조 (면책조항)</h3>
                <p className="text-sm text-gray-700">
                  회사는 천재지변, 전쟁, 파업 등 불가항력적인 사유로 인해 서비스를 제공할 수 없는 경우 책임을 지지 않습니다. 또한 고객의 귀책사유로 인한 손해에 대해서는 회사가 책임을 지지 않습니다.
                </p>
              </section>

              <section>
                <h3 className="text-lg mb-2">제10조 (분쟁해결)</h3>
                <p className="text-sm text-gray-700">
                  본 약관과 관련하여 분쟁이 발생한 경우, 회사와 고객은 상호 협의하여 해결하도록 노력합니다. 협의가 이루어지지 않을 경우, 관할 법원은 회사의 본사 소재지를 관할하는 법원으로 합니다.
                </p>
              </section>

              <section className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong>시행일:</strong> 본 약관은 2025년 1월 1일부터 시행됩니다.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
