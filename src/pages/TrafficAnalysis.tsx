import { AlertTriangle, DoorOpen, Timer, UsersRound } from "lucide-react";
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
import DataTable, { DataColumn } from "../components/DataTable";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import {
  collegeDistribution,
  entranceFlow,
  floorHeat,
  hourlyTraffic,
  trafficAnomalies,
  trafficStats,
} from "../data/mock";

const tooltipStyle = {
  background: "rgba(15, 23, 42, 0.94)",
  border: "1px solid rgba(148, 163, 184, 0.22)",
  color: "#e2e8f0",
};
const colors = ["#38bdf8", "#4ade80", "#fbbf24", "#a78bfa", "#fb7185", "#94a3b8", "#2dd4bf"];

const entranceColumns: DataColumn[] = [
  { key: "name", header: "出入口" },
  { key: "入馆", header: "入馆" },
  { key: "出馆", header: "出馆" },
  { key: "latency", header: "同步延迟" },
  {
    key: "status",
    header: "状态",
    render: (row) => <StatusBadge label={String(row.latency).startsWith("3") ? "观察" : "正常"} />,
  },
];

export default function TrafficAnalysis() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {trafficStats.map((item, index) => (
          <StatCard
            key={item.label}
            title={item.label}
            value={item.value}
            change={item.change}
            icon={[DoorOpen, UsersRound, UsersRound, Timer][index]}
            tone={["aqua", "mint", "amber", "purple"][index]}
          />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.35fr_.65fr]">
        <ChartCard title="按小时流量折线图" subtitle="入口、出口与馆内人数动态">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyTraffic}>
                <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
                <XAxis dataKey="hour" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="入馆" stroke="#38bdf8" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="出馆" stroke="#fbbf24" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="馆内" stroke="#4ade80" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="AI 预测明日流量" subtitle="结合课程表、天气和历史入馆节律">
          <div className="space-y-3">
            {[
              { label: "上午平稳", value: 54, tone: "bg-emerald-300" },
              { label: "下午上升", value: 72, tone: "bg-cyan-300" },
              { label: "晚间高峰", value: 92, tone: "bg-rose-300" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-white">{item.label}</span>
                  <span className="metric-number text-sm text-slate-400">{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className={`${item.tone} h-full rounded-full`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <ChartCard title="出入口流量统计" subtitle="闸机数据同步状态">
          <DataTable columns={entranceColumns} rows={entranceFlow} compact />
        </ChartCard>

        <ChartCard title="按学院人群分布图" subtitle="脱敏聚合，不展示个人信息">
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

        <ChartCard title="按楼层停留热度图" subtitle="热度值与平均停留时长">
          <div className="space-y-3">
            {floorHeat.map((floor) => (
              <div key={floor.floor} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-white">{floor.floor}</span>
                  <span className="text-slate-500">{floor.stay}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-amber-300 to-rose-300"
                    style={{ width: `${floor.heat}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[.75fr_1.25fr]">
        <ChartCard title="入口流量柱状对比" subtitle="入馆与出馆通道压力">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={entranceFlow}>
                <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="入馆" fill="#38bdf8" radius={[6, 6, 0, 0]} />
                <Bar dataKey="出馆" fill="#4ade80" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="异常检测" subtitle="实时人流、楼层停留与设备同步异常">
          <div className="grid gap-3 md:grid-cols-3">
            {trafficAnomalies.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center justify-between gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-200" />
                  <StatusBadge label={item.status === "danger" ? "预警" : item.status === "warning" ? "观察" : "运行中"} />
                </div>
                <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>
    </div>
  );
}
