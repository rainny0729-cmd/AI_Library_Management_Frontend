import { ShoppingCart, TrendingUp } from "lucide-react";
import DataTable, { DataColumn } from "../components/DataTable";
import StatusBadge from "../components/StatusBadge";
import ChartCard from "../components/ChartCard";
import { purchaseSuggestions } from "../data/mock";

const columns: DataColumn[] = [
  {
    key: "title",
    header: "图书",
    render: (row) => (
      <div>
        <p className="font-medium text-white">{String(row.title)}</p>
        <p className="mt-1 text-xs text-slate-500">{String(row.category)}</p>
      </div>
    ),
  },
  { key: "current", header: "当前复本" },
  { key: "suggest", header: "建议复本" },
  { key: "wait", header: "等待人数" },
  { key: "reason", header: "建议原因" },
  {
    key: "status",
    header: "状态",
    render: (row) => <StatusBadge label={Number(row.wait) > 40 ? "预警" : "观察"} />,
  },
];

export default function ProcurementAdvice() {
  return (
    <div className="space-y-6">
      <section className="surface hairline rounded-xl p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm text-cyan-100">
              <ShoppingCart className="h-4 w-4" />
              采购建议
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal text-white">基于预约等待、借阅增长和课程需求的复本测算</h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-400">
              采购建议 Agent 会综合热门检索、借阅趋势、预约队列、馆藏位置和课程资料需求，形成可解释的复本补充建议。
            </p>
          </div>
          <StatusBadge label="运行中" pulse />
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
        <ChartCard title="采购建议清单" subtitle="所有数据均为脱敏模拟统计">
          <DataTable columns={columns} rows={purchaseSuggestions} />
        </ChartCard>

        <ChartCard title="方向增长研判" subtitle="按近 14 日借阅与检索增长汇总">
          <div className="space-y-4">
            {[
              { name: "网络安全", value: 36 },
              { name: "人工智能", value: 28 },
              { name: "考研数学", value: 31 },
              { name: "英语四六级", value: 18 },
              { name: "Linux/运维", value: 24 },
            ].map((item) => (
              <div key={item.name} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="flex items-center gap-2 text-sm font-medium text-white">
                    <TrendingUp className="h-4 w-4 text-emerald-200" />
                    {item.name}
                  </p>
                  <span className="metric-number text-sm text-emerald-200">+{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-emerald-300" style={{ width: `${item.value * 2}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>
    </div>
  );
}
