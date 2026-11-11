import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Check, ShieldCheck, Package, Clock, Sparkles } from 'lucide-react';
import { TOUCAN_CONTACT } from '../data/toucanData';

interface ContactPageProps {
  onBackToHome: () => void;
  initialProduct?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  initialProduct,
}) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [selectedWoodTypes, setSelectedWoodTypes] = useState<string[]>(
    initialProduct ? [initialProduct] : ['北美黑胡桃纯实木地热地板', '法式高定人字拼 (暖金橡木)']
  );

  const sampleOptions = [
    '北美黑胡桃纯实木地热地板',
    '欧洲原色白橡纯实木大板',
    '法式高定人字拼 (暖金橡木)',
    '法式高定鱼骨拼 (烟熏橡木)',
    '大师实木多层 (1800mm定制大板)',
    '零醛防水石塑SPC晶盾地板',
    '德系精工高耐磨强化木地板',
  ];

  const toggleSample = (opt: string) => {
    if (selectedWoodTypes.includes(opt)) {
      if (selectedWoodTypes.length > 1) {
        setSelectedWoodTypes(selectedWoodTypes.filter((x) => x !== opt));
      }
    } else {
      if (selectedWoodTypes.length < 3) {
        setSelectedWoodTypes([...selectedWoodTypes, opt]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      setSubmitted(true);
    }
  };

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
            <span>大嘴鸟联系我们</span>
            <span>·</span>
            <span className="text-[#e8702a]">专属顾问一对一服务</span>
          </div>
        </div>

        {/* Hero header */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8702a]/15 border border-[#e8702a]/30 text-[#e8702a] text-xs font-semibold">
            <Phone className="w-3.5 h-3.5" />
            <span>全国服务热线：{TOUCAN_CONTACT.phoneDisplay} · 快速响应</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            联系大嘴鸟 & 索取样品
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
            请选择意向款式并留下您的联系方式。样品为工艺定制件（样品非免费），大嘴鸟专属顾问将在提交后与您电话联系，确认样品规格、费用与配送详情。
          </p>
        </div>

        {/* Grid: Left Sample Form, Right Contact & Bases */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  样品索取意向已受理！
                </h3>
                <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  大嘴鸟客服专员将在2小时内与您电话联系，核对样品规格、确认工艺样品费用及收件地址，沟通确认后为您安排顺丰发货。
                </p>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 max-w-md mx-auto text-xs text-white/70 text-left space-y-1.5">
                  <p><span className="text-white/40">已选样品：</span>{selectedWoodTypes.join('、')}</p>
                  <p><span className="text-white/40">联系电话：</span>{phone}</p>
                  <p><span className="text-white/40">服务流程：</span>专属客服电话沟通费用与批次细节 → 确认安排发货</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-medium px-8 py-3 rounded-full transition-all cursor-pointer"
                >
                  继续登记其他款式
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-white/90">
                      1. 选择意向样品款式（最多可选 3 款，已选 {selectedWoodTypes.length} 款）：
                    </label>
                    <span className="text-[11px] text-[#e8702a] font-medium">
                      注：样品不免费，客服电话确认费用
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sampleOptions.map((opt) => {
                      const isChecked = selectedWoodTypes.includes(opt);
                      return (
                        <div
                          key={opt}
                          onClick={() => toggleSample(opt)}
                          className={`p-3 rounded-2xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between ${
                            isChecked
                              ? 'bg-[#e8702a]/20 border-[#e8702a] text-white'
                              : 'bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.05]'
                          }`}
                        >
                          <span className="truncate pr-2">{opt}</span>
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                              isChecked
                                ? 'bg-[#e8702a] text-white font-bold'
                                : 'border border-white/30'
                            }`}
                          >
                            {isChecked && '✓'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-xs text-white/70 block mb-1 font-medium">
                      联系人姓名 *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="如：张先生 / 李女士"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#e8702a] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/70 block mb-1 font-medium">
                      联系电话 / 微信 *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="后端人员将致电与您确认"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#e8702a] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-white/70 block mb-1 font-medium">
                      所在省市 *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="省份 / 城市"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#e8702a] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs text-white/70 block mb-1 font-medium">
                      意向收件详细地址 *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="区 / 街道 / 门牌号"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#e8702a] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-white/70">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>提示：提交后后端人员会联系沟通样品费用及规格细节</span>
                  </div>
                  <span className="text-[#e8702a] text-[11px]">客服回访</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer"
                >
                  提交索取样品意向（客服稍后致电联系）
                </button>
              </form>
            )}
          </div>

          {/* Right Contact details & Bases */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#141414] border border-white/10 space-y-5">
              <span className="text-xs font-bold text-[#e8702a] uppercase tracking-wider block">
                官方联络通道
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-[#e8702a]/20 text-[#e8702a] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block">全国咨询热线 / 样品对接</span>
                    <a
                      href={`tel:${TOUCAN_CONTACT.phone}`}
                      className="text-lg font-bold text-white hover:text-[#e8702a] transition-colors"
                    >
                      {TOUCAN_CONTACT.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">专属顾问一对一解答样品与报价</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-white/10">
                  <div className="p-3 rounded-2xl bg-[#e8702a]/20 text-[#e8702a] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block">招商加盟与工程合作邮箱</span>
                    <a
                      href={`mailto:${TOUCAN_CONTACT.email}`}
                      className="text-sm font-semibold text-white hover:text-[#e8702a] transition-colors"
                    >
                      {TOUCAN_CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
              <span className="text-xs font-bold text-[#e8702a] uppercase tracking-wider block">
                研发与运营基地
              </span>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#e8702a] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <h5 className="font-bold text-white">生产研发智造基地</h5>
                    <p className="text-white/70 mt-0.5">{TOUCAN_CONTACT.factoryAddress}</p>
                    <span className="text-[11px] text-white/40 block mt-0.5">引进德国先进生产线 · 占地近十万平方米</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <MapPin className="w-4 h-4 text-[#e8702a] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <h5 className="font-bold text-white">华南运营中心</h5>
                    <p className="text-white/70 mt-0.5">{TOUCAN_CONTACT.southOfficeAddress}</p>
                    <span className="text-[11px] text-white/40 block mt-0.5">实木全景展示馆 · 设计师对接专区</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-white/50 space-y-1">
              <p>官方网址：<a href={TOUCAN_CONTACT.website} target="_blank" rel="noreferrer" className="text-[#e8702a] hover:underline">{TOUCAN_CONTACT.website}</a></p>
              <p>大嘴鸟地板（TOUCAN FLOORING）· 始于1998年</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
