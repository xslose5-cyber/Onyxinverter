import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isSubPage = location.pathname === '/portfolio' || location.pathname === '/energy-savings';
  const isEnergySavingsPage = location.pathname === '/energy-savings';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Logo className="h-10 w-auto text-gray-900" />
            <span className="text-sm text-gray-800 font-bold tracking-tight hidden sm:block">(주)오닉스엔지니어링</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {isSubPage ? (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">홈</Link>
                <Link to="/energy-savings" className={isEnergySavingsPage ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition-colors font-medium"}>에너지절감</Link>
              </>
            ) : (
              <>
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">홈</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">서비스</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">회사소개</a>
                <Link to="/energy-savings" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">에너지절감</Link>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">연락처</a>
              </>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:010-7135-8901" className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">010-7135-8901</span>
            </a>
            <a href="#contact">
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-sm">견적 요청</Button>
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a href="tel:010-7135-8901" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600" aria-label="전화하기">
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40 border-t border-gray-100 overflow-y-auto">
            <nav className="flex flex-col p-6 gap-1">
              {isSubPage ? (
                <>
                  <Link to="/" className="py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-lg">홈</Link>
                  <Link to="/energy-savings" className={`py-3 px-4 rounded-lg font-medium text-lg ${isEnergySavingsPage ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}>에너지절감</Link>
                </>
              ) : (
                <>
                  <a href="#home" onClick={closeMenu} className="py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-lg">홈</a>
                  <a href="#services" onClick={closeMenu} className="py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-lg">서비스</a>
                  <a href="#about" onClick={closeMenu} className="py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-lg">회사소개</a>
                  <Link to="/energy-savings" className="py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-lg">에너지절감</Link>
                  <a href="#contact" onClick={closeMenu} className="py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-lg">연락처</a>
                </>
              )}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="tel:010-7135-8901" className="flex items-center gap-3 py-3 px-4 text-blue-600 font-medium text-lg">
                  <Phone className="h-5 w-5" />
                  010-7135-8901
                </a>
                <a href="#contact" onClick={closeMenu} className="block mt-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full text-lg py-6">견적 요청하기</Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
