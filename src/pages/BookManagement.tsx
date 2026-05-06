import { Filter, LibraryBig, SlidersHorizontal } from "lucide-react";
import DataTable, { DataColumn } from "../components/DataTable";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { bookRows, bookSuggestions, bookSummary } from "../data/mock";

const filters = ["专业方向", "热门程度", "馆藏楼层", "是否适合新生", "是否考研相关", "是否 CTF/竞赛相关"];

const columns: DataColumn[] = [
  {
    key: "title",
    header: "书名",
    render: (row) => (
      <div>
        <p className="font-medium text-white">{String(row.title)}</p>
        <p className="mt-1 text-xs text-slate-500">{String(row.category)}</p>
      </div>
    ),
  },
  { key: "category", header: "分类" },
  { key: "callNo", header: "索书号" },
  { key: "location", header: "馆藏位置" },
  {
    key: "status",
    header: "当前状态",
    render: (row) => <StatusBadge label={String(row.status)} />,
  },
  {
    key: "borrows",
    header: "借阅次数",
    render: (row) => <span className="metric-number">{Number(row.borrows).toLocaleString("zh-CN")}</span>,
  },
  {
    key: "aiIndex",
    header: "AI 推荐指数",
    render: (row) => (
      <div className="min-w-32">
        <div className="flex items-center justify-between text-xs">
          <span className="metric-number text-cyan-200">{String(row.aiIndex)}</span>
          <span className="text-slate-500">/ 100</span>
        </div>
        <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" style={{ width: `${Number(row.aiIndex)}%` }} />
        </div>
      </div>
    ),
  },
  {
    key: "action",
    header: "操作",
    render: () => (
      <button className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-cyan-100 transition hover:bg-cyan-300/10">
        查看详情
      </button>
    ),
  },
];

export default function BookManagement() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {bookSummary.map((item, index) => (
          <StatCard
            key={item.label}
            title={item.label}
            value={item.value}
            subtitle="馆藏流转统计"
            icon={LibraryBig}
            tone={["aqua", "mint", "amber", "purple", "rose"][index]}
          />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <div className="surface rounded-lg p-5">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">图书管理台账</h2>
              <p className="mt-1 text-sm text-slate-400">书目、索书号、位置、流通状态与 AI 推荐指数统一维护</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
              <SlidersHorizontal className="h-4 w-4" />
              高级筛选
            </button>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
              >
                <Filter className="h-3.5 w-3.5" />
                {filter}
              </button>
            ))}
          </div>

          <DataTable columns={columns} rows={bookRows} />
        </div>

        <aside className="surface-light rounded-lg p-5">
          <div>
            <p className="text-sm text-slate-500">AI 馆藏优化建议</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-950">复本、低频与新生书单</h2>
          </div>
          <div className="mt-5 space-y-3">
            {bookSuggestions.map((suggestion) => (
              <div key={suggestion.title} className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-slate-950">{suggestion.title}</h3>
                  <StatusBadge
                    label={suggestion.level === "warning" ? "预警" : suggestion.level === "success" ? "成功" : suggestion.level === "info" ? "观察" : "低频"}
                    className="border-slate-200"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{suggestion.detail}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
