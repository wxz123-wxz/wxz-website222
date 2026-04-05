import { useEffect, useRef, useState } from 'react';
import { Users, Star, Shield, Zap, Heart } from 'lucide-react';

const characters = [
  {
    name: '漩涡鸣人',
    role: '主角 / 七代目火影',
    image: '/naruto-character.png',
    description: '永不放弃的忍者，用信念和友情书写传奇',
    stats: { ninjutsu: 95, taijutsu: 85, genjutsu: 40 },
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: '宇智波佐助',
    role: '复仇者 / 支撑之影',
    image: '/sasuke.png',
    description: '拥有写轮眼的天才忍者，鸣人的挚友与对手',
    stats: { ninjutsu: 95, taijutsu: 90, genjutsu: 95 },
    color: 'from-blue-600 to-purple-600',
  },
  {
    name: '春野樱',
    role: '医疗忍者 / 怪力',
    image: '/sakura.png',
    description: '第七班的医疗忍者，拥有强大的怪力',
    stats: { ninjutsu: 70, taijutsu: 95, genjutsu: 80 },
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: '旗木卡卡西',
    role: '第六代火影 / 拷贝忍者',
    image: '/kakashi.png',
    description: '第七班的导师，拥有写轮眼的传奇忍者',
    stats: { ninjutsu: 95, taijutsu: 90, genjutsu: 85 },
    color: 'from-gray-500 to-slate-600',
  },
];

export default function Characters() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
      id="characters"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-naruto-orange/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-naruto-blue/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-naruto-blue/20 border border-naruto-blue/30 mb-6">
            <Users className="w-4 h-4 text-naruto-blue" />
            <span className="text-sm text-naruto-blue font-medium">重要的人</span>
          </div>
          <h2 className="section-title text-gradient-blue mb-4">羁绊之人</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            在我的忍者之路上，这些人是我的力量源泉
          </p>
        </div>

        {/* 角色展示 - 桌面端 */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-4">
            {characters.map((character, index) => (
              <div
                key={character.name}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div
                  className={`relative h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                    activeIndex === index ? 'scale-105 z-10' : 'scale-100 opacity-70'
                  }`}
                >
                  {/* 背景渐变 */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${character.color} opacity-20`}
                  />
                  
                  {/* 角色图片 */}
                  <div className="absolute inset-0 flex items-end justify-center">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* 遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* 内容 */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 text-naruto-yellow" />
                      <span className="text-sm text-naruto-yellow">{character.role}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{character.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {character.description}
                    </p>

                    {/* 能力值 */}
                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3 h-3 text-naruto-orange" />
                        <span className="text-xs text-gray-400 w-16">忍术</span>
                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-naruto-orange rounded-full"
                            style={{ width: `${character.stats.ninjutsu}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-3 h-3 text-naruto-blue" />
                        <span className="text-xs text-gray-400 w-16">体术</span>
                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-naruto-blue rounded-full"
                            style={{ width: `${character.stats.taijutsu}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-3 h-3 text-naruto-yellow" />
                        <span className="text-xs text-gray-400 w-16">幻术</span>
                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-naruto-yellow rounded-full"
                            style={{ width: `${character.stats.genjutsu}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 角色展示 - 移动端 */}
        <div className="lg:hidden">
          <div className="grid sm:grid-cols-2 gap-6">
            {characters.map((character, index) => (
              <div
                key={character.name}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-gray-800/50 border border-white/10">
                  {/* 角色图片 */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>

                  {/* 内容 */}
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-3 h-3 text-naruto-yellow" />
                      <span className="text-xs text-naruto-yellow">{character.role}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{character.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{character.description}</p>

                    {/* 能力值 */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3 h-3 text-naruto-orange" />
                        <span className="text-xs text-gray-400 w-12">忍术</span>
                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-naruto-orange rounded-full"
                            style={{ width: `${character.stats.ninjutsu}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-3 h-3 text-naruto-blue" />
                        <span className="text-xs text-gray-400 w-12">体术</span>
                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-naruto-blue rounded-full"
                            style={{ width: `${character.stats.taijutsu}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
