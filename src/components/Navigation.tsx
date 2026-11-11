import React, { useState } from 'react';
import { Menu, X, Layers, Phone, Package, Home } from 'lucide-react';
import { FloorTheme } from '../types';
import { TOUCAN_CONTACT } from '../data/toucanData';

export type NavPage = 'home' | 'brand' | 'products' | 'cases' | 'academy' | 'contact';

interface NavigationProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  currentTheme: FloorTheme;
  onToggleTheme: () => void;
  onRequestSample: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onNavigate,
  currentTheme,
  onToggleTheme,
  onRequestSample,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavPage; label: string }[] = [
    { id: 'home', label: '首页探秘' },
    { id: 'brand', label: '大嘴鸟品牌' },
    { id: 'products', label: '产品中心' },
    { id: 'cases', label: '工程案例' },
    { id: 'academy', label: '大嘴鸟学院' },
    { id: 'contact', label: '联系我们' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-3.5 sm:p-5 pointer-events-auto bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
        {/* Left: Official Toucan Logo from https://toucan.top/wp-content/uploads/2023/07/logo.png */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => onNavigate('home')}
            title="大嘴鸟地板官网 - 返回首页光圈探秘"
          >
            <img
              src="https://toucan.top/wp-content/uploads/2023/07/logo.png"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
              alt="toucan 大嘴鳥地板"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain brightness-110 drop-shadow-md group-hover:opacity-95 transition-opacity"
            />
            <span className="hidden xl:inline text-[10px] px-2 py-0.5 rounded-full bg-[#e8702a]/25 text-[#e8702a] font-medium border border-[#e8702a]/35 whitespace-nowrap">
              始于1998
            </span>
          </div>

          {/* Floor Style Switcher Pill */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/55 hover:bg-black/80 text-white/95 border border-white/20 backdrop-blur-md transition-all hover:border-[#e8702a]/60 cursor-pointer shadow-lg"
            title="切换不同实木地板与拼花光圈组合"
          >
            <Layers className="w-3.5 h-3.5 text-[#e8702a]" />
            <span className="hidden sm:inline">
              {currentTheme === 'walnut_herringbone'
                ? '深胡桃 × 人字拼'
                : currentTheme === 'natural_chevron'
                ? '北欧白橡 × 鱼骨拼'
                : '大嘴鸟雨林 × 珍稀原木'}
            </span>
            <span className="sm:hidden">
              {currentTheme === 'walnut_herringbone'
                ? '胡桃/人字拼'
                : currentTheme === 'natural_chevron'
                ? '白橡/鱼骨拼'
                : '雨林/珍稀木'}
            </span>
            <span className="text-[10px] text-[#e8702a] font-mono ml-0.5 opacity-80">
              {currentTheme === 'walnut_herringbone' ? '1/3' : currentTheme === 'natural_chevron' ? '2/3' : '3/3'}
            </span>
          </button>
        </div>

        {/* Center Pill Menu (Desktop) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md border border-white/25 rounded-full px-2 py-1.5 items-center gap-1 shadow-2xl">
          {navLinks.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-white/25 font-bold shadow-sm'
                    : 'text-white/80 hover:bg-white/15 hover:text-white font-medium'
                }`}
              >
                {item.id === 'home' && <Home className="w-3.5 h-3.5 text-[#e8702a]" />}
                <span>{item.label}</span>
                {item.id === 'products' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8702a]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${TOUCAN_CONTACT.phone}`}
            className="hidden md:flex items-center gap-1.5 text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full border border-white/15 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#e8702a]" />
            <span>{TOUCAN_CONTACT.phoneDisplay}</span>
          </a>
          <button
            onClick={onRequestSample}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-full transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#e8702a]/25 cursor-pointer flex items-center gap-1.5"
          >
            <Package className="w-4 h-4" />
            <span>索取样品</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-full border border-white/20 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[120] lg:hidden bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-2 pb-3 border-b border-white/10 text-left">
              <div>
                <img
                  src="https://toucan.top/wp-content/uploads/2023/07/logo.png"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                  alt="toucan 大嘴鳥地板"
                  className="h-7 w-auto object-contain brightness-110 mb-1"
                />
                <span className="text-xs text-[#e8702a] block">
                  接纳自然之美 · 让美好回归生活
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#e8702a]/20 text-[#e8702a] font-medium border border-[#e8702a]/30">
                始于1998
              </span>
            </div>

            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-base py-3 px-4 rounded-xl transition-all flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-white/20 text-white font-bold'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'home' && <span className="text-xs text-[#e8702a]">光圈探秘</span>}
                {item.id === 'products' && <span className="text-xs text-[#e8702a]">5大系列</span>}
              </button>
            ))}

            <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onToggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between text-left py-3 px-4 rounded-xl bg-white/10 text-white font-medium"
              >
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#e8702a]" />
                  <span>切换光圈地板质感</span>
                </span>
                <span className="text-xs text-[#e8702a] font-medium bg-[#e8702a]/20 px-2.5 py-1 rounded-full">
                  {currentTheme === 'walnut_herringbone'
                    ? '深胡桃/人字拼'
                    : currentTheme === 'natural_chevron'
                    ? '北欧白橡/鱼骨拼'
                    : '大嘴鸟雨林/珍稀木'}
                </span>
              </button>

              <a
                href={`tel:${TOUCAN_CONTACT.phone}`}
                className="flex items-center gap-2 text-left py-3 px-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15"
              >
                <Phone className="w-4 h-4 text-[#e8702a]" />
                <span>致电客服：{TOUCAN_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                onRequestSample();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#e8702a] text-white py-3.5 rounded-full font-semibold text-center hover:bg-[#d2611f] transition-colors shadow-lg cursor-pointer"
            >
              索取样品（留下联系方式客服跟进）
            </button>
          </div>
        </div>
      )}
    </>
  );
};
