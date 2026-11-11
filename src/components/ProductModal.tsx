import React, { useState } from 'react';
import { X, ShieldCheck, Check, Sparkles, Layers, Sliders, ArrowRight } from 'lucide-react';
import { TOUCAN_PRODUCTS } from '../data/toucanData';
import { ProductItem } from '../types';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestSample: (productName?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  onRequestSample,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(TOUCAN_PRODUCTS[0]);
  const [filterCategory, setFilterCategory] = useState<string>('全部');

  if (!isOpen) return null;

  const categories = ['全部', '纯实木地板', '实木多层地板', '艺术定制拼花', '石塑晶盾地板', '强化复合地板'];

  const filtered = filterCategory === '全部'
    ? TOUCAN_PRODUCTS
    : TOUCAN_PRODUCTS.filter((p) => p.category === filterCategory);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#141414] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#e8702a]/20 text-[#e8702a] border border-[#e8702a]/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white tracking-tight">
                  大嘴鸟产品中心
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e8702a]/20 text-[#e8702a] font-medium border border-[#e8702a]/30">
                  ENF级健康环保
                </span>
              </div>
              <p className="text-xs text-white/60 mt-0.5">
                引进德国先进智能生产线 · 满足全球100多个国家与地区的居住美学
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="px-5 sm:px-6 py-3 border-b border-white/10 bg-black/30 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                filterCategory === cat
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left list */}
            <div className="lg:col-span-5 space-y-2.5">
              <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">
                产品系列列表 ({filtered.length})
              </p>
              {filtered.map((item) => {
                const isSelected = selectedProduct.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-white/10 border-[#e8702a] shadow-lg shadow-[#e8702a]/10'
                        : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">
                        {item.name}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-white/70">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#e8702a] mt-1 font-medium">
                      {item.highlight}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right details */}
            <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-[#e8702a] font-semibold tracking-wider uppercase">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onRequestSample(selectedProduct.name);
                  }}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>索取样品</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs text-white/80 leading-relaxed bg-black/30 p-3.5 rounded-xl border border-white/5">
                {selectedProduct.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[11px]">材种来源</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.woodSpecies}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[11px]">常规规格</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.dimensions}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[11px]">环保认证</span>
                  <span className="text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {selectedProduct.ecoStandard}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[11px]">表面涂装工艺</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.finish}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[11px]">锁扣连接方式</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.lockingSystem}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[11px]">适用空间场景</span>
                  <span className="text-white font-medium mt-0.5 block">{selectedProduct.suitableRooms}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-[11px] text-white/50 border-t border-white/10">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>支持全国专车直配，支持私人大板与异形拼花定制</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <p className="text-xs text-white/50">
            大嘴鸟地板全国统一咨询热线：13912309890
          </p>
          <button
            onClick={() => {
              onClose();
              onRequestSample(selectedProduct.name);
            }}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-md"
          >
            索取本品样板（工作人员电话确认）
          </button>
        </div>
      </div>
    </div>
  );
};
