import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { EnergySavings } from './pages/EnergySavings';
import { Toaster } from './components/ui/sonner';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // 페이지 제목 설정
    document.title = 'ONYX';
    
    // 네이버 사이트 검증 메타 태그 추가
    const naverMeta = document.querySelector('meta[name="naver-site-verification"]');
    if (!naverMeta) {
      const metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'naver-site-verification');
      metaTag.setAttribute('content', 'acbef46c18cd505333b6b6021415cbf6b3b9a19f');
      document.head.appendChild(metaTag);
    }
    
    // 기존 robots 메타 태그 모두 삭제 (noindex 등 제거)
    const existingRobotsMetas = document.querySelectorAll('meta[name="robots"]');
    existingRobotsMetas.forEach(meta => meta.remove());
    
    // 새로운 robots 메타 태그 추가 (index,follow)
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'robots');
    metaTag.setAttribute('content', 'index,follow');
    document.head.appendChild(metaTag);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/energy-savings" element={<EnergySavings />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}