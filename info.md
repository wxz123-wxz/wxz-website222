import { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  Github, 
  Twitter, 
  Instagram, 
  MessageCircle,
  Heart,
  ExternalLink
} from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
  { icon: Mail, href: '#', label: 'Email' },
];

const quickLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '兴趣', href: '#interests' },
  { name: '角色', href: '#characters' },
];

const resourceLinks = [
  { name: '火影忍者官网', href: '#' },
  { name: '火影维基', href: '#' },
  { name: '动漫观看', href: '#' },
  { name: '漫画阅读', href: '#' },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative pt-20 pb-8 overflow-hidden"
    >
      {/* 顶部渐变线 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-naruto-orange/50 to-transparent" />

      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-naruto-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 主要内容 */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo 和简介 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* 用户 Logo */}
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-naruto-orange/50 bg-white/5">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-xl text-white tracking-wider">
                  <span className="text-naruto-orange">火影</span>忍者
                </h3>
                <p className="text-xs text-gray-500">个人主页</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              一个热爱火影忍者的粉丝个人主页，分享对这部作品的热爱和感悟。
              说到做到，这就是我的忍道！
            </p>
            {/* 社交链接 */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-naruto-orange hover:border-naruto-orange/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-naruto-orange rounded-full" />
              快速链接
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-naruto-orange transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-naruto-orange group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 资源链接 */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-naruto-blue rounded-full" />
              相关资源
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-naruto-blue transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 订阅/联系 */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-naruto-yellow rounded-full" />
              保持联系
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              订阅获取最新的火影忍者资讯和更新
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="输入邮箱地址"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-naruto-orange/50 transition-colors duration-300"
              />
              <button className="px-4 py-2 rounded-lg bg-naruto-orange text-white text-sm font-medium hover:bg-naruto-orange/80 transition-colors duration-300">
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* 底部版权 */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2024 火影忍者粉丝主页. 保留所有权利.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            用
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            和查克拉制作
          </p>
        </div>
      </div>
    </footer>
  );
}
