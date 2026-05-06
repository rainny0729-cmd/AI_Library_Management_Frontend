import {
  Activity,
  AlertTriangle,
  Armchair,
  BookOpen,
  BrainCircuit,
  Clock3,
  Database,
  DoorOpen,
  FileText,
  LibraryBig,
  ListChecks,
  UsersRound,
} from "lucide-react";
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
import LogStream from "../components/LogStream";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import {
  agentLogs,
  borrow7Days,
  dashboardStats,
  hotBooks,
  hotKeywords,
  managementSuggestions,
  peakPredictions,
  qaCategoryShare,
  seatFloorUsage,
  taskQueue,
  traffic7Days,
} from "../data/mock";

const statIcons = [
  DoorOpen,
  UsersRound,
  BookOpen,
  LibraryBig,
  Armchair,
  BrainCircuit,
  Database,
  AlertTriangle,
];

const pieColors = ["#38bdf8", "#4ade80", "#fbbf24", "#a78bfa", "#fb7185", "#94a3b8"];
const tooltipStyle = {
  background: "rgba(15, 23, 42, 0.94)",
  border: "1px solid rgba(148, 163, 184, 0.22)",
  color: "#e2e8f0",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <StatCard
            key={stat.label}
            title={stat.label}
            value={stat.value}
            change={stat.change}
            tone={stat.tone}
            icon={statIcons[index]}
          />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <ChartCard title="最近 7 天入馆流量" subtitle="按日聚合入口闸机与馆内人数，叠加 AI 问答强度">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={traffic7Days}>
                <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
                <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="入馆人数" stroke="#38bdf8" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="当前馆内" stroke="#4ade80" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="最近 7 天借阅趋势" subtitle="借阅、归还与续借申请趋势">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={borrow7Days}>
                <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
                <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="借阅" fill="#38bdf8" radius={[6, 6, 0, 0]} />
                <Bar dataKey="归还" fill="#4ade80" radius={[6, 6, 0, 0]} />
                <Bar dataKey="续借" fill="#fbbf24" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="各楼层座位占用率" subtitle="按楼层展示预约与实际使用压力">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={seatFloorUsage} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid stroke="rgba(148,163,184,.12)" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis dataKey="floor" type="category" width={110} stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="占用率" fill="#38bdf8" radius={[0, 6, 6, 0]} />
                <Bar dataKey="预约率" fill="#a78bfa" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="AI 问答类别占比" subtitle="自然语言服务请求的业务来源">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={qaCategoryShare} dataKey="value" nameKey="name" innerRadius={56} outerRadius={94} paddingAngle={4}>
                  {qaCategoryShare.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr_.9fr]">
        <ChartCard title="当前热门检索关键词" subtitle="检索热度与近 24 小时趋势">
          <div className="space-y-3">
            {hotKeywords.map((item) => (
              <div key={item.keyword} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3">
                <div>
                  <p className="text-sm font-medium text-white">{item.keyword}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.hits.toLocaleString("zh-CN")} 次检索</p>
                </div>
                <span className="rounded-full bg-cyan-300/10 px-2 py-1 text-xs text-cyan-200">{item.trend}</span>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="热门图书排行" subtitle="借阅量、等待人数与馆藏位置">
          <div className="space-y-3">
            {hotBooks.map((book, index) => (
              <div key={book.title} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">{book.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {book.category} · {book.location}
                  </p>
                </div>
                <span className="text-right text-xs text-slate-400">等待 {book.wait}</span>
              </div>
            ))}
          </div>
        </ChartCard>

        <LogStream logs={agentLogs} compact />
      </section>

      <section className="grid gap-4 xl:grid-cols-[.9fr_.9fr_1.2fr]">
        <ChartCard title="高峰时间段预测" subtitle="结合历史流量、课程节次和预约记录">
          <div className="space-y-3">
            {peakPredictions.map((item) => (
              <div key={`${item.time}-${item.area}`} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2 text-sm font-medium text-white">
                    <Clock3 className="h-4 w-4 text-cyan-200" />
                    {item.time}
                  </p>
                  <StatusBadge label={item.pressure === "高" ? "预警" : "观察"} />
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.area}</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-amber-300" style={{ width: `${item.confidence}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="系统任务队列" subtitle="后台任务进度与处理状态">
          <div className="space-y-3">
            {taskQueue.map((task) => (
              <div key={task.task} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white">{task.task}</p>
                    <p className="mt-1 text-xs text-slate-500">{task.owner}</p>
                  </div>
                  <StatusBadge label={task.status === "success" ? "完成" : task.status === "warning" ? "观察" : "运行中"} pulse={task.status === "running"} />
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-300" style={{ width: `${task.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="管理建议" subtitle="由管理报告 Agent 汇总的运营建议">
          <div className="space-y-3">
            {managementSuggestions.map((suggestion, index) => (
              <div key={suggestion} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="flex items-center gap-2 text-sm font-medium text-white">
                  {index % 2 === 0 ? <FileText className="h-4 w-4 text-cyan-200" /> : <ListChecks className="h-4 w-4 text-emerald-200" />}
                  建议 {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{suggestion}</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>
    </div>
  );
}
