import React from 'react';
import { X, Building2, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { TOUCAN_CASES } from '../data/toucanData';

interface CasesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestSample: () => void;
}

export const CasesModal: React.FC<CasesModalProps> = ({
  isOpen,
  onClose,
  onRequestSample,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#141414] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#e8702a]/20 text-[#e8702a] border border-[#e8702a]/30">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                大嘴鸟精选工程案例
              </h2>
              <p className="text-xs text-white/60">
                服务超千个高阶私宅合院、星级酒店会所与地标建筑
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

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TOUCAN_CASES.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#e8702a]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#e8702a]/15 text-[#e8702a] font-medium border border-[#e8702a]/20">
                      {c.category}
                    </span>
                    <span className="text-white/40">{c.year}年竣工</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {c.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/60 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#e8702a]" />
                    <span>{c.location}</span>
                    <span className="mx-1">·</span>
                    <span>铺装面积 {c.area}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs text-white/80">
                    <span className="text-white/40 block text-[11px]">应用地板：</span>
                    <span className="text-[#e8702a] font-medium">{c.flooringUsed}</span>
                  </div>
                </div>

                <p className="text-xs text-white/60 mt-3 pt-2.5 border-t border-white/10 leading-relaxed">
                  {c.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <p className="text-xs text-white/50">
            支持设计师工程定制与工程专属招投标报价
          </p>
          <button
            onClick={() => {
              onClose();
              onRequestSample();
            }}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all"
          >
            获取工程报价方案
          </button>
        </div>
      </div>
    </div>
  );
};
