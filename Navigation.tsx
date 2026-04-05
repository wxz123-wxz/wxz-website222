import { useEffect, useRef, useState } from 'react';
import './App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import Interests from './sections/Interests';
import Characters from './sections/Characters';
import Footer from './sections/Footer';
import Navigation from './components/Navigation';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 页面加载动画
    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={mainRef}
      className={`min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* 查克拉粒子效果 */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-naruto-orange rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>
        
        {/* 渐变光晕 */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)',
            left: '10%',
            top: '20%',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            right: '5%',
            top: '60%',
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        />
      </div>

      {/* 导航栏 */}
      <Navigation scrollY={scrollY} />

      {/* 主要内容 */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Interests />
        <Characters />
        <Footer />
      </main>
    </div>
  );
}

export default App;
