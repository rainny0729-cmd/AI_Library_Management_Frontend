import { FileText, Gauge, PieChart as PieIcon, ShieldCheck, Zap } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartCard from "../components/ChartCard";
import StatCard from "../components/StatCard";
import { tokenDailyTrend, tokenSources, tokenStats } from "../data/mock";

const tooltipStyle = {
  background: "rgba(15, 23, 42, 0.94)",
  border: "1px solid rgba(148, 163, 184, 0.22)",
  color: "#e2e8f0",
};
const colors = ["#38bdf8", "#4ade80", "#fbbf24", "#a78bfa", "#fb7185", "#2dd4bf", "#94a3b8"];

export default function TokenUsage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {tokenStats.map((item, index) => (
          <StatCard
            key={item.label}
            title={item.label}
            value={item.value}
            subtitle="额度申请测算口径"
            icon={[Zap, Gauge, Gauge, FileText, PieIcon, ShieldCheck][index]}
            tone={["aqua", "mint", "amber", "purple", "cyan", "rose"][index]}
          />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[.85fr_1.15fr]">
        <ChartCard title="token 消耗来源" subtitle="按月度任务类型估算占比">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={tokenSources} dataKey="value" nameKey="name" innerRadius={58} outerRadius={108} paddingAngle={4}>
                  {tokenSources.map((entry, index) => (
                    <Cell key={entry.name} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="近 7 日 token 与请求趋势" subtitle="token 单位：百万，请求单位：千次">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tokenDailyTrend}>
                <defs>
                  <linearGradient id="tokenFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.42} />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
                <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="token" stroke="#38bdf8" fill="url(#tokenFill)" strokeWidth={3} />
                <Area type="monotone" dataKey="request" stroke="#4ade80" fill="rgba(74,222,128,.12)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <ChartCard title="任务类型柱状分布" subtitle="用于说明 token 不是单轮聊天消耗">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tokenSources} layout="vertical" margin={{ left: 70 }}>
                <CartesianGrid stroke="rgba(148,163,184,.12)" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" width={142} stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="value" fill="#38bdf8" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <section className="surface-light rounded-lg p-6">
          <p className="text-sm text-slate-500">额度申请说明卡片</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">为什么该系统需要较高 token 额度</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <p>系统不是单轮聊天工具，而是覆盖图书馆管理、学生学习、馆藏知识库和数据决策的综合平台。</p>
            <p>每一次学生自然语言提问都会触发意图识别、知识库检索、内容摘要、推荐排序、回答生成和审计检查。</p>
            <p>管理端需要定期生成借阅趋势、座位压力、入馆流量、采购建议和馆藏优化报告。</p>
            <p>系统面向约 3.5 万名学生，真实使用场景中高频、多轮、长上下文任务较多。</p>
            <p>预计每月 5 亿 token 用于保障知识库更新、问答服务、Agent 协作和管理分析。</p>
          </div>
        </section>
      </section>
    </div>
  );
}
