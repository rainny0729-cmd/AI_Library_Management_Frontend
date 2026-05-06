import {
  Activity,
  Armchair,
  BarChart3,
  Bot,
  BookOpen,
  BrainCircuit,
  ClipboardList,
  Gauge,
  GraduationCap,
  Home,
  LibraryBig,
  ListChecks,
  Network,
  ScrollText,
  ShoppingCart,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { cn } from "../utils/cn";

const menuItems = [
  { key: "home", label: "项目首页", icon: Home },
  { key: "dashboard", label: "总览", icon: Gauge },
  { key: "knowledge", label: "AI 知识库", icon: BrainCircuit },
  { key: "books", label: "图书管理", icon: LibraryBig },
  { key: "borrow", label: "借阅管理", icon: BookOpen },
  { key: "seats", label: "座位预约", icon: Armchair },
  { key: "traffic", label: "入馆流量", icon: UsersRound },
  { key: "qa", label: "学习问答", icon: ClipboardList },
  { key: "recommend", label: "推荐系统", icon: Sparkles },
  { key: "purchase", label: "采购建议", icon: ShoppingCart },
  { key: "agents", label: "Agent 调度", icon: Bot },
  { key: "logs", label: "系统日志", icon: ScrollText },
  { key: "tokens", label: "token 消耗", icon: Activity },
  { key: "student", label: "学生端", icon: GraduationCap },
];

interface SidebarProps {
  current: string;
  onNavigate: (key: string) => void;
}

export default function Sidebar({ current, onNavigate }: SidebarProps) {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-slate-950/78 px-4 py-5 backdrop-blur-xl lg:flex lg:flex-col">
        <div className="mb-6 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            <Network className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">AI 图书馆中枢</p>
            <p className="text-xs text-slate-500">HPU Library Intelligence</p>
          </div>
        </div>

        <nav className="thin-scrollbar flex-1 space-y-1 overflow-y-auto pr-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = current === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition",
                  active
                    ? "bg-cyan-300 text-slate-950 shadow-[0_16px_40px_rgba(56,189,248,.24)]"
                    : "text-slate-400 hover:bg-white/[0.055] hover:text-white",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>知识库同步</span>
            <span className="text-emerald-200">91.6%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[91.6%] rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">馆藏、课程资料、公告与脱敏统计数据处于增量更新状态。</p>
        </div>
      </aside>

      <nav className="thin-scrollbar sticky top-0 z-40 flex gap-2 overflow-x-auto border-b border-white/10 bg-slate-950/88 px-3 py-3 backdrop-blur-xl lg:hidden">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = current === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm",
                active ? "bg-cyan-300 text-slate-950" : "bg-white/[0.04] text-slate-300",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
