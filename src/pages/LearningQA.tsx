import { MessageSquareText, SearchCheck, ShieldCheck, Sparkles } from "lucide-react";
import {
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
import KnowledgeSearch from "../components/KnowledgeSearch";
import LogStream from "../components/LogStream";
import StatusBadge from "../components/StatusBadge";
import { agentLogs, qaCategoryShare, retrievalSteps } from "../data/mock";

const tooltipStyle = {
  background: "rgba(15, 23, 42, 0.94)",
  border: "1px solid rgba(148, 163, 184, 0.22)",
  color: "#e2e8f0",
};
const colors = ["#38bdf8", "#4ade80", "#fbbf24", "#a78bfa", "#fb7185", "#94a3b8"];
const qaMetricIcons = [MessageSquareText, SearchCheck, ShieldCheck];

export default function LearningQA() {
  return (
    <div className="space-y-6">
      <KnowledgeSearch />

      <section className="grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
        <section className="surface rounded-lg p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">学习问答服务</p>
              <h2 className="mt-1 text-xl font-semibold text-white">自然语言问答链路监控</h2>
            </div>
            <StatusBadge label="运行中" pulse />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              { label: "今日问答", value: "82,614", icon: MessageSquareText },
              { label: "知识库命中", value: "91.6%", icon: SearchCheck },
              { label: "审计通过率", value: "99.6%", icon: ShieldCheck },
            ].map((item, index) => {
              const Icon = qaMetricIcons[index];
              return (
                <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <Icon className="h-5 w-5 text-cyan-200" />
                  <p className="mt-3 text-sm text-slate-400">{item.label}</p>
                  <p className="metric-number mt-1 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
              <Sparkles className="h-4 w-4" />
              自动生成回答示例
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              “数据库系统概论”适合按概念、模型、SQL、事务与索引五个部分复习。建议先读教材目录与课后习题，
              再结合馆藏中的数据库习题集做专项练习。系统已检索到三楼 A 区可借复本 6 册，并关联课程资料 14 条。
            </p>
          </div>
        </section>

        <LogStream logs={agentLogs} />
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <ChartCard title="问答类别分布" subtitle="学生自然语言问题的业务类型">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={qaCategoryShare} dataKey="value" nameKey="name" innerRadius={56} outerRadius={96} paddingAngle={4}>
                  {qaCategoryShare.map((entry, index) => (
                    <Cell key={entry.name} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="链路耗时拆解" subtitle="问题理解、召回、重排、摘要、校验与生成">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={retrievalSteps.map((step) => ({ name: step.step, ms: Number(step.time.replace("ms", "").replace("s", "000")) || 860 }))}>
                <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="ms" fill="#38bdf8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </section>
    </div>
  );
}
