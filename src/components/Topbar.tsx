import { Bell, DatabaseZap, Search, ShieldCheck, Wifi } from "lucide-react";
import { dataUpdateTime } from "../data/mock";

interface TopbarProps {
  title: string;
}

export default function Topbar({ title }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/62 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1680px] flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs text-slate-500">河南理工大学图书馆信息化成果展示</p>
            <h1 className="mt-1 text-lg font-semibold text-white">{title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-emerald-200">
              <Wifi className="h-3.5 w-3.5" />
              服务在线
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-cyan-200">
              <DatabaseZap className="h-3.5 w-3.5" />
              脱敏数据源
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5 text-violet-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              权限校验通过
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
              数据更新时间：{dataUpdateTime}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-1 items-center gap-3 rounded-lg border border-white/10 bg-slate-950/68 px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              placeholder="搜索书目、Agent、接口、日志或管理建议"
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
            />
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
            <Bell className="h-4 w-4" />
            7 条待处理提醒
          </button>
        </div>
      </div>
    </header>
  );
}
