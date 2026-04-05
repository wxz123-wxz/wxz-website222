import { useEffect, useRef, useState } from 'react';
import { 
  Utensils, 
  Gamepad2, 
  Dumbbell, 
  BookOpen, 
  Music, 
  Camera,
  Sparkles,
  Target
} from 'lucide-react';

const interests = [
  {
    icon: Utensils,
    title: '一乐拉面',
    description: '最爱吃一乐拉面，特别是叉烧拉面。和伊鲁卡老师一起吃拉面的时光是最幸福的回忆。',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/20',
  },
  {
    icon: Gamepad2,
    title: '忍术修炼',
    description: '不断修炼新的忍术，从影分身到螺旋丸，再到仙人模式，永不停止变强的脚步。',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/20',
  },
  {
    icon: Dumbbell,
    title: '体术训练',
    description: '每天进行严格的体术训练，与小李一起挥洒汗水，磨练身体和意志。',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/20',
  },
  {
    icon: BookOpen,
    title: '学习忍术',
    description: '虽然不是很擅长理论学习，但为了变得更强，会努力研究忍术卷轴和战术。',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-500/20',
  },
  {
    icon: Music,
    title: '蛤蟆仙人的歌',
    description: '喜欢听深作仙人唱的歌，虽然有点奇怪，但已经成为修炼仙人模式的一部分。',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/20',
  },
  {
    icon: Camera,
    title: '记录羁绊',
    description: '珍惜与朋友们在一起的每一刻，用记忆记录下这些珍贵的羁绊时光。',
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-500/20',
  },
];

export default function Interests() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="interests"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-naruto-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-naruto-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-naruto-orange/20 border border-naruto-orange/30 mb-6">
            <Sparkles className="w-4 h-4 text-naruto-orange" />
            <span className="text-sm text-naruto-orange font-medium">我的爱好</span>
          </div>
          <h2 className="section-title text-gradient mb-4">兴趣爱好</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            除了成为火影的梦想，生活中还有许多让我热爱的事物
          </p>
        </div>

        {/* 兴趣卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={interest.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-full p-6 rounded-2xl border transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'border-naruto-orange/50 bg-gray-800/80'
                    : 'border-white/10 bg-gray-800/40'
                }`}
              >
                {/* 发光效果 */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* 图标 */}
                <div
                  className={`w-14 h-14 rounded-xl ${interest.bgColor} flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <interest.icon className="w-7 h-7 text-white" />
                </div>

                {/* 内容 */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-naruto-orange transition-colors duration-300">
                  {interest.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {interest.description}
                </p>

                {/* 悬停指示器 */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-naruto-orange/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Target className="w-4 h-4 text-naruto-orange" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部装饰 */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-naruto-orange/20 to-naruto-yellow/20 border border-naruto-orange/30">
            <div className="w-12 h-12 rounded-full bg-naruto-orange/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-naruto-orange" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">永远保持热情</p>
              <p className="text-gray-400 text-sm">用热爱驱动每一次成长</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
