import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/portfolio';
  const isEnergySavingsPage = location.pathname === '/energy-savings';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <Logo className="h-12 w-auto text-gray-900" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-600 font-bold text-[13px] font-[Baloo_Da]">(주)오닉스엔지니어링</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isPortfolioPage || isEnergySavingsPage ? (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">홈</Link>
                <Link to="/energy-savings" className={isEnergySavingsPage ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition-colors"}>에너지절감</Link>
              </>
            ) : (
              <>
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">홈</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">서비스</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">회사소개</a>
                <Link to="/energy-savings" className="text-gray-700 hover:text-blue-600 transition-colors">에너지절감</Link>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">연락처</a>
              </>
            )}
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-primary">
              <Phone className="h-4 w-4 mr-2" />
              <span>010-7135-8901</span>
            </div>
            <a href="#contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                견적 요청하기
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {isPortfolioPage || isEnergySavingsPage ? (
                <>
                  <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">홈</Link>
                  <Link to="/energy-savings" className={isEnergySavingsPage ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 transition-colors"}>에너지절감</Link>
                </>
              ) : (
                <>
                  <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">홈</a>
                  <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">서비스</a>
                  <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">회사소개</a>
                  <Link to="/energy-savings" className="text-gray-700 hover:text-blue-600 transition-colors">에너지절감</Link>
                  <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">연락처</a>
                </>
              )}
              <div className="flex items-center text-primary pt-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>010-7135-8901</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                견적 받기
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}