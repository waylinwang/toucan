/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Navigation, NavPage } from './components/Navigation';
import { RevealLayer, SPOTLIGHT_R as DEFAULT_SPOTLIGHT_R } from './components/RevealLayer';
import { BrandPage } from './pages/BrandPage';
import { ProductsPage } from './pages/ProductsPage';
import { CasesPage } from './pages/CasesPage';
import { AcademyPage } from './pages/AcademyPage';
import { ContactPage } from './pages/ContactPage';
import { FloorTheme } from './types';
import { ArrowRight, Package } from 'lucide-react';
import { TOUCAN_CONTACT } from './data/toucanData';

// Solid wood floor image pairs generated for Toucan Flooring
import walnutBase from './assets/images/hardwood_floor_base_1794407487746.jpg';
import herringboneReveal from './assets/images/hardwood_floor_reveal_1794407500318.jpg';
import oakBase from './assets/images/toucan_natural_oak_1794407963506.jpg';
import chevronReveal from './assets/images/toucan_french_chevron_1794407976258.jpg';
import toucanLuxuryHabitat from './assets/images/toucan_luxury_habitat_1794411111939.jpg';
import toucanLuxuryTimber from './assets/images/toucan_luxury_timber_1794411113569.jpg';

const ALL_THEMES: FloorTheme[] = [
  'walnut_herringbone',
  'natural_chevron',
  'toucan_rainforest',
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  // Randomly select one of the 3 themes on every fresh load / refresh
  const [currentTheme, setCurrentTheme] = useState<FloorTheme>(() => {
    const randomIndex = Math.floor(Math.random() * ALL_THEMES.length);
    return ALL_THEMES[randomIndex];
  });
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [sampleTargetProduct, setSampleTargetProduct] = useState<string>('');

  // Mouse tracking with lerp smoothing as specified ("目前的地板效果非常好，不能变")
  const mouse = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const smooth = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const hasInteractedRef = useRef<boolean>(false);
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
    x: -999,
    y: -999,
  });

  // Base and Reveal textures according to active theme (including luxury toucan rainforest theme)
  const currentBaseImage =
    currentTheme === 'walnut_herringbone'
      ? walnutBase
      : currentTheme === 'natural_chevron'
      ? oakBase
      : toucanLuxuryHabitat;
  const currentRevealImage =
    currentTheme === 'walnut_herringbone'
      ? herringboneReveal
      : currentTheme === 'natural_chevron'
      ? chevronReveal
      : toucanLuxuryTimber;

  const navigateTo = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Initial gentle placement near center
    const initX = window.innerWidth / 2;
    const initY = window.innerHeight * 0.48;
    smooth.current = { x: initX, y: initY };
    mouse.current = { x: initX, y: initY };
    setCursorPos({ x: initX, y: initY });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true;
        setHasInteracted(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
        if (!hasInteractedRef.current) {
          hasInteractedRef.current = true;
          setHasInteracted(true);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });

    // RequestAnimationFrame loop lerping: smooth += (mouse - smooth) * 0.1
    const animate = () => {
      const dx = mouse.current.x - smooth.current.x;
      const dy = mouse.current.y - smooth.current.y;

      // Only update when movement is active to prevent unnecessary render cycles when idle
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        smooth.current.x += dx * 0.1;
        smooth.current.y += dy * 0.1;

        setCursorPos({
          x: Math.round(smooth.current.x * 10) / 10,
          y: Math.round(smooth.current.y * 10) / 10,
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((prev) => {
      const idx = ALL_THEMES.indexOf(prev);
      return ALL_THEMES[(idx + 1) % ALL_THEMES.length];
    });
  };

  const handleRequestSample = (productName?: string) => {
    setSampleTargetProduct(productName || '');
    navigateTo('contact');
  };

  return (
    <div
      className="min-h-screen bg-black tracking-[-0.02em] select-none text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Universal Navigation Layer across all dedicated pages */}
      <Navigation
        currentPage={currentPage}
        onNavigate={navigateTo}
        currentTheme={currentTheme}
        onToggleTheme={toggleTheme}
        onRequestSample={() => handleRequestSample()}
      />

      {/* Page Routing */}
      {currentPage === 'home' && (
        /* Main Full-Screen Hero Section (Exact Spotlight Reveal Preserved) */
        <section
          className="relative w-full overflow-hidden h-screen bg-black"
          style={{ height: '100dvh' }}
        >
          {/* Layer 1: Base Image (z-10) with Ken Burns zoom animation */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom pointer-events-none transition-all duration-700 ease-out"
            style={{
              backgroundImage: `url("${currentBaseImage}")`,
            }}
          />

          {/* Ambient Dark Vignette for enhanced typography and contrast (z-20) */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/60 via-black/20 to-black/75" />

          {/* Layer 2: Reveal Layer (z-30) */}
          <RevealLayer
            image={currentRevealImage}
            cursorX={cursorPos.x}
            cursorY={cursorPos.y}
          />

          {/* Interactive Subtle Cursor Follower Ring / Spotlight Target Indicator */}
          {cursorPos.x > -500 && (
            <div
              className="fixed pointer-events-none z-40 transition-opacity duration-300"
              style={{
                transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
                opacity: hasInteracted ? 0.35 : 0.65,
              }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e8702a]" />
              </div>
            </div>
          )}

          {/* Layer 3: Heading (z-50) - Toucan Flooring Official Brand Slogan */}
          <div className="absolute top-[12%] sm:top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
            {/* Tag above heading: No bird head, clean brand tag */}
            <div
              onClick={() => navigateTo('brand')}
              className="pointer-events-auto cursor-pointer inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-[#e8702a] text-xs font-medium mb-3 sm:mb-4 shadow-lg hover:border-[#e8702a]/80 transition-all group"
              title="点击查看大嘴鸟品牌专页"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8702a] animate-pulse" />
              <span>大嘴鸟地板 · 始于1998 · 德国精工智造</span>
              <span className="text-[10px] text-white/50 group-hover:text-white transition-colors">
                (品牌专页 →)
              </span>
            </div>

            <h1 className="text-white leading-[0.98] drop-shadow-2xl">
              {/* Line 1 */}
              <span
                className="block font-playfair italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl hero-anim hero-reveal tracking-tight"
                style={{
                  letterSpacing: '-0.04em',
                  animationDelay: '0.25s',
                }}
              >
                接纳自然之美
              </span>
              {/* Line 2 */}
              <span
                className="block font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-1.5 sm:mt-2 hero-anim hero-reveal tracking-tight"
                style={{
                  letterSpacing: '-0.05em',
                  animationDelay: '0.42s',
                }}
              >
                让美好回归生活
              </span>
            </h1>

            {/* Interactive spotlight guide tooltip */}
            <div
              className={`mt-4 sm:mt-5 px-4 py-1.5 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md border border-white/20 text-white/80 transition-opacity duration-1000 ${
                hasInteracted ? 'opacity-0' : 'opacity-85 animate-pulse'
              }`}
            >
              {currentTheme === 'walnut_herringbone'
                ? '移动光圈，探索实木大板与高定人字拼天然年轮纹理'
                : currentTheme === 'natural_chevron'
                ? '移动光圈，探索北欧白橡大板与法式45°鱼骨拼几何光影'
                : '移动光圈，穿透雨林大嘴鸟秘境，探索高定珍稀木拼花'}
            </div>
          </div>

          {/* Layer 4: Bottom-left paragraph (z-50) */}
          <div
            className="hidden sm:block absolute bottom-12 md:bottom-14 left-8 md:left-14 max-w-[280px] hero-anim hero-fade z-50 pointer-events-auto text-left"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="p-4 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 shadow-2xl">
              <p className="text-xs uppercase tracking-wider text-[#e8702a] font-semibold mb-1">
                {currentTheme === 'toucan_rainforest'
                  ? '雨林图腾 · 原生木境'
                  : '工匠初心 · 德系精工'}
              </p>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                {currentTheme === 'toucan_rainforest'
                  ? '大嘴鸟源于南美热带雨林，象征生生不息的原生灵动。大嘴鸟地板以自然为师，将百年珍稀木料融入健康现代家居。'
                  : '1998年成立以来，秉承工匠初心与全球原材料供应链。近十万平米生产研发基地，引进德国先进生产线，设计生产健康零醛木地板，满足全球100多个国家与地区。'}
              </p>
              <button
                onClick={() => navigateTo('brand')}
                className="mt-2 text-xs text-[#e8702a] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>阅读大嘴鸟品牌故事</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Layer 5: Bottom-right block (z-50) */}
          <div
            className="absolute bottom-8 sm:bottom-20 left-5 right-5 sm:left-auto sm:right-8 md:right-14 max-w-full sm:max-w-[300px] flex flex-col items-start gap-3 sm:gap-4 hero-anim hero-fade z-50 pointer-events-auto text-left"
            style={{ animationDelay: '0.85s' }}
          >
            <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl w-full">
              <div className="flex items-center justify-between text-xs text-[#e8702a] mb-1.5 font-medium">
                <span>当前材质探秘</span>
                <span className="text-white/40 text-[10px]">
                  {currentTheme === 'walnut_herringbone'
                    ? '黑胡桃 × 暖金人字拼'
                    : currentTheme === 'natural_chevron'
                    ? '北欧白橡 × 法式鱼骨拼'
                    : '大嘴鸟雨林 × 凡尔赛珍稀木'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                {currentTheme === 'walnut_herringbone'
                  ? '移动光圈即可穿透表层工艺，微观探寻大嘴鸟纯实木地板与高定人字拼天然年轮的温润生命力。'
                  : currentTheme === 'natural_chevron'
                  ? '移动光圈探索欧洲特级原色白橡与45°高定鱼骨拼的几何光影韵律。'
                  : '穿透南美雨林原生秘境，微观探寻德国精工切削的珍稀热带硬木凡尔赛高定拼花，感受大化自然之美。'}
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => navigateTo('products')}
                className="flex-1 sm:flex-initial bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer shadow-md text-center"
              >
                进入产品大厅
              </button>
              <button
                onClick={() => handleRequestSample()}
                className="bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full border border-white/20 backdrop-blur-md transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Package className="w-3.5 h-3.5" />
                <span>索取样品</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Dedicated Brand Page */}
      {currentPage === 'brand' && (
        <BrandPage
          onBackToHome={() => navigateTo('home')}
          onNavigateToProducts={() => navigateTo('products')}
          onNavigateToContact={() => navigateTo('contact')}
        />
      )}

      {/* Dedicated Products Page */}
      {currentPage === 'products' && (
        <ProductsPage
          onBackToHome={() => navigateTo('home')}
          onRequestSample={handleRequestSample}
        />
      )}

      {/* Dedicated Cases Page */}
      {currentPage === 'cases' && (
        <CasesPage
          onBackToHome={() => navigateTo('home')}
          onRequestSample={() => navigateTo('contact')}
        />
      )}

      {/* Dedicated Academy Page */}
      {currentPage === 'academy' && (
        <AcademyPage
          onBackToHome={() => navigateTo('home')}
          onRequestSample={() => navigateTo('contact')}
        />
      )}

      {/* Dedicated Contact & Sample Request Page */}
      {currentPage === 'contact' && (
        <ContactPage
          onBackToHome={() => navigateTo('home')}
          initialProduct={sampleTargetProduct}
        />
      )}
    </div>
  );
}
