import React from 'react';
import { X, Award, Factory, Globe2, Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TOUCAN_CONTACT } from '../data/toucanData';
import toucanLogo from '../assets/images/toucan_logo.png';

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const BrandModal: React.FC<BrandModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const milestones = [
    {
      year: '1998',
      title: '匠心启程 · 品牌创立',
      desc: '大嘴鸟地板正式创立，确立“以自然为师，让美好回归生活”的品牌初心，深耕优质原木采集与加工。',
    },
    {
      year: '2008',
      title: '德系引进 · 智造飞跃',
      desc: '斥资引进全套德国Homag精密智能地板生产流水线，建成年产千万平米级常州横林工业园智造基地。',
    },
    {
      year: '2016',
      title: '全球化拓展 · 远销百国',
      desc: '通过欧盟CE认证与国际FSC森林可持续认证，产品稳步出口至全球100多个国家与地区。',
    },
    {
      year: '2024',
      title: '全线ENF · 零醛新生',
      desc: '全面推行ENF级生物大豆胶零醛添加工艺与地热微膨胀锁扣技术，引领人居健康木质生活新风尚。',
    },
  ];

  const highlights = [
    {
      icon: <Factory className="w-5 h-5 text-[#e8702a]" />,
      title: '近10万㎡ 智造基地',
      desc: '位于江苏常州，具备全自动恒温平衡养生房与德国豪迈高精度数控开槽系统。',
    },
    {
      icon: <Award className="w-5 h-5 text-[#e8702a]" />,
      title: '德国精密智能产线',
      desc: '榫卯精度达0.05毫米，微倒角平整度严苛把控，拼缝咬合严丝合缝。',
    },
    {
      icon: <Globe2 className="w-5 h-5 text-[#e8702a]" />,
      title: '全球出口100+国家',
      desc: '欧美主流市场长期战略供应商，以国际严苛标准检验每块地板品质。',
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#e8702a]" />,
      title: '零醛健康 ENF级认证',
      desc: '无醛添加生物基热压工艺，即装即住，无任何刺鼻有害挥发物。',
    },
  ];

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#141414] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <img
              src={toucanLogo}
              alt="大嘴鸟地板"
              className="h-7 w-auto object-contain brightness-125"
            />
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                大嘴鸟品牌故事
              </h2>
              <p className="text-xs text-[#e8702a]">
                接纳自然给予的造化之美，并视为永恒造物 · 始于1998
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
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-left">
          {/* Slogan Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#e8702a]/15 via-white/[0.03] to-transparent border border-[#e8702a]/20">
            <p className="text-base sm:text-lg font-playfair italic text-white leading-relaxed">
              “接纳自然给予的造化之美，并视为永恒造物，以自然为师，让美好回归生活。”
            </p>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              1998年成立以来，大嘴鸟地板秉承工匠的初心与全球原材料供应链，在世界范围内甄选优质原木，结合行业领先的技术工艺，致力于为同样有着木质生活梦想的人们提供舒适健康的居住环境。
            </p>
          </div>

          {/* Highlights 4-grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-black/40 border border-white/10 shrink-0">
                  {h.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{h.title}</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-3">
              发展历程与品牌积淀
            </h3>
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <span className="text-sm font-bold text-[#e8702a] font-mono shrink-0 w-12 pt-0.5">
                    {m.year}
                  </span>
                  <div>
                    <h5 className="text-xs font-semibold text-white">{m.title}</h5>
                    <p className="text-xs text-white/60 mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <p className="text-xs text-white/50">
            常州智造基地 · 福州华南中心 · 覆盖全球
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all"
          >
            联系我们 & 加盟咨询
          </button>
        </div>
      </div>
    </div>
  );
};
