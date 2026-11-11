import React, { useState } from 'react';
import { ArrowLeft, Layers, ShieldCheck, Check, ArrowRight, Sliders, Sparkles, Package } from 'lucide-react';
import { TOUCAN_PRODUCTS, TOUCAN_CONTACT } from '../data/toucanData';
import { ProductItem } from '../types';

interface ProductsPageProps {
  onBackToHome: () => void;
  onRequestSample: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onBackToHome,
  onRequestSample,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = ['全部', '纯实木地板', '实木多层地板', '艺术定制拼花', '石塑晶盾地板', '强化复合地板'];

  const filteredProducts =
    activeCategory === '全部'
      ? TOUCAN_PRODUCTS
      : TOUCAN_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#e8702a] selection:text-white">
      <div className="max-w-6xl mx-auto space-y-12">
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
            <span>大嘴鸟产品中心</span>
            <span>·</span>
            <span className="text-[#e8702a]">全线ENF级零醛健康标准</span>
          </div>
        </div>

        {/* Page Hero */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8702a]/15 border border-[#e8702a]/30 text-[#e8702a] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>德国精密数控产线 · 全球珍贵原生树种</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            大嘴鸟地板 · 全系产品大厅
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
            从百年北美黑胡桃纯实木，到法式凡尔赛人字拼艺术花色，以及现代高耐磨防水SPC晶盾，为您的居所提供持久温润的美学基底。
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#e8702a] text-white shadow-lg shadow-[#e8702a]/20 font-semibold'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl bg-[#141414] border border-white/10 hover:border-[#e8702a]/50 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#e8702a]/10 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/80">
                    {product.category}
                  </span>
                  <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {product.ecoStandard.split('（')[0]}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#e8702a] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#e8702a] font-medium mt-1">
                    {product.highlight}
                  </p>
                </div>

                <p className="text-xs text-white/70 line-clamp-3 leading-relaxed">
                  {product.desc}
                </p>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs">
                  <div>
                    <span className="text-white/40 block text-[11px]">材种原料</span>
                    <span className="text-white/90 font-medium">{product.woodSpecies}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/5">
                    <div>
                      <span className="text-white/40 block text-[11px]">常规规格</span>
                      <span className="text-white/90 font-medium truncate block">{product.dimensions}</span>
                    </div>
                    <div>
                      <span className="text-white/40 block text-[11px]">锁扣工艺</span>
                      <span className="text-white/90 font-medium truncate block">{product.lockingSystem}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="text-xs text-white/70 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
                >
                  查看完整参数
                </button>
                <button
                  onClick={() => onRequestSample(product.name)}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>索取样品</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Spec Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
            <div className="relative w-full max-w-xl bg-[#161616] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 text-left">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-[#e8702a] font-semibold uppercase">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-white/80 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/5">
                {selectedProduct.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-white/40 block text-[11px]">材种选材</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.woodSpecies}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-white/40 block text-[11px]">产品规格</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.dimensions}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-white/40 block text-[11px]">环保认证</span>
                  <span className="text-emerald-400 font-medium mt-0.5 block">{selectedProduct.ecoStandard}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-white/40 block text-[11px]">表面工艺</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.finish}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-white/40 block text-[11px]">锁扣系统</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.lockingSystem}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-white/40 block text-[11px]">推荐场景</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.suitableRooms}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-xs text-white/60 hover:text-white"
                >
                  关闭返回
                </button>
                <button
                  onClick={() => {
                    const name = selectedProduct.name;
                    setSelectedProduct(null);
                    onRequestSample(name);
                  }}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-all shadow-md cursor-pointer"
                >
                  索取本品样品（顾问回访）
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-sm font-bold text-white block">
              支持全屋定制大板与设计师专属定制调色
            </span>
            <span className="text-xs text-white/50">
              大嘴鸟全国10大中心仓，现货极速直配，提供专业安装测量服务
            </span>
          </div>
          <button
            onClick={() => onRequestSample()}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-md cursor-pointer"
          >
            索取样品（留下联系方式客服回访）
          </button>
        </div>
      </div>
    </div>
  );
};
