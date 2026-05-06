import { DatabaseZap, FileWarning, KeyRound, ScrollText, ShieldCheck } from "lucide-react";
import ChartCard from "../components/ChartCard";
import DataTable, { DataColumn } from "../components/DataTable";
import StatusBadge from "../components/StatusBadge";
import { apiLogs, auditLogs } from "../data/mock";

const auditColumns: DataColumn[] = [
  { key: "time", header: "时间" },
  {
    key: "type",
    header: "类型",
    render: (row) => <span className="font-medium text-white">{String(row.type)}</span>,
  },
  { key: "content", header: "记录内容" },
  { key: "source", header: "来源" },
  {
    key: "status",
    header: "状态",
    render: (row) => <StatusBadge label={String(row.status)} />,
  },
];

const apiColumns: DataColumn[] = [
  { key: "endpoint", header: "接口" },
  { key: "p95", header: "P95 延迟" },
  {
    key: "calls",
    header: "调用次数",
    render: (row) => <span className="metric-number">{Number(row.calls).toLocaleString("zh-CN")}</span>,
  },
  {
    key: "status",
    header: "状态",
    render: (row) => <StatusBadge label={String(row.status)} />,
  },
];

export default function AuditLogs() {
  const summaryItems = [
    { label: "API 调用日志", value: "126,490", icon: ScrollText, tone: "aqua" },
    { label: "知识库更新日志", value: "18,420", icon: DatabaseZap, tone: "mint" },
    { label: "权限检查记录", value: "8,316", icon: KeyRound, tone: "purple" },
    { label: "模型输出审计", value: "42,806", icon: ShieldCheck, tone: "amber" },
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryItems.map((item) => {
          const Icon = item.icon;
          return (
          <div key={item.label}>
            <div className="surface rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="metric-number mt-2 text-2xl font-semibold text-white">{item.value}</p>
                </div>
                <span className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_380px]">
        <ChartCard title="系统日志与审计" subtitle="API 调用、知识库更新、Agent 调度、异常访问、脱敏状态和管理员操作">
          <DataTable columns={auditColumns} rows={auditLogs} />
        </ChartCard>

        <aside className="space-y-4">
          <section className="surface rounded-lg p-5">
            <h2 className="flex items-center gap-2 font-semibold text-white">
              <FileWarning className="h-4 w-4 text-amber-200" />
              审计关注点
            </h2>
            <div className="mt-4 space-y-3">
              {[
                "异常访问提醒已接入权限校验队列。",
                "借阅与预约统计仅保留脱敏聚合字段。",
                "模型输出经过安全检查后返回给学生端。",
                "管理员操作记录保留来源、时间和业务对象。",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <ChartCard title="API 调用日志" subtitle="核心接口健康状态">
            <DataTable columns={apiColumns} rows={apiLogs} compact />
          </ChartCard>
        </aside>
      </section>
    </div>
  );
}
