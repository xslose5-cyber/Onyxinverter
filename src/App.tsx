import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { EnergySavings } from './pages/EnergySavings';
import { Toaster } from './components/ui/sonner';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'ONYX | 전국 인버터 설치·유지보수 전문';
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