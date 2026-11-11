import React from 'react';
import { ArrowLeft, Building2, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { TOUCAN_CASES, TOUCAN_CONTACT } from '../data/toucanData';

interface CasesPageProps {
  onBackToHome: () => void;
  onRequestSample: () => void;
}

export const CasesPage: React.FC<CasesPageProps> = ({
  onBackToHome,
  onRequestSample,
}) => {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#e8702a] selection:text-white">
      <div className="max-w-5xl mx-auto space-y-12">
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
            <span>大嘴鸟工程案例</span>
            <span>·</span>
            <span className="text-[#e8702a]">服务超千座标杆空间</span>
          </div>
        </div>

        {/* Hero header */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8702a]/15 border border-[#e8702a]/30 text-[#e8702a] text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>高端私宅合院 · 顶级星级会所 · 天际平层豪宅</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            经典工程案例品鉴
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
            严苛践行德国铺装标准与地暖环境伸缩缝工艺，将自然的原木肌理与当代建筑艺术完美融合。
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {TOUCAN_CASES.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#141414] border border-white/10 hover:border-[#e8702a]/50 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#e8702a]/10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#e8702a]/20 text-[#e8702a] border border-[#e8702a]/30">
                    {item.category}
                  </span>
                  <span className="text-xs text-white/40 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year} 年竣工
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-white/60 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#e8702a]" />
                    <span>{item.location}</span>
                    <span>·</span>
                    <span>铺装面积 {item.area}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1.5 text-xs">
                  <span className="text-white/40 block text-[11px]">指定应用地板方案：</span>
                  <p className="text-[#e8702a] font-semibold text-sm">
                    {item.flooringUsed}
                  </p>
                </div>

                <p className="text-xs text-white/70 leading-relaxed border-t border-white/10 pt-3">
                  {item.highlight}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-white/40">已通过全生命周期质量巡检</span>
                <button
                  onClick={onRequestSample}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>索取同款样品</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Call to Action */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#171514] via-[#121212] to-black border border-white/10 text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">
              设计师与工程项目专属合作通道
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed">
              大嘴鸟地板设立工程直供服务专班，提供 CAD/BIM 纹理贴图库、定制木纹打样、现场地暖技术交底与驻场专业安装支持。
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestSample}
              className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer"
            >
              获取工程招投标方案
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
