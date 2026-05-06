import { AlertTriangle, BookOpen, Building2, GraduationCap, Layers3, UsersRound } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartCard from "../components/ChartCard";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import {
  bookCategoryDistribution,
  borrow7Days,
  borrowRiskAlerts,
  borrowStats,
  collegeDistribution,
  gradeDistribution,
  majorDistribution,
  weeklyBorrowSummary,
} from "../data/mock";

const tooltipStyle = {
  background: "rgba(15, 23, 42, 0.94)",
  border: "1px solid rgba(148, 163, 184, 0.22)",
  color: "#e2e8f0",
};
const colors = ["#38bdf8", "#4ade80", "#fbbf24", "#a78bfa", "#fb7185", "#94a3b8", "#2dd4bf"];

export default function BorrowManagement() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {borrowStats.map((item, index) => (
          <StatCard
            key={item.label}
            title={item.label}
            value={item.value}
            change={item.change}
            icon={[BookOpen, BookOpen, Layers3, AlertTriangle][index]}
            tone={["aqua", "mint", "purple", "rose"][index]}
          />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
        <ChartCard title="借阅趋势图" subtitle="按日统计借阅、归还与续借申请">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={borrow7Days}>
                <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
                <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="借阅" stroke="#38bdf8" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="归还" stroke="#4ade80" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="续借" stroke="#fbbf24" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="风险提醒" subtitle="由借阅分析 Agent 和风险巡检 Agent 联合生成">
          <div className="space-y-3">
            {borrowRiskAlerts.map((alert) => (
              <div key={alert.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <AlertTriangle className="h-4 w-4 text-amber-200" />
                    {alert.title}
                  </p>
                  <StatusBadge label={alert.status === "danger" ? "预警" : alert.status === "warning" ? "观察" : "运行中"} />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">{alert.detail}</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-4">
        <ChartCard title="按学院" subtitle="脱敏统计" className="xl:col-span-1">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={collegeDistribution} dataKey="value" nameKey="name" innerRadius={44} outerRadius={86}>
                  {collegeDistribution.map((entry, index) => (
                    <Cell key={entry.name} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="按年级" subtitle="借阅用户画像" className="xl:col-span-1">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gradeDistribution}>
                <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="value" fill="#38bdf8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="按专业方向" subtitle="高频领域" className="xl:col-span-1">
          <div className="space-y-3">
            {majorDistribution.map((item) => (
              <div key={item.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <GraduationCap className="h-3.5 w-3.5 text-cyan-200" />
                    {item.name}
                  </span>
                  <span className="metric-number text-slate-500">{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-300" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="按图书类别" subtitle="借阅内容构成" className="xl:col-span-1">
          <div className="space-y-3">
            {bookCategoryDistribution.map((item) => (
              <div key={item.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Building2 className="h-3.5 w-3.5 text-emerald-200" />
                    {item.name}
                  </span>
                  <span className="metric-number text-slate-500">{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-emerald-300" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>

      <ChartCard title="本周借阅分析摘要" subtitle="AI 自动汇总，面向馆员与管理人员">
        <div className="grid gap-3 md:grid-cols-3">
          {weeklyBorrowSummary.map((item, index) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                {index + 1}
              </span>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}
