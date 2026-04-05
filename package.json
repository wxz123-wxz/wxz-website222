import { useEffect, useRef, useState } from 'react';
import { Play, Users, Flame, Star } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="火影忍者背景"
          className="w-full h-full object-cover"
        />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-gray-900/80" />
      </div>

      {/* 螺旋丸旋转效果 */}
      <div className="absolute right-[10%] top-[30%] w-32 h-32 md:w-48 md:h-48 pointer-events-none">
        <div className="absolute inset-0 rounded-full border-2 border-naruto-blue/30 animate-spin-slow" />
        <div className="absolute inset-2 rounded-full border-2 border-naruto-blue/50 animate-spin-slow animation-delay-100" style={{ animationDirection: 'reverse' }} />
        <div className="absolute inset-4 rounded-full border-2 border-naruto-blue/70 animate-spin-slow animation-delay-200" />
        <div className="absolute inset-[30%] rounded-full bg-naruto-blue/40 blur-xl animate-pulse-glow" />
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="text-center lg:text-left">
            {/* 头像 */}
            <div
              className={`inline-block mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-naruto-orange to-naruto-yellow rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20">
                  <img
                    src="/avatar.png"
                    alt="头像"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* 状态指示器 */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* 标题 */}
            <h1
              className={`font-display text-5xl md:text-6xl lg:text-7xl mb-4 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-gradient">火影忍者</span>
            </h1>

            {/* 副标题 */}
            <p
              className={`text-xl md:text-2xl text-naruto-blue font-medium mb-2 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              漩涡鸣人
            </p>

            {/* 描述 */}
            <p
              className={`text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              "我要成为火影！这是我的梦想，也是我向所有人证明自己的力量！"
            </p>

            {/* 统计数据 */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-6 mb-8 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-2 text-gray-300">
                <Flame className="w-5 h-5 text-naruto-orange" />
                <span className="text-sm">风属性</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Star className="w-5 h-5 text-naruto-yellow" />
                <span className="text-sm">S级忍者</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-naruto-blue" />
                <span className="text-sm">第七班</span>
              </div>
            </div>

            {/* 按钮组 */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button 
                onClick={() => scrollToSection('#about')}
                className="btn-primary flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                了解更多
              </button>
              <button 
                onClick={() => scrollToSection('#interests')}
                className="btn-secondary"
              >
                我的兴趣
              </button>
            </div>
          </div>

          {/* 右侧角色立绘 */}
          <div
            className={`hidden lg:block relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative">
              {/* 发光效果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-naruto-orange/20 to-transparent rounded-full blur-3xl" />
              
              {/* 角色图片 */}
              <img
                src="/naruto-character.png"
                alt="漩涡鸣人"
                className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />

              {/* 装饰元素 */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-naruto-orange/30 blur-xl rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
