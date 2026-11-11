import React, { useState } from 'react';
import { ArrowLeft, GraduationCap, Clock, BookOpen, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TOUCAN_ACADEMY, TOUCAN_CONTACT } from '../data/toucanData';

interface AcademyPageProps {
  onBackToHome: () => void;
  onRequestSample: () => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({
  onBackToHome,
  onRequestSample,
}) => {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  const fullArticles: Record<string, string[]> = {
    acad_1: [
      '地热地板在通暖气时，地面温度最高可达 28℃-32℃，木材内部水分会加速蒸发，传统实木极易发生缩缝或翘曲。',
      '大嘴鸟纯实木地热地板攻克这一难题的关键在于：第一，严选稳定性极佳的黑胡桃与欧洲高纬度白橡木；第二，长达90天的恒温恒湿二次养生烘干，将含水率精准控制在 8%±1%；第三，底部独创微膨胀减应力导热槽与德国免钉锁扣系统，释放内应力，实现地热长效平整。',
      '选购关键点：认准地热专用纯实木标识、导热系数测试报告，以及无胶锁扣拼接工艺。',
    ],
    acad_2: [
      '2021年10月新国标正式实施，将人造板甲醛释放量分级细化为 E1、E0 与顶级的 ENF 级。',
      'ENF 级标准要求甲醛释放量 ≤ 0.025 mg/m³，其严苛程度甚至优于国际主流的日本 F4星与美国 CARB NAF 认证。',
      '大嘴鸟地板全线采用大豆基无醛生物胶黏剂，在生产全流程中无任何甲醛添加剂，经国家建筑材料测试中心实测达到未检出（<0.010 mg/m³）级，真正实现铺装即刻入住，呵护母婴敏感呼吸健康。',
    ],
    acad_3: [
      '法式人字拼（Herringbone）呈 90 度交错，视觉如织锦麦穗，适合纵深感强的客餐厅与走廊；鱼骨拼（Chevron）需将每块板端头精裁 45 度或 60 度，视觉如飞翔羽翼，艺术张力更强。',
      '由于拼花对缝精度要求极高，施工地面平整度需达到 2 米靠尺误差 ≤ 2 毫米。拼花损耗通常在 8%-12%，略高于普通直拼（3%-5%）。',
      '大嘴鸟地板提供激光校准的左右 AB 槽公母榫，出厂前每组均经过数控试拼，确保拼缝紧密无隙。',
    ],
    acad_4: [
      '实木是有生命的天然材料，具备“呼吸”微调室内湿度的特性。室内相对湿度维持在 40% - 60% 之间最为适宜。',
      '日常清洁：切忌用湿淋淋的拖把大水擦拭。建议使用拧干至不滴水的微湿纤维拖布，或专业木地板静电除尘纸。',
      '季节养护：北方冬季采暖期建议开启室内加湿器；南方梅雨季节建议关闭门窗并开启空调除湿功能。每半年至一年可涂刷一次大嘴鸟天然植物木蜡滋润精油，恢复原木光泽。',
    ],
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#e8702a] selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
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
            <span>大嘴鸟学院 · 知识库</span>
            <span>·</span>
            <span className="text-[#e8702a]">科学选板与养护</span>
          </div>
        </div>

        {/* Hero header */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8702a]/15 border border-[#e8702a]/30 text-[#e8702a] text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>专家撰稿 · 新国标解读 · 避坑指南</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            大嘴鸟学院 · 木质生活百科
          </h1>
          <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
            深入浅出解析地热纯实木工艺、ENF级零醛科学依据与高定拼花施工规范，帮您选对相伴数十年的好地板。
          </p>
        </div>

        {/* Articles list */}
        <div className="space-y-6 text-left">
          {TOUCAN_ACADEMY.map((art) => {
            const isExpanded = activeArticle === art.id;
            const fullContent = fullArticles[art.id] || [];

            return (
              <div
                key={art.id}
                className="rounded-3xl bg-[#141414] border border-white/10 hover:border-[#e8702a]/50 p-6 sm:p-7 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[#e8702a]">
                    {art.category}
                  </span>
                  <span className="text-xs text-white/50 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>预计阅读时间：{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white hover:text-[#e8702a] transition-colors cursor-pointer" onClick={() => setActiveArticle(isExpanded ? null : art.id)}>
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  {art.summary}
                </p>

                {/* Expanded full reading */}
                {isExpanded && (
                  <div className="pt-4 mt-2 border-t border-white/10 space-y-3 bg-black/40 p-5 rounded-2xl border border-white/5 animate-in fade-in">
                    <span className="text-xs uppercase tracking-wider text-[#e8702a] font-bold block">
                      【深度研报全文】
                    </span>
                    {fullContent.map((para, i) => (
                      <p key={i} className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setActiveArticle(isExpanded ? null : art.id)}
                    className="text-xs text-[#e8702a] font-medium hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? '收起全文' : '阅读深度科普全文'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  <button
                    onClick={onRequestSample}
                    className="text-xs text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    索取样品实物对照
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact card */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h4 className="text-base font-bold text-white">
              有特殊户型或地暖地面改造疑难？
            </h4>
            <p className="text-xs text-white/60 mt-1">
              大嘴鸟资深工程师提供一对一工况评估与辅料搭配建议
            </p>
          </div>
          <button
            onClick={onRequestSample}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-md cursor-pointer shrink-0"
          >
            获取知识手册与索取样品
          </button>
        </div>
      </div>
    </div>
  );
};
