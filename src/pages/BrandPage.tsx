import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Factory,
  Globe,
  Award,
  TreePine,
  Heart,
  ArrowRight,
  ZoomIn,
  Camera,
  Layers,
  Compass,
} from 'lucide-react';
import toucanBirdPortrait from '../assets/images/toucan_bird_portrait.jpg';
import toucanBirdAvatar from '../assets/images/toucan_bird_avatar_circle.jpg';
import toucanCraftHistory from '../assets/images/toucan_20year_craft.jpg';
import toucanRainforestPerched from '../assets/images/toucan_rainforest_perched_1794410391081.jpg';
import toucanCanopyPair from '../assets/images/toucan_canopy_pair_1794410408529.jpg';
import toucanFlyingPhoto from '../assets/images/toucan_flying_isolated_1794410374553.jpg';
import toucanLuxuryHabitat from '../assets/images/toucan_luxury_habitat_1794411111939.jpg';
import { TOUCAN_CONTACT } from '../data/toucanData';

interface BrandPageProps {
  onBackToHome: () => void;
  onNavigateToProducts: () => void;
  onNavigateToContact: () => void;
}

export const BrandPage: React.FC<BrandPageProps> = ({
  onBackToHome,
  onNavigateToProducts,
  onNavigateToContact,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Gallery of Toucan nature photographs and similar raw wood inspirations
  const toucanPhotoGallery = [
    {
      id: 'luxury_sanctuary',
      title: '奢邸栖所 · 晨雾林冠与实木长廊',
      subtitle: '南美热带原生态高阶空间',
      image: toucanLuxuryHabitat,
      aspect: 'landscape',
      tag: '高奢生息',
      desc: '晨雾流岚环绕的热带高山林冠，巨嘴鸟静立于户外敞轩的粗粝实木梁柱上，远山晨曦与原木纹理交相辉映，诠释大嘴鸟地板对纯净生态与建筑美学的极致追求。',
      location: 'Tropical Rainforest Villa Sanctuary',
    },
    {
      id: 'perched',
      title: '栖居原木 · 百年橡木之巅',
      subtitle: '南美热带雨林栖息地实拍',
      image: toucanRainforestPerched,
      aspect: 'portrait',
      tag: '原木生息',
      desc: '巨嘴鸟傲然立于苍劲古木之上，湿润雾气浸润着天然年轮与粗犷树皮。大嘴鸟地板提取天然原木最纯粹的肌理韵味，将雨林生机凝练为脚下温润触感。',
      location: 'South American Rainforest Canopy',
    },
    {
      id: 'canopy_pair',
      title: '林冠双栖 · 晨曦微光与硬木枝桠',
      subtitle: '高空原始森林生态纪实',
      image: toucanCanopyPair,
      aspect: 'landscape',
      tag: '温情相伴',
      desc: '晨曦穿透茂密林冠，两只大嘴鸟在珍稀热带硬木枝干上温情依偎。象征大嘴鸟地板守护千家万户的健康、舒适与岁月长伴。',
      location: 'Tropical Hardwood Forest Reserves',
    },
    {
      id: 'flight',
      title: '振翼凌空 · 原生舒展气韵',
      subtitle: '自由飞翔动态瞬间',
      image: toucanFlyingPhoto,
      aspect: 'landscape',
      tag: '自由呼吸',
      desc: '黑羽与明黄喙部划破长空，展翼自如。大嘴鸟地板坚持“健康零醛”制造，让每一次归家漫步，如同林中深呼吸般自由纯净。',
      location: 'Aerial Canopy Flight Path',
    },
    {
      id: 'portrait',
      title: '图腾之眸 · 大化自然 诚意制木',
      subtitle: '官方品牌自然意象海报',
      image: toucanBirdPortrait,
      aspect: 'portrait',
      tag: '品牌图腾',
      desc: '官方品牌海报摄影原貌：接纳自然给予的造化之美，并视为永恒造物。以自然为师，让美好回归生活。每一块地板都是大自然的诚意馈赠。',
      location: 'Brand Original Heritage Archive',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#e8702a] selection:text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Top return bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs sm:text-sm text-white/70 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#e8702a]" />
            <span>返回实木光圈探秘</span>
          </button>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span>大嘴鸟品牌专页</span>
            <span>·</span>
            <span className="text-[#e8702a]">始于1998</span>
          </div>
        </div>

        {/* Hero Banner with Official Logo */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a1816] via-[#141414] to-[#0c0c0c] border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Header - Official Logo exclusively */}
            <div className="md:col-span-7 space-y-5 text-left">
              <div>
                <img
                  src="https://toucan.top/wp-content/uploads/2023/07/logo.png"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                  alt="toucan 大嘴鳥地板"
                  className="h-10 sm:h-12 w-auto object-contain brightness-125 drop-shadow-lg"
                />
              </div>

              <div className="space-y-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                  Hello,
                </h1>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90">
                  this is a toucan floor
                </p>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full bg-[#e8702a]/15 border border-[#e8702a]/30 text-[#e8702a] text-xs font-semibold tracking-widest uppercase">
                ORIGINATED FROM NATURE · 大化自然 诚意制木
              </div>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-xl">
                接纳自然给予的造化之美，并视为永恒造物。以自然为师，让美好回归生活。从南美热带雨林到北美广袤森林，以德国精工智造赋能每一寸原木温润肌理。
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onNavigateToProducts}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-[#e8702a]/30 flex items-center gap-2 cursor-pointer"
                >
                  <span>浏览五大经典系列</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onNavigateToContact}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full border border-white/15 transition-all cursor-pointer"
                >
                  索取样品咨询（客服回访）
                </button>
              </div>
            </div>

            {/* Right: Circular Toucan Bird Portrait */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#e8702a] to-amber-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                  <img
                    src={toucanBirdAvatar}
                    alt="大嘴鸟"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#e8702a]/50 text-[11px] text-[#e8702a] font-medium shadow-lg">
                  大嘴鸟自然图腾 · 热带雨林之灵
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Toucan & Raw Timber Nature Gallery (大嘴鸟生态与原木灵感画廊) */}
        <div className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Camera className="w-4 h-4 text-[#e8702a]" />
                <span className="text-xs uppercase tracking-widest text-[#e8702a] font-bold">
                  TOUCAN & TIMBER GALLERY
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                大嘴鸟雨林生息与原木画廊
              </h2>
            </div>
            <p className="text-xs text-white/50 max-w-md">
              从南美热带雨林栖息地到德国高精度地板流水线，真实记录大嘴鸟与珍稀原木的生态共鸣。
            </p>
          </div>

          {/* 4 Photo Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toucanPhotoGallery.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(index)}
                className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-[#e8702a]/60 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xl"
              >
                {/* Photo container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#e8702a] text-white shadow-md">
                      {photo.tag}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/80 border border-white/15">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Zoom Icon indicator */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/70 group-hover:text-white group-hover:bg-[#e8702a] transition-all">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Location label */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/70">
                    <span className="flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-[#e8702a]" />
                      <span>{photo.location}</span>
                    </span>
                  </div>
                </div>

                {/* Text details */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#e8702a] transition-colors">
                      {photo.title}
                    </h3>
                    <span className="text-xs text-white/40">{photo.subtitle}</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Full Photo Zoom */}
        {activePhotoIndex !== null && (
          <div
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setActivePhotoIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#141414] rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-4 sm:p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e8702a]" />
                  <span className="text-sm font-bold text-white">
                    {toucanPhotoGallery[activePhotoIndex].title}
                  </span>
                  <span className="text-xs text-white/50">
                    · {toucanPhotoGallery[activePhotoIndex].location}
                  </span>
                </div>
                <button
                  onClick={() => setActivePhotoIndex(null)}
                  className="text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  关闭 (ESC)
                </button>
              </div>

              <div className="relative max-h-[65vh] flex justify-center items-center overflow-hidden rounded-2xl bg-black">
                <img
                  src={toucanPhotoGallery[activePhotoIndex].image}
                  alt={toucanPhotoGallery[activePhotoIndex].title}
                  className="max-h-[60vh] w-auto object-contain rounded-xl"
                />
              </div>

              <div className="p-3 bg-white/[0.03] rounded-2xl border border-white/5 text-left space-y-1">
                <span className="text-xs text-[#e8702a] font-semibold">
                  {toucanPhotoGallery[activePhotoIndex].tag} · 自然美学解读
                </span>
                <p className="text-xs text-white/80 leading-relaxed">
                  {toucanPhotoGallery[activePhotoIndex].desc}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section: BRAND Story - Full Official Text from Poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Left Poster Portrait */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black">
              <img
                src={toucanBirdPortrait}
                alt="大化自然 诚意制木"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 text-white">
                <span className="text-xs uppercase tracking-widest text-[#e8702a] font-bold">
                  大化自然 · 诚意制木
                </span>
                <p className="text-xs text-white/80 mt-1">
                  南美雨林大嘴鸟栖息地实采 · 自然灵感与原木美学共鸣
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-xs text-white/50 block">智能制造总览</span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-white/40 block">创立时间</span>
                  <span className="text-white font-bold text-sm">1998年 (26年匠心)</span>
                </div>
                <div>
                  <span className="text-white/40 block">研发智造基地</span>
                  <span className="text-white font-bold text-sm">近 100,000 ㎡</span>
                </div>
                <div>
                  <span className="text-white/40 block">核心装备</span>
                  <span className="text-white font-bold text-sm">德国先进精密流水线</span>
                </div>
                <div>
                  <span className="text-white/40 block">全球出口网络</span>
                  <span className="text-white font-bold text-sm">100+ 国家与地区</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Brand Story Detailed Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#e8702a]" />
                <span className="text-xs uppercase tracking-widest text-[#e8702a] font-bold">
                  BRAND story
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                大嘴鸟品牌故事
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              <p className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                1998年，怀揣着对木质生活的热爱与追求，大嘴鸟地板在中国这片沃土上悄然生根。那时的我们，充满激情与梦想，心里早已埋下了对品质与匠心的执着信念。从最初的工作室到如今占地近十万平方米的现代化生产研发基地，大嘴鸟地板始终秉承着工匠的初心，以全球化的视野和精益求精的工艺，为全球消费者打造健康、舒适的木质生活空间。
              </p>

              <p className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                我们深知，优质的地板源于优质的原材料。为此，大嘴鸟的足迹遍布全球，从南美热带雨林的郁郁葱葱，到北美广袤森林的苍翠挺拔，从欧洲百年橡木的沉稳厚重，到东南亚珍稀树种的独特纹理，每一块大嘴鸟地板都凝聚着大自然的情意与匠人的心血。我们相信，木材不仅是地板的原料，更是自然与生活的纽带，承载着时光的痕迹与温度。
              </p>

              <p className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                为了将优质原材料转化为高品质地板，大嘴鸟不断引进世界领先的生产技术与设备。德国先进生产线的引入，确保了大嘴鸟地板在精度、稳定性和环保性能方面都达到国际领先水平。我们始终坚持“健康零醛”的生产理念，采用环保胶粘剂和先进生产工艺，确保每一块地板都安全无害，为消费者打造健康宜居的家居环境。大嘴鸟地板，不仅是对品质的承诺，更是对健康生活的守护。
              </p>
            </div>
          </div>
        </div>

        {/* Section: 泰然自若 艺美平衡 BALANCE BETWEEN LIFE AND ART */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#161616] via-[#111] to-[#0a0a0a] border border-white/10 text-left space-y-6">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-widest text-[#e8702a] font-semibold">
              BALANCE BETWEEN LIFE AND ART
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              泰然自若 · 艺美平衡
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-white/80 leading-relaxed font-light">
            <div className="space-y-3">
              <p className="text-base text-white font-medium leading-relaxed">
                我们始终坚定信仰：将最前沿的科技与潮流美学应用于地板生产，让视觉的愉悦与体感的舒适达到完美的平衡点。
              </p>
              <p>
                经过二十多年的发展，大嘴鸟地板已发展成集研发、生产、销售、服务于一体的综合性企业。全国10大中心仓的建立，构建起覆盖全球100多个国家和地区的销售网络，让大嘴鸟地板走进千家万户，为无数家庭带来舒适的木质生活体验。
              </p>
            </div>
            <div className="space-y-3">
              <p className="bg-black/40 p-4 rounded-2xl border border-white/5 italic text-white/90">
                “我们不仅铺设地板，更铺设一种生活方式——一种与自然共生、与匠心共鸣的生活方式。”
              </p>
              <p>
                二十余载，时光缱绻，匠心如一。大嘴鸟地板以木为媒，以匠心为魂，将自然的馈赠与匠人的智慧融入每一块地板，让家成为心灵的栖息之地。
              </p>
            </div>
          </div>
        </div>

        {/* Section: 20+ Year Craftsmanship Timber Gallery */}
        <div className="rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left">
              <div>
                <span className="text-4xl sm:text-5xl font-black text-white font-mono block">
                  20<span className="text-[#e8702a]">+</span>year
                </span>
                <span className="text-base sm:text-lg font-bold text-white/90 block mt-1">
                  专注地面装饰领域
                </span>
                <p className="text-xs text-white/70 mt-3 leading-relaxed">
                  大嘴鸟地板以匠心守护自然本色，每一道微拉丝、手刮仿古与开槽榫卯，皆凝聚专业技师数十年的经验沉淀。
                </p>
              </div>

              <div className="pt-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>国家级ENF环保检测标准</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <Factory className="w-4 h-4 text-[#e8702a]" />
                  <span>德国豪迈数控全自动流水线</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <TreePine className="w-4 h-4 text-emerald-400" />
                  <span>FSC 绿色森林可持续认证</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 relative min-h-[280px]">
              <img
                src={toucanCraftHistory}
                alt="20+ Year Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <img
              src="https://toucan.top/wp-content/uploads/2023/07/logo.png"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
              alt="toucan 大嘴鳥地板"
              className="h-8 w-auto object-contain brightness-110 shrink-0 hidden sm:block"
            />
            <div>
              <span className="text-sm font-bold text-white block">
                大嘴鸟地板 · 接纳自然之美 让美好回归生活
              </span>
              <span className="text-xs text-white/50">
                全国服务热线：{TOUCAN_CONTACT.phoneDisplay} · 邮箱：{TOUCAN_CONTACT.email}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              返回光圈探秘
            </button>
            <button
              onClick={onNavigateToContact}
              className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-md cursor-pointer"
            >
              索取样品（客服回访）
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
