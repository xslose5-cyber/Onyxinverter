import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { useState, useEffect, useCallback } from "react";

function Modal({ title, isOpen, onClose, children }: { title: string; isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-xl">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors" aria-label="닫기">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 text-gray-700 space-y-5 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const location = useLocation();
  const isSubPage = location.pathname === '/portfolio' || location.pathname === '/energy-savings';
  const isEnergySavingsPage = location.pathname === '/energy-savings';
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Logo className="h-14 w-auto text-white" />
              <span className="text-sm text-gray-400 font-medium">(주)오닉스엔지니어링</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm">
              전국 어디든 신뢰받는 인버터 전문 파트너. 냉각탑, 공조기, 펌프, 배기팬 등 다양한 설비에 최적화된 인버터 솔루션으로 에너지 절감과 고객 만족을 실현합니다.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:010-7135-8901" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                010-7135-8901
              </a>
              <a href="mailto:onyx3378@naver.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                onyx3378@naver.com
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                서비스 지역: 전국
              </div>
              <div className="text-gray-500 ml-7">
                사업자등록번호: 610-87-03367
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">서비스</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">신규 설치</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">교체</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">유지보수</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">점검</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">긴급 출동</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">바로가기</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {isSubPage ? (
                <>
                  <li><Link to="/" className="hover:text-white transition-colors">홈</Link></li>
                  <li><Link to="/energy-savings" className="hover:text-white transition-colors">에너지절감</Link></li>
                  <li><Link to="/#contact" className="hover:text-white transition-colors">연락처</Link></li>
                </>
              ) : (
                <>
                  <li><a href="#home" className="hover:text-white transition-colors">홈</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">회사소개</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">서비스</a></li>
                  <li><Link to="/energy-savings" className="hover:text-white transition-colors">에너지절감</Link></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">연락처</a></li>
                </>
              )}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ONYX Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-gray-300 transition-colors">
              개인정보 보호정책
            </button>
            <button onClick={() => setShowTerms(true)} className="hover:text-gray-300 transition-colors">
              이용약관
            </button>
          </div>
        </div>
      </div>

      {/* 개인정보 보호정책 모달 */}
      <Modal title="개인정보 보호정책" isOpen={showPrivacy} onClose={() => setShowPrivacy(false)}>
        <section>
          <h3 className="font-semibold mb-1">1. 개인정보의 수집 및 이용 목적</h3>
          <p>(주)오닉스엔지니어링(이하 "회사")은 고객의 견적 요청 및 상담 서비스 제공을 위해 최소한의 개인정보를 수집합니다.</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">2. 수집하는 개인정보 항목</h3>
          <p>필수항목: 이름, 이메일 주소, 전화번호, 문의 내용 / 선택항목: 서비스 유형</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">3. 개인정보의 보유 및 이용 기간</h3>
          <p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 견적 요청 정보: 3년 보관 후 파기 / 상담 내용: 상담 완료 후 1년 보관 후 파기</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">4. 개인정보의 제3자 제공</h3>
          <p>회사는 고객의 사전 동의 없이 수집 범위를 초과하여 이용하거나 제3자에게 제공하지 않습니다.</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">5. 개인정보 보호책임자</h3>
          <p>개인정보 보호책임자: (주)오닉스엔지니어링 대표 / 연락처: 010-7135-8901 / 이메일: onyx3378@naver.com</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">6. 개인정보 처리방침의 변경</h3>
          <p>이 개인정보 처리방침은 2025년 1월 1일부터 적용되며, 변경사항 시행 7일 전 공지합니다.</p>
        </section>
      </Modal>

      {/* 이용약관 모달 */}
      <Modal title="이용약관" isOpen={showTerms} onClose={() => setShowTerms(false)}>
        <section>
          <h3 className="font-semibold mb-1">제1조 (목적)</h3>
          <p>본 약관은 (주)오닉스엔지니어링이 제공하는 인버터 관련 서비스의 이용에 관하여 회사와 고객 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">제2조 (서비스의 제공)</h3>
          <p>회사는 인버터 신규 설치, 교체, 정기/비정기 유지보수, 점검, 긴급 출동, 기술 상담 및 컨설팅 서비스를 제공합니다.</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">제3조 (견적 및 계약)</h3>
          <p>고객이 웹사이트를 통해 견적을 요청하면, 회사는 신속하게 견적서를 제공합니다. 고객이 승인하고 계약 체결 시, 약정된 일정에 따라 서비스를 제공합니다.</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">제4조 (회사의 의무)</h3>
          <p>안전하고 전문적인 서비스 제공, 고객 개인정보 법령에 따라 보호, 서비스 중 문제 발생 시 신속 대응.</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">제5조 (고객의 의무)</h3>
          <p>정확한 정보 제공, 서비스 이용료 기한 내 지급, 회사 직원의 안전한 작업 환경 보장.</p>
        </section>
        <section>
          <h3 className="font-semibold mb-1">제6조 (면책조항)</h3>
          <p>천재지변, 전쟁, 파업 등 불가항력 사유로 인한 서비스 불가 시 회사는 책임을 지지 않습니다.</p>
        </section>
        <p className="pt-3 border-t border-gray-200 text-gray-500">시행일: 2025년 1월 1일</p>
      </Modal>
    </footer>
  );
}
