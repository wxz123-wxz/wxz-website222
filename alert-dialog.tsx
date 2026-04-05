import { useState, useEffect } from 'react';
import { Menu, X, Search, User } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const navLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '兴趣', href: '#interests' },
  { name: '角色', href: '#characters' },
];

export default function Navigation({ scrollY }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 100);
  }, [scrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2'
            : 'py-4'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? 'max-w-4xl px-6 py-2 rounded-full glass-dark shadow-lg mx-4 sm:mx-auto'
              : 'max-w-7xl px-4 sm:px-6 lg:px-8'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-naruto-orange transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/avatar.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`font-display text-xl tracking-wider text-white transition-all duration-300 ${
                isScrolled ? 'hidden sm:block' : ''
              }`}>
                <span className="text-naruto-orange">火影</span>忍者
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-naruto-orange transition-all duration-300 group-hover:w-full" />
                  {/* 查克拉粒子效果 */}
                  <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-naruto-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2" />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-naruto-orange/20 border border-naruto-orange/50 text-naruto-orange hover:bg-naruto-orange hover:text-white transition-all duration-300">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">登录</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-20 left-4 right-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-lg font-medium text-gray-300 hover:text-naruto-orange transition-colors duration-300 py-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-naruto-orange text-white font-medium">
              <User className="w-5 h-5" />
              登录
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
