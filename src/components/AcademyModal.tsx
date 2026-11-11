import React from 'react';
import { X, GraduationCap, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { TOUCAN_ACADEMY } from '../data/toucanData';

interface AcademyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestSample: () => void;
}

export const AcademyModal: React.FC<AcademyModalProps> = ({
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
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                大嘴鸟学院 · 地板知识库
              </h2>
              <p className="text-xs text-white/60">
                选购指南 · 地热铺装标准 · 零醛科普 · 四季养护秘笈
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
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3.5 text-left">
          {TOUCAN_ACADEMY.map((art) => (
            <div
              key={art.id}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#e8702a]/40 hover:bg-white/[0.05] transition-all"
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#e8702a] font-medium">
                  {art.category}
                </span>
                <span className="text-white/40 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {art.readTime}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                {art.title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {art.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <p className="text-xs text-white/50">
            不懂如何搭配空间？资深色彩设计专家免费一对一方案
          </p>
          <button
            onClick={() => {
              onClose();
              onRequestSample();
            }}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all"
          >
            索取样板实测
          </button>
        </div>
      </div>
    </div>
  );
};
