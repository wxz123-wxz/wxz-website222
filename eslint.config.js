import { useEffect, useRef, useState } from 'react';
import { User, BookOpen, Calendar, Award, MapPin, Heart } from 'lucide-react';

const stats = [
  { icon: User, label: '姓名', value: '漩涡鸣人' },
  { icon: Calendar, label: '生日', value: '10月10日' },
  { icon: MapPin, label: '出身', value: '木叶隐村' },
  { icon: Award, label: '等级', value: '七代目火影' },
];

const abilities = [
  { name: '螺旋丸', level: 100, color: 'bg-naruto-blue' },
  { name: '影分身之术', level: 95, color: 'bg-naruto-orange' },
  { name: '仙人模式', level: 90, color: 'bg-naruto-yellow' },
  { name: '九尾查克拉', level: 98, color: 'bg-red-500' },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <img
          src="/about-bg.jpg"
          alt="关于背景"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title text-gradient mb-4">关于我</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            一个永不放弃的忍者，用信念和友情书写属于自己的传奇
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧 - 个人信息卡片 */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="ninja-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-naruto-orange" />
                <h3 className="text-xl font-bold text-white">个人资料</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-naruto-orange/50 transition-colors duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-4 h-4 text-naruto-orange" />
                      <span className="text-sm text-gray-400">{stat.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  忍术能力
                </h4>
                {abilities.map((ability, index) => (
                  <div key={ability.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{ability.name}</span>
                      <span className="text-naruto-orange">{ability.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${ability.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${ability.level}%` : '0%',
                          transitionDelay: `${400 + index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧 - 个人故事 */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-naruto-orange/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-naruto-orange" />
                <h3 className="text-2xl font-bold text-white mb-3">孤独的童年</h3>
                <p className="text-gray-400 leading-relaxed">
                  从小失去父母，体内封印着九尾妖狐，被村民们排斥和孤立。但我从未放弃，
                  始终相信总有一天会得到大家的认可。孤独让我更珍惜友情，
                  也让我下定决心要保护每一个重要的人。
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-naruto-blue/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-naruto-blue" />
                <h3 className="text-2xl font-bold text-white mb-3">第七班的羁绊</h3>
                <p className="text-gray-400 leading-relaxed">
                  遇到了卡卡西老师、佐助和小樱，组成了第七班。我们一起执行任务，
                  一起成长，建立了深厚的羁绊。即使佐助离开村子，我也从未放弃把他带回来的决心，
                  因为我们是朋友，是家人。
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-naruto-yellow/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-naruto-yellow" />
                <h3 className="text-2xl font-bold text-white mb-3">实现梦想</h3>
                <p className="text-gray-400 leading-relaxed">
                  经过无数次的战斗和磨练，我终于实现了自己的梦想，成为了第七代火影。
                  这不是终点，而是新的起点。我会继续守护木叶村，守护所有我爱的人，
                  因为这就是我的忍道！
                </p>
              </div>

              {/* 名言 */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-naruto-orange/20 to-naruto-yellow/20 border border-naruto-orange/30">
                <p className="text-lg italic text-white text-center">
                  "说到做到，这就是我的忍道！"
                </p>
                <p className="text-sm text-naruto-orange text-center mt-2">
                  — 漩涡鸣人
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
