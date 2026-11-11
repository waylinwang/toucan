import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Check, Send, Sparkles, ShieldCheck, Package } from 'lucide-react';
import { TOUCAN_CONTACT, TOUCAN_PRODUCTS } from '../data/toucanData';

interface ContactSampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const ContactSampleModal: React.FC<ContactSampleModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [activeTab, setActiveTab] = useState<'sample' | 'contact'>('sample');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [selectedWoodTypes, setSelectedWoodTypes] = useState<string[]>(
    initialProduct ? [initialProduct] : ['北美黑胡桃纯实木', '法式高定人字拼']
  );
  const [roomArea, setRoomArea] = useState('80-120㎡');

  if (!isOpen) return null;

  const sampleOptions = [
    '北美黑胡桃纯实木',
    '欧洲原色白橡纯实木',
    '法式高定人字拼 (暖金橡木)',
    '法式高定鱼骨拼 (烟熏橡木)',
    '大师实木多层 (1800mm大板)',
    '零醛防水石塑SPC晶盾',
    '德系精工强化复合木地板',
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
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#151515] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#e8702a]/20 text-[#e8702a] border border-[#e8702a]/30">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                索取真实地板样板 & 咨询
              </h2>
              <p className="text-xs text-white/60">
                大嘴鸟地板官方直发 · 样品非免费 · 提交后后端专员将致电核对样品与运费
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

        {/* Tabs */}
        <div className="flex border-b border-white/10 bg-black/30">
          <button
            onClick={() => {
              setActiveTab('sample');
              setSubmitted(false);
            }}
            className={`flex-1 py-3 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'sample'
                ? 'text-[#e8702a] border-b-2 border-[#e8702a] bg-white/[0.03]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            索取样品（任选3款真实原木板 · 后端人员回访）
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-3 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'contact'
                ? 'text-[#e8702a] border-b-2 border-[#e8702a] bg-white/[0.03]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            联系我们 & 基地地址
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-left">
          {activeTab === 'sample' ? (
            submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  样板申请已成功提交！
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  大嘴鸟客服专员将在2小时内与您致电确认收件地址与纹理批次，预计 1-2 个工作日顺丰速递送达您的手中。
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-xs text-white/70 text-left space-y-1">
                  <p><span className="text-white/40">已选样板：</span>{selectedWoodTypes.join('、')}</p>
                  <p><span className="text-white/40">收件电话：</span>{phone}</p>
                  <p><span className="text-white/40">配送方式：</span>顺丰速运（全程包邮保价）</p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-3 bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-medium px-8 py-3 rounded-full transition-all shadow-lg"
                >
                  完成并返回
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-white/90 block mb-2">
                    1. 选择心仪的样板款式（最多可选 3 款，已选 {selectedWoodTypes.length} 款）：
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sampleOptions.map((opt) => {
                      const isChecked = selectedWoodTypes.includes(opt);
                      return (
                        <div
                          key={opt}
                          onClick={() => toggleSample(opt)}
                          className={`p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between ${
                            isChecked
                              ? 'bg-[#e8702a]/20 border-[#e8702a] text-white'
                              : 'bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.05]'
                          }`}
                        >
                          <span>{opt}</span>
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              isChecked
                                ? 'bg-[#e8702a] text-white'
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
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
                      className="w-full bg-white/5 border border-white/15 focus:border-[#e8702a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none"
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
                      placeholder="用于接收顺丰物流信息"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#e8702a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-white/70 block mb-1 font-medium">
                      所在城市 *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="省份 / 城市"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#e8702a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs text-white/70 block mb-1 font-medium">
                      样板快递详细地址 *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="区 / 街道 / 门牌号"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#e8702a] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>正品承诺：附带国家级质检报告与ENF环保检测卡</span>
                  </span>
                  <span className="text-white/40">顺丰包邮</span>
                </div>

                <div className="text-[11px] text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-xl">
                  温馨提示：地板样板为整块精切实木或拼花实板（非免费样品）。提交联系方式后，后端客服人员将在2小时内致电确认样品工艺费及快递安排。
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer"
                >
                  提交索样申请（后端人员电话确认）
                </button>
              </form>
            )
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#e8702a]/20 text-[#e8702a]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block">全国咨询 / 样板直通热线</span>
                    <a
                      href={`tel:${TOUCAN_CONTACT.phone}`}
                      className="text-lg font-bold text-white hover:text-[#e8702a] transition-colors"
                    >
                      {TOUCAN_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-[#e8702a]/20 text-[#e8702a]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block">官方招商与工程合作邮箱</span>
                    <a
                      href={`mailto:${TOUCAN_CONTACT.email}`}
                      className="text-sm font-semibold text-white hover:text-[#e8702a] transition-colors"
                    >
                      {TOUCAN_CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e8702a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">生产研发与智能制造基地</h4>
                    <p className="text-xs text-white/70 mt-0.5">{TOUCAN_CONTACT.factoryAddress}</p>
                    <p className="text-[11px] text-white/40 mt-1">
                      占地近十万平方米 · 引进德国先进生产流水线 · 年产能超千万平方米
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <MapPin className="w-5 h-5 text-[#e8702a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">华南运营中心</h4>
                    <p className="text-xs text-white/70 mt-0.5">{TOUCAN_CONTACT.southOfficeAddress}</p>
                    <p className="text-[11px] text-white/40 mt-1">
                      样板实景展示馆 · 大客户与设计师驻点服务
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-white/50 block">大嘴鸟官方网站</span>
                  <a
                    href="https://www.toucan.top"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e8702a] font-medium hover:underline"
                  >
                    https://www.toucan.top
                  </a>
                </div>
                <button
                  onClick={() => setActiveTab('sample')}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-medium transition-colors cursor-pointer"
                >
                  去索取样品
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs text-white/50">
          <span>大嘴鸟地板（TOUCAN FLOORING）· 始于1998</span>
          <span>服务热线：{TOUCAN_CONTACT.phone}</span>
        </div>
      </div>
    </div>
  );
};
